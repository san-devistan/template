# useScript
Custom hook that dynamically loads scripts and tracking their loading status.
## Usage
```
import { useEffect } from 'react'

import { useScript } from 'usehooks-ts'

// it's an example, use your types instead
declare const jQuery: any

export default function Component() {
  // Load the script asynchronously
  const status = useScript(`https://code.jquery.com/jquery-3.5.1.min.js`, {
    removeOnUnmount: false,
    id: 'jquery',
  })

  useEffect(() => {
    if (typeof jQuery !== 'undefined') {
      // jQuery is loaded => print the version
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      alert(jQuery.fn.jquery)
    }
  }, [status])

  return (
    <div>
      <p>{`Current status: ${status}`}</p>

      {status === 'ready' && <p>You can use the script here.</p>}
    </div>
  )
}
```
## API
▸ useScript ( src , options? ): UseScriptStatus
Custom hook that dynamically loads scripts and tracking their loading status.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| src | null | string | The source URL of the script to load. Set to null or omit to prevent loading (optional). |
| options? | UseScriptOptions | Additional options for controlling script loading (optional). |
#### Returns
UseScriptStatus
The status of the script loading, which can be one of 'idle', 'loading', 'ready', or 'error'.
### Type aliases
Ƭ UseScriptOptions : Object
Hook options.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| id? | string | Script's id (optional). |
| removeOnUnmount? | boolean | If true , removes the script from the DOM when the component unmounts (optional). |
| shouldPreventLoad? | boolean | If true , prevents the script from being loaded (optional). |
Ƭ UseScriptStatus : "idle" | "loading" | "ready" | "error"
Script loading status.
## Hook
```
import { useEffect, useState } from 'react'

type UseScriptStatus = 'idle' | 'loading' | 'ready' | 'error'

type UseScriptOptions = {
  shouldPreventLoad?: boolean
  removeOnUnmount?: boolean
  id?: string
}

// Cached script statuses
const cachedScriptStatuses = new Map<string, UseScriptStatus | undefined>()

function getScriptNode(src: string) {
  const node: HTMLScriptElement | null = document.querySelector(
    `script[src="${src}"]`,
  )
  const status = node?.getAttribute('data-status') as
    | UseScriptStatus
    | undefined

  return {
    node,
    status,
  }
}

export function useScript(
  src: string | null,
  options?: UseScriptOptions,
): UseScriptStatus {
  const [status, setStatus] = useState<UseScriptStatus>(() => {
    if (!src || options?.shouldPreventLoad) {
      return 'idle'
    }

    if (typeof window === 'undefined') {
      // SSR Handling - always return 'loading'
      return 'loading'
    }

    return cachedScriptStatuses.get(src) ?? 'loading'
  })

  useEffect(() => {
    if (!src || options?.shouldPreventLoad) {
      return
    }

    const cachedScriptStatus = cachedScriptStatuses.get(src)
    if (cachedScriptStatus === 'ready' || cachedScriptStatus === 'error') {
      // If the script is already cached, set its status immediately
      setStatus(cachedScriptStatus)
      return
    }

    // Fetch existing script element by src
    // It may have been added by another instance of this hook
    const script = getScriptNode(src)
    let scriptNode = script.node

    if (!scriptNode) {
      // Create script element and add it to document body
      scriptNode = document.createElement('script')
      scriptNode.src = src
      scriptNode.async = true
      if (options?.id) {
        scriptNode.id = options.id
      }
      scriptNode.setAttribute('data-status', 'loading')
      document.body.appendChild(scriptNode)

      // Store status in attribute on script
      // This can be read by other instances of this hook
      const setAttributeFromEvent = (event: Event) => {
        const scriptStatus: UseScriptStatus =
          event.type === 'load' ? 'ready' : 'error'

        scriptNode?.setAttribute('data-status', scriptStatus)
      }

      scriptNode.addEventListener('load', setAttributeFromEvent)
      scriptNode.addEventListener('error', setAttributeFromEvent)
    } else {
      // Grab existing script status from attribute and set to state.
      setStatus(script.status ?? cachedScriptStatus ?? 'loading')
    }

    // Script event handler to update status in state
    // Note: Even if the script already exists we still need to add
    // event handlers to update the state for *this* hook instance.
    const setStateFromEvent = (event: Event) => {
      const newStatus = event.type === 'load' ? 'ready' : 'error'
      setStatus(newStatus)
      cachedScriptStatuses.set(src, newStatus)
    }

    // Add event listeners
    scriptNode.addEventListener('load', setStateFromEvent)
    scriptNode.addEventListener('error', setStateFromEvent)

    // Remove event listeners on cleanup
    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener('load', setStateFromEvent)
        scriptNode.removeEventListener('error', setStateFromEvent)
      }

      if (scriptNode && options?.removeOnUnmount) {
        scriptNode.remove()
        cachedScriptStatuses.delete(src)
      }
    }
  }, [src, options?.shouldPreventLoad, options?.removeOnUnmount, options?.id])

  return status
}
```