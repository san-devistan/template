import { Icon } from "@/components/ui/icon"
import { TextClassContext } from "@/components/ui/text"
import { cn } from "@/lib/utils"
import * as React from "react"

function ToggleGroupIcon({
  className,
  ...props
}: React.ComponentProps<typeof Icon>) {
  const textClass = React.use(TextClassContext)
  return (
    <Icon className={cn("size-4 shrink-0", textClass, className)} {...props} />
  )
}

export { ToggleGroupIcon }
