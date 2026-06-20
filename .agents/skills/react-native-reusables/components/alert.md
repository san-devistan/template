# Alert

Displays a callout for user attention.

components/alert
Preview
Installation
Usage
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Alert, AlertDescription, AlertTitle }
'@/components/ui/alert'
{ Text }
'@/components/ui/text'
{ AlertCircleIcon, CheckCircle2Icon, Terminal }
'lucide-react-native'
{ View }
'react-native'
AlertPreview
View
"w-full max-w-xl gap-4"
AlertTitle
>Success! Your changes have been saved</
>This is an alert with icon, title and description.</
Terminal
>This Alert has no description.</
"destructive"
>Unable to process your payment.</
>Please verify your billing information and try again.</
"list"
"ml-0.5 pb-2 pl-6"
Text
"listitem"
"text-sm"
> Check your card details
> Ensure sufficient funds
> Verify billing address
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add alert
bunx --bun @react-native-reusables/cli@latest add alert
pnpm dlx @react-native-reusables/cli@latest add alert
yarn dlx @react-native-reusables/cli@latest add alert
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
@/components/ui/icon.tsx
{ TextClassContext }
{ LucideIcon, LucideProps }
{ cssInterop }
'nativewind'
IconProps
LucideProps
LucideIcon
IconImpl
cssInterop
(IconImpl, {
className: {
'style'
nativeStyleToProp: {
'size'
@component
@example
* ```tsx
* import { ArrowRight } from 'lucide-react-native';
* import { Icon } from '@/registry/components/ui/icon';
* <Icon as={ArrowRight} className="text-red-500" size={16} />
@param
{LucideIcon}
{string}
{number}
{...LucideProps}
...props - Additional Lucide icon props passed to the "as" icon.
Icon
'text-foreground'
, textClass, className)
{ Icon };
@/components/ui/alert.tsx
{ Icon }
'@/components/ui/icon'
{ Text, TextClassContext }
{ LucideIcon }
View>
'destructive'
TextClassContext.Provider
'text-destructive'
"alert"
"absolute left-3.5 top-3"
'size-4'
, variant
, iconClassName)
Text>) {
, className)
textClass?.
'text-destructive/90'
{ Alert, AlertDescription, AlertTitle };
{ withUniwind }
'uniwind'
StyledIcon
withUniwind
size: {
'className'
'width'
color: {
'color'
* <Icon as={ArrowRight} className="text-red-500 size-4" />
Update the import paths to match your project setup.
{ Terminal }
'@/lib/icons/Terminal'
>Heads up!</
You can use a terminal to run commands on your computer.
Accordion
Alert Dialog
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