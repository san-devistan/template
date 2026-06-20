# Verify email form

A form for verifying an email address with an OTP sent via email.

blocks/authentication/verify-email-form
Preview
Installation
Clerk docs
*:hidden scroll-m-20
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add verify-email-form
bunx --bun @react-native-reusables/cli@latest add verify-email-form
pnpm dlx @react-native-reusables/cli@latest add verify-email-form
yarn dlx @react-native-reusables/cli@latest add verify-email-form
You can import
in your app.
tabIndex
{ VerifyEmailForm }
'@/components/verify-email-form'
{ ScrollView, View }
'react-native'
ScrollView
"handled"
"sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
"interactive"
View
"w-full max-w-sm"
npx @react-native-reusables/cli@latest add verify-email-form-clerk
bunx --bun @react-native-reusables/cli@latest add verify-email-form-clerk
pnpm dlx @react-native-reusables/cli@latest add verify-email-form-clerk
yarn dlx @react-native-reusables/cli@latest add verify-email-form-clerk
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
@/components/verify-email-form.tsx
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
TextStyle, View }
TextStyle
'tabular-nums'
useCountdown
onSubmit
"gap-6"
CardHeader
CardTitle
"text-center text-xl sm:text-left"
>Verify your email</
"text-center sm:text-left"
Enter the verification code sent to m@example.com
CardContent
"gap-1.5"
htmlFor
"code"
>Verification code</
"none"
"send"
keyboardType
"numeric"
autoComplete
"sms-otp"
"oneTimeCode"
"link"
"sm"
onPress
"text-center text-xs"
Didn
t receive the code? Resend
"text-xs"
"gap-3"
"w-full"
>Continue</
"mx-auto"
>Cancel</
setCountdown
React.
useState
(seconds);
intervalRef
useRef
ReturnType
setInterval>
useCallback
(intervalRef.current
(intervalRef.current);
intervalRef.current
setInterval
(prev
useEffect
stopCountdown;
{ countdown, restartCountdown: startCountdown };
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
setCode
setError
(fetchStatus
'fetching'
signUp.verifications.
code,
(verifyCodeError) {
(verifyCodeError.longMessage
verifyCodeError.message);
(signUp.status
'complete'
signUp.
console.
JSON
(signUp,
(err) {
(err
Error
err.message
'Something went wrong'
onResendCode
(sendCodeError) {
(sendCodeError.longMessage
sendCodeError.message);
"border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5"
onChangeText
"text-destructive text-sm font-medium"
, fetchStatus
'opacity-50'
Sign up form
Reset password form
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