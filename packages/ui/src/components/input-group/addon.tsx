"use client"

import { cn } from "@workspace/ui/lib/utils"
import { type VariantProps } from "class-variance-authority"
import type * as React from "react"

import { handleInputGroupAddonPointerDown } from "./utils"
import { inputGroupAddonVariants } from "./variants"

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onPointerDown={handleInputGroupAddonPointerDown}
      {...props}
    />
  )
}

export { InputGroupAddon }
