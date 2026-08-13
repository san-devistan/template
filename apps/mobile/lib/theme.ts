// Generated from packages/ui/src/tokens/design-tokens.json. Do not edit by hand.
import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native"

export const FONT_FAMILY = {
  regular: "Oxanium_400Regular",
  regularItalic: "JetBrainsMono_400Regular_Italic",
  medium: "Oxanium_500Medium",
  semibold: "Oxanium_600SemiBold",
  bold: "Oxanium_700Bold",
  extrabold: "Oxanium_800ExtraBold",
  sans: "Oxanium_400Regular",
  heading: "JetBrainsMono_400Regular",
  headingItalic: "JetBrainsMono_400Regular_Italic",
  headingMedium: "JetBrainsMono_500Medium",
  headingSemibold: "JetBrainsMono_600SemiBold",
  headingBold: "JetBrainsMono_700Bold",
  headingExtrabold: "JetBrainsMono_800ExtraBold",
} as const

export const TYPOGRAPHY = {
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FONT_FAMILY.regular,
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.regular,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.medium,
  },
  "heading-sm": {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: FONT_FAMILY.headingSemibold,
  },
  "heading-md": {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: FONT_FAMILY.headingSemibold,
  },
  "heading-lg": {
    fontSize: 36,
    lineHeight: 40,
    fontFamily: FONT_FAMILY.headingExtrabold,
  },
} as const

export const MOTION = {
  durationMs: {
    fast: 150,
    base: 200,
    slow: 250,
  },
  easing: {
    standard: "ease-out",
  },
} as const

export const COMPONENT_TOKENS = {
  controlHeight: {
    compact: 32,
    default: 40,
    large: 44,
  },
  iconSize: {
    sm: 14,
    md: 16,
    lg: 20,
  },
} as const

export const THEME = {
  light: {
    background: "hsl(0 0% 100%)",
    foreground: "hsl(0 0% 3.939%)",
    card: "hsl(0 0% 100%)",
    cardForeground: "hsl(0 0% 3.939%)",
    popover: "hsl(0 0% 100%)",
    popoverForeground: "hsl(0 0% 3.939%)",
    primary: "hsl(79.912 100% 45.084%)",
    primaryForeground: "hsl(86.517 71.115% 19.123%)",
    secondary: "hsl(239.992 3.51% 95.786%)",
    secondaryForeground: "hsl(240.017 6.031% 9.981%)",
    muted: "hsl(0 0% 96.059%)",
    mutedForeground: "hsl(0 0% 45.152%)",
    accent: "hsl(0 0% 96.059%)",
    accentForeground: "hsl(0 0% 9.053%)",
    destructive: "hsl(357.206 100% 45.323%)",
    destructiveForeground: "hsl(0 0% 98.026%)",
    border: "hsl(0 0% 89.816%)",
    input: "hsl(0 0% 89.816%)",
    ring: "hsl(0 0% 63.016%)",
    chart1: "hsl(80.92 87.665% 63.648%)",
    chart2: "hsl(83.901 100% 40.496%)",
    chart3: "hsl(85.832 100% 32.374%)",
    chart4: "hsl(85.232 100% 24.575%)",
    chart5: "hsl(83.322 100% 19.404%)",
    sidebar: "hsl(0 0% 98.026%)",
    sidebarForeground: "hsl(0 0% 3.939%)",
    sidebarPrimary: "hsl(85.832 100% 32.374%)",
    sidebarPrimaryForeground: "hsl(78.26 92.844% 95.138%)",
    sidebarAccent: "hsl(0 0% 96.059%)",
    sidebarAccentForeground: "hsl(0 0% 9.053%)",
    sidebarBorder: "hsl(0 0% 89.816%)",
    sidebarRing: "hsl(0 0% 63.016%)",
    radius: "0.625rem",
  },
  dark: {
    background: "hsl(0 0% 3.939%)",
    foreground: "hsl(0 0% 98.026%)",
    card: "hsl(0 0% 9.053%)",
    cardForeground: "hsl(0 0% 98.026%)",
    popover: "hsl(0 0% 9.053%)",
    popoverForeground: "hsl(0 0% 98.026%)",
    primary: "hsl(83.901 100% 40.496%)",
    primaryForeground: "hsl(86.517 71.115% 19.123%)",
    secondary: "hsl(240.047 4.043% 15.933%)",
    secondaryForeground: "hsl(0 0% 98.026%)",
    muted: "hsl(0 0% 14.938%)",
    mutedForeground: "hsl(0 0% 63.016%)",
    accent: "hsl(0 0% 14.938%)",
    accentForeground: "hsl(0 0% 98.026%)",
    destructive: "hsl(358.748 100% 69.558%)",
    destructiveForeground: "hsl(0 0% 9.053%)",
    border: "hsl(0 0% 100% / 10%)",
    input: "hsl(0 0% 100% / 15%)",
    ring: "hsl(0 0% 45.152%)",
    chart1: "hsl(80.92 87.665% 63.648%)",
    chart2: "hsl(83.901 100% 40.496%)",
    chart3: "hsl(85.832 100% 32.374%)",
    chart4: "hsl(85.232 100% 24.575%)",
    chart5: "hsl(83.322 100% 19.404%)",
    sidebar: "hsl(0 0% 9.053%)",
    sidebarForeground: "hsl(0 0% 98.026%)",
    sidebarPrimary: "hsl(83.901 100% 40.496%)",
    sidebarPrimaryForeground: "hsl(88.953 88.618% 9.611%)",
    sidebarAccent: "hsl(0 0% 14.938%)",
    sidebarAccentForeground: "hsl(0 0% 98.026%)",
    sidebarBorder: "hsl(0 0% 100% / 10%)",
    sidebarRing: "hsl(0 0% 45.152%)",
    radius: "0.625rem",
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
