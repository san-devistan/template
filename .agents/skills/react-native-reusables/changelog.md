# Changelog

Latest updates and announcements.

New Uniwind Template
Manual Installation Choice
Automatic Uniwind Detection
Now part of the Vercel OSS Program
Sponsored Blocks by Clerk
First React Native shadcn registry
(probably)
Standardize rem to match web
Enhanced iOS portal rendering with FullWindowOverlay
New CLI - rewritten with Effect + shadcn
Improved component architecture
Blocks
Showcase App
Redesigned Docs
New GitHub Home
New Icon component
Text variants
Deprecated
Upgrade Notes
Thank you
React Native Reusables now has full support for
Uniwind
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest init -t minimal-uniwind
bunx --bun @react-native-reusables/cli@latest init -t minimal-uniwind
pnpm dlx @react-native-reusables/cli@latest init -t minimal-uniwind
yarn dlx @react-native-reusables/cli@latest init -t minimal-uniwind
When selecting "Manual" in the installation, you can now choose between Nativewind and Uniwind for your styling solution.
When using the
command, the CLI will automatically add the Uniwind version of components when it detects a
uniwind-types.d.ts
file in your project.
New CLI. New docs. New registry. New showcase app. New sponsors.
fillOpacity
fillRule
clipRule
React Native Reusables is now part of the
Vercel OSS Program
, which supports its continued growth and development.
React Native Reusables now features a
and sponsored
Clerk
, helping you quickly integrate authentication into your apps with React Native Reusables.
You can now use
npx shadcn@latest
with our registries.
style, providing a consistent and familiar design system for your apps.
To make the experience even smoother, we built a thin wrapper around the CLI.
No need to copy long registry URLs
You can use
to install everything at once
If you skip the component name, you'll get a multi-select prompt
npx @react-native-reusables/cli@latest add
bunx --bun @react-native-reusables/cli@latest add
pnpm dlx @react-native-reusables/cli@latest add
yarn dlx @react-native-reusables/cli@latest add
For more details, see the
add options
Same power, tailored for React Native Reusables.
In the
inlineRem
is now set to
to match web sizing.
tabIndex
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
- module.exports = withNativeWind(config, { input: './global.css' });
All portal content on iOS is now wrapped with
to improve rendering and ensure seamless integration with native navigation.
The CLI has been rebuilt from the ground up with
and the
engine under the hood for the add command.
Stronger foundation for future updates
npx @react-native-reusables/cli@latest doctor
bunx --bun @react-native-reusables/cli@latest doctor
pnpm dlx @react-native-reusables/cli@latest doctor
yarn dlx @react-native-reusables/cli@latest doctor
doctor command
Every component has been refined and standardized.
Easier to override and customize
Introduced authentication
to help you quickly integrate authentication into your apps with React Native Reusables.
React Native Reusables
Preview components on your phone by scanning QR codes from the docs.
Get it on Google Play
The docs have been redesigned to be more consistent and easier to use.
We moved the repo from my personal account to a dedicated org
@founded-labs
A single icon component to replace all icons from the deprecated
directory.
Install the new icon component with the CLI
npx @react-native-reusables/cli@latest add icon
bunx --bun @react-native-reusables/cli@latest add icon
pnpm dlx @react-native-reusables/cli@latest add icon
yarn dlx @react-native-reusables/cli@latest add icon
{ Icon }
'@/components/ui/icon'
{ HeartIcon }
'lucide-react-native'
Icon
HeartIcon
"size-4 text-red-500"
The
Text
component now includes built-in typography variants, so you no longer need to use the deprecated
Typography
components like
"h1"
>Title</
, and
lib/constants.ts
theme.ts
file.
lib/useColorScheme.ts
lib/icons
component.
components/ui/typography.tsx
prop on the
Run the
Update your components by running the
command with
w-0.5
Make sure you commit your changes before running the add command and use the diff view to see what's changed and to keep
your own custom changes.
Thank you to everyone who has been using React Native Reusables, sharing feedback, and contributing.
Your support means a lot and is truly appreciated.
CLI
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