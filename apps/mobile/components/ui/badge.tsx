import {
  badgeTextVariants,
  badgeVariants,
} from "@/components/ui/badge-variants"
import { TextClassContext } from "@/components/ui/text"
import { cn } from "@/lib/utils"
import { Slot } from "@rn-primitives/slot"
import type { VariantProps } from "class-variance-authority"
import * as React from "react"
import { View } from "react-native"

type BadgeProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    asChild?: boolean
  } & VariantProps<typeof badgeVariants>

function Badge({ className, variant, asChild, ...props }: BadgeProps) {
  const Component = asChild ? Slot : View
  const textClassName = badgeTextVariants({ variant })

  return (
    <TextClassContext.Provider value={textClassName}>
      <Component
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    </TextClassContext.Provider>
  )
}

export { Badge }
export type { BadgeProps }
