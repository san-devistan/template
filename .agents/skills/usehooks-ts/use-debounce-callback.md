# useDebounceCallback
Custom hook that creates a debounced version of a callback function.
## Usage
```
import { useState } from 'react'

import { useDebounceCallback } from 'usehooks-ts'

export default function Component() {
  const [value, setValue] = useState('')

  const debounced = useDebounceCallback(setValue, 500)

  return (
    <div>
      <p>Debounced value: {value}</p>

      <input
        type="text"
        defaultValue={value}
        onChange={event => debounced(event.target.value)}
      />
    </div>
  )
}
```
## API
▸ useDebounceCallback < T >( func , delay? , options? ): DebouncedState < T >
Custom hook that creates a debounced version of a callback function.
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| T | extends (... args : any ) => ReturnType < T > | Type of the original callback function. |
#### Parameters
| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| func | T | undefined | The callback function to be debounced. |
| delay | number | 500 | The delay in milliseconds before the callback is invoked (default is 500 milliseconds). |
| options? | DebounceOptions | undefined | Options to control the behavior of the debounced function. |
#### Returns
DebouncedState < T >
A debounced version of the original callback along with control functions.
### Type aliases
Ƭ ControlFunctions : Object
Functions to manage a debounced callback.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| cancel | () => void | Cancels pending function invocations. |
| flush | () => void | Immediately invokes pending function invocations. |
| isPending | () => boolean | Checks if there are any pending function invocations. |
Ƭ DebounceOptions : Object
Configuration options for controlling the behavior of the debounced function.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| leading? | boolean | Determines whether the function should be invoked on the leading edge of the timeout. Default ts false |
| maxWait? | number | The maximum time the specified function is allowed to be delayed before it is invoked. |
| trailing? | boolean | Determines whether the function should be invoked on the trailing edge of the timeout. Default ts false |
Ƭ DebouncedState < T >: (... args : Parameters < T >) => ReturnType < T > | undefined & ControlFunctions
Represents the state and control functions of a debounced callback. Subsequent calls to the debounced function return the result of the last invocation. Note: If there are no previous invocations, the result will be undefined. Ensure proper handling in your code.
#### Type parameters
| Name | Type |
| --- | --- |
| T | extends (... args : any ) => ReturnType < T > |
## Hook
```
import { useEffect, useMemo, useRef } from 'react'

import debounce from 'lodash.debounce'

import { useUnmount } from 'usehooks-ts'

type DebounceOptions = {
  leading?: boolean
  trailing?: boolean
  maxWait?: number
}

type ControlFunctions = {
  cancel: () => void
  flush: () => void
  isPending: () => boolean
}

export type DebouncedState<T extends (...args: any) => ReturnType<T>> = ((
  ...args: Parameters<T>
) => ReturnType<T> | undefined) &
  ControlFunctions

export function useDebounceCallback<T extends (...args: any) => ReturnType<T>>(
  func: T,
  delay = 500,
  options?: DebounceOptions,
): DebouncedState<T> {
  const debouncedFunc = useRef<ReturnType<typeof debounce>>()

  useUnmount(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel()
    }
  })

  const debounced = useMemo(() => {
    const debouncedFuncInstance = debounce(func, delay, options)

    const wrappedFunc: DebouncedState<T> = (...args: Parameters<T>) => {
      return debouncedFuncInstance(...args)
    }

    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel()
    }

    wrappedFunc.isPending = () => {
      return !!debouncedFunc.current
    }

    wrappedFunc.flush = () => {
      return debouncedFuncInstance.flush()
    }

    return wrappedFunc
  }, [func, delay, options])

  // Update the debounced function ref whenever func, wait, or options change
  useEffect(() => {
    debouncedFunc.current = debounce(func, delay, options)
  }, [func, delay, options])

  return debounced
}
```