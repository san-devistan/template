# useIsClient
Custom hook that determines if the code is running on the client side (in the browser).
## Usage
```
import { useIsClient } from 'usehooks-ts'

export default function Component() {
  const isClient = useIsClient()

  return <div>{isClient ? 'Client' : 'server'}</div>
}
```
## API
▸ useIsClient (): boolean
Custom hook that determines if the code is running on the client side (in the browser).
#### Returns
boolean
A boolean value indicating whether the code is running on the client side.
## Hook
```
import { useEffect, useState } from 'react'

export function useIsClient() {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return isClient
}
```