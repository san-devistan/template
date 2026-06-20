# Sign in form

A form for signing in using email and password or social providers.

blocks/authentication/sign-in-form
Preview
Installation
Clerk docs
*:hidden scroll-m-20
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add sign-in-form
bunx --bun @react-native-reusables/cli@latest add sign-in-form
pnpm dlx @react-native-reusables/cli@latest add sign-in-form
yarn dlx @react-native-reusables/cli@latest add sign-in-form
You can import
SignInForm
in your app.
tabIndex
{ SignInForm }
'@/components/sign-in-form'
{ ScrollView, View }
'react-native'
SignInScreen
ScrollView
"handled"
"sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
"interactive"
View
"w-full max-w-sm"
npx @react-native-reusables/cli@latest add sign-in-form-clerk
bunx --bun @react-native-reusables/cli@latest add sign-in-form-clerk
pnpm dlx @react-native-reusables/cli@latest add sign-in-form-clerk
yarn dlx @react-native-reusables/cli@latest add sign-in-form-clerk
If you haven't already
Expo quick start
to configure your app for Clerk.
You can now import
If missing, add the following block and/or components:
Button
Card
Input
Label
Separator
Text
Copy and paste the following code into your project.
@/components/sign-in-form.tsx
{ SocialConnections }
'@/components/social-connections'
{ Button }
'@/components/ui/button'
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
'@/components/ui/card'
{ Input }
'@/components/ui/input'
{ Label }
'@/components/ui/label'
{ Separator }
'@/components/ui/separator'
{ Text }
'@/components/ui/text'
React
'react'
{ Pressable,
TextInput, View }
React.
useRef
TextInput
passwordInputRef.current?.
onSubmit
"gap-6"
"border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5"
CardHeader
CardTitle
"text-center text-xl sm:text-left"
>Sign in to your app</
"text-center sm:text-left"
CardContent
"gap-1.5"
htmlFor
"email"
>Email</
"m@example.com"
keyboardType
"email-address"
autoComplete
"none"
"next"
"submit"
"flex-row items-center"
"password"
>Password</
"link"
"sm"
"web:h-fit ml-auto h-4 px-1 py-0 sm:h-4"
onPress
"font-normal leading-4"
>Forgot your password?</
"send"
"w-full"
>Continue</
"text-center text-sm"
Don
t have an account?
Pressable
"text-sm underline underline-offset-4"
>Sign up</
"flex-1"
"text-muted-foreground px-4 text-sm"
>or</
Adjust for your project setup.
Update the import paths to match your project structure, and address any
@clerk/expo
{ cn }
'@/lib/utils'
{ useSignIn }
'@clerk/expo'
signIn
fetchStatus
useSignIn
setEmail
useState
setPassword
setError
(fetchStatus
'fetching'
signIn.
identifier: email,
password,
(error) {
error.longMessage
error.message;
message.
toLowerCase
'identifier'
'email'
(isEmailMessage
{ email: message }
{ password: message });
(signIn.status
'needs_client_trust'
'Additional verification is required before this device can sign in.'
'complete'
({ email:
, password:
console.
JSON
(signIn,
(err) {
Error
err.message
'Something went wrong'
"border-border/0 shadow-none sm:border-border sm:shadow-sm sm:shadow-black/5"
>Sign in to clerk-auth</
onChangeText
error.email
"text-sm font-medium text-destructive"
error.password
, fetchStatus
'opacity-50'
"px-4 text-sm text-muted-foreground"
Sign up form
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