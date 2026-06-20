# Switch

A control that allows the user to toggle between checked and not checked.

components/switch
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Label }
'@/components/ui/label'
{ Switch }
'@/components/ui/switch'
Haptics
'expo-haptics'
React
'react'
{ View }
'react-native'
setChecked
React.
useState
onPress
Haptics.
impactAsync
(Haptics.ImpactFeedbackStyle.Light);
prev);
(checked);
View
"flex-row items-center gap-2"
"airplane-mode"
nativeID
Label
htmlFor
Airplane Mode
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add switch
bunx --bun @react-native-reusables/cli@latest add switch
pnpm dlx @react-native-reusables/cli@latest add switch
yarn dlx @react-native-reusables/cli@latest add switch
npx expo install @rn-primitives/switch
Copy and paste the following code into your project.
@/components/ui/switch.tsx
{ cn }
'@/lib/utils'
'@rn-primitives/switch'
{ Platform }
SwitchPrimitives.Root>) {
SwitchPrimitives.Root
Platform.
props.checked
'bg-primary'
props.disabled
'opacity-50'
SwitchPrimitives.Thumb
{ Switch };
Update the import paths to match your project setup.
"@/components/ui/switch"
Skeleton
Tabs
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