# Badge

Displays a badge or a component that looks like a badge.

components/badge
Preview
Installation
Usage
Link
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Badge }
'@/components/ui/badge'
{ Icon }
'@/components/ui/icon'
{ Text }
'@/components/ui/text'
{ BadgeCheckIcon }
'lucide-react-native'
{ View }
'react-native'
BadgePreview
View
"flex flex-col items-center gap-2"
"flex w-full flex-row flex-wrap gap-2"
Text
>Badge</
"secondary"
>Secondary</
"destructive"
>Destructive</
"outline"
>Outline</
"bg-blue-500 dark:bg-blue-600"
Icon
"text-white"
>Verified</
"min-w-5 rounded-full px-1"
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add badge
bunx --bun @react-native-reusables/cli@latest add badge
pnpm dlx @react-native-reusables/cli@latest add badge
yarn dlx @react-native-reusables/cli@latest add badge
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
@/components/ui/badge.tsx
{ TextClassContext }
{ Platform, View }
'text-primary-foreground'
'text-secondary-foreground'
'text-white'
'text-foreground'
BadgeProps
View>
badgeVariants>;
View;
TextClassContext.Provider
({ variant })
({ variant }), className)
{ Badge, badgeTextVariants, badgeVariants };
{ BadgeProps };
Update the import paths to match your project setup.
You can use the
helpers to create a link that looks like a badge.
{ badgeVariants, badgeTextVariants }
"@/components/ui/badge"
({ variant:
'outline'
Avatar
Button
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