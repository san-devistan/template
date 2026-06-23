import { MinusIcon } from "lucide-react"
import type * as React from "react"

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-4"
      {...props}
    >
      <MinusIcon />
    </div>
  )
}

export { InputOTPSeparator }
