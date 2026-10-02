# Mobile App

Expo Router React Native app. It owns native screens and navigation; data and
logic come from `@workspace/backend`.

## UI

Components come from PanelUI (`panelui-native`). When one needs to diverge, copy
it locally with `pnpm dlx panelui-cli@latest add <component>` instead of patching
the package.

Styling uses the shared tokens synced from `packages/ui` into `tokens.css`, so
prefer semantic classes such as `bg-background` over hardcoded values. Web
components are not ported here.

## App Store

App Store Connect work (builds, TestFlight, metadata) goes through the `asc`
CLI with the Apple Developer account. Keep it up to date; `asc auth doctor`
helps when access fails.
