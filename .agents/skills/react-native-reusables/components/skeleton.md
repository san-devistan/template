# Skeleton

Use to show a placeholder while content is loading.

components/skeleton
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Skeleton }
'@/components/ui/skeleton'
{ View }
'react-native'
View
"flex flex-row items-center gap-4"
"h-12 w-12 rounded-full"
"gap-2"
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add skeleton
bunx --bun @react-native-reusables/cli@latest add skeleton
pnpm dlx @react-native-reusables/cli@latest add skeleton
yarn dlx @react-native-reusables/cli@latest add skeleton
Copy and paste the following code into your project.
@/components/ui/skeleton.tsx
{ cn }
'@/lib/utils'
React
View>
, className)
{ Skeleton };
Animated, {
useAnimatedStyle,
useSharedValue,
withRepeat,
withTiming,
'react-native-reanimated'
'react'
React.
useEffect
sv.value
withRepeat
withTiming
, { duration }),
opacity: sv.value,
Animated.View
Update the import paths to match your project setup.
"@/components/ui/skeleton"
Separator
Switch
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