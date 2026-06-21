# useIntersectionObserver
Custom hook that tracks the intersection of a DOM element with its containing element or the viewport using the Intersection Observer API .
## Usage
```
import { useIntersectionObserver } from 'usehooks-ts'

const Section = (props: { title: string }) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  console.log(`Render Section ${props.title}`, {
    isIntersecting,
  })

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        border: '1px dashed #000',
        fontSize: '2rem',
      }}
    >
      <div style={{ margin: 'auto' }}>{props.title}</div>
    </div>
  )
}

export default function Component() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Section key={index + 1} title={`${index + 1}`} />
      ))}
    </>
  )
}
```
## API
▸ useIntersectionObserver ( options? ): IntersectionReturn
Custom hook that tracks the intersection of a DOM element with its containing element or the viewport using the Intersection Observer API .
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options | UseIntersectionObserverOptions | The options for the Intersection Observer. |
#### Returns
IntersectionReturn
The ref callback, a boolean indicating if the element is intersecting, and the intersection observer entry.
### Type aliases
Ƭ IntersectionReturn : [( node? : Element | null ) => void , boolean , IntersectionObserverEntry | undefined ] & { entry? : IntersectionObserverEntry ; isIntersecting : boolean ; ref : ( node? : Element | null ) => void }
The return type of the useIntersectionObserver hook.
Supports both tuple and object destructing.
Param
The ref callback function.
Param
A boolean indicating if the element is intersecting.
Param
The intersection observer Entry.
Ƭ UseIntersectionObserverOptions : Object
Represents the options for configuring the Intersection Observer.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| freezeOnceVisible? | boolean | If true, freezes the intersection state once the element becomes visible. Default ts false |
| initialIsIntersecting? | boolean | The initial state of the intersection. Default ts false |
| onChange? | ( isIntersecting : boolean , entry : IntersectionObserverEntry ) => void | A callback function to be invoked when the intersection state changes. Default ts undefined |
| root? | Element | Document | null | The element that is used as the viewport for checking visibility of the target. Default ts null |
| rootMargin? | string | A margin around the root. Default ts '0%' |
| threshold? | number | number [] | A threshold indicating the percentage of the target's visibility needed to trigger the callback. Default ts 0 |
## Hook
```
import { useEffect, useRef, useState } from 'react'

type State = {
  isIntersecting: boolean
  entry?: IntersectionObserverEntry
}

type UseIntersectionObserverOptions = {
  root?: Element | Document | null
  rootMargin?: string
  threshold?: number | number[]
  freezeOnceVisible?: boolean
  onChange?: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void
  initialIsIntersecting?: boolean
}

type IntersectionReturn = [
  (node?: Element | null) => void,
  boolean,
  IntersectionObserverEntry | undefined,
] & {
  ref: (node?: Element | null) => void
  isIntersecting: boolean
  entry?: IntersectionObserverEntry
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
  initialIsIntersecting = false,
  onChange,
}: UseIntersectionObserverOptions = {}): IntersectionReturn {
  const [ref, setRef] = useState<Element | null>(null)

  const [state, setState] = useState<State>(() => ({
    isIntersecting: initialIsIntersecting,
    entry: undefined,
  }))

  const callbackRef = useRef<UseIntersectionObserverOptions['onChange']>()

  callbackRef.current = onChange

  const frozen = state.entry?.isIntersecting && freezeOnceVisible

  useEffect(() => {
    // Ensure we have a ref to observe
    if (!ref) return

    // Ensure the browser supports the Intersection Observer API
    if (!('IntersectionObserver' in window)) return

    // Skip if frozen
    if (frozen) return

    let unobserve: (() => void) | undefined

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        const thresholds = Array.isArray(observer.thresholds)
          ? observer.thresholds
          : [observer.thresholds]

        entries.forEach(entry => {
          const isIntersecting =
            entry.isIntersecting &&
            thresholds.some(threshold => entry.intersectionRatio >= threshold)

          setState({ isIntersecting, entry })

          if (callbackRef.current) {
            callbackRef.current(isIntersecting, entry)
          }

          if (isIntersecting && freezeOnceVisible && unobserve) {
            unobserve()
            unobserve = undefined
          }
        })
      },
      { threshold, root, rootMargin },
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    ref,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
    freezeOnceVisible,
  ])

  // ensures that if the observed element changes, the intersection observer is reinitialized
  const prevRef = useRef<Element | null>(null)

  useEffect(() => {
    if (
      !ref &&
      state.entry?.target &&
      !freezeOnceVisible &&
      !frozen &&
      prevRef.current !== state.entry.target
    ) {
      prevRef.current = state.entry.target
      setState({ isIntersecting: initialIsIntersecting, entry: undefined })
    }
  }, [ref, state.entry, freezeOnceVisible, frozen, initialIsIntersecting])

  const result = [
    setRef,
    !!state.isIntersecting,
    state.entry,
  ] as IntersectionReturn

  // Support object destructuring, by adding the specific values.
  result.ref = result[0]
  result.isIntersecting = result[1]
  result.entry = result[2]

  return result
}
```