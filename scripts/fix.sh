#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

run() {
  printf "\n==> %s\n" "$*"
  "$@"
}

run_in() {
  local dir="$1"
  shift

  printf "\n==> (%s) %s\n" "$dir" "$*"
  (cd "$dir" && "$@")
}

cleanup_js_mirrors() {
  if [[ -f apps/web/vite.config.ts ]]; then
    rm -f apps/web/vite.config.js
  fi

  while IFS= read -r file; do
    if [[ "$file" == "apps/mobile/scripts/reset-project.js" ]]; then
      continue
    fi

    base="${file%.js}"

    if [[ -f "$base.ts" || -f "$base.tsx" ]]; then
      rm -f "$file"
    fi
  done < <(find apps packages -type f -name "*.js")
}

run cleanup_js_mirrors
run pnpm exec oxfmt .
run pnpm exec oxlint --fix .
run node scripts/oxc-check.mjs
run pnpm dlx react-doctor@latest --yes --offline --verbose --no-dead-code --project mobile,web --fail-on none .
run_in packages/backend pnpm exec tsc --noEmit
run_in packages/ui pnpm exec tsc --noEmit
run_in apps/mobile pnpm exec tsc --noEmit
run_in apps/web pnpm exec tsc --noEmit
run pnpm exec turbo build
