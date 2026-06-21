import { AvatarFallback } from "@/components/ui/avatar-fallback"
import { AvatarImage } from "@/components/ui/avatar-image"
import { cn } from "@/lib/utils"
import * as AvatarPrimitive from "@rn-primitives/avatar"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback, AvatarImage }
