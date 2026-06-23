# Mobile App Guide

`apps/mobile` is the Expo Router React Native application. It owns native
screens, navigation, native UI composition, EAS app workflows, and App Store
Connect automation.

## UI Boundaries

Compose screens from `apps/mobile/components/ui` first. The mobile app does not
import web React components from `packages/ui`; it mirrors the shared design
language with native primitives and generated theme values.

Do not hand-edit generated theme files:

- `apps/mobile/global.css`
- `apps/mobile/lib/theme.ts`

Change token sources in `packages/ui`, then run `pnpm sync:mobile-theme`.

## Skills

Mobile-local skills live in `apps/mobile/.agents/skills/<skill>/SKILL.md`. Read
only the narrow skill needed for the task.

### Expo And React Native

| Skill                        | Invoke when                                                                                                      |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `building-native-ui`         | Building Expo Router screens, native UI, navigation, styling, animations, tabs, search, forms, or media patterns |
| `vercel-react-native-skills` | React Native performance, lists, animations, images, native APIs, monorepo native deps, or platform UI patterns  |
| `native-data-fetching`       | Any network request, API call, data fetching, caching, offline behavior, React Query/SWR, or Expo Router loaders |
| `expo-tailwind-setup`        | Setting up or fixing Tailwind CSS v4, `react-native-css`, or NativeWind v5 in Expo                               |
| `expo-ui`                    | Using `@expo/ui`, SwiftUI/Jetpack Compose hosts, native-feeling lists, menus, sheets, sliders, or pickers        |
| `expo-module`                | Creating or editing Expo native modules/views, config plugins, native module APIs, Swift/Kotlin, or autolinking  |
| `expo-dev-client`            | Building, installing, or distributing Expo development clients locally or via TestFlight                         |
| `expo-deployment`            | EAS build/submit, production releases, TestFlight, app store rollout, versions/build numbers, or store metadata  |
| `expo-cicd-workflows`        | EAS workflow YAML, CI/CD, build pipelines, deployment automation, or `.eas/workflows/`                           |
| `eas-update-insights`        | EAS Update health, crash rates, installs/launches, payload size, OTA vs embedded users, or rollout gates         |
| `expo-observe`               | EAS Observe setup, metrics queries, startup/navigation TTR/TTI, update download metrics, or performance triage   |
| `expo-api-routes`            | Expo Router `+api.ts` routes, EAS Hosting server routes, webhooks, server secrets, proxies, or server validation |
| `expo-examples`              | Integrating third-party libraries with canonical Expo examples or scaffolding from `npx create-expo --example`   |
| `expo-brownfield`            | Embedding Expo/React Native into existing native iOS or Android apps, AAR/XCFramework, Kotlin, or Swift projects |
| `upgrading-expo`             | Expo SDK upgrades, dependency fixes, new architecture, React Compiler, deprecated package migrations             |
| `use-dom`                    | Expo DOM components, web-only libraries in native, webview-backed React web code, HTML/CSS, canvas, or embeds    |

### App Store Connect And Store Ops

| Skill                           | Invoke when                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `asc-cli-usage`                 | Running, designing, or debugging `asc` commands, flags, output formats, auth, pagination, or discovery   |
| `asc-id-resolver`               | Resolving App Store Connect IDs for apps, builds, versions, groups, testers, or other ASC resources      |
| `asc-app-create-ui`             | Creating a new App Store Connect app record via browser automation when no public API covers it          |
| `asc-release-flow`              | Determining release readiness and driving App Store review submission, first availability, IAP, privacy  |
| `asc-submission-health`         | Validating submission readiness, submitting prepared versions, or monitoring/troubleshooting review      |
| `asc-build-lifecycle`           | Waiting on build processing, finding latest builds, managing build retention, or cleaning old builds     |
| `asc-xcode-build`               | Building, archiving, exporting, uploading IPA/PKG artifacts, or managing Xcode version/build numbers     |
| `asc-signing-setup`             | Bundle IDs, capabilities, signing certificates, provisioning profiles, or encrypted signing sync         |
| `asc-testflight-orchestration`  | TestFlight distribution, beta groups, testers, and What to Test notes                                    |
| `asc-crash-triage`              | TestFlight crashes, beta feedback, app hangs, performance diagnostics, or crash summaries                |
| `asc-metadata-sync`             | Syncing, validating, applying, or migrating canonical App Store metadata and localizations               |
| `asc-localize-metadata`         | Translating/localizing App Store descriptions, keywords, What's New, subtitles, or adding languages      |
| `asc-whats-new-writer`          | Generating localized App Store release notes or promotional text from git log, bullets, or free text     |
| `asc-subscription-localization` | Bulk-localizing subscription or in-app purchase display names across App Store locales                   |
| `asc-screenshot-resize`         | Resizing and validating App Store screenshots with current screenshot-size requirements                  |
| `asc-shots-pipeline`            | Automating iOS screenshots with xcodebuild/simctl, AXe, framing, and screenshot upload                   |
| `asc-aso-audit`                 | Offline ASO audits over canonical metadata and keyword gap analysis after `asc metadata pull`            |
| `asc-ppp-pricing`               | Territory-specific pricing, PPP pricing, price imports, schedules, subscriptions, or in-app purchases    |
| `asc-revenuecat-catalog-sync`   | Reconciling App Store subscriptions/IAPs with RevenueCat products, entitlements, offerings, and packages |
| `asc-apple-ads`                 | Apple Ads auth, org lookup, campaigns, ad groups, ads, keywords, reports, or safe live testing           |
| `asc-notarization`              | macOS archive/export/notarization for Developer ID distribution outside the App Store                    |
| `asc-workflow`                  | Defining, validating, running, resuming, or auditing repo-local `asc workflow` automations               |
| `asc-wall-submit`               | Submitting or updating a Wall of Apps entry with `asc apps wall submit`                                  |

For cross-cutting TypeScript or Effect work, use the shared root skills in
`.agents/skills/` after reading this file.

## Tools

Use Expo and EAS tooling for mobile builds, updates, submissions, and device
workflows. Use `asc` tooling only with the matching `asc-*` skill. Client apps
consume generated backend APIs; provider setup, Convex functions, auth, email,
billing, and schema changes belong in `packages/backend`.

Run mobile commands from this workspace unless the task is intentionally
repo-wide. The local typecheck command is `pnpm --filter mobile typecheck`.
