# Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time.

components/tabs
Preview
Installation
Usage
Docs
API Reference
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Button }
'@/components/ui/button'
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
'@/components/ui/card'
{ Input }
'@/components/ui/input'
{ Label }
'@/components/ui/label'
{ Tabs, TabsContent, TabsList, TabsTrigger }
'@/components/ui/tabs'
{ Text }
'@/components/ui/text'
React
'react'
{ View }
'react-native'
TabsPreview
setValue
React.
useState
'feedback'
View
"flex w-full max-w-sm flex-col gap-6"
TabsList
TabsTrigger
"feedback"
Text
>Feedback</
"survey"
>Survey</
TabsContent
Card
CardHeader
CardTitle
Share your thoughts with us. Click submit when you’re ready.
CardContent
"gap-6"
"gap-3"
Label
htmlFor
"tabs-demo-name"
>Name</
Input
"Michael Scott"
"tabs-demo-message"
>Message</
"Where are the turtles?!"
CardFooter
Button
>Submit feedback</
>Quick Survey</
Answer a few quick questions to help improve the demo.
"tabs-demo-job-title"
>Job Title</
"Regional Manager"
"tabs-demo-favorite"
>Favorite feature</
"CLI"
>Submit survey</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add tabs
bunx --bun @react-native-reusables/cli@latest add tabs
pnpm dlx @react-native-reusables/cli@latest add tabs
yarn dlx @react-native-reusables/cli@latest add tabs
npx expo install @rn-primitives/tabs
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
@/components/ui/tabs.tsx
{ TextClassContext }
'@rn-primitives/tabs'
{ Platform }
TabsPrimitive.Root>) {
TabsPrimitive.Root
, className)
TabsPrimitive.List>) {
TabsPrimitive.List
, native:
'mr-auto'
TabsPrimitive.Trigger>) {
TabsPrimitive.
TextClassContext.Provider
props.value
TabsPrimitive.Trigger
props.disabled
'opacity-50'
TabsPrimitive.Content>) {
TabsPrimitive.Content
(Platform.
}), className)
{ Tabs, TabsContent, TabsList, TabsTrigger };
Update the import paths to match your project setup.
"@/components/ui/tabs"
'account'
"account"
>Account</
"password"
>Password</
>Make changes to your account here.</
>Change your password here.</
Switch
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