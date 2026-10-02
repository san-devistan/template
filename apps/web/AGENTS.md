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
mobile style artifacts.

## TypeScript Patterns

This workspace depends on `effect`. Prefer Effect at web IO boundaries where
typed failures or required context make behavior clearer: server functions,
loader/query orchestration, backend API adapters, config, retries, and
concurrent workflows. Keep pure render code, tiny event handlers, and local
component state simple.

Use `ts-pattern` when web code branches over finite typed cases such as
route/search variants, loader states, mutation states, action unions, and
backend response variants. If the implementation imports `ts-pattern`, add the
dependency to this workspace in the same change. Use `.exhaustive()` unless an
`.otherwise(...)` fallback is intentionally valid for every remaining case.
Keep simple booleans and nullish fallbacks as plain TypeScript.

Use `usehooks-ts` when web code needs common browser hooks such as storage,
media queries, events, debounce/throttle, timers, observers, clipboard, dark
mode, scroll lock, or mounted/client checks. This workspace depends on
`usehooks-ts`; prefer its SSR-safe hooks over handwritten `useEffect` wrappers
when the behavior is not domain-specific.

## Tools

Use the Vercel MCP for deployments, runtime/build logs, preview access, and
toolbar comments. Use backend APIs through `@workspace/backend`; provider setup,
Convex functions, auth, email, billing, and schema changes belong in
`packages/backend`.

Run web commands from this workspace unless the task is intentionally
repo-wide. The local typecheck command is `pnpm --filter web typecheck`.
