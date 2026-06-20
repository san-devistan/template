# Dropdown Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button.

components/dropdown-menu
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
DropdownMenu,
DropdownMenuContent,
DropdownMenuGroup,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuShortcut,
DropdownMenuSub,
DropdownMenuSubContent,
DropdownMenuSubTrigger,
DropdownMenuTrigger,
'@/components/ui/dropdown-menu'
{ Text }
'@/components/ui/text'
{ useSafeAreaInsets }
'react-native-safe-area-context'
top: insets.top,
bottom: insets.bottom,
DropdownMenu
asChild
Button
"outline"
Text
>Open</
sideOffset
"w-56"
"start"
>My Account</
>Profile</
>⇧⌘P</
>Billing</
>⌘B</
>Settings</
>⌘S</
>Keyboard shortcuts</
>⌘K</
>Team</
>Invite users</
>Email</
>Message</
>More...</
>New Team</
>⌘+T</
>GitHub</
>Support</
>API</
>Log out</
>⇧⌘Q</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add dropdown-menu
bunx --bun @react-native-reusables/cli@latest add dropdown-menu
pnpm dlx @react-native-reusables/cli@latest add dropdown-menu
yarn dlx @react-native-reusables/cli@latest add dropdown-menu
npx expo install @rn-primitives/dropdown-menu
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
@/components/ui/dropdown-menu.tsx
{ Icon }
'@/components/ui/icon'
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
'@rn-primitives/dropdown-menu'
{ Check, ChevronDown, ChevronRight, ChevronUp }
Platform,
StyleProp,
StyleSheet,
Text,
View,
ViewStyle,
{ FadeIn }
'react-native-reanimated'
{ FullWindowOverlay
RNFullWindowOverlay }
'react-native-screens'
DropdownMenuPrimitive.Root;
DropdownMenuPrimitive.Trigger;
DropdownMenuPrimitive.Group;
DropdownMenuPrimitive.Portal;
DropdownMenuPrimitive.Sub;
DropdownMenuPrimitive.RadioGroup;
DropdownMenuPrimitive.SubTrigger>
ReactNode
DropdownMenuPrimitive.
OS
'web'
ChevronRight
ChevronUp
ChevronDown;
TextClassContext.Provider
'text-accent-foreground'
DropdownMenuPrimitive.SubTrigger
className,
'bg-accent'
'pl-8'
, iconClassName)
DropdownMenuPrimitive.SubContent>) {
FadeIn
DropdownMenuPrimitive.SubContent
'ios'
React.Fragment;
overlayStyle
portalHost
DropdownMenuPrimitive.Content>
StyleProp
ViewStyle
DropdownMenuPrimitive.Portal
hostName
DropdownMenuPrimitive.Overlay
StyleSheet.
StyleSheet.absoluteFill,
"text-popover-foreground"
DropdownMenuPrimitive.Content
props.side
'bottom'
'slide-in-from-top-2'
'top'
'slide-in-from-bottom-2'
DropdownMenuPrimitive.Item>
'destructive'
DropdownMenuPrimitive.Item
props.disabled
'opacity-50'
DropdownMenuPrimitive.CheckboxItem>
DropdownMenuPrimitive.CheckboxItem
View
"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
DropdownMenuPrimitive.ItemIndicator
Check
'pointer-events-none'
DropdownMenuPrimitive.RadioItem>
DropdownMenuPrimitive.RadioItem
"bg-foreground h-2 w-2 rounded-full"
DropdownMenuPrimitive.Label>
DropdownMenuPrimitive.Label
DropdownMenuPrimitive.Separator>) {
DropdownMenuPrimitive.Separator
, className)
Text>) {
DropdownMenuCheckboxItem,
DropdownMenuPortal,
DropdownMenuRadioGroup,
DropdownMenuRadioItem,
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
"@/components/ui/dropdown-menu"
Dialog
Hover Card
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