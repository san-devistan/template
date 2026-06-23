import { withInterTextStyle } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Platform, TextInput } from "react-native"

function Textarea({
  className,
  multiline = true,
  numberOfLines = Platform.select({ web: 2, native: 8 }), // On web, numberOfLines also determines initial height. On native, it determines the maximum height.
  placeholderClassName,
  style,
  ...props
}: React.ComponentProps<typeof TextInput> & React.RefAttributes<TextInput>) {
  const resolvedClassName = cn(
    "shadow-xs flex min-h-16 w-full flex-row rounded-md border border-input bg-transparent px-2.5 py-2 text-base text-foreground dark:bg-input/30 md:text-sm",
    Platform.select({
      web: "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive field-sizing-content resize-y outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed",
    }),
    props.editable === false && "opacity-50",
    className
  )

  return (
    <TextInput
      className={resolvedClassName}
      placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
      style={withInterTextStyle(resolvedClassName, style)}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical="top"
      {...props}
    />
  )
}

export { Textarea }
