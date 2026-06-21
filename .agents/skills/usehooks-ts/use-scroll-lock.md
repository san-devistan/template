# useScrollLock
A custom hook that locks and unlocks scroll.
## Usage
```
import { useScrollLock } from 'usehooks-ts'

// Example 1: Auto lock the scroll of the body element when the modal mounts
export default function Modal() {
  useScrollLock()
  return <div>Modal</div>
}

// Example 2: Manually lock and unlock the scroll for a specific target
export function App() {
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: '#scrollable',
  })

  return (
    <>
      <div id="scrollable" style={{ maxHeight: '50vh', overflow: 'scroll' }}>
        {['red', 'blue', 'green'].map(color => (
          <div key={color} style={{ backgroundColor: color, height: '30vh' }} />
        ))}
      </div>

      <div style={{ gap: 16, display: 'flex' }}>
        <button onClick={lock}>Lock</button>
        <button onClick={unlock}>Unlock</button>
      </div>
    </>
  )
}
```
## API
▸ useScrollLock ( options? ): UseScrollLockReturn
A custom hook that locks and unlocks scroll.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options? | UseScrollLockOptions | Options to configure the hook, by default it will lock the scroll automatically. |
#### Returns
UseScrollLockReturn
- An object containing the lock and unlock functions.
### Type aliases
Ƭ UseScrollLockOptions : Object
Hook options.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| autoLock? | boolean | Whether to lock the scroll initially. Default ts true |
| lockTarget? | HTMLElement | string | The target element to lock the scroll (default is the body element). Default ts document.body |
| widthReflow? | boolean | Whether to prevent width reflow when locking the scroll. Default ts true |
Ƭ UseScrollLockReturn : Object
Hook return type.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| isLocked | boolean | Whether the scroll is locked. |
| lock | () => void | Lock the scroll. |
| unlock | () => void | Unlock the scroll. |
## Hook
```
import { useRef, useState } from 'react'

import { useIsomorphicLayoutEffect } from 'usehooks-ts'

type UseScrollLockOptions = {
  autoLock?: boolean
  lockTarget?: HTMLElement | string
  widthReflow?: boolean
}

type UseScrollLockReturn = {
  isLocked: boolean
  lock: () => void
  unlock: () => void
}

type OriginalStyle = {
  overflow: CSSStyleDeclaration['overflow']
  paddingRight: CSSStyleDeclaration['paddingRight']
}

const IS_SERVER = typeof window === 'undefined'

export function useScrollLock(
  options: UseScrollLockOptions = {},
): UseScrollLockReturn {
  const { autoLock = true, lockTarget, widthReflow = true } = options
  const [isLocked, setIsLocked] = useState(false)
  const target = useRef<HTMLElement | null>(null)
  const originalStyle = useRef<OriginalStyle | null>(null)

  const lock = () => {
    if (target.current) {
      const { overflow, paddingRight } = target.current.style

      // Save the original styles
      originalStyle.current = { overflow, paddingRight }

      // Prevent width reflow
      if (widthReflow) {
        // Use window inner width if body is the target as global scrollbar isn't part of the document
        const offsetWidth =
          target.current === document.body
            ? window.innerWidth
            : target.current.offsetWidth
        // Get current computed padding right in pixels
        const currentPaddingRight =
          parseInt(window.getComputedStyle(target.current).paddingRight, 10) ||
          0

        const scrollbarWidth = offsetWidth - target.current.scrollWidth
        target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`
      }

      // Lock the scroll
      target.current.style.overflow = 'hidden'

      setIsLocked(true)
    }
  }

  const unlock = () => {
    if (target.current && originalStyle.current) {
      target.current.style.overflow = originalStyle.current.overflow

      // Only reset padding right if we changed it
      if (widthReflow) {
        target.current.style.paddingRight = originalStyle.current.paddingRight
      }
    }

    setIsLocked(false)
  }

  useIsomorphicLayoutEffect(() => {
    if (IS_SERVER) return

    if (lockTarget) {
      target.current =
        typeof lockTarget === 'string'
          ? document.querySelector(lockTarget)
          : lockTarget
    }

    if (!target.current) {
      target.current = document.body
    }

    if (autoLock) {
      lock()
    }

    return () => {
      unlock()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoLock, lockTarget, widthReflow])

  return { isLocked, lock, unlock }
}
```