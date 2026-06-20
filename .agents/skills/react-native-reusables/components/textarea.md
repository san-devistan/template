# Textarea

Displays a form textarea or a component that looks like a textarea.

components/textarea
Preview
Installation
Usage
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Textarea }
'@/components/ui/textarea'
"Type your message here."
"max-w-md"
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add textarea
bunx --bun @react-native-reusables/cli@latest add textarea
pnpm dlx @react-native-reusables/cli@latest add textarea
yarn dlx @react-native-reusables/cli@latest add textarea
Copy and paste the following code into your project.
@/components/ui/textarea.tsx
{ cn }
'@/lib/utils'
{ Platform, TextInput }
'react-native'
Platform.
({ web:
, native:
React
TextInput>
TextInput
props.editable
'opacity-50'
'text-muted-foreground'
, placeholderClassName)
"top"
{ Textarea };
Update the import paths to match your project setup.
"@/components/ui/textarea"
Text
Toggle
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