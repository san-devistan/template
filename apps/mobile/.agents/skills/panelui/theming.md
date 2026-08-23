# Theming

## Six themes, three families

| Family | Light   | Dark         | Accent                        | Corners                  |
| ------ | ------- | ------------ | ----------------------------- | ------------------------ |
| Panel  | `light` | `dark`       | Neutral `#262626` / `#f5f5f5` | Moderate                 |
| Moon   | `moon`  | `moon-dark`  | Lavender `#5e6ad2`            | Tight, near-black canvas |
| Grass  | `grass` | `grass-dark` | Green `#24b47e` / `#3ecf8e`   | Generous                 |

A family sets its own **radius scale** as well as its palette, so switching one changes the shape
of the UI and not only the colour. That is deliberate — a theme is a shape.

## Switching at runtime

```tsx
const { theme, mode, setTheme, setMode } = useThemeMode()

setMode("dark") // light ↔ dark within the current family
setTheme("moon") // change family
```

**A named theme has to be registered first**, or `setTheme` throws:

```js title="metro.config.js"
module.exports = withUniwindConfig(config, {
  cssEntryFile: "./src/global.css",
  extraThemes: ["moon", "moon-dark", "grass", "grass-dark"],
})
```

Metro reads its config once, at startup. After changing `extraThemes`, **stop the dev server and
start it again** — `--clear` on a running one is not enough, and a stale server rewrites
Uniwind's generated CSS with the old list, producing `Theme … is missing variable …`.

## Overriding a token

In the app's CSS entry, after the import:

```css title="src/global.css"
@import "tailwindcss";
@import "uniwind";
@import "panelui-native/theme.css";

@source '../node_modules/panelui-native/src';

@layer theme {
  :root {
    @variant light {
      --color-primary: #6d28d9;
      --color-primary-foreground: #ffffff;
    }
    @variant dark {
      --color-primary: #a78bfa;
      --color-primary-foreground: #1e1b4b;
    }
  }
}
```

Every value must be a **static rgba or hex**. Native cannot evaluate `color-mix()` or `--alpha()`
at runtime, which is why the shipped theme precomputes them.

Every theme has to define every token — Uniwind fails the build with "All themes must have the
same variables" otherwise.

## Reading a token in JavaScript

```tsx
const [background, border] = useCSSVariable([
  "--color-background",
  "--color-border",
])
```

It subscribes to theme changes, so it re-runs on every switch — including the named themes, which
the OS `Appearance` API knows nothing about. Drive `<StatusBar>` from `useThemeMode().mode` for
the same reason, not from `style="auto"`.

## The chart ramp

`--color-chart-1` … `--color-chart-5`, ordered by prominence — `chart-1` is the series the chart
is about, and each family starts it on that family's own accent. Override these to put a chart on
brand.
