import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Platform } from "react-native"

const toggleVariants = cva(
  cn(
    "group flex flex-row items-center justify-center gap-2 rounded-md active:bg-muted",
    Platform.select({
      web: "hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex cursor-default whitespace-nowrap outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none [&_svg]:pointer-events-none",
    })
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: cn(
          "border border-input bg-transparent shadow-sm shadow-black/5 active:bg-accent",
          Platform.select({
            web: "hover:bg-accent hover:text-accent-foreground",
          })
        ),
      },
      size: {
        default: "h-10 min-w-10 px-2.5 sm:h-9 sm:min-w-9 sm:px-2",
        sm: "h-9 min-w-9 px-2 sm:h-8 sm:min-w-8 sm:px-1.5",
        lg: "h-11 min-w-11 px-3 sm:h-10 sm:min-w-10 sm:px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export { toggleVariants }
