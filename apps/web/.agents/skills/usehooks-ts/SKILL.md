---
name: usehooks-ts
description: Use when writing or refactoring React TypeScript browser hooks with the usehooks-ts library, especially localStorage/sessionStorage persistence, media queries, dark mode, event listeners, outside clicks, debounce callbacks/values, timers, clipboard, script loading, scroll lock, window/screen size, intersection observers, mounted/client checks, toggles, counters, steps, maps, or replacing handwritten useEffect browser wrappers with SSR-safe library hooks. Do not use for React Native, backend code, or domain-specific hooks unsupported by usehooks-ts.
---

# usehooks-ts

Use `usehooks-ts` for common browser and React hook behavior instead of
handwritten `useEffect` wrappers.

## Default Pattern

Import the narrow named hook and wrap it only when the app needs a domain name:

```ts
import { useMediaQuery } from "usehooks-ts"

export function useCompactLayout() {
  return useMediaQuery("(max-width: 767px)", {
    defaultValue: false,
    initializeWithValue: false,
  })
}
```

## When To Reach For It

- Media queries, dark mode, client/mounted checks, and responsive browser state.
- Local/session storage persistence and other browser event subscriptions.
- Debounce/throttle, intervals, timeouts, clipboard, script loading, and scroll lock.
- Outside-click, event-listener, window-size, screen-size, and observer hooks.
- Small state helpers such as boolean, toggle, counter, step, or map state.

## Repo Style

- Prefer SSR-safe options such as `initializeWithValue: false` and explicit
  `defaultValue` when reading browser state during render.
- Keep domain wrappers tiny. If a hook is already descriptive enough, import it
  directly at the call site.
- Do not use `usehooks-ts` in React Native or backend work.
- Do not replace simple `useState` or domain-specific effects that the library
  does not actually model.
