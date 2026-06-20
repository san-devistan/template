import { Icon } from "@/components/ui/icon"
import { TextClassContext } from "@/components/ui/text"
import { toggleVariants } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"
import * as ToggleGroupPrimitive from "@rn-primitives/toggle-group"
import type { VariantProps } from "class-variance-authority"
import * as React from "react"
import { Platform } from "react-native"

const ToggleGroupContext = React.createContext<VariantProps<
  typeof toggleVariants
> | null>(null)

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  const contextValue = React.useMemo(() => ({ variant, size }), [size, variant])

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
      <ToggleGroupContext.Provider value={contextValue}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function useToggleGroupContext() {
  const context = React.use(ToggleGroupContext)
  if (context === null) {
    throw new Error(
      "ToggleGroup compound components cannot be rendered outside the ToggleGroup component"
    )
  }
  return context
}

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
  const textClassName = React.useMemo(
    () =>
      cn(
        "text-sm font-medium text-foreground",
        selected
          ? "text-accent-foreground"
          : Platform.select({ web: "group-hover:text-muted-foreground" })
      ),
    [selected]
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

function ToggleGroupIcon({
  className,
  ...props
}: React.ComponentProps<typeof Icon>) {
  const textClass = React.use(TextClassContext)
  return (
    <Icon className={cn("size-4 shrink-0", textClass, className)} {...props} />
  )
}

export { ToggleGroup, ToggleGroupIcon, ToggleGroupItem }
