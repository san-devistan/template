---
name: usehooks-ts
description: "Documentation for usehooks-ts.com. Use when the user asks about usehooks-ts, references usehooks-ts.com, or needs React hook API docs, TypeScript signatures, usage examples, SSR behavior, browser APIs, storage hooks, media query hooks, observer hooks, event listeners, debounce/throttle-like callbacks, timers, dark mode, or guides from https://usehooks-ts.com/react-hook. Trigger on mentions of 'usehooks-ts', 'usehooks-ts.com', 'useLocalStorage', 'useSessionStorage', 'useMediaQuery', 'useEventListener', 'useDebounceCallback', or 'usehooks'."
---

# usehooks-ts React Hooks Documentation

> 33 pages from [https://usehooks-ts.com/react-hook](https://usehooks-ts.com/react-hook)

This `SKILL.md` is an index, not the full documentation. The actual docs are the linked markdown files in this skill folder.

## Required Lookup

When this skill triggers for a documentation question:

1. Search this skill folder or choose the relevant entry from Contents.
2. Read at least one linked `.md` file before answering API, syntax, configuration, behavior, migration, or troubleshooting questions.
3. Read multiple files when the answer spans concepts, examples, reference pages, or framework integrations.
4. Treat the local markdown files as the source of truth. If the local docs do not cover the question, say that instead of filling gaps from memory.

## Overview

These docs cover the `usehooks-ts` React hook APIs, with each page providing a usage example, typed API reference, relevant type aliases, and the hook implementation. The collection focuses on browser-aware TypeScript hooks for state helpers, web storage, DOM events, media queries, observers, timers, lifecycle utilities, clipboard access, script loading, scroll locking, and dark mode. Several hooks include SSR-specific options such as `initializeWithValue` or environment-safe implementations like `useIsomorphicLayoutEffect`.

## Contents

### State And Flow Helpers

- [useBoolean](use-boolean.md)
- [useCounter](use-counter.md)
- [useCountdown](use-countdown.md)
- [useMap](use-map.md)
- [useStep](use-step.md)
- [useToggle](use-toggle.md)

### Storage, Clipboard, And Scripts

- [useCopyToClipboard](use-copy-to-clipboard.md)
- [useLocalStorage](use-local-storage.md)
- [useReadLocalStorage](use-read-local-storage.md)
- [useScript](use-script.md)
- [useSessionStorage](use-session-storage.md)

### Viewport And DOM Observation

- [useIntersectionObserver](use-intersection-observer.md)
- [useMediaQuery](use-media-query.md)
- [useResizeObserver](use-resize-observer.md)
- [useScreen](use-screen.md)
- [useWindowSize](use-window-size.md)

### Events And Pointer Interaction

- [useClickAnyWhere](use-click-any-where.md)
- [useEventCallback](use-event-callback.md)
- [useEventListener](use-event-listener.md)
- [useHover](use-hover.md)
- [useOnClickOutside](use-on-click-outside.md)

### Theme And Document Controls

- [useDarkMode](use-dark-mode.md)
- [useDocumentTitle](use-document-title.md)
- [useScrollLock](use-scroll-lock.md)
- [useTernaryDarkMode](use-ternary-dark-mode.md)

### Timing, Debounce, And Lifecycle

- [useDebounceCallback](use-debounce-callback.md)
- [useDebounceValue](use-debounce-value.md)
- [useInterval](use-interval.md)
- [useIsMounted](use-is-mounted.md)
- [useTimeout](use-timeout.md)
- [useUnmount](use-unmount.md)

### SSR And Environment

- [useIsClient](use-is-client.md)
- [useIsomorphicLayoutEffect](use-isomorphic-layout-effect.md)

## Search Hints

- Use the Contents section when the topic maps cleanly to a hook name or category.
- Use text search inside this skill folder for option names such as `initializeWithValue`, `serializer`, `deserializer`, `rootMargin`, `threshold`, `autoLock`, `leading`, `trailing`, or `maxWait`.
- Prefer files with exact hook names, type aliases, config keys, browser API names, or error messages.
