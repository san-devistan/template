# useScreen
Custom hook that tracks the screen dimensions and properties.
## Usage
```
import { useScreen } from 'usehooks-ts'

export default function Component() {
  const screen = useScreen()

  return (
    <div>
      The current window dimensions are:{' '}
      <code>{JSON.stringify(screen, null, 2)}</code>
    </div>
  )
}
```
## API
▸ useScreen ( options ): Screen | undefined
Custom hook that tracks the screen dimensions and properties.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options | UseScreenOptions < false > | The options for customizing the behavior of the hook (optional). |
#### Returns
Screen | undefined
The current Screen object representing the screen dimensions and properties, or undefined if not available.
▸ useScreen ( options? ): Screen
Custom hook that tracks the screen dimensions and properties.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options? | Partial < UseScreenOptions < true >> | The options for customizing the behavior of the hook (optional). |
#### Returns
Screen
The current Screen object representing the screen dimensions and properties, or undefined if not available.
### Type aliases
Ƭ UseScreenOptions < InitializeWithValue >: Object
The hooks options.
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| InitializeWithValue | extends boolean | undefined | If true (default), the hook will initialize reading the screen dimensions. In SSR, you should set it to false , returning undefined initially. |
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| debounceDelay? | number | The delay in milliseconds before the state is updated (disabled by default for retro-compatibility). Default ts undefined |
| initializeWithValue | InitializeWithValue | If true (default), the hook will initialize reading the screen dimensions. In SSR, you should set it to false , returning undefined initially. Default ts true |
## Hook
```
import { useState } from 'react'

import {
  useDebounceCallback,
  useEventListener,
  useIsomorphicLayoutEffect,
} from 'usehooks-ts'

type UseScreenOptions<InitializeWithValue extends boolean | undefined> = {
  initializeWithValue: InitializeWithValue
  debounceDelay?: number
}

const IS_SERVER = typeof window === 'undefined'

// SSR version of useScreen.
export function useScreen(options: UseScreenOptions<false>): Screen | undefined
// CSR version of useScreen.
export function useScreen(options?: Partial<UseScreenOptions<true>>): Screen
export function useScreen(
  options: Partial<UseScreenOptions<boolean>> = {},
): Screen | undefined {
  let { initializeWithValue = true } = options
  if (IS_SERVER) {
    initializeWithValue = false
  }

  const readScreen = () => {
    if (IS_SERVER) {
      return undefined
    }
    return window.screen
  }

  const [screen, setScreen] = useState<Screen | undefined>(() => {
    if (initializeWithValue) {
      return readScreen()
    }
    return undefined
  })

  const debouncedSetScreen = useDebounceCallback(
    setScreen,
    options.debounceDelay,
  )

  // Handles the resize event of the window.
  function handleSize() {
    const newScreen = readScreen()
    const setSize = options.debounceDelay ? debouncedSetScreen : setScreen

    if (newScreen) {
      // Create a shallow clone to trigger a re-render (#280).
      const {
        width,
        height,
        availHeight,
        availWidth,
        colorDepth,
        orientation,
        pixelDepth,
      } = newScreen

      setSize({
        width,
        height,
        availHeight,
        availWidth,
        colorDepth,
        orientation,
        pixelDepth,
      })
    }
  }

  useEventListener('resize', handleSize)

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  return screen
}
```