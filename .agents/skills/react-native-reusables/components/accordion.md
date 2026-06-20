# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

components/accordion
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
'@/components/ui/accordion'
{ Text }
'@/components/ui/text'
"single"
"w-full max-w-lg"
"item-1"
Text
>Product Information</
"flex flex-col gap-4 text-balance"
premium materials, it offers unparalleled performance and reliability.
Key features include advanced processing capabilities, and an intuitive user interface
designed for both beginners and experts.
"item-2"
>Shipping Details</
We offer worldwide shipping through trusted courier partners. Standard delivery takes
3-5 business days, while express shipping ensures delivery within 1-2 business days.
through our dedicated tracking portal.
"item-3"
>Return Policy</
not completely satisfied, simply return the item in its original condition.
within 48 hours of receiving the returned item.
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add accordion
bunx --bun @react-native-reusables/cli@latest add accordion
pnpm dlx @react-native-reusables/cli@latest add accordion
yarn dlx @react-native-reusables/cli@latest add accordion
Update
@type
{import('tailwindcss').Config}
theme: {
extend: {
keyframes: {
'accordion-down'
from: { height:
to: { height:
'var(--radix-accordion-content-height)'
'accordion-up'
animation: {
npx expo install @rn-primitives/accordion
Copy and paste the following code into your project.
@/components/ui/text.tsx
{ cn }
'@/lib/utils'
{ Slot }
'@rn-primitives/slot'
{ cva,
VariantProps }
'class-variance-authority'
React
'react'
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
React.
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
'text-foreground'
, textClass, className)
{ Icon };
@/components/ui/accordion.tsx
{ Icon }
'@/components/ui/icon'
'@rn-primitives/accordion'
{ ChevronDown }
{ Platform, Pressable, View }
Animated, {
FadeOutUp,
LayoutAnimationConfig,
LinearTransition,
useAnimatedStyle,
useDerivedValue,
withTiming,
'react-native-reanimated'
Omit
AccordionPrimitive.Root>,
'asChild'
skipEntering
AccordionPrimitive.Root
(props
RootProps
OS
'web'
Animated.View
LinearTransition.
AccordionPrimitive.Item>) {
AccordionPrimitive.Item
({ native: LinearTransition.
Trigger
View
Pressable;
AccordionPrimitive.Trigger>
ReactNode
isExpanded
AccordionPrimitive.
(isExpanded
withTiming
, { duration:
chevronStyle
}deg`
TextClassContext.Provider
AccordionPrimitive.Header
AccordionPrimitive.Trigger
ChevronDown
AccordionPrimitive.Content>) {
"text-sm"
AccordionPrimitive.Content
'overflow-hidden'
'animate-accordion-down'
'animate-accordion-up'
({ native: FadeOutUp.
'pb-4'
, className)
{ Accordion, AccordionContent, AccordionItem, AccordionTrigger };
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
'single'
'item-1'
>Is it accessible?</
>Yes. It adheres to the WAI-ARIA design pattern.</
User menu
Alert
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