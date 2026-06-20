# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

components/radio-group
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
{ RadioGroup, RadioGroupItem }
'@/components/ui/radio-group'
Haptics
'expo-haptics'
React
'react'
{ View }
'react-native'
setValue
React.
useState
'comfortable'
onLabelPress
Haptics.
impactAsync
(Haptics.ImpactFeedbackStyle.Light);
(label);
(value);
RadioGroup
View
"flex flex-row items-center gap-3"
"default"
"r1"
Label
htmlFor
onPress
'default'
Default
"comfortable"
"r2"
Comfortable
"compact"
"r3"
'compact'
Compact
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add radio-group
bunx --bun @react-native-reusables/cli@latest add radio-group
pnpm dlx @react-native-reusables/cli@latest add radio-group
yarn dlx @react-native-reusables/cli@latest add radio-group
npx expo install @rn-primitives/radio-group
Copy and paste the following code into your project.
@/components/ui/radio-group.tsx
{ cn }
'@/lib/utils'
'@rn-primitives/radio-group'
{ Platform }
RadioGroupPrimitive.Root>) {
RadioGroupPrimitive.Root
'gap-3'
, className)
RadioGroupPrimitive.Item>) {
RadioGroupPrimitive.Item
Platform.
props.disabled
'opacity-50'
RadioGroupPrimitive.Indicator
"bg-primary size-2 rounded-full"
{ RadioGroup, RadioGroupItem };
Update the import paths to match your project setup.
"react-native"
"@/components/ui/radio-group"
"@/components/ui/label"
>Default</
>Comfortable</
>Compact</
Progress
Select
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