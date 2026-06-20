import { cn } from "@workspace/ui/lib/utils"
import * as React from "react"

function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  const ratioStyle = React.useMemo(
    () =>
      ({
        "--ratio": ratio,
      }) as React.CSSProperties,
    [ratio]
  )

  return (
    <div
      data-slot="aspect-ratio"
      style={ratioStyle}
      className={cn("relative aspect-(--ratio)", className)}
      {...props}
    />
  )
}

export { AspectRatio }
