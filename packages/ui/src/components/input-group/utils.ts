import type * as React from "react"

function handleInputGroupAddonPointerDown(
  event: React.PointerEvent<HTMLDivElement>
) {
  if (event.target instanceof Element && event.target.closest("button")) {
    return
  }

  const control =
    event.currentTarget.parentElement?.querySelector("input, textarea")

  if (control instanceof HTMLElement) {
    control.focus()
  }
}

export { handleInputGroupAddonPointerDown }
