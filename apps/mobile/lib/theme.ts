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
    foreground: "hsl(199.993 14.105% 4.144%)",
    card: "hsl(0 0% 100%)",
    cardForeground: "hsl(199.993 14.105% 4.144%)",
    popover: "hsl(0 0% 100%)",
    popoverForeground: "hsl(199.993 14.105% 4.144%)",
    primary: "hsl(192.778 100% 29.163%)",
    primaryForeground: "hsl(183.159 99.918% 96.249%)",
    secondary: "hsl(239.992 3.51% 95.786%)",
    secondaryForeground: "hsl(240.017 6.031% 9.981%)",
    muted: "hsl(179.979 7.289% 94.963%)",
    mutedForeground: "hsl(191.427 9.223% 44.494%)",
    accent: "hsl(179.979 7.289% 94.963%)",
    accentForeground: "hsl(197.176 12.89% 10.031%)",
    destructive: "hsl(357.206 100% 45.323%)",
    destructiveForeground: "hsl(0 0% 98.026%)",
    border: "hsl(191.982 10.779% 89.95%)",
    input: "hsl(191.982 10.779% 89.95%)",
    ring: "hsl(192.011 8.044% 64.13%)",
    chart1: "hsl(142.656 81.247% 71.39%)",
    chart2: "hsl(144.058 100% 39.358%)",
    chart3: "hsl(142.293 100% 32.565%)",
    chart4: "hsl(144.684 100% 25.5%)",
    chart5: "hsl(147.718 97.154% 20.364%)",
    sidebar: "hsl(179.979 19.51% 98.106%)",
    sidebarForeground: "hsl(199.993 14.105% 4.144%)",
    sidebarPrimary: "hsl(192.321 100% 36.129%)",
    sidebarPrimaryForeground: "hsl(183.159 99.918% 96.249%)",
    sidebarAccent: "hsl(179.979 7.289% 94.963%)",
    sidebarAccentForeground: "hsl(197.176 12.89% 10.031%)",
    sidebarBorder: "hsl(191.982 10.779% 89.95%)",
    sidebarRing: "hsl(192.011 8.044% 64.13%)",
    radius: "0.625rem",
  },
  dark: {
    background: "hsl(199.993 14.105% 4.144%)",
    foreground: "hsl(179.979 19.51% 98.106%)",
    card: "hsl(197.176 12.89% 10.031%)",
    cardForeground: "hsl(179.979 19.51% 98.106%)",
    popover: "hsl(197.176 12.89% 10.031%)",
    popoverForeground: "hsl(179.979 19.51% 98.106%)",
    primary: "hsl(192.742 100% 23.562%)",
    primaryForeground: "hsl(183.159 99.918% 96.249%)",
    secondary: "hsl(240.047 4.043% 15.933%)",
    secondaryForeground: "hsl(0 0% 98.026%)",
    muted: "hsl(193.352 12.188% 15.086%)",
    mutedForeground: "hsl(192.011 8.044% 64.13%)",
    accent: "hsl(193.352 12.188% 15.086%)",
    accentForeground: "hsl(179.979 19.51% 98.106%)",
    destructive: "hsl(358.748 100% 69.558%)",
    destructiveForeground: "hsl(0 0% 9.053%)",
    border: "hsl(0 0% 100% / 10%)",
    input: "hsl(0 0% 100% / 15%)",
    ring: "hsl(191.427 9.223% 44.494%)",
    chart1: "hsl(142.656 81.247% 71.39%)",
    chart2: "hsl(144.058 100% 39.358%)",
    chart3: "hsl(142.293 100% 32.565%)",
    chart4: "hsl(144.684 100% 25.5%)",
    chart5: "hsl(147.718 97.154% 20.364%)",
    sidebar: "hsl(197.176 12.89% 10.031%)",
    sidebarForeground: "hsl(179.979 19.51% 98.106%)",
    sidebarPrimary: "hsl(189.48 100% 42.867%)",
    sidebarPrimaryForeground: "hsl(196.695 85.439% 14.551%)",
    sidebarAccent: "hsl(193.352 12.188% 15.086%)",
    sidebarAccentForeground: "hsl(179.979 19.51% 98.106%)",
    sidebarBorder: "hsl(0 0% 100% / 10%)",
    sidebarRing: "hsl(191.427 9.223% 44.494%)",
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
