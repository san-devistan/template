# Tooltip

A popup that displays information related to an element when the element receives keyboard focus, the mouse hovers over it, or when it is pressed.

components/tooltip
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
{ Text }
'@/components/ui/text'
Tooltip,
TooltipContent,
TooltipTrigger,
'@/components/ui/tooltip'
{ Platform }
'react-native'
asChild
Button
"outline"
Text
Platform.
({ web:
'Hover'
, default:
'Press'
>Add to library</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add tooltip
bunx --bun @react-native-reusables/cli@latest add tooltip
pnpm dlx @react-native-reusables/cli@latest add tooltip
yarn dlx @react-native-reusables/cli@latest add tooltip
npx expo install @rn-primitives/tooltip
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
'select-text'
variants: {
variant: {
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
@/components/ui/tooltip.tsx
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
{ TextClassContext }
'@rn-primitives/tooltip'
{ Platform, StyleSheet }
{ FadeInDown, FadeInUp, FadeOut }
'react-native-reanimated'
{ FullWindowOverlay
RNFullWindowOverlay }
'react-native-screens'
TooltipPrimitive.Root;
TooltipPrimitive.Trigger;
OS
'ios'
React.Fragment;
sideOffset
portalHost
'top'
TooltipPrimitive.Content>
TooltipPrimitive.Portal
hostName
TooltipPrimitive.Overlay
({ native: StyleSheet.absoluteFill })
FadeInDown.
FadeInUp.
FadeOut
TextClassContext.Provider
"text-xs text-primary-foreground"
TooltipPrimitive.Content
'bottom'
'slide-in-from-top-2'
'left'
'slide-in-from-right-2'
'right'
'slide-in-from-left-2'
'slide-in-from-bottom-2'
{ Tooltip, TooltipContent, TooltipTrigger };
Update the import paths to match your project setup.
w-0.5
Portal Setup Required
PortalHost
must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.
"@/components/ui/tooltip"
"@/components/ui/text"
>Hover</
Toggle Group
Create Your Own Registry
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