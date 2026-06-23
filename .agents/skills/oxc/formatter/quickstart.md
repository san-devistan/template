# Quickstart ​
Recommended setup and common workflows.
## Install ​
Install oxfmt as a dev dependency:
```
$ npm add -D oxfmt
```
```
$ pnpm add -D oxfmt
```
```
$ yarn add -D oxfmt
```
```
$ bun add -D oxfmt
```
Add scripts to package.json :
```
{
  "scripts": {
    "fmt": "oxfmt",
    "fmt:check": "oxfmt --check"
  }
}
```
Format files:
```
npm run fmt
```
```
pnpm run fmt
```
```
yarn run fmt
```
```
bun run fmt
```
Check formatting without writing files:
```
npm run fmt:check
```
```
pnpm run fmt:check
```
```
yarn run fmt:check
```
```
bun run fmt:check
```
## Usage ​
```
oxfmt [OPTIONS] [PATH]...
```
Running oxfmt without arguments formats the current directory (equivalent to prettier --write . ).
CLI options like --no-semi are not supported. Use the configuration file instead to ensure consistent settings across CLI and editor integrations.
To use glob patterns in positional paths, be sure to quote them. Otherwise, they may or may not be expanded depending on your environment.
For the complete list of options, see the CLI reference .
## Common workflows ​
### Pre-commit with lint-staged ​
```
{
  "lint-staged": {
    "*": "oxfmt --no-error-on-unmatched-pattern"
  }
}
```
--no-error-on-unmatched-pattern prevents errors when no files match the pattern.
### Create a config file ​
Initialize .oxfmtrc.json with defaults:
```
oxfmt --init
```
### Migrate from Prettier ​
```
oxfmt --migrate prettier
```
See migrate from prettier for details.
### List files that differ ​
```
oxfmt --list-different
```
This is useful for configuring files to ignore .
### Piping file contents ​
```
echo 'const   x   =   1' | oxfmt --stdin-filepath test.ts
```
Prints const x = 1;
### Node.js API ​
```
import { format, type FormatOptions } from "oxfmt";

const input = `let a=42;`;
const options: FormatOptions = {
  semi: false,
};

const { code } = await format("a.js", input, options);
console.log(code); // "let a = 42"
```
## Next steps ​
- Change configuration
- Setup editors
- Setup CI
- Learn advanced features: sorting , embedded formatting
- Compatibility matrix
- Check CLI reference