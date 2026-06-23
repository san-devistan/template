import { cn } from "@workspace/ui/lib/utils"

type AspectRatioStyle = React.CSSProperties & { "--ratio": number }

function getAspectRatioStyle(ratio: number): AspectRatioStyle {
  return { "--ratio": ratio }
}

function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      style={getAspectRatioStyle(ratio)}
      className={cn("relative aspect-(--ratio)", className)}
      {...props}
    />
  )
}

export { AspectRatio }
