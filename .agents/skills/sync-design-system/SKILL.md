---
name: sync-design-system
description: Apply or finish a shadcn preset workflow in this monorepo and sync shared design tokens into the web CSS, PanelUI mobile CSS entry, and generated mobile theme values. Use after shadcn apply preset, pnpm sync:design-system, or design-token refreshes.
---

# Sync Design System

## Overview

Use this workflow when a shadcn preset changes the shared design tokens. Token
sync is deterministic. Web consumes the shadcn components; mobile imports the
shared CSS tokens and uses PanelUI instead of maintaining component mirrors.

The flow is:

```text
shadcn apply -> shared CSS tokens -> design-tokens.json
design-tokens.json -> shared CSS tokens -> web.css and mobile global.css
packages/ui components -> web only
panelui-native components -> mobile only
```

There is no web-to-mobile component conversion step.

## Workflow

1. Inspect the current state:

   ```sh
   git status --short
   ```

   Work with existing user changes. Do not revert unrelated files.

2. Apply the preset from the framework workspace unless the user already did:

   ```sh
   pnpm dlx shadcn@latest apply --preset <preset> --cwd apps/web
   ```

   `shadcn apply` does not support `--overwrite` in this repo's CLI version.
   If it creates `apps/web/src/lib/utils.ts` or
   `apps/web/src/hooks/use-mobile.ts`, remove those files when nothing imports
   them; the shared UI package owns those utilities.

3. Sync the design system:

   ```sh
   pnpm sync:design-system
   ```

   This imports applied CSS variables from
   `packages/ui/src/styles/globals.css` into
   `packages/ui/src/tokens/design-tokens.json` when shadcn changed the generated
   CSS, then regenerates:

   - `packages/ui/src/styles/globals.css`
   - `apps/mobile/global.css`, which imports the shared CSS and PanelUI theme
   - `apps/mobile/lib/theme.ts`

   The generated CSS records its web-token snapshot, so unrelated token-file
   changes do not block the normal `shadcn apply` then sync workflow. If both
   the web token values and CSS were changed independently and the CSS must
   win, run:

   ```sh
   pnpm sync:design-system -- --import-applied-css
   ```

4. Run the sync a second time after imports or manual changes. A clean second
   run confirms the generated files are stable.

5. Do not port changed web components to mobile. Mobile workflows should use
   `panelui-native` first and create app-specific native components only when
   PanelUI has no suitable component. Read `apps/mobile/AGENTS.md` and the
   local PanelUI skill before implementing mobile UI.

## Verification

Run focused checks for touched workspaces, then the repo gate:

```sh
pnpm sync:design-system
pnpm fix
```

If `pnpm fix` still fails on shadcn-generated `packages/ui/src/components/*`
diagnostics, report representative errors and whether web/mobile checks are
clean. Do not expand into broad shadcn component lint refactors unless the user
asks for that cleanup.
