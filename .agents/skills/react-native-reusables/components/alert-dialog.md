# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

components/alert-dialog
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
AlertDialog,
AlertDialogAction,
AlertDialogCancel,
AlertDialogContent,
AlertDialogDescription,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogTitle,
AlertDialogTrigger,
'@/components/ui/alert-dialog'
{ Button }
'@/components/ui/button'
{ Text }
'@/components/ui/text'
AlertDialog
asChild
Button
"outline"
Text
>Show Alert Dialog</
>Are you absolutely sure?</
This action cannot be undone. This will permanently delete your account and remove your
data from our servers.
>Cancel</
>Continue</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add alert-dialog
bunx --bun @react-native-reusables/cli@latest add alert-dialog
pnpm dlx @react-native-reusables/cli@latest add alert-dialog
yarn dlx @react-native-reusables/cli@latest add alert-dialog
npx expo install @rn-primitives/alert-dialog
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
RNText>
textClass
useContext
(TextClassContext);
Component
Slot
RNText;
({ variant }), textClass, className)
{ Text, TextClassContext };
@/components/ui/button.tsx
{ TextClassContext }
{ Platform, Pressable }
size: {
'text-primary-foreground'
'text-white'
'text-secondary-foreground'
ButtonProps
Pressable>
buttonVariants>;
TextClassContext.Provider
({ variant, size })
Pressable
(props.disabled
'opacity-50'
({ variant, size }), className)
"button"
{ Button, buttonTextVariants, buttonVariants };
{ ButtonProps };
@/components/ui/native-only-animated-view.tsx
{ Platform }
Animated
'react-native-reanimated'
@param
@returns
The animated view if the platform is native, otherwise the children.
@example
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
@/components/ui/alert-dialog.tsx
{ buttonTextVariants, buttonVariants }
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
'@rn-primitives/alert-dialog'
{ Platform, View,
ViewProps }
{ FadeIn, FadeOut }
{ FullWindowOverlay
RNFullWindowOverlay }
'react-native-screens'
AlertDialogPrimitive.Root;
AlertDialogPrimitive.Trigger;
AlertDialogPrimitive.Portal;
'ios'
React.Fragment;
Omit
AlertDialogPrimitive.Overlay>,
'asChild'
AlertDialogPrimitive.Overlay
FadeIn.
FadeOut.
portalHost
AlertDialogPrimitive.Content>
hostName
AlertDialogPrimitive.Content
ViewProps
"text-center sm:text-left"
View
, className)
AlertDialogPrimitive.Title>) {
AlertDialogPrimitive.Title
AlertDialogPrimitive.Description>) {
AlertDialogPrimitive.Description
AlertDialogPrimitive.Action>) {
({ className })
AlertDialogPrimitive.Action
(), className)
AlertDialogPrimitive.Cancel>) {
({ className, variant:
'outline'
AlertDialogPrimitive.Cancel
({ variant:
}), className)
AlertDialogOverlay,
AlertDialogPortal,
Update the import paths to match your project setup.
w-0.5
Portal Setup Required
PortalHost
must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.
This action cannot be undone. This will permanently delete your account and remove
your data from our servers.
Alert
Aspect Ratio
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