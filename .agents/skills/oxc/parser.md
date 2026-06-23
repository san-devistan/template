# Parser ​
A high-performance JavaScript / TypeScript parser written in Rust, powering other tools in the Oxc project.
## Features ​
- 3x faster than swc parser ( benchmark ).
- Parses .js(x) and .ts(x) .
- Passes all parser tests from Test262 and 99% from Babel and TypeScript.
- Returns ESM information directly, no need for es-module-lexer .
- ✅ works with checker.ts
## Installation ​
### Node.js ​
- Use the node binding oxc-parser .
- Try on stackblitz .
### Rust ​
Use the umbrella crate oxc or the individual oxc_ast and oxc_parser crates.
Rust usage example can be found here .
## Print ​
After parsing and transforming, you can print code.
Here's a direct example using esrap ( parse in reverse!) :
```
import { print } from "esrap";
import ts from "esrap/languages/ts";
import { parseSync } from "oxc-parser";

const { program } = parseSync("test.js", 'alert("hello oxc & esrap");');
const { code } = print(program, ts());

console.log(code); // alert("hello oxc & esrap");
```
INFO
Today, comments are not printed. It will be supported thanks to oxc-parser #13285 .