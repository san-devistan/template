import { Platform } from "react-native"
import Animated from "react-native-reanimated"

type NativeOnlyAnimatedViewProps = Omit<
  React.ComponentProps<typeof Animated.View>,
  "children"
> & {
  children?: React.ReactNode
}

/**
 * This component is used to wrap animated views that should only be animated on native.
 * @param props - The props for the animated view.
 * @returns The animated view if the platform is native, otherwise the children.
 * @example
 * <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
 *   <Text>I am only animated on native</Text>
 * </NativeOnlyAnimatedView>
 */
function NativeOnlyAnimatedView({
  children,
  ...props
}: NativeOnlyAnimatedViewProps) {
  if (Platform.OS === "web") {
    return <>{children}</>
  } else {
    return <Animated.View {...props}>{children}</Animated.View>
  }
}

export { NativeOnlyAnimatedView }
