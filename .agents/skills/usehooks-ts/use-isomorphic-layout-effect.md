# useIsomorphicLayoutEffect
Custom hook that uses either useLayoutEffect or useEffect based on the environment (client-side or server-side).
## Usage
```
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

export default function Component() {
  useIsomorphicLayoutEffect(() => {
    console.log(
      "In the browser, I'm an `useLayoutEffect`, but in SSR, I'm an `useEffect`.",
    )
  }, [])

  return <p>Hello, world</p>
}
```
## API
▸ useIsomorphicLayoutEffect ( effect , deps? ): void
Custom hook that uses either useLayoutEffect or useEffect based on the environment (client-side or server-side).
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| effect | EffectCallback | The effect function to be executed. |
| deps? | DependencyList | - |
#### Returns
void
## Hook
```
import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
```