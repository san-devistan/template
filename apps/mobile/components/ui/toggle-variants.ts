import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Platform } from "react-native"

const toggleVariants = cva(
  cn(
    "group flex flex-row items-center justify-center gap-1 rounded-md active:bg-muted",
    Platform.select({
      web: "hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex cursor-default whitespace-nowrap outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none [&_svg]:pointer-events-none",
    })
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: cn(
          "shadow-xs border border-input bg-transparent active:bg-muted",
          Platform.select({
            web: "hover:bg-muted",
          })
        ),
      },
      size: {
        default: "h-9 min-w-9 px-2.5",
        sm: "h-8 min-w-8 px-2.5",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export { toggleVariants }
