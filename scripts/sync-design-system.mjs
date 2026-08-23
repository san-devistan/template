import { execFile } from "node:child_process"
import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { promisify } from "node:util"

import { formatNumber, oklchToHsl } from "./design-system/color.mjs"
import {
  getGeneratedWebHeader,
  importAppliedTokens,
  wasGeneratedFromWebTokens,
} from "./design-system/extract-applied-tokens.mjs"
import {
  COLOR_TOKENS,
  FONT_WEIGHT,
  validateTokens,
} from "./design-system/tokens.mjs"

const execFileAsync = promisify(execFile)
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const TOKENS_FILE = path.join(ROOT, "packages/ui/src/tokens/design-tokens.json")
const WEB_CSS = path.join(ROOT, "packages/ui/src/styles/globals.css")
const MOBILE_CSS = path.join(ROOT, "apps/mobile/global.css")
const MOBILE_THEME = path.join(ROOT, "apps/mobile/lib/theme.ts")

const GENERATED_HEADER =
  "/* Generated from packages/ui/src/tokens/design-tokens.json. Do not edit by hand. */"

function parseArgs(argv) {
  const options = {
    importAppliedCss: "auto",
  }

  for (const arg of argv) {
    if (arg === "--") {
      continue
    }

    if (arg === "--import-applied-css") {
      options.importAppliedCss = "always"
      continue
    }

    if (arg === "--no-import-applied-css") {
      options.importAppliedCss = "never"
      continue
    }

    throw new Error(`Unknown argument: ${arg}`)
  }

  return options
}

async function hasGitChanges(filePath) {
  const relativePath = path.relative(ROOT, filePath)

  try {
    const { stdout } = await execFileAsync(
      "git",
      ["status", "--porcelain", "--", relativePath],
      { cwd: ROOT }
    )

    return stdout.trim().length > 0
  } catch {
    return false
  }
}

async function shouldImportAppliedCss(mode, tokens, generatedWebCss) {
  if (mode === "always") {
    return true
  }

  if (mode === "never") {
    return false
  }

  const currentWebCss = await readFile(WEB_CSS, "utf8")

  if (currentWebCss === generatedWebCss) {
    return false
  }

  if (wasGeneratedFromWebTokens(currentWebCss, tokens)) {
    return true
  }

  const [tokensChanged, webCssChanged] = await Promise.all([
    hasGitChanges(TOKENS_FILE),
    hasGitChanges(WEB_CSS),
  ])

  if (tokensChanged) {
    if (webCssChanged) {
      console.warn(
        [
          "Both design-tokens.json and globals.css have uncommitted changes.",
          "Using design-tokens.json as the source of truth.",
          "Use --import-applied-css to accept globals.css instead.",
        ].join(" ")
      )
    }

    return false
  }

  return webCssChanged
}

async function readTokens() {
  const tokenJson = await readFile(TOKENS_FILE, "utf8")

  return validateTokens(JSON.parse(tokenJson))
}

function toCamelCase(token) {
  return token.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase())
}

function pxToRem(value) {
  return `${formatNumber(value / 16)}rem`
}

function buildMobileColors(colors) {
  return Object.fromEntries(
    COLOR_TOKENS.map((token) => [token, oklchToHsl(colors[token])])
  )
}

function buildCssVars(vars, indent = 4) {
  const spaces = " ".repeat(indent)

  return Object.entries(vars)
    .map(([name, value]) => `${spaces}--${name}: ${String(value)};`)
    .join("\n")
}

function buildColorVars(colors) {
  return Object.fromEntries(
    COLOR_TOKENS.flatMap((token) => [
      [token, colors[token]],
      [`color-${token}`, colors[token]],
    ])
  )
}

function buildRadiusVars(radius) {
  return {
    radius: radius.base,
    ...Object.fromEntries(
      Object.entries(radius.scale).map(([name, value]) => [
        `radius-${name}`,
        value,
      ])
    ),
  }
}

function buildFontVars(fonts) {
  return {
    "font-heading": fonts.web.heading,
    "font-sans": fonts.web.sans,
  }
}

function buildMotionVars(motion) {
  return {
    ...Object.fromEntries(
      Object.entries(motion.durationMs).map(([name, value]) => [
        `duration-${name}`,
        `${String(value)}ms`,
      ])
    ),
    ...Object.fromEntries(
      Object.entries(motion.easing).map(([name, value]) => [
        `ease-${name}`,
        value,
      ])
    ),
  }
}

function buildShadowVars(shadow) {
  return Object.fromEntries(
    Object.entries(shadow).map(([name, value]) => [`shadow-${name}`, value])
  )
}

function buildTypographyVars(typography) {
  return Object.fromEntries(
    Object.entries(typography).flatMap(([name, token]) => [
      [`text-${name}-size`, pxToRem(token.fontSize)],
      [`text-${name}-line-height`, pxToRem(token.lineHeight)],
      [`text-${name}-font-weight`, FONT_WEIGHT[token.font].toString()],
    ])
  )
}

function buildThemeInlineVars(tokens) {
  return {
    ...buildFontVars(tokens.fonts),
    ...Object.fromEntries(
      COLOR_TOKENS.map((token) => [`color-${token}`, `var(--${token})`])
    ),
    ...Object.fromEntries(
      Object.keys(tokens.radius.scale).map((name) => [
        `radius-${name}`,
        tokens.radius.scale[name],
      ])
    ),
    ...Object.fromEntries(
      Object.keys(tokens.shadow).map((name) => [
        `shadow-${name}`,
        tokens.shadow[name],
      ])
    ),
  }
}

function buildWebCss(tokens) {
  const rootVars = {
    ...buildColorVars(tokens.colors.light),
    ...buildRadiusVars(tokens.radius),
    ...buildMotionVars(tokens.motion),
    ...buildShadowVars(tokens.shadow),
    ...buildTypographyVars(tokens.typography),
  }

  return `${getGeneratedWebHeader(tokens)}

@theme inline {
${buildCssVars(buildThemeInlineVars(tokens), 2)}
}

:root {
${buildCssVars(rootVars, 2)}
}

.dark {
${buildCssVars(buildColorVars(tokens.colors.dark), 2)}
}
`
}

function buildMobileCss(tokens) {
  return `${GENERATED_HEADER}

@import "tailwindcss";
@import "uniwind";
@import "panelui-native/theme.css";
@import "../../packages/ui/src/styles/globals.css";

@source "./node_modules/panelui-native/src";

@theme {
  --font-normal: ${tokens.fonts.mobile.regular};
  --font-medium: ${tokens.fonts.mobile.medium};
  --font-semibold: ${tokens.fonts.mobile.semibold};
  --font-bold: ${tokens.fonts.mobile.bold};
  --font-extrabold: ${tokens.fonts.mobile.extrabold};
  --font-heading: ${tokens.fonts.mobile.heading};
  --font-mono: ${tokens.fonts.mobile.heading};
}
`
}

function buildThemeObject(theme, radius) {
  return [
    ...COLOR_TOKENS.map(
      (token) => `    ${toCamelCase(token)}: "hsl(${theme[token]})",`
    ),
    `    radius: "${radius.base}",`,
  ].join("\n")
}

function buildThemeTs(tokens, lightTheme, darkTheme) {
  return `// Generated from packages/ui/src/tokens/design-tokens.json. Do not edit by hand.
import {
  DarkTheme,
  DefaultTheme,
  type Theme,
} from "expo-router/react-navigation"

export const THEME = {
  light: {
${buildThemeObject(lightTheme, tokens.radius)}
  },
  dark: {
${buildThemeObject(darkTheme, tokens.radius)}
  },
} as const

export type ThemeName = keyof typeof THEME

export const NAV_THEME = {
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
} satisfies Record<ThemeName, Theme>
`
}

const options = parseArgs(process.argv.slice(2))
let tokens = await readTokens()

if (
  await shouldImportAppliedCss(
    options.importAppliedCss,
    tokens,
    buildWebCss(tokens)
  )
) {
  const changes = await importAppliedTokens({
    tokensFile: TOKENS_FILE,
    webCss: WEB_CSS,
  })

  if (changes.length > 0) {
    console.log(`Imported ${changes.length} token paths from globals.css`)
    tokens = await readTokens()
  }
}

const lightTheme = buildMobileColors(tokens.colors.light)
const darkTheme = buildMobileColors(tokens.colors.dark)

await writeFile(WEB_CSS, buildWebCss(tokens))
await writeFile(MOBILE_CSS, buildMobileCss(tokens))
await writeFile(MOBILE_THEME, buildThemeTs(tokens, lightTheme, darkTheme))
