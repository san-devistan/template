# useMediaQuery
Custom hook that tracks the state of a media query using the Match Media API .
## Usage
```
import { useMediaQuery } from 'usehooks-ts'

export default function Component() {
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div>
      {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
    </div>
  )
}
```
## API
▸ useMediaQuery ( query , options? ): boolean
Custom hook that tracks the state of a media query using the Match Media API .
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| query | string | The media query to track. |
| options? | UseMediaQueryOptions | The options for customizing the behavior of the hook (optional). |
#### Returns
boolean
The current state of the media query (true if the query matches, false otherwise).
### Type aliases
Ƭ UseMediaQueryOptions : Object
Hook options.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| defaultValue? | boolean | The default value to return if the hook is being run on the server. Default ts false |
| initializeWithValue? | boolean | If true (default), the hook will initialize reading the media query. In SSR, you should set it to false , returning options.defaultValue or false initially. Default ts true |
## Hook
```
import { useState } from 'react'

import { useIsomorphicLayoutEffect } from 'usehooks-ts'

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === 'undefined'

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {},
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [query])

  return matches
}
```