#!/usr/bin/env bash
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

LOG_DIR="$(mktemp -d)"
trap 'rm -rf "$LOG_DIR"' EXIT

failure_labels=()
failure_statuses=()
failure_logs=()
pids=()
labels=()
logs=()

record_failure() {
  local label="$1"
  local status="$2"
  local log="$3"

  failure_labels+=("$label")
  failure_statuses+=("$status")
  failure_logs+=("$log")
}

run_quiet() {
  local label="$1"
  shift
  local log="$LOG_DIR/serial-${#failure_labels[@]}-${RANDOM}.log"

  "$@" >"$log" 2>&1
  local status=$?
  if (( status != 0 )); then
    record_failure "$label" "$status" "$log"
  fi

  return 0
}

start_quiet() {
  local label="$1"
  shift
  local log="$LOG_DIR/parallel-${#pids[@]}.log"

  "$@" >"$log" 2>&1 &
  pids+=("$!")
  labels+=("$label")
  logs+=("$log")
}

start_quiet_in() {
  local dir="$1"
  shift
  local label="($dir) $*"
  local log="$LOG_DIR/parallel-${#pids[@]}.log"

  (cd "$dir" && "$@") >"$log" 2>&1 &
  pids+=("$!")
  labels+=("$label")
  logs+=("$log")
}

wait_for_parallel_checks() {
  local index
  local status

  for index in "${!pids[@]}"; do
    if wait "${pids[$index]}"; then
      status=0
    else
      status=$?
    fi

    if (( status != 0 )); then
      record_failure "${labels[$index]}" "$status" "${logs[$index]}"
    fi
  done
}

print_failures() {
  local index
  local log

  printf "quality gate failed\n"

  for index in "${!failure_labels[@]}"; do
    log="${failure_logs[$index]}"
    printf "\n==> %s (exit %s)\n" \
      "${failure_labels[$index]}" \
      "${failure_statuses[$index]}"

    if [[ -s "$log" ]]; then
      cat "$log"
      printf "\n"
    else
      printf "(no output)\n"
    fi
  done
}

run_quiet "pnpm exec oxfmt ." pnpm exec oxfmt .
run_quiet "pnpm exec oxlint --fix --format stylish ." \
  pnpm exec oxlint --fix --format stylish .

start_quiet "node scripts/oxc-check.mjs" node scripts/oxc-check.mjs

start_quiet "pnpm dlx react-doctor@latest --yes --offline --verbose --blocking warning ." \
  pnpm dlx react-doctor@latest --yes --offline --verbose --blocking warning .

start_quiet_in packages/backend pnpm exec tsc --noEmit
start_quiet_in packages/ui pnpm exec tsc --noEmit
if [[ -d apps/mobile ]]; then
  start_quiet_in apps/mobile pnpm exec tsc --noEmit
fi
start_quiet_in apps/web pnpm exec tsc --noEmit

wait_for_parallel_checks

if (( ${#failure_labels[@]} > 0 )); then
  print_failures
  exit 1
fi

printf "quality gate passed (exit 0)\n"
