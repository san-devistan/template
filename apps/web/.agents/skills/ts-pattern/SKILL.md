---
name: ts-pattern
description: Use for TypeScript pattern matching with the ts-pattern library when refactoring or writing branching over discriminated unions, tagged states, action unions, result/error variants, API response shapes, route/search-param variants, reducer actions, or other finite cases where exhaustive checking, typed narrowing, P.select, P.union, P.when guards, or .exhaustive() would prevent missing cases. Do not use for trivial if/else checks or simple boolean branches.
---

# ts-pattern

Use `ts-pattern` to make meaningful finite branching exhaustive and type-safe.
It is best at replacing fragile `switch`/`if` chains over unions, tags, statuses,
actions, and result shapes.

If the target workspace does not already depend on `ts-pattern`, add the
dependency in the same change that first imports it. Do not add an unused
dependency just to make the preference available later.

## Default Pattern

Prefer `match(value)` with `.with(...)` cases and `.exhaustive()`:

```ts
import { match } from "ts-pattern"

const label = match(state)
  .with({ status: "idle" }, () => "Ready")
  .with({ status: "loading" }, () => "Loading")
  .with({ status: "error" }, ({ error }) => error.message)
  .with({ status: "success" }, ({ data }) => data.title)
  .exhaustive()
```

## When To Reach For It

- Branching over discriminated unions, action unions, result variants, or typed
  API response shapes.
- Replacing a `switch` whose `default` hides missing cases.
- Matching nested object/tuple shapes where TypeScript narrowing matters.
- Extracting values with `P.select` instead of repeating guards and casts.
- Grouping equivalent cases with `P.union` or multiple patterns in one `.with`.
- Adding a guard with `P.when` only when the type/shape match is not enough.

## Keep It Small

Do not use `ts-pattern` for:

- One or two simple boolean branches.
- Plain nullish fallback logic.
- Runtime validation that should be handled by schemas or boundary parsing.
- Branching where native `if`/`switch` is shorter and still exhaustive enough.

## Repo Style

- Use `.exhaustive()` by default. Use `.otherwise(...)` only when the fallback is
  intentionally valid for all remaining cases.
- Do not add a catch-all pattern just to silence TypeScript. Model the missing
  case or keep the compiler error.
- Prefer narrowing through union tags and object shapes before using guards.
- Keep patterns close to the workflow/domain code that owns the union.
- If a match grows large, first ask whether the union or workflow should be split
  before adding helper abstractions.
