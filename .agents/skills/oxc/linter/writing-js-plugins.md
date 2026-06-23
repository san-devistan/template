# Writing JS Plugins ​
INFO
JS plugins are currently in alpha, and remain under active development.
All APIs should behave identically to ESLint. If you find any differences in behavior, that's a bug - please report it .
## ESLint-compatible API ​
Oxlint provides a plugin API identical to ESLint's. See ESLint's docs on creating a plugin and custom rules .
A simple plugin which flags files containing more than 5 class declarations:
```
// plugin.js
const rule = {
  create(context) {
    let classCount = 0;

    return {
      ClassDeclaration(node) {
        classCount++;
        if (classCount === 6) {
          context.report({ message: "Too many classes", node });
        }
      },
    };
  },
};

const plugin = {
  meta: {
    name: "best-plugin-ever",
  },
  rules: {
    "max-classes": rule,
  },
};

export default plugin;
```
```
{
  "jsPlugins": ["./plugin.js"],
  "rules": {
    "best-plugin-ever/max-classes": "error"
  }
}
```
```
import { defineConfig } from "oxlint";

export default defineConfig({
  jsPlugins: ["./plugin.js"],
  rules: {
    "best-plugin-ever/max-classes": "error",
  },
});
```
## Alternative API ​
Oxlint also provides a slightly different alternative API which is more performant.
Rules created with this API remain compatible with ESLint (see below ).
Same rule as above, using the alternative API:
```
import { eslintCompatPlugin } from "@oxlint/plugins";

const rule = {
  createOnce(context) {
    // Define counter variable
    let classCount;

    return {
      before() {
        // Reset counter before traversing AST of each file
        classCount = 0;
      },
      // Same as before
      ClassDeclaration(node) {
        classCount++;
        if (classCount === 6) {
          context.report({ message: "Too many classes", node });
        }
      },
    };
  },
};

const plugin = eslintCompatPlugin({
  meta: {
    name: "best-plugin-ever",
  },
  rules: {
    "max-classes": rule,
  },
});

export default plugin;
```
The differences are:
1. Wrap the plugin object in eslintCompatPlugin(...) .
```
- const plugin = {
+ const plugin = eslintCompatPlugin({
```
1. Use createOnce instead of create .
```
-   create(context) {
+   createOnce(context) {
```
1. create (ESLint's API) is called repeatedly for each file , whereas createOnce is called once only. Perform any per-file setup in before hook instead.
```
-     let classCount = 0;
+     let classCount;

      return {
+       before() {
+         classCount = 0; // Reset counter
+       },
        ClassDeclaration(node) {
          classCount++;
          if (classCount === 6) {
            context.report({ message: "Too many classes", node });
          }
        },
      };
```
### What does eslintCompatPlugin do? ​
eslintCompatPlugin adds a create method to each rule in the plugin, which delegates to createOnce .
This means the plugin can be used with either Oxlint or ESLint.
- In Oxlint, it'll get a perf boost from the faster createOnce API.
- In ESLint, it'll work exactly the same as if it was written with the original ESLint create API.
If you're publishing a plugin to NPM, add @oxlint/plugins as a runtime dependency (not a dev dependency).
### Skipping AST traversal ​
Returning false from before hook causes the rule to skip this file.
```
// This rule does not run on files which start with a `// @skip-me` comment
const rule = {
  createOnce(context) {
    return {
      before() {
        if (context.sourceCode.text.startsWith("// @skip-me")) {
          return false;
        }
      },
      FunctionDeclaration(node) {
        // Do stuff
      },
    };
  },
};
```
This is equivalent to this pattern in ESLint:
```
const rule = {
  create(context) {
    if (context.sourceCode.text.startsWith("// @skip-me")) {
      return {};
    }

    return {
      FunctionDeclaration(node) {
        // Do stuff
      },
    };
  },
};
```
### before hook ​
before hook runs before the AST is visited.
IMPORTANT: before hook is NOT guaranteed to run on every file.
At present it does, but in future we intend to add logic on Rust side to determine if the rule needs to run or not, based on what AST nodes the rule is "interested in", and what the AST contains. This will enable better performance by skipping redundant calls from Rust into JS.
In example above, if a file does not contain any FunctionDeclaration s, running the rule on that file will be skipped entirely, including skipping the before hook.
If you need code to always run once for every file, implement a Program visitor instead:
```
const rule = {
  createOnce(context) {
    return {
      Program(node) {
        // This always runs for every file, even if it
        // doesn't contain any `FunctionDeclaration`s
      },
      FunctionDeclaration(node) {
        /* do stuff */
      },
    };
  },
};
```
### after hook ​
There is also an after hook. It runs once per file, after the whole AST has been traversed (after Program:exit ).
Use it to clean up any expensive resources used during the rule's AST traversal.
If before hook returns false to skip running the rule on the file, after hook will be skipped too.
Same as before hook, after hook is NOT guaranteed to run on every file (see above ).
## Why is the alternative API faster? ​
Short answer: Right now it isn't. But it will be soon .
Prior to the initial technical preview release of JS plugins, we have undergone a lengthy "R&D" process. We have identified many optimization opportunities, and have prototyped the next version of Oxlint plugins, which has extremely good performance.
Many of those optimizations are not in the current release, but we'll be polishing them and folding them into Oxlint over the next few months.
The alternative API is designed to enable and capitalize on these optimizations. By adopting the alternative API now, plugin authors will see their plugins get a significant speed boost in future "for free", just by bumping oxlint version, without any code changes.
### What are those optimizations? ​
Returning to the "no more than 5 classes" rule example from above:
```
const rule = {
  create(context) {
    let classCount = 0;

    return {
      ClassDeclaration(node) {
        classCount++;
        if (classCount === 6) {
          context.report({ message: "Too many classes", node });
        }
      },
    };
  },
};
```
The create method is called once per file, each time with a new context object.
Why is that a problem?
For maximum performance, ideally we want to statically know what AST nodes the rule is "interested in". With that information, we can perform 2 optimizations:
1. Don't walk the AST on JS side. Instead, during traversal of AST on Rust side, compile a list of "pointers" to the relevant AST nodes. Send that list to JS, and JS can "jump" straight to the relevant AST nodes, rather than searching the whole AST.
2. If the AST doesn't contain any AST nodes which match what the rule is interested in (in example above, if file contains no class declarations), skip calling into JS entirely for that file.
But JS is a dynamic language, and create could do anything . It could return a completely different visitor each time it's called. So we have to call create to find out whether we needed to call create !
In comparison, with the alternative API, createOnce is called only once, and we then know what the rule does. This enables the above optimizations.
To be clear, the create API was not a poor design decision on ESLint's part. It just presents some difficulties once Rust-JS interop comes into play.
## Next steps ​
See the API Support section for the ESLint APIs which are supported for usage in Oxlint plugins.