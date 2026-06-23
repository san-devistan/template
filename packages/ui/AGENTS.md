# UI Package Guide

`packages/ui` is the canonical web design system. It owns shared design tokens,
generated web global styles, shared React components, web hooks, and
shadcn-style component source used by `apps/web`.

## Ownership

Treat `packages/ui/src/tokens/design-tokens.json` as the source of truth for
colors, radius, fonts, typography roles, motion, shadows, and shared sizing
primitives. Treat `packages/ui/src/components` as the source of truth for web
component anatomy, variants, naming, and interaction patterns.

Generated style files are derived from the token source. Do not edit
`packages/ui/src/styles/globals.css`, `apps/mobile/global.css`, or
`apps/mobile/lib/theme.ts` directly; update
`packages/ui/src/tokens/design-tokens.json`, then run
`pnpm sync:design-system`.

After applying a shadcn preset, run the sync once from the repo root:

```sh
pnpm dlx shadcn@latest apply <preset> --cwd apps/web
pnpm sync:design-system
```

`pnpm sync:design-system` detects the applied CSS variables when
`packages/ui/src/styles/globals.css` is changed and
`packages/ui/src/tokens/design-tokens.json` is clean. It imports those values
into the token source, then regenerates web and mobile theme artifacts. If the
token file already has changes, the token file remains the source of truth; pass
`--import-applied-css` only when the applied CSS should overwrite the tokens.

## Skills

UI-local skills live in `packages/ui/.agents/skills/<skill>/SKILL.md`. The
shadcn skill is local to this package.

| Skill    | Invoke when                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `shadcn` | shadcn/ui components, registries, presets, component updates, composition, styling rules, CLI behavior, or `components.json` |

For cross-cutting visual design, browser hooks, TypeScript quality, or Effect
work, use the shared root skills in `.agents/skills/` after reading this file.

## UI MCPs

The repo-local `.codex/config.toml` configures the shadcn MCP for shared UI
work:

| MCP    | Use for                                                                                                    |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| shadcn | Search registries, inspect component examples and metadata, and get add commands for shared UI components. |

## Tools

Run shadcn preset application from `apps/web` with `--cwd apps/web`; the CLI
needs a supported framework workspace. Web app `components.json` points its
`ui` alias at `@workspace/ui/components`, so the preset still updates shared
component and token files in `packages/ui`.

Do not hand-create shared design-system components inside `apps/web`.

The local typecheck command is `pnpm --filter @workspace/ui typecheck`.
