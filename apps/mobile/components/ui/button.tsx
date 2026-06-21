import {
  buttonTextVariants,
  buttonVariants,
} from "@/components/ui/button-variants"
import { TextClassContext } from "@/components/ui/text"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"
import * as React from "react"
import { Pressable } from "react-native"

type ButtonProps = React.ComponentProps<typeof Pressable> &
  React.RefAttributes<typeof Pressable> &
  VariantProps<typeof buttonVariants>

function Button({ className, variant, size, ...props }: ButtonProps) {
  const textClassName = buttonTextVariants({ variant, size })

  return (
    <TextClassContext.Provider value={textClassName}>
      <Pressable
        className={cn(
          props.disabled && "opacity-50",
          buttonVariants({ variant, size }),
          className
        )}
        accessibilityRole="button"
        {...props}
      />
    </TextClassContext.Provider>
  )
}

export { Button }
export type { ButtonProps }
