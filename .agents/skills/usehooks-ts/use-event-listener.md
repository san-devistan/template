# useEventListener
Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
## Usage
```
import { useRef } from 'react'

import { useEventListener } from 'usehooks-ts'

export default function Component() {
  // Define button ref
  const buttonRef = useRef<HTMLButtonElement>(null)
  const documentRef = useRef<Document>(document)

  const onScroll = (event: Event) => {
    console.log('window scrolled!', event)
  }

  const onClick = (event: Event) => {
    console.log('button clicked!', event)
  }

  const onVisibilityChange = (event: Event) => {
    console.log('doc visibility changed!', {
      isVisible: !document.hidden,
      event,
    })
  }

  // example with window based event
  useEventListener('scroll', onScroll)

  // example with document based event
  useEventListener('visibilitychange', onVisibilityChange, documentRef)

  // example with element based event
  useEventListener('click', onClick, buttonRef)

  return (
    <div style={{ minHeight: '200vh' }}>
      <button ref={buttonRef}>Click me</button>
    </div>
  )
}
```
## API
▸ useEventListener < K >( eventName , handler , element , options? ): void
Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
#### Type parameters
| Name | Type |
| --- | --- |
| K | extends "change" |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| eventName | K | The name of the event to listen for. |
| handler | ( event : MediaQueryListEventMap [ K ]) => void | The event handler function. |
| element | RefObject < MediaQueryList > | The DOM element or media query list to attach the event listener to (optional). |
| options? | boolean | AddEventListenerOptions | An options object that specifies characteristics about the event listener (optional). |
#### Returns
void
▸ useEventListener < K >( eventName , handler , element? , options? ): void
Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
#### Type parameters
| Name | Type |
| --- | --- |
| K | extends keyof WindowEventMap |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| eventName | K | The name of the event to listen for. |
| handler | ( event : WindowEventMap [ K ]) => void | The event handler function. |
| element? | undefined | The DOM element or media query list to attach the event listener to (optional). |
| options? | boolean | AddEventListenerOptions | An options object that specifies characteristics about the event listener (optional). |
#### Returns
void
▸ useEventListener < K , T >( eventName , handler , element , options? ): void
Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| K | extends "copy" | "change" | "test-event" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | "beforeinput" | "blur" | "cancel" | "canplay" | "canplaythrough" | "click" | "close" | "compositionend" | "compositionstart" | "compositionupdate" | "contextmenu" | "cuechange" | "cut" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "focusin" | "focusout" | "formdata" | "gotpointercapture" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "lostpointercapture" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "paste" | "pause" | "play" | "playing" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "scrollend" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "selectionchange" | "selectstart" | "slotchange" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "transitioncancel" | "transitionend" | "transitionrun" | "transitionstart" | "volumechange" | "waiting" | "webkitanimationend" | "webkitanimationiteration" | "webkitanimationstart" | "webkittransitionend" | "wheel" | "fullscreenchange" | "fullscreenerror" | - |
| T | extends Element = K extends keyof HTMLElementEventMap ? HTMLDivElement : SVGElement | The type of the DOM element (default is HTMLElement ). |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| eventName | K | The name of the event to listen for. |
| handler | ( event : HTMLElementEventMap [ K ]) => void | ( event : SVGElementEventMap [ K ]) => void | The event handler function. |
| element | RefObject < T > | The DOM element or media query list to attach the event listener to (optional). |
| options? | boolean | AddEventListenerOptions | An options object that specifies characteristics about the event listener (optional). |
#### Returns
void
▸ useEventListener < K >( eventName , handler , element , options? ): void
Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
#### Type parameters
| Name | Type |
| --- | --- |
| K | extends keyof DocumentEventMap |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| eventName | K | The name of the event to listen for. |
| handler | ( event : DocumentEventMap [ K ]) => void | The event handler function. |
| element | RefObject < Document > | The DOM element or media query list to attach the event listener to (optional). |
| options? | boolean | AddEventListenerOptions | An options object that specifies characteristics about the event listener (optional). |
#### Returns
void
## Hook
```
import { useEffect, useRef } from 'react'

import type { RefObject } from 'react'

import { useIsomorphicLayoutEffect } from 'usehooks-ts'

// MediaQueryList Event based useEventListener interface
function useEventListener<K extends keyof MediaQueryListEventMap>(
  eventName: K,
  handler: (event: MediaQueryListEventMap[K]) => void,
  element: RefObject<MediaQueryList>,
  options?: boolean | AddEventListenerOptions,
): void

// Window Event based useEventListener interface
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions,
): void

// Element Event based useEventListener interface
function useEventListener<
  K extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
  T extends Element = K extends keyof HTMLElementEventMap
    ? HTMLDivElement
    : SVGElement,
>(
  eventName: K,
  handler:
    | ((event: HTMLElementEventMap[K]) => void)
    | ((event: SVGElementEventMap[K]) => void),
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void

// Document Event based useEventListener interface
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions,
): void

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | SVGAElement | MediaQueryList = HTMLElement,
>(
  eventName: KW | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | SVGElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event,
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler)

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current ?? window

    if (!(targetElement && targetElement.addEventListener)) return

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = event => {
      savedHandler.current(event)
    }

    targetElement.addEventListener(eventName, listener, options)

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, listener, options)
    }
  }, [eventName, element, options])
}

export { useEventListener }
```