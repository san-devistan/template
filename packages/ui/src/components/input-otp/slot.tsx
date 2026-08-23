import { cn } from "@workspace/ui/lib/utils"
import { OTPInputContext } from "input-otp"
import * as React from "react"

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.use(OTPInputContext)
  const slot = inputOTPContext?.slots[index]

  return (
    <div
      data-slot="input-otp-slot"
      data-active={slot?.isActive}
      className={cn(
        "size-9 text-sm shadow-xs relative flex items-center justify-center border-y border-r border-input transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-3 data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      {slot?.char}
      {slot?.hasFakeCaret && (
        <div className="inset-0 pointer-events-none absolute flex items-center justify-center">
          <div className="h-4 animate-caret-blink w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
}

export { InputOTPSlot }
