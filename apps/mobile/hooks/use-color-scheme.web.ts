import { useSyncExternalStore } from "react"
import { Appearance, type ColorSchemeName } from "react-native"

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function subscribe(onStoreChange: () => void) {
  const subscription = Appearance.addChangeListener(onStoreChange)

  return () => subscription.remove()
}

function getSnapshot(): ColorSchemeName {
  return Appearance.getColorScheme()
}

function getServerSnapshot(): ColorSchemeName {
  return "light"
}
