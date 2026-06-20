# Popover

Displays rich content in a portal, triggered by a button.

components/popover
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
{ Input }
'@/components/ui/input'
{ Label }
'@/components/ui/label'
Popover,
PopoverContent,
PopoverTrigger,
'@/components/ui/popover'
{ Text }
'@/components/ui/text'
{ View }
'react-native'
asChild
Button
"outline"
Text
>Open popover</
"w-80"
"top"
View
"gap-4"
"gap-2"
"font-medium leading-none"
>Dimensions</
"text-muted-foreground text-sm"
>Set the dimensions for the layer.</
"flex-row items-center gap-4"
Label
"web:block w-24"
htmlFor
"width"
Width
Input
"flex-1 sm:h-8"
"maxWidth"
Max. width
"300px"
"height"
Height
"25px"
"maxHeight"
Max. height
"none"
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add popover
bunx --bun @react-native-reusables/cli@latest add popover
pnpm dlx @react-native-reusables/cli@latest add popover
yarn dlx @react-native-reusables/cli@latest add popover
npx expo install @rn-primitives/popover
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
@/components/ui/popover.tsx
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
{ TextClassContext }
'@rn-primitives/popover'
{ Platform, StyleSheet }
{ FadeIn, FadeOut }
'react-native-reanimated'
{ FullWindowOverlay
RNFullWindowOverlay }
'react-native-screens'
PopoverPrimitive.Root;
PopoverPrimitive.Trigger;
OS
'ios'
React.Fragment;
'center'
sideOffset
portalHost
PopoverPrimitive.Content>
PopoverPrimitive.Portal
hostName
PopoverPrimitive.Overlay
({ native: StyleSheet.absoluteFill })
FadeIn.
FadeOut
TextClassContext.Provider
"text-popover-foreground"
PopoverPrimitive.Content
props.side
'bottom'
'slide-in-from-top-2'
'top'
'slide-in-from-bottom-2'
{ Popover, PopoverContent, PopoverTrigger };
Update the import paths to match your project setup.
w-0.5
Portal Setup Required
PortalHost
must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.
"@/components/ui/popover"
>Open</
>Place content for the popover here.</
Menubar
Progress
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