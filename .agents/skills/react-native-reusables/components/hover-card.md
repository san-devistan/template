# Hover Card

For sighted users to preview content available behind a link.

components/hover-card
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Avatar, AvatarFallback, AvatarImage }
'@/components/ui/avatar'
{ Button }
'@/components/ui/button'
HoverCard,
HoverCardContent,
HoverCardTrigger,
'@/components/ui/hover-card'
{ Text }
'@/components/ui/text'
{ View }
'react-native'
{ useSafeAreaInsets }
'react-native-safe-area-context'
top: insets.top,
bottom: insets.bottom,
HoverCard
asChild
Button
"link"
Text
>@expo</
"w-80"
View
"flex flex-row justify-between gap-4"
Avatar
"Vercel avatar"
AvatarImage
{ uri:
>E</
"flex-1 gap-1"
"text-sm font-semibold"
"text-sm"
Framework and tools for creating native apps with React.
"text-muted-foreground text-xs"
>Joined December 2021</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add hover-card
bunx --bun @react-native-reusables/cli@latest add hover-card
pnpm dlx @react-native-reusables/cli@latest add hover-card
yarn dlx @react-native-reusables/cli@latest add hover-card
npx expo install @rn-primitives/hover-card
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
@/components/ui/hover-card.tsx
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
{ TextClassContext }
'@rn-primitives/hover-card'
{ Platform, StyleSheet }
{ FadeIn, FadeOut }
'react-native-reanimated'
{ FullWindowOverlay
RNFullWindowOverlay }
'react-native-screens'
HoverCardPrimitive.Root;
HoverCardPrimitive.Trigger;
OS
'ios'
React.Fragment;
'center'
sideOffset
HoverCardPrimitive.Content>) {
HoverCardPrimitive.Portal
HoverCardPrimitive.Overlay
({ native: StyleSheet.absoluteFill })
FadeIn
FadeOut
TextClassContext.Provider
"text-popover-foreground"
HoverCardPrimitive.Content
props.side
'bottom'
'slide-in-from-top-2'
'top'
'slide-in-from-bottom-2'
{ HoverCard, HoverCardContent, HoverCardTrigger };
Update the import paths to match your project setup.
w-0.5
Portal Setup Required
PortalHost
must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.
"@/components/ui/hover-card"
>Hover</
>The React Framework – created and maintained by @vercel.</
Dropdown Menu
Input
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