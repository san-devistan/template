// Generated from packages/ui/src/tokens/design-tokens.json. Do not edit by hand.
import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native"

export const FONT_FAMILY = {
  regular: "Inter_400Regular",
  regularItalic: "Inter_400Regular_Italic",
  medium: "Inter_500Medium",
  semibold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extrabold: "Inter_800ExtraBold",
  sans: "Inter_400Regular",
  heading: "Inter_600SemiBold",
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
    fontFamily: FONT_FAMILY.semibold,
  },
  "heading-md": {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: FONT_FAMILY.semibold,
  },
  "heading-lg": {
    fontSize: 36,
    lineHeight: 40,
    fontFamily: FONT_FAMILY.extrabold,
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
    foreground: "hsl(300.039 13.937% 4.099%)",
    card: "hsl(0 0% 100%)",
    cardForeground: "hsl(300.039 13.937% 4.099%)",
    popover: "hsl(0 0% 100%)",
    popoverForeground: "hsl(300.039 13.937% 4.099%)",
    primary: "hsl(144.684 100% 25.5%)",
    primaryForeground: "hsl(138.459 76.514% 96.68%)",
    secondary: "hsl(239.992 3.51% 95.786%)",
    secondaryForeground: "hsl(240.017 6.031% 9.981%)",
    muted: "hsl(300.001 6.747% 94.856%)",
    mutedForeground: "hsl(293.323 7.971% 44.709%)",
    accent: "hsl(300.001 6.747% 94.856%)",
    accentForeground: "hsl(292.502 15.605% 10.172%)",
    destructive: "hsl(357.206 100% 45.323%)",
    destructiveForeground: "hsl(0 0% 98.026%)",
    border: "hsl(300.006 5.719% 89.988%)",
    input: "hsl(300.006 5.719% 89.988%)",
    ring: "hsl(294.546 5.879% 64.083%)",
    chart1: "hsl(210.694 100% 77.83%)",
    chart2: "hsl(216.256 100% 58.467%)",
    chart3: "hsl(221.337 97.063% 53.498%)",
    chart4: "hsl(225.345 84.095% 48.984%)",
    chart5: "hsl(227.099 75.743% 41.135%)",
    sidebar: "hsl(0 0% 98.026%)",
    sidebarForeground: "hsl(300.039 13.937% 4.099%)",
    sidebarPrimary: "hsl(142.293 100% 32.565%)",
    sidebarPrimaryForeground: "hsl(138.459 76.514% 96.68%)",
    sidebarAccent: "hsl(300.001 6.747% 94.856%)",
    sidebarAccentForeground: "hsl(292.502 15.605% 10.172%)",
    sidebarBorder: "hsl(300.006 5.719% 89.988%)",
    sidebarRing: "hsl(294.546 5.879% 64.083%)",
    radius: "0.45rem",
  },
  dark: {
    background: "hsl(300.039 13.937% 4.099%)",
    foreground: "hsl(0 0% 98.026%)",
    card: "hsl(292.502 15.605% 10.172%)",
    cardForeground: "hsl(0 0% 98.026%)",
    popover: "hsl(292.502 15.605% 10.172%)",
    popoverForeground: "hsl(0 0% 98.026%)",
    primary: "hsl(147.718 97.154% 20.364%)",
    primaryForeground: "hsl(138.459 76.514% 96.68%)",
    secondary: "hsl(240.047 4.043% 15.933%)",
    secondaryForeground: "hsl(0 0% 98.026%)",
    muted: "hsl(289.087 14.311% 15.113%)",
    mutedForeground: "hsl(294.546 5.879% 64.083%)",
    accent: "hsl(289.087 14.311% 15.113%)",
    accentForeground: "hsl(0 0% 98.026%)",
    destructive: "hsl(358.748 100% 69.558%)",
    destructiveForeground: "hsl(0 0% 9.053%)",
    border: "hsl(0 0% 100% / 10%)",
    input: "hsl(0 0% 100% / 15%)",
    ring: "hsl(293.323 7.971% 44.709%)",
    chart1: "hsl(210.694 100% 77.83%)",
    chart2: "hsl(216.256 100% 58.467%)",
    chart3: "hsl(221.337 97.063% 53.498%)",
    chart4: "hsl(225.345 84.095% 48.984%)",
    chart5: "hsl(227.099 75.743% 41.135%)",
    sidebar: "hsl(292.502 15.605% 10.172%)",
    sidebarForeground: "hsl(0 0% 98.026%)",
    sidebarPrimary: "hsl(144.058 100% 39.358%)",
    sidebarPrimaryForeground: "hsl(138.459 76.514% 96.68%)",
    sidebarAccent: "hsl(289.087 14.311% 15.113%)",
    sidebarAccentForeground: "hsl(0 0% 98.026%)",
    sidebarBorder: "hsl(0 0% 100% / 10%)",
    sidebarRing: "hsl(293.323 7.971% 44.709%)",
    radius: "0.45rem",
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
