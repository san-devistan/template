# Repository Guide

A pnpm monorepo for `name-of-project` (`<project-name>` below). Follow the
patterns already here before introducing new ones.

## How It Fits Together

- `packages/ui`: the design system, source of truth for tokens and web
  components.
- `packages/backend`: the Convex backend, home of data, business logic, and
  provider integrations added as Convex components.
- `apps/web`: TanStack Start app that uses `packages/ui` components and tokens
  plus `packages/backend`.
- `apps/mobile`: Expo app that uses `packages/ui` tokens, PanelUI components,
  and `packages/backend`.
- `scripts`: repo tooling such as design-system sync and the quality gate.

Logic belongs in the backend; apps focus on presentation. Design starts in
`packages/ui` and flows to both apps. Each workspace has its own `AGENTS.md`
with the details.

## Local Development

Dev servers keep stable URLs:

- Web: `https://<project-name>.localhost`
- Mobile: `https://mobile.<project-name>.localhost`

Logs live in the attached Zellij session whose name contains `<project-name>`.

## Providers and Tools

External services (Convex, Vercel, Stripe, Better Auth, shadcn, App Store
Connect) are reached through their MCP when configured (see
`.codex/config.toml`), otherwise through their CLI if installed. Check what is
available rather than assuming it.

## Module Layout

Group files by domain or workflow first, not by role (no top-level
`components/`, `hooks/`, `utils/` piles). Inside a domain folder, split by role
only once it has enough files:

- `_components/`: private UI
- `_hooks/`: private hooks
- `_lib/`: state, actions, adapters, domain logic
- `_pages/`: route or screen compositions
- `_types/`: shared types large enough for their own file
- `_utils/`: last resort for small reused pure helpers; prefer named domain
  files

## Quality Gate

Run `pnpm fix` before handing off. Fix what your change caused by fixing the
implementation, not by dodging rules or editing the gate config unless really
needed, and mention anything unrelated that still fails.
