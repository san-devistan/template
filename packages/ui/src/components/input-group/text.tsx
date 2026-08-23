"use client"

import { cn } from "@workspace/ui/lib/utils"
import type * as React from "react"

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "gap-2 text-sm [&_svg:not([class*='size-'])]:size-4 flex items-center text-muted-foreground [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

export { InputGroupText }
