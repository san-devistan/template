// oxlint-disable-next-line import/no-unassigned-import -- Reanimated logger must be configured before app modules evaluate.
import "@/lib/reanimated-logger"
import { useColorScheme } from "@/hooks/use-color-scheme"
import { interFonts } from "@/lib/fonts"
import { NAV_THEME } from "@/lib/theme"
import { ThemeProvider } from "@react-navigation/native"
import { PortalHost } from "@rn-primitives/portal"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect, type ReactNode } from "react"
import { View } from "react-native"

// oxlint-disable-next-line import/no-relative-parent-imports, import/no-unassigned-import -- Expo Router and NativeWind require the root global CSS side-effect import.
import "../global.css"

void SplashScreen.preventAutoHideAsync()

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL
const convex = convexUrl
  ? new ConvexReactClient(convexUrl, {
      unsavedChangesWarning: false,
    })
  : null

let didWarnMissingConvexUrl = false
let didWarnFontLoadError = false

function warnMissingConvexUrl() {
  if (didWarnMissingConvexUrl) {
    return
  }

  didWarnMissingConvexUrl = true
  console.warn(
    "EXPO_PUBLIC_CONVEX_URL is not set. Convex is disabled for apps/mobile; set it when this app needs the Convex backend."
  )
}

function warnFontLoadError(error: Error) {
  if (didWarnFontLoadError) {
    return
  }

  didWarnFontLoadError = true
  console.warn(
    "Inter failed to load; mobile will fall back to system fonts.",
    error
  )
}

if (!convex) {
  warnMissingConvexUrl()
}

const stackScreenOptions = { headerShown: false } as const

function OptionalConvexProvider({ children }: { children: ReactNode }) {
  if (!convex) {
    return <>{children}</>
  }

  return <ConvexProvider client={convex}>{children}</ConvexProvider>
}

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? "light"
  const [fontsLoaded, fontLoadError] = useFonts(interFonts)

  useEffect(() => {
    if (fontLoadError) {
      warnFontLoadError(fontLoadError)
    }

    if (fontsLoaded || fontLoadError) {
      void SplashScreen.hideAsync()
    }
  }, [fontLoadError, fontsLoaded])

  if (!fontsLoaded && !fontLoadError) {
    return null
  }

  return (
    <OptionalConvexProvider>
      <ThemeProvider value={NAV_THEME[colorScheme]}>
        <View
          className={
            colorScheme === "dark"
              ? "dark flex-1 bg-background"
              : "flex-1 bg-background"
          }
        >
          <Stack screenOptions={stackScreenOptions} />
          {/* oxlint-disable-next-line react/style-prop-object -- Expo StatusBar accepts string style values. */}
          <StatusBar style="auto" />
          <PortalHost />
        </View>
      </ThemeProvider>
    </OptionalConvexProvider>
  )
}
