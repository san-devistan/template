export const COLOR_TOKENS = [
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

export const FONT_WEIGHT = {
  regular: 400,
  regularItalic: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
}

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

export function expectRecord(value, pathName) {
  if (!isRecord(value)) {
    throw new Error(`${pathName} must be an object`)
  }

  return value
}

function expectString(value, pathName) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`${pathName} must be a non-empty string`)
  }

  return value
}

function expectNumber(value, pathName) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`${pathName} must be a finite number`)
  }

  return value
}

function expectPositiveNumber(value, pathName) {
  const numberValue = expectNumber(value, pathName)

  if (numberValue <= 0) {
    throw new Error(`${pathName} must be greater than 0`)
  }

  return numberValue
}

export function validateTokens(tokens) {
  const root = expectRecord(tokens, "tokens")
  const colors = expectRecord(root.colors, "colors")
  const lightColors = expectRecord(colors.light, "colors.light")
  const darkColors = expectRecord(colors.dark, "colors.dark")

  for (const token of COLOR_TOKENS) {
    expectString(lightColors[token], `colors.light.${token}`)
    expectString(darkColors[token], `colors.dark.${token}`)
  }

  const radius = expectRecord(root.radius, "radius")
  expectString(radius.base, "radius.base")
  const radiusScale = expectRecord(radius.scale, "radius.scale")

  for (const token of ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]) {
    expectString(radiusScale[token], `radius.scale.${token}`)
  }

  const fonts = expectRecord(root.fonts, "fonts")
  const webFonts = expectRecord(fonts.web, "fonts.web")
  const mobileFonts = expectRecord(fonts.mobile, "fonts.mobile")

  for (const token of ["sans", "heading"]) {
    expectString(webFonts[token], `fonts.web.${token}`)
    expectString(mobileFonts[token], `fonts.mobile.${token}`)
  }

  for (const token of Object.keys(FONT_WEIGHT)) {
    expectString(mobileFonts[token], `fonts.mobile.${token}`)
  }

  validateTypography(root.typography)
  validateMotion(root.motion)
  validateStringRecord(root.shadow, "shadow")
  validateComponents(root.components)

  return root
}

function validateTypography(value) {
  const typography = expectRecord(value, "typography")

  for (const [name, typographyToken] of Object.entries(typography)) {
    const token = expectRecord(typographyToken, `typography.${name}`)
    expectPositiveNumber(token.fontSize, `typography.${name}.fontSize`)
    expectPositiveNumber(token.lineHeight, `typography.${name}.lineHeight`)
    const font = expectString(token.font, `typography.${name}.font`)

    if (!Object.hasOwn(FONT_WEIGHT, font)) {
      throw new Error(
        `typography.${name}.font must reference a mobile font key`
      )
    }
  }
}

function validateMotion(value) {
  const motion = expectRecord(value, "motion")
  const durationMs = expectRecord(motion.durationMs, "motion.durationMs")

  for (const token of ["fast", "base", "slow"]) {
    expectPositiveNumber(durationMs[token], `motion.durationMs.${token}`)
  }

  const easing = expectRecord(motion.easing, "motion.easing")
  expectString(easing.standard, "motion.easing.standard")
}

function validateStringRecord(value, pathName) {
  const record = expectRecord(value, pathName)

  for (const [name, childValue] of Object.entries(record)) {
    expectString(childValue, `${pathName}.${name}`)
  }
}

function validateComponents(value) {
  const components = expectRecord(value, "components")
  validateNumberRecord(components.controlHeight, "components.controlHeight")
  validateNumberRecord(components.iconSize, "components.iconSize")
}

function validateNumberRecord(value, pathName) {
  const record = expectRecord(value, pathName)

  for (const [name, childValue] of Object.entries(record)) {
    expectPositiveNumber(childValue, `${pathName}.${name}`)
  }
}
