# Introduction

This is not a component library. It is how you build your component library.
Built with familiar tools and libraries, it follows consistent styling, structure, and naming conventions, letting you use your favorite design system to create beautiful universal apps.
React Native Reusables
Preview components on your phone by scanning QR codes from the docs.
Get it on Google Play
Nativewind
Uniwind
A universal port of Radix UI primitives for React Native with an almost identical API, enabling consistent composition on native platforms.
React Native doesn't support DOM portals. On native platforms, components like modals, and menus need a
PortalHost
Child elements like
Text
can't inherit styles from a parent class. Each element must be styled directly. We use a small
React Native doesn't support
data-*
attributes, so variants rely on props or state for native platforms.
Uses
for smooth, native performance.
Uses a wrapper component in combination with a
Lucide icon
to avoid wrapping every imported icon individually (e.g.
Some components, such as
DropdownMenu
, can't be controlled with
onOpenChange
props. Instead, you use a
to manage open and close behavior after layout calculation.
React Native Reusables aims to stay true to the spirit of
shadcn/ui
Installation
Built by
Founded Labs
, bringing
to React Native. Source on
GitHub
Want to work with us?
Mention us to your team.
Learn more
Learn more about Founded Labs