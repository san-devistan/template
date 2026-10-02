# Web App

TanStack Start app (Router + Query). It owns routes, loaders, and screen
composition; data and logic come from `@workspace/backend`.

## UI

Screens are built from `@workspace/ui`. When something is missing, it usually
belongs in `packages/ui` rather than in the app.

## Effect

Effect makes errors, dependencies, and side effects explicit in types. Use it
where those matter, such as backend calls, server functions, retries, and
concurrent work; keep plain UI code plain. Before writing Effect code, read
`node_modules/effect/AGENTS.md`.
