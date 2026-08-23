import { MinusIcon } from "lucide-react"
import type * as React from "react"

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="[&_svg:not([class*='size-'])]:size-4 flex items-center"
      {...props}
    >
      <MinusIcon />
    </div>
  )
}

export { InputOTPSeparator }
