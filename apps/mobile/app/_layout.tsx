// oxlint-disable-next-line import/no-unassigned-import -- Reanimated logger must be configured before app modules evaluate.
import "@/lib/reanimated-logger"
import { mobileFonts } from "@/lib/fonts"
import { NAV_THEME } from "@/lib/theme"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { ThemeProvider } from "expo-router/react-navigation"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { PanelUIProvider, useThemeMode } from "panelui-native"
import { useEffect, type ReactNode } from "react"

// oxlint-disable-next-line import/no-relative-parent-imports, import/no-unassigned-import -- Expo Router and Uniwind require the root global CSS side-effect import.
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
    "Mobile fonts failed to load; mobile will fall back to system fonts.",
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

function ThemedApp() {
  const { mode } = useThemeMode()

  return (
    <ThemeProvider value={NAV_THEME[mode]}>
      <Stack screenOptions={stackScreenOptions} />
      <StatusBar style={mode === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  )
}

export default function RootLayout() {
  const [fontsLoaded, fontLoadError] = useFonts(mobileFonts)

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
      <PanelUIProvider>
        <ThemedApp />
      </PanelUIProvider>
    </OptionalConvexProvider>
  )
}
