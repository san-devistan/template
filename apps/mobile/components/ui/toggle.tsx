import { Icon } from "@/components/ui/icon"
import { TextClassContext } from "@/components/ui/text"
import { toggleVariants } from "@/components/ui/toggle-variants"
import { cn } from "@/lib/utils"
import * as TogglePrimitive from "@rn-primitives/toggle"
import type { VariantProps } from "class-variance-authority"
import * as React from "react"
import { Platform } from "react-native"

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  const textClassName = cn(
    "text-sm font-medium text-foreground",
    props.pressed
      ? "text-accent-foreground"
      : Platform.select({ web: "group-hover:text-muted-foreground" }),
    className
  )

  return (
    <TextClassContext.Provider value={textClassName}>
      <TogglePrimitive.Root
        className={cn(
          toggleVariants({ variant, size }),
          props.disabled && "opacity-50",
          props.pressed && "bg-accent",
          className
        )}
        {...props}
      />
    </TextClassContext.Provider>
  )
}

function ToggleIcon({
  className,
  ...props
}: React.ComponentProps<typeof Icon>) {
  const textClass = React.use(TextClassContext)
  return (
    <Icon className={cn("size-4 shrink-0", textClass, className)} {...props} />
  )
}

export { Toggle, ToggleIcon }
