---
name: typescript-code-quality
description: Use when writing or refactoring TypeScript for maintainability, honest types, low-cardinality domain models, explicit error handling, and strong module boundaries. Emphasize local reasoning, explicit dependencies, effects at the edges, discriminated unions over avoidable optional properties, pragmatic functional patterns over stateful object-oriented design, and stable module APIs.
---

# TypeScript Code Quality

## Preserve Local Reasoning

Code supports local reasoning when behavior is fully determined by inputs and type signature, with no hidden dependencies. You can understand and change it with confidence.

Implicit dependencies break local reasoning:

- Shared mutable state: globals, singletons, module-level vars, mutable class fields
- Action at a distance: event emitters, pub/sub, observer patterns
- Implicit ordering: must call `init()` before `process()`
- Non-local control flow: exceptions thrown deep and caught far away
- Ambient authority: reading env vars, clock, network, filesystem
- Type lies: `any`, unchecked casts, or `string` that must be a specific format

Explicit dependencies limit blast radius to callers. Honest signatures let the compiler catch contract breaks.

## Separate Side Effects from Pure Logic

Push I/O, network calls, filesystem access, DB writes, logging, clock access, and framework integration to the edges. Domain logic should stay pure.

Good shape:

1. Read inputs
2. Build a pure plan
3. Execute the plan

Avoid:

- Mixing fetch/write/log calls into transformation logic
- Hidden mutation inside utility functions
- Business logic embedded in framework handlers

## Separate Control Flow from Data Flow

Keep orchestration code distinct from transformation code.

Prefer:

- Orchestrators that answer: in what order do steps happen?
- Pure helpers that answer: how is data transformed?
- Data structures that make decisions explicit

Good shape: build a typed plan with pure logic, then execute it at the edge (`buildPlan(input) -> Plan`, `executePlan(plan) -> Result`).

Avoid:

- Branch-heavy functions that both decide and mutate
- Recomputing the same derived state in multiple places
- Encoding important logic in string manipulation or ad hoc conditionals

## Prefer Functional Patterns over Stateful OO

Default to plain functions, immutable data flow, discriminated unions, and explicit inputs/outputs; keep small inline transformations inline, and extract helpers or introduce classes only when complexity, domain clarity, local mutation, lifecycle, or stateful resources justify it.

## Build Modules with Clear APIs

Each module should have one job and expose a small surface area.

Module boundaries should make it obvious:

- what goes in
- what comes out
- what side effects happen
- what invariants are guaranteed

Avoid:

- Leaking transport/framework types across layers
- Requiring callers to understand internal representation details

## never Pass More Parameters Than Needed

A function signature is part of its contract. Pass only the values the function actually needs to do its job.

Avoid: Passing a whole object when the function reads only one or two fields, accepting broad bags of dependencies or options, and passing values irrelevant to the callee.

Prefer narrow signatures. If a function needs many inputs, first ask whether it is doing too much, whether those inputs form a meaningful domain value, or whether the caller should compute a smaller intermediate value before calling it.

## Import Paths Encode Module Boundaries

- Relative imports (`./`, `./sub/`): private code within the current directory or direct children
- Absolute imports: public APIs from other modules
- Avoid `../` across module boundaries: use absolute imports for public APIs when the repo supports them

## Honest Type Safety

Types must match runtime reality. Do not silence the compiler to bypass a real contract.

Avoid:

- `any`, unchecked `as` assertions, non-null assertions (`!`), vague catch-all types, and broad `@ts-ignore` / `@ts-expect-error`
- Casts around untrusted input: JSON, network responses, database rows, env vars, messages

Allowed: `as const` for literal narrowing. Unavoidable assertions around broken external types must be tiny, adapter-local, and downstream of validation.

Prefer:

- `unknown` at trust boundaries, decoded with type guards or schemas
- Discriminated unions, branded/refined types, and exhaustive switches
- `satisfies` for checked literals
- Explicit handling for `Map.get`, `Array.find`, indexed access, and optional fields
- Small adapters around weakly typed libraries

Model expected failures as data. Validation errors, parse errors, missing data, permission failures, conflicts, and retryable external failures should appear in return types as `Result<T, E>` or domain-specific discriminated unions.

Throw only for unexpected situations: violated invariants, impossible states, programmer misuse, corrupted process state, or failures this layer cannot sensibly model. Catch as `unknown`, narrow before reading, and preserve causes when wrapping exceptions.

## Use Discriminated Unions over Optional Properties

Type cardinality is the number of possible values a type admits. Keep type cardinality as low as possible: every value the type admits should be a valid domain state.

Discriminated unions keep type cardinality aligned with runtime cardinality. Each variant should have all its valid properties required, not optional.

Avoid:

```ts
type Result<T> = { type: "success" | "error"; data?: T; error?: Error };
```

This allows invalid runtime states like `{ type: "success", error: new Error() }` and obscures which properties are valid for each type.

Prefer:

```ts
type Result<T> = { type: "success"; data: T } | { type: "error"; error: Error };
```

Each variant is a complete, valid shape. The type system and runtime are in sync.

Avoid optional properties unless the property is genuinely optional in that exact variant. Do not use `?` to encode lifecycle states, variants, or sometimes-required fields.

## Group parameters that vary together

When one parameter determines which others are valid, model the whole set as a single tagged type. A flat signature with optional parameters loses the rule about which fields go together — that rule survives only in the function body and in the caller's head. A tagged union puts it back into the type, so the compiler enforces what the docs used to ask for.

### Signs you have this problem

- A `status`, `type`, `mode`, `action`, or boolean parameter changes which other parameters become required or forbidden.
- A parameter is marked optional, but is actually required on one branch and unused on another.
- Function overloads exist only to spell out the variants of one conceptual input.
- Callers have to remember positional conventions like `fn("error", errorCode)` to use the function correctly.

### Avoid

```ts
function recordRequest(status: "success"): void;
function recordRequest(status: "error", errorCode: ErrorCode): void;
function recordRequest(status: "success" | "error", errorCode?: ErrorCode) {}
```

The implementation signature lies: `errorCode` is mandatory for `"error"` and meaningless for `"success"`, but the type just says "optional."

### Prefer

```ts
type RequestMetric =
  | { status: "success" }
  | { status: "error"; errorCode: ErrorCode };

function recordRequest(metric: RequestMetric) {}
```

Passing `errorCode` with `"success"`, or forgetting it with `"error"`, is now a type error rather than a runtime bug. New variants get added in one place.

## Practical Heuristics

- Prefer declarative collection transforms (`map`, `filter`, `flatMap`) over manual accumulation when they make intent clearer.
- Use local mutation only for measured performance needs, clearer imperative algorithms, or inherently mutating APIs. Isolate it tightly.
- Create intermediate data structures when they make the logic easier to name, inspect, or test.
- Encode important logic with typed data and explicit branches, not string conventions or ad hoc conditionals.
