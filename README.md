# Architecture

```mermaid
flowchart LR
  Web["Web App<br/>TanStack Start + Vercel"]
  Mobile["Mobile App<br/>Expo"]
  Backend["Backend<br/>Convex + Stripe<br/>Resend + Better Auth"]
  UI["Design System<br/>Shadcn UI"]

  UI --> Web
  UI --> Mobile
  Backend --> Web
  Backend --> Mobile
```

## AI Setup

- **Skills:** 76 skills: root 3, web 10, mobile 40, backend 22, UI 1.
- **MCPs:** 5 mcp: Convex, Better Auth, Stripe, shadcn, Vercel.

## Quality Gate

```mermaid
flowchart LR
  Format["format<br/>oxfmt"]
  Format --> Lint["lint<br/>oxlint"]
  Lint --> Oxc["parse + imports<br/>oxcheck"]
  Oxc --> Doctor["React Diagnostics<br/>with React Doctor"]
  Doctor --> Types["TypeScript Checks"]
```

## Set Up

- replace `project-name` in the codebase
- run `pnpm update:deps` and `pnpm update:skills`
- apply theme with `pnpm dlx shadcn@latest apply --preset [preset-id] --cwd apps/web --yes` then `pnpm sync:design-system`
