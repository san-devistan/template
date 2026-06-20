# Customization

How to customize your project

tailwind.config.ts
theme.ts
This works like
. It tells the CLI where to place files. You can leave it alone unless you're changing paths or switching styles.
Defines your theme using CSS variables under
(for dark mode). Tailwind classes like
use these variables.
You can choose a custom theme from
, but make sure to:
Use the Tailwind v3 version (CSS variables)
Replace
.dark
for compatibility with Nativewind
See the
full list of CSS variables
Connects Tailwind utility classes (like
) to the CSS variables defined in
, while also configuring the dark mode selector, plugins, and animations.
Exports the same colors from
as a TypeScript object, so you can use them in logic, inline styles, or animations. Also includes
NAV_THEME
for the
If you update a CSS variable, update
as well.
text-sm *:text-muted-foreground *:font-normal py-2 *:leading-7
-mb-1.5 *:text-foreground
Tip
, use this prompt to sync
Read CSS variables under
Update the
entries in the
THEME
object in
to match these values in HSL format.
Keep all keys and
unchanged.
Add new variables if missing; comment stale ones if no matching CSS variable exists.
Maintain the original formatting and key order.
Installation
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