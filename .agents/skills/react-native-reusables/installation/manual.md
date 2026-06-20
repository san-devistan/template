# Installation

Getting Started with React Native Reusables

installation/manual
Create project
Set up Nativewind
Update the default inlined
Add dependencies
Add the Portal Host to your root layout
Configure path aliases
Configure your styles
Add a cn helper
Create a
All set.
Run
to start a new Expo project, or follow the manual steps to set up an existing one.
Follow the official installation guide to add
Nativewind
to your project.
Change the default
value by setting
inlineRem
in your
tabIndex
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
- module.exports = withNativeWind(config, { input: './global.css' });
Render the
PortalHost
@rn-primitives/portal
in your root layout. Place it as the last child of your providers. This is where your components that use the
Portal
will be rendered (e.g.
DropdownMenu
Tooltip
Popover
, etc.).
app/_layout.tsx
+ <PortalHost />
Configure the path aliases in your
file.
"compilerOptions"
"baseUrl"
"paths"
is a commonly used alias, but you're free to choose a different one.
Add the CSS variables to your CSS file
@tailwind
base;
components;
utilities;
@layer
base {
Add them to your
'nativewind/theme'
@type
{import('tailwindcss').Config}
'class'
'./app/**/*.{ts,tsx}'
'./components/**/*.{ts,tsx}'
'nativewind/preset'
theme: {
extend: {
colors: {
'hsl(var(--border))'
'hsl(var(--input))'
'hsl(var(--ring))'
'hsl(var(--background))'
'hsl(var(--foreground))'
primary: {
'hsl(var(--primary))'
'hsl(var(--primary-foreground))'
secondary: {
'hsl(var(--secondary))'
'hsl(var(--secondary-foreground))'
destructive: {
'hsl(var(--destructive))'
'hsl(var(--destructive-foreground))'
muted: {
'hsl(var(--muted))'
'hsl(var(--muted-foreground))'
accent: {
'hsl(var(--accent))'
'hsl(var(--accent-foreground))'
popover: {
'hsl(var(--popover))'
'hsl(var(--popover-foreground))'
card: {
'hsl(var(--card))'
'hsl(var(--card-foreground))'
borderRadius: {
'var(--radius)'
borderWidth: {
keyframes: {
'accordion-down'
from: { height:
to: { height:
'var(--radix-accordion-content-height)'
'accordion-up'
animation: {
future: {
'tailwindcss-animate'
theme.ts
lib/theme.ts
{ DarkTheme, DefaultTheme,
Theme }
'@react-navigation/native'
THEME
light: {
'0.625rem'
dark: {
NAV_THEME
Record
'light'
'dark'
Theme
DefaultTheme,
.light.background,
.light.border,
.light.card,
.light.destructive,
.light.primary,
.light.foreground,
DarkTheme,
.dark.background,
.dark.border,
.dark.card,
.dark.destructive,
.dark.primary,
.dark.foreground,
For more details, see the
page.
lib/utils.ts
{ clsx,
ClassValue }
"clsx"
{ twMerge }
"tailwind-merge"
ClassValue
twMerge
(inputs))
"$schema"
"style"
"new-york"
"rsc"
"tsx"
"tailwind"
"config"
"tailwind.config.js"
"css"
"global.css"
"baseColor"
"neutral"
"cssVariables"
"aliases"
"components"
"@/components"
"utils"
"@/lib/utils"
"ui"
"@/components/ui"
"lib"
"@/lib"
"hooks"
"@/hooks"
You're ready to start adding components to your app. You can run the
command to check if everything's set up correctly.
yarn@berry
groupId
dark:text-foreground *:dark
npx @react-native-reusables/cli@latest doctor
bunx --bun @react-native-reusables/cli@latest doctor
pnpm dlx @react-native-reusables/cli@latest doctor
yarn dlx @react-native-reusables/cli@latest doctor
doctor options
Introduction
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