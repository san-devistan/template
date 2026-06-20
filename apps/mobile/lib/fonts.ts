import {
  Inter_400Regular,
  Inter_400Regular_Italic,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter"
import type { StyleProp, TextStyle } from "react-native"

export const interFonts = {
  Inter_400Regular,
  Inter_400Regular_Italic,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
}

const INTER_FONT_FAMILY = {
  regular: "Inter_400Regular",
  regularItalic: "Inter_400Regular_Italic",
  medium: "Inter_500Medium",
  semibold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extrabold: "Inter_800ExtraBold",
} as const

const INTER_TEXT_STYLES = {
  regular: { fontFamily: INTER_FONT_FAMILY.regular },
  regularItalic: { fontFamily: INTER_FONT_FAMILY.regularItalic },
  medium: { fontFamily: INTER_FONT_FAMILY.medium },
  semibold: { fontFamily: INTER_FONT_FAMILY.semibold },
  bold: { fontFamily: INTER_FONT_FAMILY.bold },
  extrabold: { fontFamily: INTER_FONT_FAMILY.extrabold },
} satisfies Record<string, TextStyle>

const INTER_WEIGHT_CLASSES = [
  ["font-extrabold", INTER_TEXT_STYLES.extrabold],
  ["font-bold", INTER_TEXT_STYLES.bold],
  ["font-semibold", INTER_TEXT_STYLES.semibold],
  ["font-medium", INTER_TEXT_STYLES.medium],
] as const

function hasClass(className: string | undefined, token: string) {
  return className?.split(/\s+/u).includes(token) ?? false
}

export function getInterTextStyle(className: string | undefined) {
  if (hasClass(className, "font-mono") || hasClass(className, "font-serif")) {
    return undefined
  }

  if (hasClass(className, "italic")) {
    return INTER_TEXT_STYLES.regularItalic
  }

  for (const [fontClassName, textStyle] of INTER_WEIGHT_CLASSES) {
    if (hasClass(className, fontClassName)) {
      return textStyle
    }
  }

  return INTER_TEXT_STYLES.regular
}

export function withInterTextStyle(
  className: string | undefined,
  style: StyleProp<TextStyle>
): StyleProp<TextStyle> {
  const interTextStyle = getInterTextStyle(className)

  if (!interTextStyle) {
    return style
  }

  if (!style) {
    return interTextStyle
  }

  return [interTextStyle, style]
}
