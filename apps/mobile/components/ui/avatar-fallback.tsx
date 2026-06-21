import { cn } from "@/lib/utils"
import * as AvatarPrimitive from "@rn-primitives/avatar"

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "flex size-full flex-row items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
}

export { AvatarFallback }
