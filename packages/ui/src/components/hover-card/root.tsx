"use client"

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

export { HoverCard }
