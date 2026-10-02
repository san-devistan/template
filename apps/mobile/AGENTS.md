# Mobile App Guide

`apps/mobile` is the Expo Router React Native application. It owns native
screens, navigation, native UI composition, EAS app workflows, and App Store
Connect automation.

## UI Boundaries

PanelUI is the primary mobile UI library. Before creating a custom component,
search PanelUI and read the component's current docs. Import packaged
components from `panelui-native`.

If a PanelUI component needs customization that its props do not support, do
not patch `panelui-native`. Copy its source into the repository with the
PanelUI CLI and own the local component instead, for example:
`pnpm dlx panelui-cli@latest add time-picker`.

Do not port or mirror React components from `packages/ui`. That package remains
the source of truth for shared design tokens and web UI only. The generated
`apps/mobile/global.css` imports `packages/ui/src/styles/globals.css`, so
PanelUI and any app-specific mobile UI consume the same semantic tokens.

Create app-specific mobile components only when PanelUI does not cover the
workflow. Compose PanelUI parts before reaching for raw React Native views, use
semantic tokens such as `bg-background`, `text-foreground`, and
`border-border`, and never hardcode theme colors.

Shared token changes belong in `packages/ui/src/tokens/design-tokens.json`.
Run `pnpm sync:design-system` after changing those tokens.

Do not hand-edit generated theme files:

- `apps/mobile/global.css`
- `apps/mobile/lib/theme.ts`

## TypeScript Patterns

Add `effect` when a mobile workflow needs typed failures or required context,
such as backend API adapters, native resource boundaries, retrying/offline work,
config, background work, or concurrency. Keep pure UI components, simple hooks,
and local screen state simple.

Use `ts-pattern` when mobile code branches over finite typed cases such as
navigation variants, async screen states, reducer actions, native/API result
variants, and sync/offline statuses. If the implementation imports
`ts-pattern`, add the dependency to this workspace in the same change. Use
`.exhaustive()` unless an `.otherwise(...)` fallback is intentionally valid for
every remaining case. Keep simple booleans and nullish fallbacks as plain
TypeScript.

## Tools

Use Expo and EAS tooling for mobile builds, updates, submissions, and device
workflows. Use `asc` tooling for App Store Connect workflows. Client apps
consume generated backend APIs; provider setup, Convex functions, auth, email,
billing, and schema changes belong in `packages/backend`.

Run mobile commands from this workspace unless the task is intentionally
repo-wide. The local typecheck command is `pnpm --filter mobile typecheck`.
