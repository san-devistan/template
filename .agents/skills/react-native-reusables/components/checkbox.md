# Checkbox

A control that allows the user to toggle between checked and not checked.

components/checkbox
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Checkbox }
'@/components/ui/checkbox'
{ Label }
'@/components/ui/label'
{ Text }
'@/components/ui/text'
{ cn }
'@/lib/utils'
Haptics
'expo-haptics'
React
'react'
{ Platform, View }
'react-native'
setState
React.
useState
state) {
Haptics.
impactAsync
(Haptics.ImpactFeedbackStyle.Light);
prev,
View
"flex flex-col gap-6"
"flex flex-row items-center gap-3"
"terms"
state.termsChecked
'termsChecked'
Label
onPress
Platform.
({ native:
htmlFor
Accept terms and conditions
"flex flex-row items-start gap-3"
"terms-2"
state.terms2Checked
'terms2Checked'
"flex-1 gap-2"
Text
"text-muted-foreground text-sm"
By clicking this checkbox, you agree to the terms and conditions.
"toggle"
state.toggleChecked
'toggleChecked'
Enable notifications
'toggle2Checked'
"toggle-2"
state.toggle2Checked
"flex flex-1 flex-row items-start gap-3"
"border-blue-600 bg-blue-600 dark:border-blue-700"
"bg-blue-600 dark:bg-blue-700"
"text-white"
"flex-1"
"text-sm font-medium leading-none"
>Enable notifications</
You can enable or disable notifications at any time.
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add checkbox
bunx --bun @react-native-reusables/cli@latest add checkbox
pnpm dlx @react-native-reusables/cli@latest add checkbox
yarn dlx @react-native-reusables/cli@latest add checkbox
npx expo install @rn-primitives/checkbox
Copy and paste the following code into your project.
@/components/ui/icon.tsx
{ TextClassContext }
{ LucideIcon, LucideProps }
'lucide-react-native'
{ cssInterop }
'nativewind'
IconProps
LucideProps
LucideIcon
IconImpl
cssInterop
(IconImpl, {
className: {
'style'
nativeStyleToProp: {
'size'
@component
@example
* ```tsx
* import { ArrowRight } from 'lucide-react-native';
* import { Icon } from '@/registry/components/ui/icon';
* <Icon as={ArrowRight} className="text-red-500" size={16} />
@param
{LucideIcon}
{string}
{number}
{...LucideProps}
...props - Additional Lucide icon props passed to the "as" icon.
Icon
textClass
useContext
(TextClassContext);
'text-foreground'
, textClass, className)
{ Icon };
@/components/ui/checkbox.tsx
{ Icon }
'@/components/ui/icon'
'@rn-primitives/checkbox'
{ Check }
{ Platform }
CheckboxPrimitive.Root>
CheckboxPrimitive.Root
'overflow-hidden'
props.checked
'border-primary'
, checkedClassName),
props.disabled
'opacity-50'
hitSlop
CheckboxPrimitive.Indicator
, indicatorClassName)
Check
OS
'web'
'text-primary-foreground'
, iconClassName)
{ Checkbox };
{ withUniwind }
'uniwind'
StyledIcon
withUniwind
size: {
'className'
'width'
color: {
'color'
* <Icon as={ArrowRight} className="text-red-500 size-4" />
Update the import paths to match your project setup.
"@/components/ui/checkbox"
Card
Collapsible
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