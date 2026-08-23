import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "@workspace/ui/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch after:-inset-x-3 after:-inset-y-2 data-[size=default]:h-5 data-[size=default]:w-8 data-[size=sm]:h-4 data-[size=sm]:w-6 relative inline-flex shrink-0 items-center rounded-2xl border-2 transition-all outline-none group-has-[:focus-visible]/field-label:ring-0 after:absolute focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-checked:border-primary data-checked:bg-primary group-has-[:focus-visible]/field-label:data-checked:border-primary data-disabled:cursor-not-allowed data-disabled:opacity-50 data-unchecked:border-transparent data-unchecked:bg-input/90 group-has-[:focus-visible]/field-label:data-unchecked:border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="shadow-sm group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-unchecked:translate-x-0 pointer-events-none block rounded-2xl bg-background ring-0 transition-transform not-dark:bg-clip-padding data-checked:translate-x-[calc(100%-4px)] dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
