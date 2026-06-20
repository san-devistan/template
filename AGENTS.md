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

`packages/ui` defines the canonical web design system. Treat
`packages/ui/src/styles/globals.css` and `packages/ui/src/components` as the
source of truth for tokens, component anatomy, variants, naming, and interaction
patterns.

The mobile app does not directly reuse web React components. Instead,
`apps/mobile/components/ui` implements native components with React Native
Reusables and `@rn-primitives`, while matching the web design system's tokens,
variants, and component behavior where native constraints allow.

Mobile theme files are generated from the web token source:

- Source: `packages/ui/src/styles/globals.css`
- Generated: `apps/mobile/global.css`
- Generated: `apps/mobile/lib/theme.ts`
- Sync command: `pnpm sync:mobile-theme`

This sync translates theme colors; font changes still need a platform migration
from web `@fontsource-variable/*` packages to matching mobile
`@expo-google-fonts/*` packages.

Do not hand-edit generated mobile theme files. Change the token source in
`packages/ui`, then sync the mobile theme.

## Quality Gate

Before handing off code, run:

```sh
pnpm fix
```

Wait for the command to finish. If it reports errors or warnings, fix them and
run `pnpm fix` again. Repeat until it passes, or clearly explain the remaining
blocker.

## Skill Selection

Read only the skill files needed for the task. Prefer repo-local skills in
`.agents/skills`. For backend-owned features, read `packages/backend/AGENTS.md`
first and then use the backend-local skills in `packages/backend/.agents/skills`.

| Work type                                | Primary skills                                                                                                                                                    |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Global web UI, styling, design review    | `frontend-design`, `web-design-guidelines`, `shadcn`, `vercel-react-best-practices`                                                                               |
| Shared React component APIs              | `vercel-composition-patterns`, `usehooks-ts`, `shadcn`                                                                                                            |
| Web app routing, loaders, SSR, data flow | `tanstack-start-best-practices`, `tanstack-router-best-practices`, `tanstack-query-best-practices`, `tanstack-integration-best-practices`, `native-data-fetching` |
| Mobile screens, navigation, native UI    | `building-native-ui`, `vercel-react-native-skills`, `react-native-reusables`, `expo-tailwind-setup`                                                               |
| Mobile builds, releases, native modules  | `expo-dev-client`, `expo-deployment`, `upgrading-expo`, `expo-module`, `Expo UI SwiftUI`, `use-dom`                                                               |
| Convex backend                           | `packages/backend/AGENTS.md`, then the needed backend-local Convex skills in `packages/backend/.agents/skills/`.                                                  |
| Backend auth                             | `packages/backend/AGENTS.md`, `convex-dev-better-auth`, and the backend-local Better Auth skills in `packages/backend/.agents/skills/`.                           |
| Backend email                            | `packages/backend/AGENTS.md`, `convex-dev-resend`, and the backend-local Resend/email skills in `packages/backend/.agents/skills/`.                               |
| Backend billing                          | `packages/backend/AGENTS.md`, `convex-dev-stripe`, and the backend-local Stripe skills in `packages/backend/.agents/skills/`.                                     |
| Tooling and architecture                 | `improve-codebase-architecture`                                                                                                                                   |

## Available MCPs

| MCP         | Use for                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| Convex      | Inspect deployments, tables, function specs, logs, environment variables, and run Convex functions.        |
| Better Auth | Inspect Better Auth docs and integration guidance for backend auth work.                                   |
| Resend      | Inspect Resend email provider docs and resources for backend transactional email work.                     |
| Stripe      | Inspect Stripe docs and resources for backend billing and payment work.                                    |
| shadcn      | Search registries, inspect component examples, and get add commands for shadcn components.                 |
| Vercel      | Inspect projects, deployments, runtime/build logs, toolbar comments, domains, and deployment access links. |

## Operating Notes

- Keep changes scoped to the package and behavior requested.
- Do not revert unrelated user changes.
