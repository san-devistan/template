# Web App Guide

`apps/web` is the TanStack Start web application. It owns routes, loaders, SSR
wiring, server functions, web-only feature composition, and client integration
with generated backend APIs.

## UI Boundaries

Compose web screens from `@workspace/ui` first. Do not add app-local design
system components, wrappers, or token definitions when the shared UI package can
cover the need.

For shared component changes, token changes, or shadcn work, switch to
`packages/ui/AGENTS.md`. Shared token changes start in
`packages/ui/src/tokens/design-tokens.json` and are generated into the web and
mobile style artifacts. The shadcn skill lives in `packages/ui`, not in this
workspace.

## Skills

Web-local skills live in `apps/web/.agents/skills/<skill>/SKILL.md`. Read only
the narrow skill needed for the task.

| Skill                                 | Invoke when                                                                                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tanstack-start-best-practices`       | TanStack Start full-stack work: server functions, middleware, SSR, auth/session handling, API routes, deployment                                      |
| `tanstack-router-best-practices`      | Type-safe routing, route trees, navigation, search params, route context, loaders, not-found, or preload behavior                                     |
| `tanstack-query-best-practices`       | Server state, React Query caching, query keys, mutations, optimistic updates, invalidation, pagination, or SSR                                        |
| `tanstack-integration-best-practices` | Coordinating TanStack Start, Router, and Query: loader/query flow, SSR dehydration, cache ownership, prefetching                                      |
| `vercel-react-best-practices`         | React performance, rendering, bundle behavior, async work, Suspense, server/client boundaries, or data fetching                                       |
| `vercel-composition-patterns`         | Reusable component APIs, compound components, boolean-prop cleanup, provider design, or render/children patterns                                      |
| `vercel-react-view-transitions`       | Page transitions, shared-element animations, route-change animation, list reorder animation, or `ViewTransition`                                      |
| `web-design-guidelines`               | UI review, UX review, accessibility review, or checking web interface quality                                                                         |
| `writing-guidelines`                  | Docs/prose review, voice and tone, style cleanup, or written product copy review                                                                      |
| `effect-ts`                           | Nontrivial Effect work: typed failures, server functions, loaders, service/context dependencies, config, retries, resources, concurrency, or tracing  |
| `ts-pattern`                          | Exhaustive pattern matching for discriminated unions, route/search variants, async state unions, action/result variants, or typed API response shapes |
| `usehooks-ts`                         | Browser and React hook utilities: storage, media queries, events, debounce/throttle, timers, observers, clipboard, mounted/client checks              |

This workspace depends on `effect`. Prefer Effect at web IO boundaries where
typed failures or required context make behavior clearer: server functions,
loader/query orchestration, backend API adapters, config, retries, and
concurrent workflows. Keep pure render code, tiny event handlers, and local
component state simple.

Use the local `ts-pattern` skill when web code branches over finite typed cases
such as route/search variants, loader states, mutation states, action unions,
and backend response variants. If the implementation imports `ts-pattern`, add
the dependency to this workspace in the same change. Use `.exhaustive()` unless
an `.otherwise(...)` fallback is intentionally valid for every remaining case.
Keep simple booleans and nullish fallbacks as plain TypeScript.

Use the local `usehooks-ts` skill when web code needs common browser hooks such
as storage, media queries, events, debounce/throttle, timers, observers,
clipboard, dark mode, scroll lock, or mounted/client checks. This workspace
depends on `usehooks-ts`; prefer its SSR-safe hooks over handwritten `useEffect`
wrappers when the behavior is not domain-specific.

For cross-cutting TypeScript or visual-design work, use the shared root skills
in `.agents/skills/` after reading this file.

## Tools

Use the Vercel MCP for deployments, runtime/build logs, preview access, and
toolbar comments. Use backend APIs through `@workspace/backend`; provider setup,
Convex functions, auth, email, billing, and schema changes belong in
`packages/backend`.

Run web commands from this workspace unless the task is intentionally
repo-wide. The local typecheck command is `pnpm --filter web typecheck`.
