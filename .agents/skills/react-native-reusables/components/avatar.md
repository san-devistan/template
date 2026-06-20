# Avatar

An image element with a fallback for representing the user.

components/avatar
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
{ Text }
'@/components/ui/text'
{ View }
'react-native'
View
"flex-row flex-wrap gap-12"
"@mrzachnugent"
"border-background web:border-0 web:ring-2 web:ring-background border-2"
AvatarImage
{ uri:
Text
>ZN</
"@shadcn"
>CN</
"flex-row"
"border-background web:border-0 web:ring-2 web:ring-background -mr-2 border-2"
"@leerob"
>LR</
"@evilrabbit"
>ER</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add avatar
bunx --bun @react-native-reusables/cli@latest add avatar
pnpm dlx @react-native-reusables/cli@latest add avatar
yarn dlx @react-native-reusables/cli@latest add avatar
npx expo install @rn-primitives/avatar
Copy and paste the following code into your project.
@/components/ui/avatar.tsx
{ cn }
'@/lib/utils'
'@rn-primitives/avatar'
React
AvatarPrimitive.Root>) {
AvatarPrimitive.Root
, className)
AvatarPrimitive.Image>) {
AvatarPrimitive.Image
AvatarPrimitive.Fallback>) {
AvatarPrimitive.Fallback
{ Avatar, AvatarFallback, AvatarImage };
Update the import paths to match your project setup.
"Zach Nugent's Avatar"
Aspect Ratio
Badge
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