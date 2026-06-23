import { FONT_FAMILY, TYPOGRAPHY } from "@/lib/theme"
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

const INTER_TEXT_STYLES = {
  regular: { fontFamily: TYPOGRAPHY.body.fontFamily },
  regularItalic: { fontFamily: FONT_FAMILY.regularItalic },
  medium: { fontFamily: TYPOGRAPHY.label.fontFamily },
  semibold: { fontFamily: TYPOGRAPHY["heading-sm"].fontFamily },
  bold: { fontFamily: FONT_FAMILY.bold },
  extrabold: { fontFamily: TYPOGRAPHY["heading-lg"].fontFamily },
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
