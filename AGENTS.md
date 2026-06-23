# Repository Guide

This is a pnpm workspace monorepo. Prefer repo-local conventions and skills
before introducing new patterns.

## Workspace Map

| Area          | Path               | Stack                                                                                           | Notes                                                                                                      |
| ------------- | ------------------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Web app       | `apps/web`         | TanStack Start, React 19, TanStack Router, TanStack Query, Tailwind CSS v4, Vite, Convex client | Uses shared web UI from `@workspace/ui`.                                                                   |
| Mobile app    | `apps/mobile`      | Expo Router, React Native, NativeWind, React Native Reusables, Convex client                    | Owns native UI components in `components/ui`, derived from the shared web design system.                   |
| Backend       | `packages/backend` | Convex                                                                                          | Owns Convex schema, functions, generated API exports, auth, email, billing, and backend integration logic. |
| Web UI system | `packages/ui`      | React 19, shadcn-style components, Tailwind CSS v4, Base UI, lucide-react, `usehooks-ts`        | Source of truth for the web design system and design tokens.                                               |
| Automation    | `scripts`          | Shell and explicit Node.js scripts                                                              | JavaScript is allowed here for repo tooling.                                                               |

## Design System Ownership

`packages/ui` owns the canonical web design system, web tokens, and shadcn-style
components. `apps/web` consumes those components through `@workspace/ui`.
`apps/mobile` owns native UI components that track the shared design language
without importing web React components.

For implementation details, read the local workspace guide before editing UI:

- Web app: `apps/web/AGENTS.md`
- Mobile app: `apps/mobile/AGENTS.md`
- Web UI system: `packages/ui/AGENTS.md`

Do not hand-edit generated mobile theme files. Change token sources in
`packages/ui`, then run `pnpm sync:mobile-theme`.

## File Naming

Use directories as naming context across the entire codebase. For any directory
that names a domain, workflow, module, or role, do not repeat that directory
name in descendant filenames unless an external convention requires it.

Framework-mandated filenames, generated files, config entrypoints, and
third-party convention files may keep their required names.

## Module Layout

Prefer domain-, workflow-, or module-first structure over flat folders once any
area of the codebase has several related files. This applies across apps,
packages, backend functions, scripts, tooling, and UI code.

Inside any source folder, group by user-facing workflow, domain concept, or
module ownership before grouping by implementation role. Avoid broad top-level
piles of components, hooks, actions, controllers, utilities, or helpers when
those files actually belong to different workflows or modules.

Within a workflow, domain, or module folder, split by role only when there are
enough files to justify it:

- `_components/` contains UI implementation private to that workflow or domain.
- `_hooks/` contains React or React Native hooks private to that workflow or
  domain.
- `_lib/` contains state, actions, controllers, adapters, and domain logic.
- `_pages/` contains page-level compositions used by routes or screens.
- `_types/` contains shared types when they are large enough to deserve their
  own file.
- `_utils/` is a last resort for small pure helpers genuinely reused inside that
  workflow, domain, or module; prefer named domain files over generic utilities.

## Quality Gate

Before handing off code, run:

```sh
pnpm fix
```

Wait for the command to finish. It is designed to continue after failed checks
and print a final summary of failed commands. Treat Oxlint errors and React
Doctor errors/warnings as blocking quality feedback.

React Doctor is used for React-specific diagnostics; Oxlint owns the generic
lint gate. Do not use React Doctor's duplicate lint pass as a substitute for
fixing or intentionally configuring Oxlint diagnostics.

Fix every `pnpm fix` diagnostic that is caused by, or directly related to, the
code you changed. Then run `pnpm fix` again and repeat until the relevant
diagnostics are resolved.

If remaining errors or warnings are unrelated to the implemented work,
pre-existing, or confirmed false positives, do not expand the scope to fix them
unless the user asks. Clearly report the failed command(s), representative
diagnostics, and why they were left untreated.

## Skill Selection

Read only the skill files needed for the task. Select skills by the workspace
being touched first, then add cross-cutting skills for the specific technology
or concern. If multiple rows match, use the smallest useful set and read them in
the order listed.

When launching an agent from the repository root, route to the local workspace
guide first. Do not assume workspace-local skills are globally available by name.

| Scope / workspace                 | Read first                   | Local skill families                                              |
| --------------------------------- | ---------------------------- | ----------------------------------------------------------------- |
| `apps/web`                        | `apps/web/AGENTS.md`         | TanStack Start, Router, Query, React performance, web guidelines  |
| `apps/mobile`                     | `apps/mobile/AGENTS.md`      | Expo, EAS, React Native, native UI, data fetching, ASC CLI        |
| `packages/backend`                | `packages/backend/AGENTS.md` | Convex, Better Auth, Resend/email, Stripe                         |
| `packages/ui`                     | `packages/ui/AGENTS.md`      | shadcn, web design tokens, shared React components, UI primitives |
| Root, `scripts`, workspace config | this file                    | Turborepo, package boundaries, repo tooling                       |

Workspace-specific skills live under the workspace's own `.agents/skills/`
directory. Shared root skills live in `.agents/skills/<skill>/SKILL.md` and are
only for cross-cutting concerns:

| Skill                     | Invoke when                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `turborepo`               | Turbo tasks, `turbo.json`, caching, remote cache, `--filter`, `--affected`, CI, package boundaries, or workspace tooling  |
| `typescript-code-quality` | TypeScript modeling, refactors, explicit errors, module APIs, maintainability, or package boundary design                 |
| `effect-ts`               | Nontrivial Effect services/layers, typed errors, Schema/JSONSchema, Config, runtime, concurrency, or Effect tests         |
| `frontend-design`         | Creating or reshaping UI where visual direction, typography, layout, or interaction polish matters                        |
| `usehooks-ts`             | Browser/SSR-safe React hooks for storage, media queries, dark mode, events, debounce, timers, observers, or mounted state |

## Available MCPs

| MCP         | Use for                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| Convex      | Inspect deployments, tables, function specs, logs, environment variables, and run Convex functions.        |
| Better Auth | Inspect Better Auth docs and integration guidance for backend auth work.                                   |
| Stripe      | Inspect Stripe docs and resources for backend billing and payment work.                                    |
| shadcn      | Search registries, inspect component examples, and get add commands for shadcn components.                 |
| Vercel      | Inspect projects, deployments, runtime/build logs, toolbar comments, domains, and deployment access links. |

## Operating Notes

- Keep changes scoped to the package and behavior requested.
- Do not revert unrelated user changes.
