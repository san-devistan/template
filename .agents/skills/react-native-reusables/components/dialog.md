# Dialog

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

components/dialog
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Button }
'@/components/ui/button'
Dialog,
DialogClose,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
'@/components/ui/dialog'
{ Input }
'@/components/ui/input'
{ Label }
'@/components/ui/label'
{ Text }
'@/components/ui/text'
{ View }
'react-native'
asChild
Button
"outline"
Text
>Open Dialog</
DialogHeader
DialogTitle
>Edit profile</
Make changes to your profile here. Click save when you
re done.
View
"grid gap-4"
"grid gap-3"
Label
htmlFor
"name-1"
>Name</
Input
"Pedro Duarte"
"username-1"
>Username</
"@peduarte"
DialogFooter
DialogClose
>Cancel</
>Save changes</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add dialog
bunx --bun @react-native-reusables/cli@latest add dialog
pnpm dlx @react-native-reusables/cli@latest add dialog
yarn dlx @react-native-reusables/cli@latest add dialog
npx expo install @rn-primitives/dialog
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
@/components/ui/native-only-animated-view.tsx
{ Platform }
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
@/components/ui/dialog.tsx
{ Icon }
'@/components/ui/icon'
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
'@rn-primitives/dialog'
{ X }
{ Platform, Text, View,
ViewProps }
{ FadeIn, FadeOut }
{ FullWindowOverlay
RNFullWindowOverlay }
'react-native-screens'
DialogPrimitive.Root;
DialogPrimitive.Trigger;
DialogPortal
DialogPrimitive.Portal;
DialogPrimitive.Close;
'ios'
React.Fragment;
Omit
DialogPrimitive.Overlay>,
'asChild'
DialogPrimitive.Overlay
FadeIn.
FadeOut.
portalHost
DialogPrimitive.Content>
hostName
DialogPrimitive.Content
DialogPrimitive.Close
hitSlop
"sr-only"
>Close</
ViewProps
, className)
DialogPrimitive.Title>) {
DialogPrimitive.Title
DialogPrimitive.Description>) {
DialogPrimitive.Description
DialogOverlay,
DialogPortal,
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
w-0.5
Portal Setup Required
PortalHost
must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.
"@/components/ui/dialog"
>Open</
>Are you absolutely sure?</
This action cannot be undone. This will permanently delete your account and remove your data
from our servers.
Context Menu
Dropdown Menu
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