import { TextClassContext } from "@/components/ui/text"
import { useToggleGroupContext } from "@/components/ui/toggle-group-context"
import { toggleVariants } from "@/components/ui/toggle-variants"
import { cn } from "@/lib/utils"
import * as ToggleGroupPrimitive from "@rn-primitives/toggle-group"
import type { VariantProps } from "class-variance-authority"
import { Platform } from "react-native"

type ToggleGroupItemClassNameOptions = {
  className?: string
  context: VariantProps<typeof toggleVariants>
  disabled?: boolean
  isFirst?: boolean
  isLast?: boolean
  selected: boolean
  size?: VariantProps<typeof toggleVariants>["size"]
  variant?: VariantProps<typeof toggleVariants>["variant"]
}

function getToggleGroupItemClassName({
  className,
  context,
  disabled,
  isFirst,
  isLast,
  selected,
  size,
  variant,
}: ToggleGroupItemClassNameOptions) {
  const effectiveVariant = context.variant || variant
  const outline = effectiveVariant === "outline"

  return cn(
    toggleVariants({
      variant: effectiveVariant,
      size: context.size || size,
    }),
    disabled && "opacity-50",
    selected && "bg-accent",
    "min-w-0 shrink-0 rounded-none shadow-none",
    isFirst && "rounded-l-md",
    isLast && "rounded-r-md",
    outline && "border-l-0",
    outline && isFirst && "border-l",
    Platform.select({
      web: "flex-1 focus:z-10 focus-visible:z-10",
    }),
    className
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  isFirst,
  isLast,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants> & {
    isFirst?: boolean
    isLast?: boolean
  }) {
  const context = useToggleGroupContext()
  const { value } = ToggleGroupPrimitive.useRootContext()
  const selected = ToggleGroupPrimitive.utils.getIsSelected(value, props.value)
  const textClassName = cn(
    "text-sm font-medium text-foreground",
    selected
      ? "text-accent-foreground"
      : Platform.select({ web: "group-hover:text-muted-foreground" })
  )
  const itemClassName = getToggleGroupItemClassName({
    className,
    context,
    disabled: props.disabled ?? undefined,
    isFirst,
    isLast,
    selected,
    size,
    variant,
  })

  return (
    <TextClassContext.Provider value={textClassName}>
      <ToggleGroupPrimitive.Item className={itemClassName} {...props}>
        {children}
      </ToggleGroupPrimitive.Item>
    </TextClassContext.Provider>
  )
}

export { ToggleGroupItem }
