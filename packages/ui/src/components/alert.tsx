import { cn } from "@workspace/ui/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const alertVariants = cva(
  "group/alert gap-0.5 px-4 py-3 text-sm has-data-[slot=alert-action]:pr-18 has-[>svg]:gap-x-2.5 *:[svg]:translate-y-0.5 *:[svg:not([class*='size-'])]:size-4 relative grid w-full rounded-2xl border text-left has-data-[slot=alert-action]:relative has-[>svg]:grid-cols-[auto_1fr] *:[svg]:row-span-2 *:[svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm md:text-pretty [&_p:not(:last-child)]:mb-4 text-balance text-muted-foreground [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("top-2.5 right-3 absolute", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
