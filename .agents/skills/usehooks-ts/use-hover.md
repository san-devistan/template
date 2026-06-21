# useHover
Custom hook that tracks whether a DOM element is being hovered over.
## Usage
```
import { useRef } from 'react'

import { useHover } from 'usehooks-ts'

export default function Component() {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <div ref={hoverRef}>
      {`The current div is ${isHover ? `hovered` : `unhovered`}`}
    </div>
  )
}
```
## API
▸ useHover < T >( elementRef ): boolean
Custom hook that tracks whether a DOM element is being hovered over.
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| T | extends HTMLElement = HTMLElement | The type of the DOM element. Defaults to HTMLElement . |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| elementRef | RefObject < T > | The ref object for the DOM element to track. |
#### Returns
boolean
A boolean value indicating whether the element is being hovered over.
## Hook
```
import { useState } from 'react'

import type { RefObject } from 'react'

import { useEventListener } from 'usehooks-ts'

export function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
): boolean {
  const [value, setValue] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setValue(true)
  }
  const handleMouseLeave = () => {
    setValue(false)
  }

  useEventListener('mouseenter', handleMouseEnter, elementRef)
  useEventListener('mouseleave', handleMouseLeave, elementRef)

  return value
}
```