# Migrate from Prettier ​
This guide covers migrating from Prettier to Oxfmt.
## When to migrate from Prettier ​
Migrate to Oxfmt if you want to keep a Prettier-like workflow while getting faster formatting and built-in formatting features. Choose Vite+ instead if you want Oxfmt as part of a larger unified toolchain.
- Move to Oxfmt for dedicated formatting.
- Move to Vite+ for an integrated workflow.
- Stay on Prettier if exact plugin behavior is still required.
## Quick start ​
For simple setups, migrate with a single command:
```
$ npm add -D oxfmt@latest && npx oxfmt --migrate=prettier && npx oxfmt
```
```
$ pnpm add -D oxfmt@latest && pnpm oxfmt --migrate=prettier && pnpm oxfmt
```
```
$ yarn add -D oxfmt@latest && yarn oxfmt --migrate=prettier && yarn oxfmt
```
```
$ bun add -D oxfmt@latest && bunx oxfmt --migrate=prettier && bunx oxfmt
```
## Migrate with Skills ​
The migrate-oxfmt skill provides an interactive, agent-guided migration. Install it into your coding agent:
```
npx skills add https://github.com/oxc-project/oxc --skill migrate-oxfmt
```
Once installed, run /migrate-oxfmt to perform the migration.
## Before you migrate ​
Oxfmt is compatible with Prettier v3.8 for many configurations.
Key differences:
- Default printWidth is 100 (Prettier uses 80)
- Prettier plugins are not supported (though some popular plugins have been implemented natively)
- Some options are not supported (see config reference )
See Unsupported features for details, and the compatibility matrix for file type support.
## Step 1: Upgrade Prettier to v3.8 (optional) ​
Oxfmt's output is closest to Prettier v3.8. Upgrading first minimizes formatting differences.
## Step 2: Install Oxfmt ​
```
$ npm add -D oxfmt@latest
```
```
$ pnpm add -D oxfmt@latest
```
```
$ yarn add -D oxfmt@latest
```
```
$ bun add -D oxfmt@latest
```
```
$ deno add -D npm:oxfmt@latest
```
## Step 3: Migrate configuration ​
Oxfmt uses .oxfmtrc.json , .oxfmtrc.jsonc , or oxfmt.config.ts . Basic example:
```
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "printWidth": 80,
}
```
Run oxfmt --migrate prettier to convert your Prettier config automatically.
### prettierrc.js example ​
Before:
```
module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
};
```
After ( oxfmt.config.ts ):
```
import { defineConfig } from "oxfmt";

export default defineConfig({
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
});
```
### prettierrc.yaml example ​
Before:
```
trailingComma: "es5"
tabWidth: 4
semi: false
singleQuote: true
```
After ( .oxfmtrc.jsonc ):
```
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
}
```
## Step 4: Update scripts ​
### package.json scripts ​
```
{
  "scripts": {
-   "format": "prettier --write .",
+   "format": "oxfmt",
-   "format:check": "prettier --check ."
+   "format:check": "oxfmt --check"
  }
}
```
### CI workflows ​
```
  - name: Check formatting
-   run: yarn prettier --check .
+   run: yarn oxfmt --check
```
### Git hooks (husky, lint-staged) ​
In package.json :
```
"lint-staged": {
- "*": "prettier --write --no-error-on-unmatched-pattern"
+ "*": "oxfmt --no-error-on-unmatched-pattern"
}
```
## Step 5: Run formatter ​
```
npm run format
```
Uninstall Prettier if it is no longer needed.
## Optional steps ​
### Update editor integrations ​
See Setup editors .
### Update documentation ​
Update references to Prettier in CONTRIBUTING.md , AGENTS.md , and CLAUDE.md if applicable.
### Update lint rules ​
Remove eslint-plugin-prettier if present. If needed, it can be replaced by a oxfmt --check job in your CI pipelines.
Note that if you intend to continue using ESLint, you should keep or add eslint-config-prettier to disable styling-related ESLint rules that might conflict with Oxfmt. eslint-config-prettier is different from eslint-plugin-prettier , as it has no new lint rules. It is only a config.
Also, consider migrating to Oxlint .
### Update .git-blame-ignore-revs ​
Add the reformatting commit SHA to .git-blame-ignore-revs to hide it from git blame .
### Replace .prettierignore with "ignorePatterns" ​
If you no longer use Prettier, you can optionally move its contents from .prettierignore to "ignorePatterns" in your Oxfmt config. Note that .prettierignore applies globally, while ignorePatterns is scoped to the config file it belongs to. In a nested config setup, this may change which files are ignored. See Ignore files for more information.
### Update // prettier-ignore comments ​
Oxfmt supports // prettier-ignore comments, but also supports // oxfmt-ignore comments.
However, // oxfmt-ignore will only work for JS and TS files. See Inline ignore comments for more information.