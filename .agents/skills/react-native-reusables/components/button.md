# Button

Displays a button or a component that looks like a button.

components/button
Preview
Installation
Usage
Link
Examples
Primary
Secondary
Destructive
Outline
Ghost
Icon
With Icon
Loading
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Button }
'@/components/ui/button'
{ Text }
'@/components/ui/text'
Text
>Button</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add button
bunx --bun @react-native-reusables/cli@latest add button
pnpm dlx @react-native-reusables/cli@latest add button
yarn dlx @react-native-reusables/cli@latest add button
npx expo install @rn-primitives/slot
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
'react-native'
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
@/components/ui/button.tsx
{ TextClassContext }
{ Platform, Pressable }
size: {
'text-primary-foreground'
'text-white'
'text-secondary-foreground'
ButtonProps
Pressable>
buttonVariants>;
TextClassContext.Provider
({ variant, size })
Pressable
(props.disabled
'opacity-50'
({ variant, size }), className)
"button"
{ Button, buttonTextVariants, buttonVariants };
{ ButtonProps };
Update the import paths to match your project setup.
You can use the
helpers to create a link that looks like a button.
{ buttonVariants, buttonTextVariants }
"@/components/ui/button"
({ variant:
'outline'
>Click here</
Alternatively, you can set the
parameter and nest the link component.
"/login"
>Login</
"secondary"
>Secondary</
"destructive"
>Destructive</
"outline"
>Outline</
"ghost"
>Ghost</
"link"
>Link</
{ Icon }
'@/components/ui/icon'
{ ChevronRight }
'lucide-react-native'
"icon"
ChevronRight
{ Mail }
Mail
"text-primary-foreground"
>Login with Email</
{ Loader2 }
{ View }
View
"pointer-events-none animate-spin"
Loader2
>Please wait</
Badge
Card
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