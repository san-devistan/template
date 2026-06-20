# Toggle

A two-state button that can be either on or off.

components/toggle
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Toggle, ToggleIcon }
'@/components/ui/toggle'
{ Bold }
'lucide-react-native'
React
'react'
Haptics
'expo-haptics'
setPressed
React.
useState
Haptics.
impactAsync
(Haptics.ImpactFeedbackStyle.Light);
(pressed);
"Toggle italic"
ToggleIcon
Bold
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add toggle
bunx --bun @react-native-reusables/cli@latest add toggle
pnpm dlx @react-native-reusables/cli@latest add toggle
yarn dlx @react-native-reusables/cli@latest add toggle
npx expo install @rn-primitives/toggle
Copy and paste the following code into your project.
@/components/ui/text.tsx
{ cn }
'@/lib/utils'
{ Slot }
'@rn-primitives/slot'
{ cva,
VariantProps }
'class-variance-authority'
{ Platform, Text
RNText,
Role }
'react-native'
textVariants
Platform.
'select-text'
variants: {
variant: {
({ web:
, Platform.
'scroll-m-20'
defaultVariants: {
'default'
VariantProps
textVariants>;
TextVariant
NonNullable
'variant'
ROLE
Partial
Record
Role
'heading'
'blockquote'
'code'
ARIA_LEVEL
Text
asChild
RNText>
textClass
useContext
(TextClassContext);
Component
Slot
RNText;
({ variant }), textClass, className)
{ Text, TextClassContext };
@/components/ui/icon.tsx
{ TextClassContext }
'@/components/ui/text'
{ LucideIcon, LucideProps }
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
'text-foreground'
, textClass, className)
{ Icon };
@/components/ui/toggle.tsx
{ Icon }
'@/components/ui/icon'
'@rn-primitives/toggle'
{ Platform }
'bg-transparent'
size: {
TogglePrimitive.Root>
toggleVariants>) {
TextClassContext.Provider
props.pressed
'text-accent-foreground'
TogglePrimitive.Root
({ variant, size }),
props.disabled
'opacity-50'
'bg-accent'
Icon>) {
{ Toggle, ToggleIcon, toggleVariants };
{ withUniwind }
'uniwind'
StyledIcon
withUniwind
'className'
'width'
color: {
'color'
* <Icon as={ArrowRight} className="text-red-500 size-4" />
Update the import paths to match your project setup.
{ Toggle }
"@/components/ui/toggle"
Textarea
Toggle Group
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