---
name: usehooks-ts
description: 'Documentation index for usehooks-ts, a React and TypeScript hook library for SSR-safe browser and state utilities. Use when implementing, choosing, or troubleshooting hooks for localStorage/sessionStorage persistence, media queries, dark mode, event listeners, outside clicks, debounce callbacks/values with leading/trailing/maxWait, timers, Clipboard API, script loading, scroll lock, window/screen/resize/intersection observers, mounted/client checks, and helpers such as useBoolean, useCounter, useToggle, useStep, useMap, useEventCallback, and useIsomorphicLayoutEffect.'
---

# usehooks-ts

## Required Lookup

Read the linked crawled file(s) before answering any API, syntax, behavior, migration, troubleshooting, or example question. This file is only a retrieval index; do not rely on it for exact signatures, defaults, return types, or implementation details.

For composition questions, read every hook involved. For example, dark-mode answers usually need storage and media-query docs, storage answers often need event callback/listener behavior, and resize/window/screen answers often need debounce behavior.

## Overview

usehooks-ts documents ready-to-import React hooks from `usehooks-ts`. The crawled pages include usage examples, TypeScript API tables, option/return aliases, and source implementations.

The docs cover:

- State and workflow helpers for booleans, counters, countdowns, steps, and `Map` state.
- Browser API hooks for clipboard, storage, document title, script loading, scroll locking, media queries, viewport, screen, resize, and intersection observers.
- Event/ref hooks for window, document, DOM element, `MediaQueryList`, click-anywhere, outside-click, hover, and stable event callbacks.
- Timing, lifecycle, and SSR-safe utilities for debounce, intervals, timeouts, unmount cleanup, mounted checks, client checks, and isomorphic layout effects.
- Theme helpers for binary dark mode and ternary `system | dark | light` mode using `prefers-color-scheme` and local storage.

## Contents

### State and Workflow

- [useBoolean](use-boolean.md) - boolean state with `value`, `setValue`, `setTrue`, `setFalse`, and `toggle`.
- [useToggle](use-toggle.md) - tuple-style boolean toggle state.
- [useCounter](use-counter.md) - numeric count with `increment`, `decrement`, `reset`, and `setCount`.
- [useCountdown](use-countdown.md) - interval-driven count up/down with `startCountdown`, `stopCountdown`, and `resetCountdown`.
- [useStep](use-step.md) - bounded multi-step navigation with next/previous guards.
- [useMap](use-map.md) - immutable `Map` state with `set`, `setAll`, `remove`, and `reset` actions.

### Storage and Theme

- [useLocalStorage](use-local-storage.md) - persistent state in `localStorage` with `serializer`, `deserializer`, `initializeWithValue`, setter, and remover.
- [useReadLocalStorage](use-read-local-storage.md) - read-only `localStorage` state with SSR overloads and custom deserialization.
- [useSessionStorage](use-session-storage.md) - persistent state in `sessionStorage` with the same serializer/deserializer pattern.
- [useDarkMode](use-dark-mode.md) - binary dark-mode state backed by local storage and `prefers-color-scheme`.
- [useTernaryDarkMode](use-ternary-dark-mode.md) - `system | dark | light` theme mode with local storage.

### Events, Refs, and Interaction

- [useEventListener](use-event-listener.md) - typed listeners for `window`, `document`, DOM elements, SVG elements, and `MediaQueryList`.
- [useEventCallback](use-event-callback.md) - stable memoized event callback that reads the latest handler.
- [useClickAnyWhere](use-click-any-where.md) - document-wide click handling.
- [useOnClickOutside](use-on-click-outside.md) - outside-click/focus/touch detection for one ref or many refs.
- [useHover](use-hover.md) - hover state for an element ref.
- [useCopyToClipboard](use-copy-to-clipboard.md) - Clipboard API wrapper returning copied text and async copy function.

### Timing, Debounce, and Lifecycle

- [useDebounceCallback](use-debounce-callback.md) - debounced callback with `leading`, `trailing`, `maxWait`, `cancel`, `flush`, and `isPending`.
- [useDebounceValue](use-debounce-value.md) - debounced value setter with `equalityFn` and debounce options.
- [useInterval](use-interval.md) - `setInterval` hook where `null` delay clears the interval.
- [useTimeout](use-timeout.md) - `setTimeout` hook where `null` delay clears the timeout.
- [useUnmount](use-unmount.md) - run a cleanup callback on component unmount.
- [useIsMounted](use-is-mounted.md) - get a stable function that reports whether the component is mounted.

### SSR and Environment

- [useIsClient](use-is-client.md) - return whether React has mounted on the client.
- [useIsomorphicLayoutEffect](use-isomorphic-layout-effect.md) - use `useLayoutEffect` in the browser and `useEffect` on the server.
- [useMediaQuery](use-media-query.md) - `matchMedia` hook with `defaultValue` and `initializeWithValue`.

### Viewport, Observers, and DOM Effects

- [useWindowSize](use-window-size.md) - window width/height with SSR overload and optional `debounceDelay`.
- [useScreen](use-screen.md) - `window.screen` snapshot with SSR overload and optional `debounceDelay`.
- [useResizeObserver](use-resize-observer.md) - element size observation with `box` and optional `onResize`.
- [useIntersectionObserver](use-intersection-observer.md) - intersection state with `threshold`, `root`, `rootMargin`, `freezeOnceVisible`, and `onChange`.
- [useDocumentTitle](use-document-title.md) - document title updates with optional restore on unmount.
- [useScript](use-script.md) - dynamic script loading status with caching, `id`, `shouldPreventLoad`, and `removeOnUnmount`.
- [useScrollLock](use-scroll-lock.md) - lock body or target scrolling with `autoLock`, `lockTarget`, and `widthReflow`.

## Search Hints

- SSR and hydration: `initializeWithValue`, `defaultValue`, `IS_SERVER`, `useIsClient`, `useIsomorphicLayoutEffect`.
- Storage sync: `serializer`, `deserializer`, `local-storage`, `session-storage`, `StorageEvent`, custom event.
- Debounce behavior: `leading`, `trailing`, `maxWait`, `cancel`, `flush`, `isPending`, `equalityFn`.
- Events and refs: `RefObject`, `AddEventListenerOptions`, `WindowEventMap`, `DocumentEventMap`, `MediaQueryListEventMap`, `mousedown`, `touchstart`, `focusin`.
- Observer options: `threshold`, `rootMargin`, `freezeOnceVisible`, `onChange`, `box`, `border-box`, `content-box`, `device-pixel-content-box`, `onResize`.
- Responsive and viewport: `matchMedia`, `prefers-color-scheme`, `debounceDelay`, `WindowSize`, `Screen`.
- DOM effects: `preserveTitleOnUnmount`, `shouldPreventLoad`, `removeOnUnmount`, `idle`, `loading`, `ready`, `error`, `autoLock`, `lockTarget`, `widthReflow`.
