# Toggle Group

A set of two-state buttons that can be toggled on or off.

components/toggle-group
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Bold, Italic, Underline }
'lucide-react-native'
ToggleGroup,
ToggleGroupIcon,
ToggleGroupItem,
'@/components/ui/toggle-group'
React
'react'
Haptics
'expo-haptics'
setValue
React.
useState
Haptics.
impactAsync
(Haptics.ImpactFeedbackStyle.Light);
(value);
ToggleGroup
"outline"
"multiple"
isFirst
"bold"
"Toggle bold"
Bold
"italic"
"Toggle italic"
Italic
isLast
"strikethrough"
"Toggle strikethrough"
Underline
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add toggle-group
bunx --bun @react-native-reusables/cli@latest add toggle-group
pnpm dlx @react-native-reusables/cli@latest add toggle-group
yarn dlx @react-native-reusables/cli@latest add toggle-group
npx expo install @rn-primitives/toggle-group
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
Toggle
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
ToggleIcon
Icon>) {
{ Toggle, ToggleIcon, toggleVariants };
@/components/ui/toggle-group.tsx
{ toggleVariants }
'@/components/ui/toggle'
'@rn-primitives/toggle-group'
{ VariantProps }
toggleVariants>
ToggleGroupPrimitive.Root>
ToggleGroupPrimitive.Root
'w-fit'
'outline'
ToggleGroupContext.Provider
{ variant, size }
(ToggleGroupContext);
(context
Error
'ToggleGroup compound components cannot be rendered outside the ToggleGroup component'
context;
ToggleGroupPrimitive.Item>
ToggleGroupPrimitive.
ToggleGroupPrimitive.utils.
(value, props.value)
ToggleGroupPrimitive.Item
variant,
size,
'rounded-l-md'
'rounded-r-md'
(context.variant
'border-l-0'
'border-l'
{ ToggleGroup, ToggleGroupIcon, ToggleGroupItem };
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
{ ToggleGroup, ToggleGroupIcon, ToggleGroupItem }
'multiple'
'bold'
'Toggle bold'
'italic'
'Toggle italic'
'strikethrough'
'Toggle strikethrough'
Tooltip
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