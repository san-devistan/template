# Forgot password form

A form that sends a password reset OTP to the user's email address.

blocks/authentication/forgot-password-form
Preview
Installation
Clerk docs
*:hidden scroll-m-20
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add forgot-password-form
bunx --bun @react-native-reusables/cli@latest add forgot-password-form
pnpm dlx @react-native-reusables/cli@latest add forgot-password-form
yarn dlx @react-native-reusables/cli@latest add forgot-password-form
You can import
in your app.
tabIndex
{ ForgotPasswordForm }
'@/components/forgot-password-form'
{ ScrollView, View }
'react-native'
ScrollView
"handled"
"sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
"interactive"
View
"w-full max-w-sm"
npx @react-native-reusables/cli@latest add forgot-password-form-clerk
bunx --bun @react-native-reusables/cli@latest add forgot-password-form-clerk
pnpm dlx @react-native-reusables/cli@latest add forgot-password-form-clerk
yarn dlx @react-native-reusables/cli@latest add forgot-password-form-clerk
If you haven't already
Expo quick start
to configure your app for Clerk.
If missing, add the following components:
Button
Card
Input
Label
Text
Copy and paste the following code into your project.
@/components/forgot-password-form.tsx
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
{ Text }
'@/components/ui/text'
{ View }
onSubmit
"gap-6"
"border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5"
CardHeader
CardTitle
"text-center text-xl sm:text-left"
>Forgot password?</
"text-center sm:text-left"
Enter your email to reset your password
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
"send"
"w-full"
onPress
>Reset your password</
Adjust for your project setup.
Update the import paths to match your project structure, and address any
@clerk/expo
{ cn }
'@/lib/utils'
{ useSignIn }
'@clerk/expo'
React
'react'
setEmail
React.
useState
signIn
fetchStatus
useSignIn
setError
email) {
({ email:
'Email is required'
(fetchStatus
'fetching'
createError
signIn.
identifier: email,
(createError) {
({ email: createError.longMessage
createError.message });
signIn.resetPasswordEmailCode.
sendCode
(sendCodeError) {
({ email: sendCodeError.longMessage
sendCodeError.message });
(err) {
({ email: err
Error
err.message
'Something went wrong'
"border-border/0 shadow-none sm:border-border sm:shadow-sm sm:shadow-black/5"
defaultValue
onChangeText
error.email
"text-sm font-medium text-destructive"
, fetchStatus
'opacity-50'
Reset password form
Social connections
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