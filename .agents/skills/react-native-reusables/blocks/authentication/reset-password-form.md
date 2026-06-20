# Reset password form

A form for resetting a password with an OTP sent via email.

blocks/authentication/reset-password-form
Preview
Installation
Clerk docs
*:hidden scroll-m-20
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add reset-password-form
bunx --bun @react-native-reusables/cli@latest add reset-password-form
pnpm dlx @react-native-reusables/cli@latest add reset-password-form
yarn dlx @react-native-reusables/cli@latest add reset-password-form
You can import
in your app.
tabIndex
{ ResetPasswordForm }
'@/components/reset-password-form'
{ ScrollView, View }
'react-native'
ScrollView
"handled"
"sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
"interactive"
View
"w-full max-w-sm"
npx @react-native-reusables/cli@latest add reset-password-form-clerk
bunx --bun @react-native-reusables/cli@latest add reset-password-form-clerk
pnpm dlx @react-native-reusables/cli@latest add reset-password-form-clerk
yarn dlx @react-native-reusables/cli@latest add reset-password-form-clerk
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
@/components/reset-password-form.tsx
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
React
'react'
{ TextInput, View }
codeInputRef
React.
useRef
TextInput
codeInputRef.current?.
onSubmit
"gap-6"
"border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5"
CardHeader
CardTitle
"text-center text-xl sm:text-left"
>Reset password</
"text-center sm:text-left"
Enter the code sent to your email and set a new password
CardContent
"gap-1.5"
"flex-row items-center"
htmlFor
"password"
>New password</
"next"
"submit"
"code"
>Verification code</
"none"
"send"
keyboardType
"numeric"
autoComplete
"sms-otp"
"oneTimeCode"
"w-full"
onPress
>Reset Password</
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
setPassword
useState
setCode
setError
({ code:
, password:
(fetchStatus
'fetching'
signIn.resetPasswordEmailCode.
verifyCode
code,
(verifyCodeError) {
({ code: verifyCodeError.longMessage
verifyCodeError.message, password:
password,
(submitPasswordError) {
submitPasswordError.message,
(signIn.status
'complete'
signIn.
(err) {
Error
err.message
'Something went wrong'
message.
toLowerCase
'password'
message,
console.
(err);
"border-border/0 shadow-none sm:border-border sm:shadow-sm sm:shadow-black/5"
onChangeText
error.password
"text-sm font-medium text-destructive"
error.code
, fetchStatus
'opacity-50'
Verify email form
Forgot password form
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