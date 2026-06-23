---
name: sync-design-system
description: Apply or finish a shadcn preset workflow in this monorepo, sync the shared design tokens into web and mobile generated theme files, and update native mobile UI counterparts from the shared web component source of truth. Use after shadcn apply preset, pnpm sync:design-system, design-token refreshes, web-to-mobile design-system parity reviews, or mobile NativeWind component updates caused by shared web UI changes.
---

# Sync Design System

## Overview

Use this workflow when a shadcn preset changes the shared web design system and
mobile must follow. Token sync is deterministic; native mobile component parity
is a required inspection and implementation task for changed shared web
components with mobile counterparts.

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
   `packages/ui/src/tokens/design-tokens.json` when the CSS changed and the
   token file is clean, then regenerates:

   - `packages/ui/src/styles/globals.css`
   - `apps/mobile/global.css`
   - `apps/mobile/lib/theme.ts`

   If both CSS and tokens are already dirty and the applied CSS must win, run:

   ```sh
   pnpm sync:design-system -- --import-applied-css
   ```

4. Run the sync a second time after imports or manual changes. A clean second
   run confirms the generated files are stable.

5. Reconcile native mobile counterparts for changed shared web components:

   ```sh
   git diff --name-only -- packages/ui/src/components
   find apps/mobile/components/ui -maxdepth 1 -type f
   ```

   Treat `packages/ui/src/components` as the source of truth for component
   anatomy, variants, slots, state styling, interaction semantics, accessibility
   behavior, spacing, radius, shadows, and icon choices. For each changed web
   component that has a native counterpart in `apps/mobile/components/ui`,
   update the native component so the user-facing behavior and visual anatomy
   reproduce the shared web component as closely as React Native allows.

## Mobile Component Parity

Do not import or wrap web React components in mobile. Reproduce the shared web
component with React Native primitives, NativeWind classes, generated token
names, and `@rn-primitives/*` where the mobile component already uses them.

Use this required parity rule:

- Token-only changes with no changed `packages/ui/src/components/*`: no mobile
  component edit.
- Changed web component with a mobile counterpart in
  `apps/mobile/components/ui`: inspect and update the native counterpart to
  match the shared web component's user-facing anatomy and behavior.
- Changed web component with no mobile counterpart and no mobile usage: no
  mobile edit.
- New or changed web component needed by mobile: add or update a native
  component under `apps/mobile/components/ui` using mobile conventions.

Parity means translating, not copying blindly. Preserve native-only behavior
that makes the component work correctly on iOS and Android, such as hit slop,
native animations, portal hosts, `react-native-reanimated` transitions, and
platform-specific primitive requirements. When a web class has no native
equivalent, choose the closest tokenized native expression and keep the same
observable intent.

## Native Implementation Rules

Use React Native primitives, NativeWind classes, generated token names such as
`bg-background`, `text-foreground`, `border-border`, `bg-primary`,
`text-primary-foreground`, and `apps/mobile/lib/theme.ts` values when JS theme
objects are needed. Use `@rn-primitives/*` where it already matches the mobile
component pattern.

Keep mobile updates focused on changed counterparts that exist or are required
by real mobile workflows. Do not blindly port every web-only component.

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
