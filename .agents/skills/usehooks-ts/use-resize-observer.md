# useResizeObserver
Custom hook that observes the size of an element using the ResizeObserver API .
## Usage
```
import { useRef, useState } from 'react'

import { useDebounceCallback, useResizeObserver } from 'usehooks-ts'

type Size = {
  width?: number
  height?: number
}

export default function Component() {
  const ref = useRef<HTMLDivElement>(null)
  const { width = 0, height = 0 } = useResizeObserver({
    ref,
    box: 'border-box',
  })

  return (
    <div ref={ref} style={{ border: '1px solid palevioletred', width: '100%' }}>
      {width} x {height}
    </div>
  )
}

export function WithDebounce() {
  const ref = useRef<HTMLDivElement>(null)
  const [{ width, height }, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })

  const onResize = useDebounceCallback(setSize, 200)

  useResizeObserver({
    ref,
    onResize,
  })

  return (
    <div
      ref={ref}
      style={{
        border: '1px solid palevioletred',
        width: '100%',
        resize: 'both',
        overflow: 'auto',
        maxWidth: '100%',
      }}
    >
      debounced: {width} x {height}
    </div>
  )
}
```
## API
▸ useResizeObserver < T >( options ): Size
Custom hook that observes the size of an element using the ResizeObserver API .
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| T | extends HTMLElement = HTMLElement | The type of the element to observe. |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options | UseResizeObserverOptions < T > | The options for the ResizeObserver. |
#### Returns
Size
- The size of the observed element.
### Type aliases
Ƭ Size : Object
The size of the observed element.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| height | number | undefined | The height of the observed element. |
| width | number | undefined | The width of the observed element. |
Ƭ UseResizeObserverOptions < T >: Object
The options for the ResizeObserver.
#### Type parameters
| Name | Type |
| --- | --- |
| T | extends HTMLElement = HTMLElement |
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| box? | "border-box" | "content-box" | "device-pixel-content-box" | The box model to use for the ResizeObserver. Default ts 'content-box' |
| onResize? | ( size : Size ) => void | When using onResize , the hook doesn't re-render on element size changes; it delegates handling to the provided callback. Default ts undefined |
| ref | RefObject < T > | The ref of the element to observe. |
## Hook
```
import { useEffect, useRef, useState } from 'react'

import type { RefObject } from 'react'

import { useIsMounted } from 'usehooks-ts'

type Size = {
  width: number | undefined
  height: number | undefined
}

type UseResizeObserverOptions<T extends HTMLElement = HTMLElement> = {
  ref: RefObject<T>
  onResize?: (size: Size) => void
  box?: 'border-box' | 'content-box' | 'device-pixel-content-box'
}

const initialSize: Size = {
  width: undefined,
  height: undefined,
}

export function useResizeObserver<T extends HTMLElement = HTMLElement>(
  options: UseResizeObserverOptions<T>,
): Size {
  const { ref, box = 'content-box' } = options
  const [{ width, height }, setSize] = useState<Size>(initialSize)
  const isMounted = useIsMounted()
  const previousSize = useRef<Size>({ ...initialSize })
  const onResize = useRef<((size: Size) => void) | undefined>(undefined)
  onResize.current = options.onResize

  useEffect(() => {
    if (!ref.current) return

    if (typeof window === 'undefined' || !('ResizeObserver' in window)) return

    const observer = new ResizeObserver(([entry]) => {
      const boxProp =
        box === 'border-box'
          ? 'borderBoxSize'
          : box === 'device-pixel-content-box'
            ? 'devicePixelContentBoxSize'
            : 'contentBoxSize'

      const newWidth = extractSize(entry, boxProp, 'inlineSize')
      const newHeight = extractSize(entry, boxProp, 'blockSize')

      const hasChanged =
        previousSize.current.width !== newWidth ||
        previousSize.current.height !== newHeight

      if (hasChanged) {
        const newSize: Size = { width: newWidth, height: newHeight }
        previousSize.current.width = newWidth
        previousSize.current.height = newHeight

        if (onResize.current) {
          onResize.current(newSize)
        } else {
          if (isMounted()) {
            setSize(newSize)
          }
        }
      }
    })

    observer.observe(ref.current, { box })

    return () => {
      observer.disconnect()
    }
  }, [box, ref, isMounted])

  return { width, height }
}

type BoxSizesKey = keyof Pick<
  ResizeObserverEntry,
  'borderBoxSize' | 'contentBoxSize' | 'devicePixelContentBoxSize'
>

function extractSize(
  entry: ResizeObserverEntry,
  box: BoxSizesKey,
  sizeType: keyof ResizeObserverSize,
): number | undefined {
  if (!entry[box]) {
    if (box === 'contentBoxSize') {
      return entry.contentRect[sizeType === 'inlineSize' ? 'width' : 'height']
    }
    return undefined
  }

  return Array.isArray(entry[box])
    ? entry[box][0][sizeType]
    : // @ts-ignore Support Firefox's non-standard behavior
      (entry[box][sizeType] as number)
}
```