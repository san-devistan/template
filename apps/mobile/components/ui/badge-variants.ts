import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Platform } from "react-native"

const badgeVariants = cva(
  cn(
    "group h-5 shrink-0 flex-row items-center justify-center gap-1 overflow-hidden rounded-3xl border border-transparent px-2 py-0.5",
    Platform.select({
      web: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-fit whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3",
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          "border-transparent bg-primary",
          Platform.select({ web: "[a&]:hover:bg-primary/80" })
        ),
        secondary: cn(
          "border-transparent bg-secondary",
          Platform.select({ web: "[a&]:hover:bg-secondary/80" })
        ),
        destructive: cn(
          "border-transparent bg-destructive/10 dark:bg-destructive/20",
          Platform.select({ web: "[a&]:hover:bg-destructive/20" })
        ),
        outline: cn(
          "border-border",
          Platform.select({
            web: "[a&]:hover:bg-muted [a&]:hover:text-muted-foreground",
          })
        ),
        ghost: cn(
          "active:bg-muted dark:active:bg-muted/50",
          Platform.select({
            web: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
          })
        ),
        link: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const badgeTextVariants = cva("text-xs font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive",
      outline: "text-foreground",
      ghost: "text-foreground",
      link: "text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export { badgeTextVariants, badgeVariants }
