# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

components/menubar
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
Menubar,
MenubarCheckboxItem,
MenubarContent,
MenubarItem,
MenubarMenu,
MenubarRadioGroup,
MenubarRadioItem,
MenubarSeparator,
MenubarShortcut,
MenubarSub,
MenubarSubContent,
MenubarSubTrigger,
MenubarTrigger,
'@/components/ui/menubar'
{ Text }
'@/components/ui/text'
React
'react'
Animated, { FadeIn }
'react-native-reanimated'
{ useSafeAreaInsets }
'react-native-safe-area-context'
top: insets.top,
bottom: insets.bottom,
setValue
React.
useState
isSubOpen
setIsSubOpen
isSubOpen2
isChecked
setIsChecked
isChecked2
setRadio
'michael'
* NOTE:
* On mobile, if the menu is open and the user is about to go to a new screen,
* it's best to close the menu first.
closeSubs
'string'
(val);
MenubarMenu
"file"
onPress
Text
>File</
MenubarItem
>New Tab</
>⌘T</
>New Window</
>⌘N</
>New Incognito Window</
MenubarSub
onOpenChange
>Share</
Animated.View
FadeIn.
>Email link</
>Messages</
>Notes</
>Print...</
>⌘P</
"edit"
>Edit</
>Undo</
>⌘Z</
>Redo</
>⇧⌘Z</
>Find</
>Search the web</
>Find...</
>Find Next</
>Find Previous</
>Cut</
>Copy</
>Paste</
"view"
>View</
closeOnPress
>Always Show Bookmarks Bar</
>Always Show Full URLs</
>Reload</
>⌘R</
>Force Reload</
>⇧⌘R</
>Toggle Fullscreen</
>Hide Sidebar</
"profile"
>Profiles</
"andy"
>Andy</
"michael"
>Michael</
"creed"
>Creed</
>Edit...</
>Add Profile...</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add menubar
bunx --bun @react-native-reusables/cli@latest add menubar
pnpm dlx @react-native-reusables/cli@latest add menubar
yarn dlx @react-native-reusables/cli@latest add menubar
npx expo install @rn-primitives/menubar
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
@/components/ui/menubar.tsx
{ Icon }
'@/components/ui/icon'
{ NativeOnlyAnimatedView }
'@/components/ui/native-only-animated-view'
'@rn-primitives/menubar'
{ Portal }
'@rn-primitives/portal'
{ Check, ChevronDown, ChevronRight, ChevronUp }
Platform,
Pressable,
StyleProp,
StyleSheet,
Text,
View,
ViewStyle,
{ FadeIn }
{ FullWindowOverlay
RNFullWindowOverlay }
'react-native-screens'
MenubarPrimitive.Menu;
MenubarGroup
MenubarPrimitive.Group;
MenubarPrimitive.Portal;
MenubarPrimitive.Sub;
MenubarPrimitive.RadioGroup;
OS
'ios'
React.Fragment;
valueProp
MenubarPrimitive.Root>) {
useId
closeMenu
(onValueChangeProp) {
'web'
(value
valueProp)
Portal
`menubar-overlay-${
Pressable
StyleSheet.absoluteFill
MenubarPrimitive.Root
MenubarPrimitive.Trigger>) {
MenubarPrimitive.
itemValue
TextClassContext.Provider
'text-accent-foreground'
MenubarPrimitive.Trigger
'bg-accent'
MenubarPrimitive.SubTrigger>
ReactNode
ChevronRight
ChevronUp
ChevronDown;
MenubarPrimitive.SubTrigger
className,
'pl-8'
, iconClassName)
MenubarPrimitive.SubContent>) {
FadeIn
MenubarPrimitive.SubContent
portalHost
'start'
alignOffset
sideOffset
MenubarPrimitive.Content>
MenubarPrimitive.Portal
hostName
"box-none"
"text-popover-foreground"
MenubarPrimitive.Content
props.side
'bottom'
'slide-in-from-top-2'
'top'
'slide-in-from-bottom-2'
MenubarPrimitive.Item>
'destructive'
MenubarPrimitive.Item
props.disabled
'opacity-50'
MenubarPrimitive.CheckboxItem>
MenubarPrimitive.CheckboxItem
View
"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
MenubarPrimitive.ItemIndicator
Check
'pointer-events-none'
MenubarPrimitive.RadioItem>
MenubarPrimitive.RadioItem
"bg-foreground h-2 w-2 rounded-full"
MenubarLabel
MenubarPrimitive.Label>
MenubarPrimitive.Label
MenubarPrimitive.Separator>) {
MenubarPrimitive.Separator
, className)
Text>) {
MenubarGroup,
MenubarLabel,
MenubarPortal,
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
overlayStyle
StyleProp
ViewStyle
Update the import paths to match your project setup.
w-0.5
Portal Setup Required
PortalHost
must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.
"@/components/ui/menubar"
>Print</
Label
Popover
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