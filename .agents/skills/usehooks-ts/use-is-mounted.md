# useIsMounted
Custom hook that determines if the component is currently mounted.
## Usage
```
import { useEffect, useState } from 'react'

import { useIsMounted } from 'usehooks-ts'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

function Child() {
  const [data, setData] = useState('loading')
  const isMounted = useIsMounted()

  // simulate an api call and update state
  useEffect(() => {
    void delay(3000).then(() => {
      if (isMounted()) setData('OK')
    })
  }, [isMounted])

  return <p>{data}</p>
}

export default function Component() {
  const [isVisible, setVisible] = useState<boolean>(false)

  const toggleVisibility = () => {
    setVisible(state => !state)
  }

  return (
    <>
      <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button>

      {isVisible && <Child />}
    </>
  )
}
```
## API
▸ useIsMounted (): () => boolean
Custom hook that determines if the component is currently mounted.
#### Returns
fn
A function that returns a boolean value indicating whether the component is mounted.
▸ (): boolean
##### Returns
boolean
## Hook
```
import { useCallback, useEffect, useRef } from 'react'

export function useIsMounted(): () => boolean {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return useCallback(() => isMounted.current, [])
}
```