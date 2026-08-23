---
name: panelui
description: Build React Native and Expo UIs with PanelUI — adding components, theming, composing overlays and forms, and debugging why something is unstyled. Applies when working in an Expo or React Native project that has panelui-native installed or a panelui.json, when the user mentions PanelUI, or when they ask for a bottom sheet, dialog, chart, chat transcript, form or any other screen UI in React Native.
license: MIT
compatibility: Expo SDK 57+ and React Native 0.86, with Uniwind (Tailwind CSS v4 for React Native) and Reanimated. Not for the web — these components are React Native only.
metadata:
  author: Khalid Abdi
allowed-tools: Bash(npx panelui-cli@latest *), Bash(pnpm dlx panelui-cli@latest *), Bash(bunx panelui-cli@latest *)
---

# PanelUI

A React Native component library for Expo, styled with Tailwind CSS through Uniwind and animated
on the UI thread with Reanimated. Pure TypeScript, no native modules, runs in Expo Go.

> **Run every CLI command with the project's own runner** — `npx panelui-cli@latest`,
> `pnpm dlx panelui-cli@latest` or `bunx panelui-cli@latest`, matching its `packageManager`.
> Examples below use `npx`.

## First, find out how this project consumes it

There are two ways in and they are both fully supported, so **do not assume**:

```bash
npx panelui-cli@latest mcp   # the MCP server, if the agent supports it
```

or, without MCP, read `package.json` and look for `panelui.json`:

| What you find                    | What it means                                   | How to import                                     |
| -------------------------------- | ----------------------------------------------- | ------------------------------------------------- |
| `panelui-native` in dependencies | The package. The default.                       | `import { Button } from 'panelui-native'`         |
| A `panelui.json`                 | Source copied into the repo, owned and editable | `import { Button } from '@/components/ui/button'` |
| Both                             | Normal — the package, with one component forked | Whichever the file is                             |

If neither is there, the project has not installed it: send them to
`npx create-panelui-app@latest` for a new app, or
[the installation guide](https://panelui.dev/docs/installation) for an existing one. Do not
hand-write component source into a project that has not been set up — nothing will be styled,
and the reason will not be obvious.

## Principles

1. **Look before you build.** `components.md` lists every one of them, and there are more than a
   hundred. Search the registry before writing custom UI — a "custom" sheet, picker, chart or
   chat transcript is almost always one that exists.
2. **Compose the parts.** A settings screen is `Frame` + `Frame.Panel` + `Item` rows. A chat is
   `MessageScroller` + `Message` + `Bubble`. Reach for the compound parts before a `View`.
3. **Never hardcode a colour.** Every colour is a semantic token — `bg-card`,
   `text-muted-foreground`, `border-border`. A literal breaks all six themes at once.
4. **Read the props from the docs, not from memory.** The props tables are generated from the
   library's TypeScript, so they are right; a remembered prop name usually is not.

## Critical rules

Each links to a file with wrong/right pairs.

### Styling → [rules/styling.md](./rules/styling.md)

- **Semantic tokens only.** `bg-card`, not `bg-neutral-900`. No `dark:` overrides — the token
  already knows, and `dark:` does not resolve at all inside the named themes.
- **`gap-*`, never `space-y-*`.** React Native has no `space-*`.
- **`className` is for layout**, not for restyling a component's colours or type.
- **`cn()` for conditional classes**, not template-literal ternaries.
- **Resolve a dynamic colour with `useCSSVariable`**, never by reading a hex out of the theme.

### Composition → [rules/composition.md](./rules/composition.md)

- **`PanelUIProvider` at the root, exactly one.** Overlays render into its portal host; without
  it Dialog, BottomSheet, Popover, Select and Toast mount and never appear.
- **Compound parts belong to their root.** `Card.Header` inside `Card`, `Select.Item` inside
  `Select.Content`. Using one outside throws with the part's name.
- **Overlays take `open` + `onOpenChange`, or run uncontrolled with `defaultOpen`.** Do not
  conditionally render an overlay to close it — it has an exit animation to finish.
- **A field is `Field` + `Label` + the control**, not a `View` with a `Text` above it.

### Animation → [rules/animation.md](./rules/animation.md)

- **Reanimated 4 only.** Never React Native's core `Animated` — the two do not compose, and core
  `Animated` puts the work back on the JS thread, which is the thing this library is for.
- **Shared values and `useAnimatedStyle`**, not state in an animation loop.
- **`tv()` at module scope**, never inside render.

### Native controls → [rules/native.md](./rules/native.md)

- **"Native" means Liquid Glass on iOS.** `native` alone is not enough — pass `glass` too.
- **A native control ignores `className` and every token.** The platform owns its look; spacing
  has to come from the container.
- **Never host elements inside a labelled native button.** It has no definite width, and the app
  dies in native code where a JS `try` cannot catch it.

## The theme

Six themes in three families — Panel, Moon, Grass — each in light and dark. A family sets its own
**radius scale** as well as its palette, so switching one changes the shape of the UI too. Switch
at runtime with `useThemeMode()`; named themes have to be listed in `extraThemes` in
`metro.config.js` first, and the dev server restarted. See [theming.md](./theming.md).

## Adding a component

```bash
npx panelui-cli@latest add bottom-sheet     # copies the source in
npx panelui-cli@latest list                 # everything available
```

Nothing to install when the project uses the package — import it and go. Full command reference
in [cli.md](./cli.md); the MCP server and its tools in [mcp.md](./mcp.md).

## Which component

The full list, with a line on each, is in [components.md](./components.md). The common cases:

| Need                               | Use                                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| An action                          | `Button`, or `ButtonGroup` for a segmented run or a split button                    |
| A panel from the bottom edge       | `BottomSheet`                                                                       |
| A modal                            | `Dialog`                                                                            |
| A panel anchored to what opened it | `Popover`, or `Menu` for a list of actions                                          |
| A value picked from a list         | `Select`, or `Combobox` when it needs filtering                                     |
| Text in                            | `Input`, `Textarea`, `InputGroup`, `NumberInput`, `OtpInput`, `TagInput`            |
| A date or a time                   | `Calendar`, `DatePicker`, `TimePicker`, `DateTimePicker`                            |
| Form state and validation          | `Form` + `Field`                                                                    |
| A list row                         | `Item`, or `Swipe` when it has actions behind it                                    |
| A settings screen                  | `Frame` + `Frame.Panel` + `Item`                                                    |
| A metric                           | `Kpi`                                                                               |
| A series                           | `LineChart`, `AreaChart`, `BarChart`, `PieChart`, `RingChart`, and six more         |
| A conversation                     | `MessageScroller` + `Message`, with `Marker` between turns                          |
| Assistant output                   | `Response`, `Reasoning`, `Sources`, `Task`, `Plan`, `CodeBlock`                     |
| Loading                            | `Skeleton` for layout, `Spinner` or `Loader` for work, `Shimmer` for streaming text |
| Nothing to show                    | `EmptyState`                                                                        |
| A transient message                | `Toast`                                                                             |

## Docs

Every component's page is available as markdown, which is the fastest way to get the real API:

```
https://panelui.dev/llms.mdx/components/<slug>     e.g. …/components/bottom-sheet
https://panelui.dev/llms.mdx/charts/<slug>
https://panelui.dev/llms.mdx/ai-components/<slug>
https://panelui.dev/llms.txt                        the index of every page
```

**Fetch the page before using a component you have not used in this session.** The props tables
there are generated from the library's TypeScript; anything you remember is a guess.

## Detailed references

- [cli.md](./cli.md) — `init`, `add`, `list`, `mcp`, `panelui.json`, the registry
- [mcp.md](./mcp.md) — the MCP server and its six tools
- [theming.md](./theming.md) — tokens, the three families, radius, `useCSSVariable`
- [components.md](./components.md) — every component, generated from the docs
- [rules/styling.md](./rules/styling.md), [rules/composition.md](./rules/composition.md),
  [rules/animation.md](./rules/animation.md), [rules/native.md](./rules/native.md)
