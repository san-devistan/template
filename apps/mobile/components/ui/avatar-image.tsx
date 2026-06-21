import { cn } from "@/lib/utils"
import * as AvatarPrimitive from "@rn-primitives/avatar"

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

export { AvatarImage }
