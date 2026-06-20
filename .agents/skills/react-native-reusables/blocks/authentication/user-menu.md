# User menu

A popover menu presenting options and actions for the current user.

blocks/authentication/user-menu
Preview
Installation
Clerk docs
*:hidden scroll-m-20
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add user-menu
bunx --bun @react-native-reusables/cli@latest add user-menu
pnpm dlx @react-native-reusables/cli@latest add user-menu
yarn dlx @react-native-reusables/cli@latest add user-menu
You can import
UserMenu
in your app.
tabIndex
{ UserMenu }
'@/components/user-menu'
{ View }
'react-native'
View
npx @react-native-reusables/cli@latest add user-menu-clerk
bunx --bun @react-native-reusables/cli@latest add user-menu-clerk
pnpm dlx @react-native-reusables/cli@latest add user-menu-clerk
yarn dlx @react-native-reusables/cli@latest add user-menu-clerk
If you haven't already
Expo quick start
to configure your app for Clerk.
If missing, add the following components:
Avatar
Button
Popover
Text
Copy and paste the following code into your project.
@/components/user-menu.tsx
{ Avatar, AvatarFallback, AvatarImage }
'@/components/ui/avatar'
{ Button }
'@/components/ui/button'
{ Icon }
'@/components/ui/icon'
Popover,
PopoverContent,
PopoverTrigger,
'@/components/ui/popover'
{ Text }
'@/components/ui/text'
{ cn }
'@/lib/utils'
{ TriggerRef }
'@rn-primitives/popover'
{ LogOutIcon, PlusIcon, SettingsIcon }
'lucide-react-native'
React
'react'
USER
'Zach Nugent'
'ZN'
imgSrc: { uri:
'mrzachnugent'
React.
useRef
TriggerRef
onSignOut
popoverTriggerRef.current?.
asChild
"ghost"
"icon"
"size-8 rounded-full"
UserAvatar
"center"
"bottom"
"w-80 p-0"
"border-border gap-3 border-b p-3"
"flex-row items-center gap-3"
"size-10"
"flex-1"
"font-medium leading-5"
.fullName
.fullName?.
"text-muted-foreground text-sm font-normal leading-4"
.username
"flex-row flex-wrap gap-3 py-0.5"
"outline"
"sm"
onPress
Icon
SettingsIcon
"size-4"
>Manage Account</
LogOutIcon
>Sign Out</
"lg"
"h-16 justify-start gap-3 rounded-none rounded-b-md px-3 sm:h-14"
"size-10 items-center justify-center"
PlusIcon
"size-5"
>Add account</
Omit
Avatar>,
'alt'
fullName
}'s avatar`
'size-8'
, className)
AvatarImage
.imgSrc
.initials
Adjust for your project setup.
Update the import paths to match your project structure, and address any
@clerk/expo
{ useAuth, useUser }
'@clerk/expo'
useUser
signOut
useAuth
"end"
user?.fullName
user?.fullName?.
user?.username
imageSource
userName
useMemo
'Unknown'
user?.imageUrl
{ uri: user.imageUrl }
{ initials, imageSource, userName };
Social connections
Accordion
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