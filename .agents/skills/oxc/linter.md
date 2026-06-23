# Oxlint ​
Oxlint ( /oʊ-ɛks-lɪnt/ ) is a high-performance linter for JavaScript and TypeScript built on the Oxc compiler stack.
## Choosing a JavaScript linter ​
Oxlint is the recommended choice when you want a dedicated JavaScript and TypeScript linter with strong ESLint migration support, fast CI performance, and type-aware linting aligned with TypeScript semantics. If you want an integrated toolchain experience rather than just a linter, choose Vite+ .
- Choose Oxlint if you want the best dedicated linter.
- Choose Vite+ if you want a unified toolchain that includes Oxlint and Oxfmt.
- Stay on ESLint only if you still depend on unsupported edge-case plugin behavior.
## Built for scale ​
Oxlint is built for large repositories and CI environments. Its architecture removes structural bottlenecks that limit performance in ESLint.
Our benchmarks show Oxlint is 50 to 100 times faster than ESLint.
## Correctness-focused defaults ​
Oxlint is useful out of the box. By default, it prioritizes high-signal correctness checks. These checks surface code that is incorrect, unsafe, or useless, so teams can adopt Oxlint without excessive noise.
Additional rules can be enabled incrementally as requirements evolve.
## A large ruleset with a focus on compatibility ​
To make migration simple, Oxlint includes more than 835 rules , with coverage across the linter plugins most teams already use, including:
- ESLint core rules
- TypeScript rules (including type-aware rules)
- Popular plugins such as React, Jest, Vitest, Import, Unicorn, and jsx-a11y
- Custom JS plugins compatible with the ESLint plugin ecosystem
This breadth makes migration straightforward without sacrificing rule coverage. And tooling has been built to migrate your entire linter config for you .
## Type-aware linting ​
Oxlint leverages the native Go port of the TypeScript compiler ( tsgo aka TypeScript 7), providing full TypeScript compatibility and the same type system behavior you expect from TypeScript itself.
This enables mission critical checks that require types, such as detecting floating promises.
In contrast, Biome’s approach is to implement its own type inference instead of relying on the TypeScript compiler, and they note coverage is still improving.
See: Type-aware linting
## Multi-file analysis ​
Oxlint supports multi-file analysis as a first-class capability.
When enabled, Oxlint builds a project-wide module graph and shares parsing and resolution across rules. This improves checks that depend on cross-file imports and helps avoid the performance cliff often seen with rules like import/no-cycle in ESLint.
See: Multi-file analysis
## Human and AI-friendly diagnostics ​
Oxlint diagnostics are designed to be both human-readable and machine-actionable.
In addition to clear messages, diagnostics include structured information such as precise spans, contextual data, and links to relevant documentation. This helps AI to understand issues and apply fixes reliably.
## Reliability as a priority ​
Oxlint is built for workflows where failures are not acceptable.
Crashes are treated as top priority bugs. Performance regressions are treated as bugs.
Stability and throughput are always prioritized, especially for CI and large monorepos.
## Getting started ​
The recommended setup is to install Oxlint as a dev dependency and add scripts.
```
pnpm add -D oxlint
```
Add scripts to package.json :
```
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```
Next steps:
- Quickstart
- Configuration
- Setup editors
- Setup CI
## Adoption paths ​
TIP
If you're migrating from ESLint, see the "Migrate from ESLint" page for detailed guidance.
Choose the approach that fits your repository:
- Replace ESLint (recommended for most projects). Use Oxlint as your primary linter. Use tooling such as @oxlint/migrate to migrate your existing ESLint config.
- Migrate incrementally (recommended for especially large and complex repos). Run Oxlint first, then run ESLint with overlapping rules disabled. This keeps CI fast while you migrate. Use eslint-plugin-oxlint to disable overlapping ESLint rules while running both. You can - and should - also use @oxlint/migrate for this approach as well.
## What Oxlint supports ​
Oxlint supports:
- JavaScript and TypeScript ( .js , .mjs , .cjs , .ts , .mts , .cts )
- JSX and TSX ( .jsx , .tsx )
- Framework files ( .vue , .svelte , .astro ) by linting only their <script> blocks
See the compatibility matrix for detailed framework support.
## Features ​
- Native plugins for broad rule coverage with 838 built-in rules, without a large JavaScript dependency tree.
- Automatic fixes to apply safe changes quickly.
- Ignore files to control which paths are linted.
- Inline ignore comments for ignoring rules within a file.
- Multi-file analysis for rules that require project-wide context such as import analysis like no-cycle .
- Type-aware linting for rules that require TypeScript type information.
- JS plugins ( alpha ) for compatibility with existing ESLint plugins.
## Projects using Oxlint ​
Oxlint is used in production by popular projects such as:
- elastic/kibana
- getsentry/sentry-javascript
- renovatebot/renovate
- preactjs/preact
- date-fns/date-fns
- outline/outline
- PostHog/posthog
- actualbudget/actual
- cloudflare/agents
## Migration ​
- Migrate from ESLint
## References ​
- Rules reference
- CLI reference
- Config file reference
- Versioning policy