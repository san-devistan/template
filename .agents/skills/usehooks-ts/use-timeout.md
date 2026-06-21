# useTimeout
Custom hook that handles timeouts in React components using the setTimeout API .
## Usage
```
import { useState } from 'react'

import { useTimeout } from 'usehooks-ts'

export default function Component() {
  const [visible, setVisible] = useState(true)

  const hide = () => {
    setVisible(false)
  }

  useTimeout(hide, 5000)

  return (
    <div>
      <p>
        {visible
          ? "I'm visible for 5000ms"
          : 'You can no longer see this content'}
      </p>
    </div>
  )
}
```
## API
▸ useTimeout ( callback , delay ): void
Custom hook that handles timeouts in React components using the setTimeout API .
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| callback | () => void | The function to be executed when the timeout elapses. |
| delay | null | number | The duration (in milliseconds) for the timeout. Set to null to clear the timeout. |
#### Returns
void
This hook does not return anything.
## Hook
```
import { useEffect, useRef } from 'react'

import { useIsomorphicLayoutEffect } from 'usehooks-ts'

export function useTimeout(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return
    }

    const id = setTimeout(() => {
      savedCallback.current()
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [delay])
}
```