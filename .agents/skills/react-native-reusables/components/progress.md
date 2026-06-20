# Progress

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

components/progress
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
React
'react'
{ Progress }
'@/components/ui/progress'
setProgress
React.
useState
useEffect
setTimeout
clearTimeout
(timer);
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add progress
bunx --bun @react-native-reusables/cli@latest add progress
pnpm dlx @react-native-reusables/cli@latest add progress
yarn dlx @react-native-reusables/cli@latest add progress
npx expo install @rn-primitives/progress
Copy and paste the following code into your project.
@/components/ui/progress.tsx
{ cn }
'@/lib/utils'
'@rn-primitives/progress'
{ Platform, View }
'react-native'
Animated, {
Extrapolation,
interpolate,
useAnimatedStyle,
useDerivedValue,
withSpring,
'react-native-reanimated'
ProgressPrimitive.Root>
ProgressPrimitive.Root
, className)
Indicator
{ Progress };
Platform.
web: WebIndicator,
native: NativeIndicator,
default: NullIndicator,
WebIndicator
(Platform.
OS
'web'
View
{ transform:
`translateX(-${
ProgressPrimitive.Indicator
withSpring
CLAMP
{ overshootClamping:
asChild
Animated.View
Update the import paths to match your project setup.
"@/components/ui/progress"
Popover
Radio Group
Built by
Founded Labs
, bringing
shadcn/ui
to React Native. Source on
GitHub
Want to work with us?
Mention us to your team.
Learn more
Learn more about Founded Labs