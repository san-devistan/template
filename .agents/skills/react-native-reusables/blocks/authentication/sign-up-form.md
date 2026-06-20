# Sign up form

A form for creating an account with email and password or social providers.

blocks/authentication/sign-up-form
Preview
Installation
Clerk docs
*:hidden scroll-m-20
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add sign-up-form
bunx --bun @react-native-reusables/cli@latest add sign-up-form
pnpm dlx @react-native-reusables/cli@latest add sign-up-form
yarn dlx @react-native-reusables/cli@latest add sign-up-form
You can import
SignUpForm
in your app.
tabIndex
{ SignUpForm }
'@/components/sign-up-form'
{ ScrollView, View }
'react-native'
SignUpScreen
ScrollView
"handled"
"sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
"interactive"
View
"w-full max-w-sm"
npx @react-native-reusables/cli@latest add sign-up-form-clerk
bunx --bun @react-native-reusables/cli@latest add sign-up-form-clerk
pnpm dlx @react-native-reusables/cli@latest add sign-up-form-clerk
yarn dlx @react-native-reusables/cli@latest add sign-up-form-clerk
If you haven't already
Expo quick start
to configure your app for Clerk.
If missing, add the following block and/or components:
Button
Card
Input
Label
Separator
Text
Copy and paste the following code into your project.
@/components/sign-up-form.tsx
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
{ Pressable, TextInput, View }
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
>Create your account</
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
"send"
"w-full"
onPress
>Continue</
"text-center text-sm"
Already have an account?
Pressable
"text-sm underline underline-offset-4"
>Sign in</
"flex-1"
"text-muted-foreground px-4 text-sm"
>or</
Adjust for your project setup.
Update the import paths to match your project structure, and address any
@clerk/expo
{ cn }
'@/lib/utils'
{ useSignUp }
'@clerk/expo'
signUp
fetchStatus
useSignUp
setEmail
useState
setPassword
setError
(fetchStatus
'fetching'
createError
signUp.
emailAddress: email,
password,
(createError) {
createError.longMessage
createError.message;
message.
toLowerCase
'identifier'
'email'
(isEmailMessage
{ email: message }
{ password: message });
signUp.verifications.
(sendCodeError) {
({ email: sendCodeError.longMessage
sendCodeError.message });
(err) {
Error
err.message
'Something went wrong'
onChangeText
error.email
"text-destructive text-sm font-medium"
error.password
, fetchStatus
'opacity-50'
Sign in form
Verify email form
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