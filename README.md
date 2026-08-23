# Architecture

```mermaid
flowchart LR
  Web["Web App<br/>TanStack Start + Vercel"]
  Mobile["Mobile App<br/>Expo"]
  Backend["Backend<br/>Convex + Stripe<br/>Resend + Better Auth"]
  Tokens["Shared Tokens<br/>packages/ui"]
  WebUI["Web UI<br/>shadcn components"]
  MobileUI["Mobile UI<br/>PanelUI"]

  Tokens --> WebUI --> Web
  Tokens --> MobileUI --> Mobile
  Backend --> Web
  Backend --> Mobile
```

## Design System Flow

- `packages/ui/src/tokens/design-tokens.json` is the shared token source.
- `packages/ui/src/components` contains web-only shadcn components.
- Mobile imports components from `panelui-native`; it does not convert or mirror
  web components.
- `pnpm sync:design-system` regenerates shared CSS tokens, the PanelUI mobile CSS
  entry, and navigation theme values. It does not generate mobile components.
- Create app-specific mobile components only when PanelUI has no suitable
  component.

## AI Setup

- Skills are scoped under each workspace's `.agents/skills` directory.
- Configured MCPs cover Convex, Better Auth, Stripe, shadcn, and Vercel.

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

- replace `name-of-project` in the codebase
- run `pnpm update:deps` and `pnpm update:skills`
- apply a web theme with
  `pnpm dlx shadcn@latest apply --preset [preset-id] --cwd apps/web --yes`
- run `pnpm sync:design-system` to propagate shared tokens to web and mobile
