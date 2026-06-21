# useDebounceValue
Custom hook that returns a debounced version of the provided value, along with a function to update it.
## Usage
```
import { useDebounceValue } from 'usehooks-ts'

export default function Component({ defaultValue = 'John' }) {
  const [debouncedValue, setValue] = useDebounceValue(defaultValue, 500)

  return (
    <div>
      <p>Debounced value: {debouncedValue}</p>

      <input
        type="text"
        defaultValue={defaultValue}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
}
```
## API
▸ useDebounceValue < T >( initialValue , delay , options? ): [ T , DebouncedState <( value : T ) => void >]
Custom hook that returns a debounced version of the provided value, along with a function to update it.
#### Type parameters
| Name | Description |
| --- | --- |
| T | The type of the value. |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| initialValue | T | () => T | The value to be debounced. |
| delay | number | The delay in milliseconds before the value is updated (default is 500ms). |
| options? | UseDebounceValueOptions < T > | Optional configurations for the debouncing behavior. |
#### Returns
[ T , DebouncedState <( value : T ) => void >]
An array containing the debounced value and the function to update it.
### Type aliases
Ƭ UseDebounceValueOptions < T >: Object
Hook options.
#### Type parameters
| Name | Description |
| --- | --- |
| T | The type of the value. |
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| equalityFn? | ( left : T , right : T ) => boolean | A function to determine if the value has changed. Defaults to a function that checks if the value is strictly equal to the previous value. |
| leading? | boolean | Determines whether the function should be invoked on the leading edge of the timeout. Default ts false |
| maxWait? | number | The maximum time the specified function is allowed to be delayed before it is invoked. |
| trailing? | boolean | Determines whether the function should be invoked on the trailing edge of the timeout. Default ts false |
## Hook
```
import { useRef, useState } from 'react'

import type { DebouncedState } from '../useDebounceCallback'
import { useDebounceCallback } from 'usehooks-ts'

type UseDebounceValueOptions<T> = {
  leading?: boolean
  trailing?: boolean
  maxWait?: number
  equalityFn?: (left: T, right: T) => boolean
}

export function useDebounceValue<T>(
  initialValue: T | (() => T),
  delay: number,
  options?: UseDebounceValueOptions<T>,
): [T, DebouncedState<(value: T) => void>] {
  const eq = options?.equalityFn ?? ((left: T, right: T) => left === right)
  const unwrappedInitialValue =
    initialValue instanceof Function ? initialValue() : initialValue
  const [debouncedValue, setDebouncedValue] = useState<T>(unwrappedInitialValue)
  const previousValueRef = useRef<T | undefined>(unwrappedInitialValue)

  const updateDebouncedValue = useDebounceCallback(
    setDebouncedValue,
    delay,
    options,
  )

  // Update the debounced value if the initial value changes
  if (!eq(previousValueRef.current as T, unwrappedInitialValue)) {
    updateDebouncedValue(unwrappedInitialValue)
    previousValueRef.current = unwrappedInitialValue
  }

  return [debouncedValue, updateDebouncedValue]
}
```