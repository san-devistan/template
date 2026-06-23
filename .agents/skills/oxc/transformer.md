# Transformer ​
A high-performance transformer that rewrites unsupported syntax into forms supported by target runtimes.
## Features ​
The features below run in a fixed order, regardless of the order of the options:
1. React Compiler — runs first, on the original source.
2. TypeScript — type stripping.
3. Decorators .
4. Plugins — e.g. styled-components.
5. React Refresh — component instrumentation, runs just before the JSX transform.
6. JSX — JSX to JavaScript.
7. Lowering — ES2026 down to ES2015.
8. Inject — global variable injection.
9. Define — global variable replacement.
Oxc also supports TypeScript Isolated Declarations emit without using the TypeScript compiler.
## General Options ​
The transform function accepts a filename, source code, and an options object:
```
import { transform } from "oxc-transform";

const result = await transform("lib.ts", sourceCode, {
  // Force the source language. Inferred from filename by default.
  lang: "tsx", // "js" | "jsx" | "ts" | "tsx" | "dts"

  // Treat the source as script, module, or CommonJS. Inferred by default.
  sourceType: "module", // "script" | "module" | "commonjs" | "unambiguous"

  // The current working directory. Used to resolve relative paths.
  cwd: "/path/to/project",

  // Enable source map generation.
  sourcemap: true,

  // Configure runtime helper strategy.
  helpers: {
    mode: "Runtime", // "Runtime" (import from @oxc-project/runtime) or "External" (use global babelHelpers)
  },

  // See sub-pages for more options:
  // typescript, jsx, target, assumptions, define, inject, decorator, plugins
});
```
The transform function is async. A synchronous transformSync variant is also available with the same signature.
## Installation ​
### Node.js ​
- Use the node binding oxc-transform .
- Try on stackblitz .
### Rust ​
Use the umbrella crate oxc with the transformer feature.
Rust usage example can be found here .
## Integrations ​
- unplugin-oxc
- unplugin-isolated-decl
- oxc-webpack-loader