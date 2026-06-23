# Quickstart ​
This page shows the recommended setup for Oxlint and the most common workflows, with copy-paste commands.
## Install ​
Install oxlint as a dev dependency:
```
$ npm add -D oxlint
```
```
$ pnpm add -D oxlint
```
```
$ yarn add -D oxlint
```
```
$ bun add -D oxlint
```
Add lint commands to package.json :
```
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```
Run it:
```
npm run lint
```
```
pnpm run lint
```
```
yarn run lint
```
```
bun run lint
```
Apply fixes:
```
npm run lint:fix
```
```
pnpm run lint:fix
```
```
yarn run lint:fix
```
```
bun run lint:fix
```
## Usage ​
For the complete list of options, see the CLI reference .
```
oxlint [OPTIONS] [PATH]...
```
If PATH is omitted, Oxlint lints the current working directory.
## Common workflows ​
### Pre-commit with lint-staged ​
```
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": "npm run lint"
  }
}
```
```
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": "pnpm run lint"
  }
}
```
```
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": "yarn run lint"
  }
}
```
```
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": "bun run lint"
  }
}
```
### Create a config file ​
Initialize the .oxlintrc.json config with default values:
```
oxlint --init
```
Then customize .oxlintrc.json as needed. See Configuration .
Alternatively, Oxlint supports a TypeScript config file named oxlint.config.ts . See Configuration for details.
Then run Oxlint:
```
oxlint
```
TIP
If you are migrating from ESLint, see the "Migrate from ESLint" page for detailed guidance on migrating.
### Fix problems ​
Apply safe fixes:
```
oxlint --fix
```
Apply suggestions (may change program behavior):
```
oxlint --fix-suggestions
```
Apply dangerous fixes and suggestions:
```
oxlint --fix-dangerously
```
See Automatic fixes for guidance on when to use each mode.
### Ignore files ​
Use an explicit ignore file:
```
oxlint --ignore-path .oxlintignore
```
Add ignore patterns from the command line:
```
oxlint --ignore-pattern "dist/**" --ignore-pattern "*.min.js"
```
Disable ignore handling:
```
oxlint --no-ignore
```
See Ignore files .
### Fail CI reliably ​
Only report errors:
```
oxlint --quiet
```
Fail if any warnings are found:
```
oxlint --deny-warnings
```
Fail if warnings exceed a threshold:
```
oxlint --max-warnings 0
```
See CI setup .
### Use machine-readable output ​
Select an output format:
```
oxlint -f json
```
Available formats include: default , json , unix , checkstyle , github , gitlab , junit , and stylish . See Output formats for more info.
### Inspect the effective configuration ​
Print the configuration that would be used for a file:
```
oxlint --print-config path/to/file.ts
```
### List available rules ​
List registered rules, including those enabled by your current Oxlint config:
```
oxlint --rules
```
The full list is in the Rules reference .
## Next steps ​
- Configure rules, plugins, and ignores: Configuration
- Setup editors
- Setup CI
- Learn advanced features: Multi-file analysis , Type-aware linting , JS plugins
- Migrate: From ESLint
- Compatibility matrix
- CLI reference