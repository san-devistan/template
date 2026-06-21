# useWindowSize
Custom hook that tracks the size of the window.
## Usage
```
import { useWindowSize } from 'usehooks-ts'

export default function Component() {
  const { width = 0, height = 0 } = useWindowSize()

  return (
    <div>
      The current window dimensions are:{' '}
      <code>{JSON.stringify({ width, height })}</code>
    </div>
  )
}
```
## API
▸ useWindowSize ( options ): WindowSize
Custom hook that tracks the size of the window.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options | UseWindowSizeOptions < false > | The options for customizing the behavior of the hook (optional). |
#### Returns
WindowSize
An object containing the width and height of the window.
▸ useWindowSize ( options? ): WindowSize < number >
Custom hook that tracks the size of the window.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options? | Partial < UseWindowSizeOptions < true >> | The options for customizing the behavior of the hook (optional). |
#### Returns
WindowSize < number >
An object containing the width and height of the window.
### Type aliases
Ƭ UseWindowSizeOptions < InitializeWithValue >: Object
Hook options.
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| InitializeWithValue | extends boolean | undefined | If true (default), the hook will initialize reading the window size. In SSR, you should set it to false , returning undefined initially. |
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| debounceDelay? | number | The delay in milliseconds before the state is updated (disabled by default for retro-compatibility). Default ts undefined |
| initializeWithValue | InitializeWithValue | If true (default), the hook will initialize reading the window size. In SSR, you should set it to false , returning undefined initially. Default ts true |
Ƭ WindowSize < T >: Object
Represent the dimension of the window.
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| T | extends number | undefined = number | undefined | The type of the dimension (number or undefined). |
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| height | T | The height of the window. |
| width | T | The width of the window. |
## Hook
```
import { useState } from 'react'

import {
  useDebounceCallback,
  useEventListener,
  useIsomorphicLayoutEffect,
} from 'usehooks-ts'

type WindowSize<T extends number | undefined = number | undefined> = {
  width: T
  height: T
}

type UseWindowSizeOptions<InitializeWithValue extends boolean | undefined> = {
  initializeWithValue: InitializeWithValue
  debounceDelay?: number
}

const IS_SERVER = typeof window === 'undefined'

// SSR version of useWindowSize.
export function useWindowSize(options: UseWindowSizeOptions<false>): WindowSize
// CSR version of useWindowSize.
export function useWindowSize(
  options?: Partial<UseWindowSizeOptions<true>>,
): WindowSize<number>
export function useWindowSize(
  options: Partial<UseWindowSizeOptions<boolean>> = {},
): WindowSize | WindowSize<number> {
  let { initializeWithValue = true } = options
  if (IS_SERVER) {
    initializeWithValue = false
  }

  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    if (initializeWithValue) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
    return {
      width: undefined,
      height: undefined,
    }
  })

  const debouncedSetWindowSize = useDebounceCallback(
    setWindowSize,
    options.debounceDelay,
  )

  function handleSize() {
    const setSize = options.debounceDelay
      ? debouncedSetWindowSize
      : setWindowSize

    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEventListener('resize', handleSize)

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  return windowSize
}
```