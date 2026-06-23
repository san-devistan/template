# React Compiler ​
Oxc has experimental support for the React Compiler , which automatically memoizes React components and hooks.
WARNING
This feature is experimental and under active development. Options and behaviour may change.
Under the hood, Oxc integrates the Rust port of the React Compiler rather than the Babel-based babel-plugin-react-compiler . Because that port is an merged React PR, but unpublished, Oxc vendors it as releasable crates at oxc-project/forked-react-compiler .
## General Usage ​
```
import { transform } from "oxc-transform";

// Enable with default options.
const result = await transform("App.jsx", sourceCode, {
  reactCompiler: true,
});

// Or enable with options.
const result = await transform("App.jsx", sourceCode, {
  reactCompiler: {
    // React runtime version target. `'17'` and `'18'` require the
    // `react-compiler-runtime` package; `'19'` ships the runtime in `react`.
    target: "19", // '17' | '18' | '19'
  },
});
```
Pass false or omit the option to disable the React Compiler.
## When the React Compiler won't work ​
The React Compiler requires the original source : it must see JSX before any other transform. Plugins that rewrite JSX first break this. Examples:
- @emotion/babel-plugin and other css prop / JSX pragma transforms.
- @babel/plugin-transform-react-constant-elements and -inline-elements , which hoist or inline JSX.
This is why Oxc runs the React Compiler before its own JSX transform.
Code that breaks the Rules of React is also skipped rather than optimized — for example interior mutability, or libraries built on observable mutation such as MobX's observer() .