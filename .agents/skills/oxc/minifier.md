# Minifier ​
A high-performance minifier that shrinks your code by removing unused code and transforming to a shorter equivalent.
## Features ​
- Eliminate dead code.
- Transforms syntaxes to make the output shorter and repetitive.
- Mangle variable names.
- Remove whitespace and comments.
## Assumptions ​
To allow better optimizations, Oxc minifier makes some assumptions about your code. See Assumptions document for more information.
## FAQ ​
See FAQ for common questions.
## Installation ​
### With Rolldown ​
If you are using Rolldown , oxc-minify will be used for minification by default. No extra installation is required.
### Node.js ​
- Use the node binding oxc-minify .
- Try on stackblitz .
### Rust ​
Use the umbrella crate oxc with the minifier feature.
Rust usage example can be found here .
## Integrations ​
- unplugin-oxc