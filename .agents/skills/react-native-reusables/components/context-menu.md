# Context Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button.

components/context-menu
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
ContextMenu,
ContextMenuCheckboxItem,
ContextMenuContent,
ContextMenuItem,
ContextMenuLabel,
ContextMenuRadioGroup,
ContextMenuRadioItem,
ContextMenuSeparator,
ContextMenuShortcut,
ContextMenuSub,
ContextMenuSubContent,
ContextMenuSubTrigger,
ContextMenuTrigger,
'@/components/ui/context-menu'
{ Text }
'@/components/ui/text'
Haptics
'expo-haptics'
React
'react'
{ Platform }
'react-native'
{ useSafeAreaInsets }
'react-native-safe-area-context'
top: insets.top,
bottom: insets.bottom,
React.
useState
radioValue
'pedro'
onLongPress
Haptics.
impactAsync
(Haptics.ImpactFeedbackStyle.Light);
ContextMenu
Text
"text-sm"
Platform.
({ web:
'Right click here'
, native:
'Long press here'
"w-52"
>Back</
>Forward</
>Reload</
>⌘R</
>More Tools</
>Save Page...</
>Create Shortcut...</
>Name Window...</
>Developer Tools</
"destructive"
>Delete</
closeOnPress
>Show Bookmarks</
>Show Full URLs</
>People</
"pedro"
>Pedro Duarte</
"colm"
>Colm Tuite</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add context-menu
bunx --bun @react-native-reusables/cli@latest add context-menu
pnpm dlx @react-native-reusables/cli@latest add context-menu
yarn dlx @react-native-reusables/cli@latest add context-menu
npx expo install @rn-primitives/context-menu
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
@/components/ui/context-menu.tsx
{ Icon }
'@/components/ui/icon'
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
'@rn-primitives/context-menu'
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
ContextMenuPrimitive.Root;
ContextMenuPrimitive.Trigger;
ContextMenuPrimitive.Group;
ContextMenuPrimitive.Sub;
ContextMenuPrimitive.RadioGroup;
ContextMenuPrimitive.SubTrigger>
ReactNode
ContextMenuPrimitive.
OS
'web'
ChevronRight
ChevronUp
ChevronDown;
TextClassContext.Provider
'text-accent-foreground'
ContextMenuPrimitive.SubTrigger
className,
'bg-accent'
({ native:
'mb-1'
'pl-8'
, iconClassName)
ContextMenuPrimitive.SubContent>) {
FadeIn
ContextMenuPrimitive.SubContent
'ios'
React.Fragment;
overlayStyle
portalHost
ContextMenuPrimitive.Content>
StyleProp
ViewStyle
ContextMenuPrimitive.Portal
hostName
ContextMenuPrimitive.Overlay
StyleSheet.
StyleSheet.absoluteFill,
"text-popover-foreground"
ContextMenuPrimitive.Content
props.side
'bottom'
'slide-in-from-top-2'
'top'
'slide-in-from-bottom-2'
ContextMenuPrimitive.Item>
'destructive'
ContextMenuPrimitive.Item
props.disabled
'opacity-50'
ContextMenuPrimitive.CheckboxItem>
ContextMenuPrimitive.CheckboxItem
View
"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
ContextMenuPrimitive.ItemIndicator
Check
'pointer-events-none'
ContextMenuPrimitive.RadioItem>
ContextMenuPrimitive.RadioItem
"bg-foreground h-2 w-2 rounded-full"
ContextMenuPrimitive.Label>
ContextMenuPrimitive.Label
ContextMenuPrimitive.Separator>) {
ContextMenuPrimitive.Separator
, className)
Text>) {
ContextMenuGroup,
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
>Right click</
>Profile</
>Billing</
>Team</
>Subscription</
Collapsible
Dialog
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