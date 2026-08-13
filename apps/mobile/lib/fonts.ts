import { FONT_FAMILY, TYPOGRAPHY } from "@/lib/theme"
import {
  JetBrainsMono_400Regular,
  JetBrainsMono_400Regular_Italic,
  JetBrainsMono_500Medium,
  JetBrainsMono_600SemiBold,
  JetBrainsMono_700Bold,
  JetBrainsMono_800ExtraBold,
} from "@expo-google-fonts/jetbrains-mono"
import {
  Oxanium_400Regular,
  Oxanium_500Medium,
  Oxanium_600SemiBold,
  Oxanium_700Bold,
  Oxanium_800ExtraBold,
} from "@expo-google-fonts/oxanium"
import type { StyleProp, TextStyle } from "react-native"

export const mobileFonts = {
  Oxanium_400Regular,
  Oxanium_500Medium,
  Oxanium_600SemiBold,
  Oxanium_700Bold,
  Oxanium_800ExtraBold,
  JetBrainsMono_400Regular,
  JetBrainsMono_400Regular_Italic,
  JetBrainsMono_500Medium,
  JetBrainsMono_600SemiBold,
  JetBrainsMono_700Bold,
  JetBrainsMono_800ExtraBold,
}

const MOBILE_TEXT_STYLES = {
  regular: { fontFamily: TYPOGRAPHY.body.fontFamily },
  regularItalic: { fontFamily: FONT_FAMILY.regularItalic },
  medium: { fontFamily: TYPOGRAPHY.label.fontFamily },
  semibold: { fontFamily: FONT_FAMILY.semibold },
  bold: { fontFamily: FONT_FAMILY.bold },
  extrabold: { fontFamily: FONT_FAMILY.extrabold },
  heading: { fontFamily: FONT_FAMILY.heading },
  headingItalic: { fontFamily: FONT_FAMILY.headingItalic },
  headingMedium: { fontFamily: FONT_FAMILY.headingMedium },
  headingSemibold: { fontFamily: TYPOGRAPHY["heading-sm"].fontFamily },
  headingBold: { fontFamily: FONT_FAMILY.headingBold },
  headingExtrabold: { fontFamily: TYPOGRAPHY["heading-lg"].fontFamily },
} satisfies Record<string, TextStyle>

const BODY_WEIGHT_CLASSES = [
  ["font-extrabold", MOBILE_TEXT_STYLES.extrabold],
  ["font-bold", MOBILE_TEXT_STYLES.bold],
  ["font-semibold", MOBILE_TEXT_STYLES.semibold],
  ["font-medium", MOBILE_TEXT_STYLES.medium],
] as const

const HEADING_WEIGHT_CLASSES = [
  ["font-extrabold", MOBILE_TEXT_STYLES.headingExtrabold],
  ["font-bold", MOBILE_TEXT_STYLES.headingBold],
  ["font-semibold", MOBILE_TEXT_STYLES.headingSemibold],
  ["font-medium", MOBILE_TEXT_STYLES.headingMedium],
] as const

function hasClass(className: string | undefined, token: string) {
  return className?.split(/\s+/u).includes(token) ?? false
}

export function getMobileTextStyle(className: string | undefined) {
  if (hasClass(className, "font-mono") || hasClass(className, "font-serif")) {
    return undefined
  }

  if (hasClass(className, "font-heading")) {
    if (hasClass(className, "italic")) {
      return MOBILE_TEXT_STYLES.headingItalic
    }

    for (const [fontClassName, textStyle] of HEADING_WEIGHT_CLASSES) {
      if (hasClass(className, fontClassName)) {
        return textStyle
      }
    }

    return MOBILE_TEXT_STYLES.heading
  }

  if (hasClass(className, "italic")) {
    return MOBILE_TEXT_STYLES.regularItalic
  }

  for (const [fontClassName, textStyle] of BODY_WEIGHT_CLASSES) {
    if (hasClass(className, fontClassName)) {
      return textStyle
    }
  }

  return MOBILE_TEXT_STYLES.regular
}

export function withMobileTextStyle(
  className: string | undefined,
  style: StyleProp<TextStyle>
): StyleProp<TextStyle> {
  const mobileTextStyle = getMobileTextStyle(className)

  if (!mobileTextStyle) {
    return style
  }

  if (!style) {
    return mobileTextStyle
  }

  return [mobileTextStyle, style]
}
