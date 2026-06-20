# Select

Displays a list of options for the user to pick from—triggered by a button.

components/select
Preview
Installation
Usage
Example
Scrollable
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectTrigger,
SelectValue,
'@/components/ui/select'
{ TriggerRef }
'@rn-primitives/select'
React
'react'
{ Platform }
'react-native'
{ useSafeAreaInsets }
'react-native-safe-area-context'
{ label:
'Apple'
, value:
'apple'
'Banana'
'banana'
'Blueberry'
'blueberry'
'Grapes'
'grapes'
'Pineapple'
'pineapple'
React.
useRef
TriggerRef
top: insets.top,
({ ios: insets.bottom, android: insets.bottom
SelectValue
"Select a fruit"
SelectGroup
SelectLabel
>Fruits</
fruits.
SelectItem
fruit.value
fruit.label
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add select
bunx --bun @react-native-reusables/cli@latest add select
pnpm dlx @react-native-reusables/cli@latest add select
yarn dlx @react-native-reusables/cli@latest add select
npx expo install @rn-primitives/select
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
@/components/ui/native-only-animated-view.tsx
Animated
'react-native-reanimated'
@returns
The animated view if the platform is native, otherwise the children.
* <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
* <Text>I am only animated on native</Text>
* </NativeOnlyAnimatedView>
Animated.View>
(Platform.
OS
'web'
props.children
ReactNode
Animated.View
{ NativeOnlyAnimatedView };
@/components/ui/select.tsx
{ Icon }
'@/components/ui/icon'
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
{ Check, ChevronDown, ChevronDownIcon, ChevronUpIcon }
{ Platform, StyleSheet, View }
{ FadeIn, FadeOut }
{ FullWindowOverlay
RNFullWindowOverlay }
'react-native-screens'
Option
SelectPrimitive.Root;
SelectPrimitive.Group;
SelectPrimitive.Value>
SelectPrimitive.
SelectPrimitive.Value
'text-muted-foreground'
SelectPrimitive.Trigger>
'sm'
SelectPrimitive.Trigger
props.disabled
'opacity-50'
ChevronDown
"text-muted-foreground size-4"
'ios'
React.Fragment;
'popper'
portalHost
SelectPrimitive.Content>
SelectPrimitive.Portal
hostName
SelectPrimitive.Overlay
({ native: StyleSheet.absoluteFill })
TextClassContext.Provider
"text-popover-foreground"
"z-50"
FadeIn
FadeOut
SelectPrimitive.Content
props.side
'bottom'
'slide-in-from-top-2'
'top'
'slide-in-from-bottom-2'
'p-1'
'translate-y-1'
'-translate-y-1'
SelectPrimitive.Viewport
'w-full'
SelectPrimitive.Label>) {
SelectPrimitive.Label
, className)
SelectPrimitive.Item>) {
SelectPrimitive.Item
View
"absolute right-2 flex size-3.5 items-center justify-center"
SelectPrimitive.ItemIndicator
Check
"text-muted-foreground size-4 shrink-0"
SelectPrimitive.ItemText
"text-foreground group-active:text-accent-foreground select-none text-sm"
SelectPrimitive.Separator>) {
SelectPrimitive.Separator
'pointer-events-none'
@platform
Web only
* Returns null on native platforms
SelectPrimitive.ScrollUpButton>) {
SelectPrimitive.ScrollUpButton
"size-4"
SelectPrimitive.ScrollDownButton>) {
SelectPrimitive.ScrollDownButton
SelectScrollDownButton,
SelectScrollUpButton,
SelectSeparator,
Option,
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
{ Platform, ScrollView, StyleSheet, View }
Omit
SelectPrimitive.Item>,
'children'
Update the import paths to match your project setup.
w-0.5
Portal Setup Required
PortalHost
must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.
"@/components/ui/select"
'Select a fruit'
Apple
Banana
Blueberry
React Native Gesture Handler Required
Install
to your project and add the following
component to your
file or the file using the scrollable select.
{ ScrollView }
'react-native-gesture-handler'
Native only
* Returns the children on the web
ScrollView>) {
ScrollView
'max-h-52'
'Cherry'
'cherry'
'Strawberry'
'strawberry'
'Orange'
'orange'
'Lemon'
'lemon'
'Kiwi'
'kiwi'
'Mango'
'mango'
'Pomegranate'
'pomegranate'
'Watermelon'
'watermelon'
'Peach'
'peach'
'Pear'
'pear'
'Plum'
'plum'
'Raspberry'
'raspberry'
'Tangerine'
'tangerine'
Radio Group
Separator
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