import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const WEB_CSS = path.join(ROOT, "packages/ui/src/styles/globals.css")
const MOBILE_CSS = path.join(ROOT, "apps/mobile/global.css")
const MOBILE_THEME = path.join(ROOT, "apps/mobile/lib/theme.ts")

const COLOR_TOKENS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
]

const FALLBACKS = {
  "destructive-foreground": "primary-foreground",
}

const GENERATED_HEADER =
  "/* Generated from packages/ui/src/styles/globals.css. Do not edit by hand. */"

function readVars(css, selector) {
  const block = css.match(new RegExp(`${selector}\\s*\\{([\\s\\S]*?)\\n\\}`))

  if (!block) {
    throw new Error(`Could not find ${selector} in ${WEB_CSS}`)
  }

  return Object.fromEntries(
    [...block[1].matchAll(/--([\w-]+):\s*([^;]+);/g)].map((match) => [
      match[1],
      match[2].trim(),
    ])
  )
}

function resolveToken(vars, token) {
  const value = vars[token]

  if (value) {
    return value
  }

  const fallback = FALLBACKS[token]

  if (fallback && vars[fallback]) {
    return vars[fallback]
  }

  throw new Error(`Missing required theme token --${token}`)
}

function parseOklch(value) {
  const match = value.match(
    /^oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:deg)?(?:\s*\/\s*([^)]+))?\s*\)$/
  )

  if (!match) {
    return null
  }

  const lightness = match[1].endsWith("%")
    ? Number.parseFloat(match[1]) / 100
    : Number.parseFloat(match[1])

  return {
    lightness,
    chroma: Number.parseFloat(match[2]),
    hue: Number.parseFloat(match[3]),
    alpha: match[4]?.trim(),
  }
}

function oklchToHsl(value) {
  const color = parseOklch(value)

  if (!color) {
    return value
  }

  const hueRadians = (color.hue * Math.PI) / 180
  const a = color.chroma * Math.cos(hueRadians)
  const b = color.chroma * Math.sin(hueRadians)

  const lPrime = color.lightness + 0.3963377774 * a + 0.2158037573 * b
  const mPrime = color.lightness - 0.1055613458 * a - 0.0638541728 * b
  const sPrime = color.lightness - 0.0894841775 * a - 1.291485548 * b

  const l = lPrime ** 3
  const m = mPrime ** 3
  const s = sPrime ** 3

  const rgb = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map(linearToSrgb)

  return rgbToHsl(rgb, color.alpha)
}

function linearToSrgb(value) {
  const srgb =
    value <= 0.0031308
      ? 12.92 * value
      : 1.055 * Math.abs(value) ** (1 / 2.4) - 0.055

  return Math.min(1, Math.max(0, srgb))
}

function rgbToHsl(rgb, alpha) {
  const [red, green, blue] = rgb
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const lightness = (max + min) / 2
  const delta = max - min

  if (delta < 0.000001) {
    return withAlpha(`0 0% ${formatPercent(lightness)}`, alpha)
  }

  const saturation = delta / (1 - Math.abs(2 * lightness - 1))

  if (saturation < 0.000001) {
    return withAlpha(`0 0% ${formatPercent(lightness)}`, alpha)
  }

  const hue = getHue(rgb, max, delta)

  return withAlpha(
    `${formatNumber(hue)} ${formatPercent(saturation)} ${formatPercent(
      lightness
    )}`,
    alpha
  )
}

function getHue([red, green, blue], max, delta) {
  if (max === red) {
    return 60 * (((green - blue) / delta) % 6)
  }

  if (max === green) {
    return 60 * ((blue - red) / delta + 2)
  }

  return 60 * ((red - green) / delta + 4)
}

function withAlpha(channels, alpha) {
  return alpha ? `${channels} / ${alpha}` : channels
}

function formatPercent(value) {
  return `${formatNumber(value * 100)}%`
}

function formatNumber(value) {
  const normalized = value < 0 ? value + 360 : value
  return Number.parseFloat(normalized.toFixed(3)).toString()
}

function toCamelCase(token) {
  return token.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase())
}

function buildTheme(vars) {
  return Object.fromEntries(
    COLOR_TOKENS.map((token) => [token, oklchToHsl(resolveToken(vars, token))])
  )
}

function buildCss(light, dark, radius) {
  return `${GENERATED_HEADER}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
${buildCssVars(light, radius)}
  }

  .dark {
${buildCssVars(dark)}
  }
}
`
}

function buildCssVars(theme, radius) {
  const colorLines = COLOR_TOKENS.map(
    (token) => `    --${token}: ${theme[token]};`
  )

  if (!radius) {
    return colorLines.join("\n")
  }

  return [
    ...colorLines,
    `    --radius: ${radius};`,
    "    --radius-sm: calc(var(--radius) * 0.6);",
    "    --radius-md: calc(var(--radius) * 0.8);",
    "    --radius-lg: var(--radius);",
    "    --radius-xl: calc(var(--radius) * 1.4);",
    "    --radius-2xl: calc(var(--radius) * 1.8);",
    "    --radius-3xl: calc(var(--radius) * 2.2);",
    "    --radius-4xl: calc(var(--radius) * 2.6);",
  ].join("\n")
}

function buildThemeTs(light, dark, radius) {
  return `// Generated from packages/ui/src/styles/globals.css. Do not edit by hand.
import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native"

export const THEME = {
  light: {
${buildThemeObject(light, radius)}
  },
  dark: {
${buildThemeObject(dark, radius)}
  },
} as const

export type ThemeName = keyof typeof THEME

export const NAV_THEME: Record<ThemeName, Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: THEME.light.background,
      border: THEME.light.border,
      card: THEME.light.card,
      notification: THEME.light.destructive,
      primary: THEME.light.primary,
      text: THEME.light.foreground,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: THEME.dark.background,
      border: THEME.dark.border,
      card: THEME.dark.card,
      notification: THEME.dark.destructive,
      primary: THEME.dark.primary,
      text: THEME.dark.foreground,
    },
  },
}
`
}

function buildThemeObject(theme, radius) {
  return [
    ...COLOR_TOKENS.map(
      (token) => `    ${toCamelCase(token)}: "hsl(${theme[token]})",`
    ),
    `    radius: "${radius}",`,
  ].join("\n")
}

const css = await readFile(WEB_CSS, "utf8")
const rootVars = readVars(css, ":root")
const darkVars = readVars(css, "\\.dark")
const lightTheme = buildTheme(rootVars)
const darkTheme = buildTheme(darkVars)

await writeFile(MOBILE_CSS, buildCss(lightTheme, darkTheme, rootVars.radius))
await writeFile(
  MOBILE_THEME,
  buildThemeTs(lightTheme, darkTheme, rootVars.radius)
)
