# Text

A component for displaying text.

components/text
Preview
Installation
Inheritance system
Usage
Typography
defaultValue
Code
*:hidden scroll-m-20
tabIndex
{ Text }
'@/components/ui/text'
TextPreview
>Hello, world!</
CLI
Manual
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest add text
bunx --bun @react-native-reusables/cli@latest add text
pnpm dlx @react-native-reusables/cli@latest add text
yarn dlx @react-native-reusables/cli@latest add text
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
Update the import paths to match your project setup.
In React Native, child components don't automatically get styles from their parent. This causes issues for things like buttons, where the text inside should change based on the button's style.
To fix this, we use something called
to pass styles down. The parent (like a Button) wraps its content with this context, and the
component uses the styles from it.
{ Text, TextClassContext }
{ View }
View
"items-center gap-2"
Default: <
"code"
>text-foreground</
Parent
Inherited from Parent: <
>text-emerald-500</
"text-purple-500"
NestedParent
Inherited from NestedParent: <
>text-sky-500</
View>) {
TextClassContext.Provider
"text-emerald-500"
"text-sky-500"
"@/components/ui/text"
{ ScrollView, View }
ScrollView
"p-6 native:pb-safe"
"native:pb-12 max-w-lg"
"h1"
>The Rainbow Forest Adventure</
"p-1.5"
"p"
Once upon a time, in a magical forest, there lived a curious rabbit named Whiskers.
Whiskers loved exploring and discovering new things every day.
"p-3"
"h2"
>Whiskers' Discovery</
One day, while hopping through the forest, Whiskers stumbled upon
"font-medium"
. The flower had the power to make the forest come alive with vibrant colors and happy
creatures.
"blockquote"
"Oh, what a wonderful discovery!" exclaimed Whiskers. "I must share this magic with all my
forest friends!"
"p-4"
"h3"
>The Colorful Transformation</
"p-0.5"
Whiskers excitedly gathered all the animals in the forest and showed them the magical
rainbow flower. The animals were amazed and decided to plant more of these flowers to make
their home even more magical.
As the rainbow flowers bloomed, the entire forest transformed into a kaleidoscope of
colors. Birds chirped in harmony, butterflies danced in the air, and even the trees swayed
to the rhythm of the wind.
>The Enchanted Celebration</
The animals decided to celebrate their enchanted forest with a grand feast. They gathered
nuts, berries, and fruits from the colorful trees and shared stories of their adventures.
The joyous laughter echoed through the Rainbow Forest.
"lead"
And so, the Rainbow Forest became a place of wonder and happiness, where Whiskers and all
the animals lived together in harmony.
>The Never-ending Magic</
The magic of the rainbow flowers continued to spread, reaching other parts of the world.
Soon, forests everywhere became vibrant and alive, thanks to the discovery of Whiskers and
the enchanted Rainbow Forest.
"large"
watch as the world transforms into a colorful and beautiful place.
Tabs
Textarea
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