import { cn } from "@/lib/utils"
import * as ProgressPrimitive from "@rn-primitives/progress"
import * as React from "react"
import { Platform, View } from "react-native"
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated"

function getWebIndicatorStyle(value: number | null | undefined) {
  return { transform: `translateX(-${100 - (value ?? 0)}%)` }
}

function Progress({
  className,
  value,
  indicatorClassName,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  indicatorClassName?: string
}) {
  return (
    <ProgressPrimitive.Root
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      <Indicator value={value} className={indicatorClassName} />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

const Indicator = Platform.select({
  web: WebIndicator,
  native: NativeIndicator,
  default: NullIndicator,
})

type IndicatorProps = {
  value: number | undefined | null
  className?: string
}

function WebIndicator({ value, className }: IndicatorProps) {
  if (Platform.OS !== "web") {
    return null
  }

  return (
    <View
      className={cn(
        "h-full w-full flex-1 bg-primary transition-all",
        className
      )}
      style={getWebIndicatorStyle(value)}
    >
      <ProgressPrimitive.Indicator className={cn("h-full w-full", className)} />
    </View>
  )
}

function NativeIndicator({ value, className }: IndicatorProps) {
  const progress = useDerivedValue(() => value ?? 0)

  const indicator = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleX: withSpring(
            interpolate(progress.value, [0, 100], [0, 1], Extrapolation.CLAMP),
            { overshootClamping: true }
          ),
        },
      ],
      transformOrigin: "left",
    }
  }, [value])

  if (Platform.OS === "web") {
    return null
  }

  return (
    <ProgressPrimitive.Indicator asChild>
      <Animated.View
        style={indicator}
        className={cn("h-full w-full bg-foreground", className)}
      />
    </ProgressPrimitive.Indicator>
  )
}

function NullIndicator(_props: IndicatorProps) {
  return null
}
