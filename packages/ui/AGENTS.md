# Design System

Source of truth for design across the repo.

- Tokens: shadcn CSS variables in `src/styles/globals.css`. Run
  `pnpm sync:design-system` after changing them to update mobile.
- Components: shadcn-style web components in `src/components`, used by
  `apps/web`. Mobile uses only the tokens.
- shadcn: use the shadcn MCP or CLI. The CLI runs from the web app
  (`--cwd apps/web`) and writes into this package.
