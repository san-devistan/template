import {
  ToggleGroupPresenceContext,
  ToggleGroupSizeContext,
  ToggleGroupVariantContext,
} from "@/components/ui/toggle-group-context"
import { ToggleGroupIcon } from "@/components/ui/toggle-group-icon"
import { ToggleGroupItem } from "@/components/ui/toggle-group-item"
import type { toggleVariants } from "@/components/ui/toggle-variants"
import { cn } from "@/lib/utils"
import * as ToggleGroupPrimitive from "@rn-primitives/toggle-group"
import type { VariantProps } from "class-variance-authority"
import * as React from "react"
import { Platform } from "react-native"

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        "flex flex-row items-center rounded-md shadow-none",
        Platform.select({ web: "w-fit" }),
        variant === "outline" && "shadow-sm shadow-black/5",
        className
      )}
      {...props}
    >
      <ToggleGroupPresenceContext.Provider value>
        <ToggleGroupVariantContext.Provider value={variant}>
          <ToggleGroupSizeContext.Provider value={size}>
            {children}
          </ToggleGroupSizeContext.Provider>
        </ToggleGroupVariantContext.Provider>
      </ToggleGroupPresenceContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

export { ToggleGroup, ToggleGroupIcon, ToggleGroupItem }
