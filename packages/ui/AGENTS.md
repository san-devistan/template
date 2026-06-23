# UI Package Guide

`packages/ui` is the canonical web design system. It owns web tokens, global
styles, shared React components, web hooks, and shadcn-style component source
used by `apps/web`.

## Ownership

Treat `packages/ui/src/styles/globals.css` and
`packages/ui/src/components` as the source of truth for web tokens, component
anatomy, variants, naming, and interaction patterns.

Mobile theme files are generated from this package's token source. Do not edit
`apps/mobile/global.css` or `apps/mobile/lib/theme.ts` directly; update
`packages/ui/src/styles/globals.css`, then run `pnpm sync:mobile-theme`.

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

Run shadcn CLI commands from `packages/ui`, where `components.json` points at
the shared component and token source.

Do not add shared design-system components from `apps/web`. Web app
`components.json` points its `ui` alias at `@workspace/ui/components`, so
design-system additions and updates belong here.

The local typecheck command is `pnpm --filter @workspace/ui typecheck`.
