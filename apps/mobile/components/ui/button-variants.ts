import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Platform } from "react-native"

const buttonVariants = cva(
  cn(
    "group shrink-0 flex-row items-center justify-center gap-2 rounded-md shadow-none",
    Platform.select({
      web: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          "shadow-xs bg-primary active:bg-primary/80",
          Platform.select({ web: "hover:bg-primary/80" })
        ),
        destructive: cn(
          "shadow-xs bg-destructive active:bg-destructive/90 dark:bg-destructive/60",
          Platform.select({
            web: "hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
          })
        ),
        outline: cn(
          "shadow-xs border border-border bg-background active:bg-muted dark:border-input dark:bg-input/30 dark:active:bg-input/50",
          Platform.select({
            web: "hover:bg-muted hover:text-foreground dark:hover:bg-input/50",
          })
        ),
        secondary: cn(
          "shadow-xs bg-secondary active:bg-secondary/80",
          Platform.select({
            web: "hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
          })
        ),
        ghost: cn(
          "active:bg-accent dark:active:bg-accent/50",
          Platform.select({ web: "hover:bg-accent dark:hover:bg-accent/50" })
        ),
        link: "",
      },
      size: {
        default: cn(
          "h-9 px-2.5",
          Platform.select({
            web: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
          })
        ),
        xs: cn(
          "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2",
          Platform.select({
            web: "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
          })
        ),
        sm: cn(
          "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5",
          Platform.select({
            web: "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
          })
        ),
        lg: cn(
          "h-10 gap-1.5 px-2.5",
          Platform.select({
            web: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
          })
        ),
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)]",
        "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)]",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const buttonTextVariants = cva(
  cn(
    "text-sm font-medium text-foreground",
    Platform.select({ web: "pointer-events-none transition-colors" })
  ),
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        destructive: "text-white",
        outline: cn(
          "group-active:text-accent-foreground",
          Platform.select({ web: "group-hover:text-accent-foreground" })
        ),
        secondary: "text-secondary-foreground",
        ghost: "group-active:text-accent-foreground",
        link: cn(
          "text-primary group-active:underline",
          Platform.select({
            web: "underline-offset-4 hover:underline group-hover:underline",
          })
        ),
      },
      size: {
        default: "",
        xs: "text-xs",
        sm: "",
        lg: "",
        icon: "",
        "icon-xs": "",
        "icon-sm": "",
        "icon-lg": "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export { buttonTextVariants, buttonVariants }
