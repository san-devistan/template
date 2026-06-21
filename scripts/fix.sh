#!/usr/bin/env bash
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

failures=()

run() {
  printf "\n==> %s\n" "$*"
  "$@"

  local status=$?
  if (( status != 0 )); then
    failures+=("$* (exit $status)")
  fi

  return 0
}

run_in() {
  local dir="$1"
  shift

  printf "\n==> (%s) %s\n" "$dir" "$*"
  (cd "$dir" && "$@")

  local status=$?
  if (( status != 0 )); then
    failures+=("($dir) $* (exit $status)")
  fi

  return 0
}

run pnpm exec oxfmt .
run pnpm exec oxlint --fix --format stylish .
run node scripts/oxc-check.mjs

react_doctor_projects=()
if [[ -d apps/mobile ]]; then
  react_doctor_projects+=("mobile")
fi
if [[ -d apps/web ]]; then
  react_doctor_projects+=("web")
fi
if (( ${#react_doctor_projects[@]} > 0 )); then
  react_doctor_project_arg="$(IFS=,; printf "%s" "${react_doctor_projects[*]}")"
  run pnpm dlx react-doctor@latest --yes --offline --verbose --no-dead-code --project "$react_doctor_project_arg" --blocking warning .
fi

run_in packages/backend pnpm exec tsc --noEmit
run_in packages/ui pnpm exec tsc --noEmit
if [[ -d apps/mobile ]]; then
  run_in apps/mobile pnpm exec tsc --noEmit
fi
run_in apps/web pnpm exec tsc --noEmit

if (( ${#failures[@]} > 0 )); then
  printf "\n==> quality gate failed\n"
  printf "Failed commands:\n"
  for failure in "${failures[@]}"; do
    printf " - %s\n" "$failure"
  done
  exit 1
fi

printf "\n==> quality gate passed\n"
