# Card

Displays a card with header, content, and footer.

components/card
Preview
Installation
Usage
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
{ Text }
'@/components/ui/text'
{ View }
'react-native'
CardPreview
"w-full max-w-sm"
CardHeader
"flex-row"
View
"flex-1 gap-1.5"
CardTitle
>Subscribe to our newsletter</
>Enter your details to receive updates and tips</
CardContent
"w-full justify-center gap-4"
"gap-2"
Label
htmlFor
"email"
>Email</
Input
"m@example.com"
"name"
>Name</
"John Doe"
CardFooter
"flex-col gap-2"
Button
"w-full"
Text
>Subscribe</
"outline"
>Later</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add card
bunx --bun @react-native-reusables/cli@latest add card
pnpm dlx @react-native-reusables/cli@latest add card
yarn dlx @react-native-reusables/cli@latest add card
Copy and paste the following code into your project.
@/components/ui/text.tsx
{ cn }
'@/lib/utils'
{ Slot }
'@rn-primitives/slot'
{ cva,
VariantProps }
'class-variance-authority'
React
'react'
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
React.
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
@/components/ui/card.tsx
{ Text, TextClassContext }
View>
TextClassContext.Provider
"text-card-foreground"
, className)
Text>
Text>) {
"heading"
'px-6'
{ Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
Update the import paths to match your project setup.
>Card Title</
>Card Description</
>Card Content</
>Card Footer</
Checkbox
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