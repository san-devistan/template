# Social connections

A set of buttons for authenticating through social providers.

blocks/authentication/social-connections
Preview
Installation
Clerk docs
*:hidden scroll-m-20
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add social-connections
bunx --bun @react-native-reusables/cli@latest add social-connections
pnpm dlx @react-native-reusables/cli@latest add social-connections
yarn dlx @react-native-reusables/cli@latest add social-connections
You can import
in your app.
tabIndex
{ SocialConnections }
'@/components/social-connections'
{ View }
'react-native'
View
"w-full max-w-sm"
npx @react-native-reusables/cli@latest add social-connections-clerk
bunx --bun @react-native-reusables/cli@latest add social-connections-clerk
pnpm dlx @react-native-reusables/cli@latest add social-connections-clerk
yarn dlx @react-native-reusables/cli@latest add social-connections-clerk
If you haven't already
Expo quick start
to configure your app for Clerk.
If missing, add the following component:
Button
Copy and paste the following code into your project.
@/components/social-connections.tsx
{ cn }
'@/lib/utils'
{ Button }
'@/components/ui/button'
{ useColorScheme }
'nativewind'
{ Image, Platform, View }
'oauth_apple'
source: { uri:
'oauth_google'
'oauth_github'
colorScheme
"gap-2 sm:flex-row sm:gap-3"
strategy.type
"outline"
"sm"
onPress
Image
'size-4'
, strategy.useTint
Platform.
({ web:
tintColor
(colorScheme
'dark'
'white'
'black'
strategy.source
Adjust for your project setup.
Update the import paths to match your project structure, and address any
@clerk/expo
{ useSSO,
StartSSOFlowParams }
'@clerk/expo'
AuthSession
'expo-auth-session'
WebBrowser
'expo-web-browser'
React
'react'
{ Image, Platform, View,
ImageSourcePropType }
WebBrowser.
Extract
'strategy'
useTint
startSSOFlow
useSSO
setActive
signIn
strategy,
(createdSessionId
setActive) {
({ session: createdSessionId });
(err) {
console.
JSON
(err,
(strategy.type)
React.
useEffect
warmUpAsync
Forgot password form
User menu
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