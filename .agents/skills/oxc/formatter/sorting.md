# Sorting ​
Oxfmt includes sorting features for imports, Tailwind classes, and package.json.
- Sort imports
- Sort Tailwind CSS classes
- Sort package.json fields
See Configuration file reference for full details.
## Sort imports ​
Based on eslint-plugin-perfectionist/sort-imports .
Disabled by default.
### Example configuration ​
The same order as eslint-plugin-perfectionist/sort-imports default.
```
{
  "sortImports": {
    "groups": [
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown"
    ]
  }
}
```
```
import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: {
    groups: [
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
});
```
Use "newlinesBetween": false at the top level to disable newlines between groups, then use { "newlinesBetween": true } within groups to insert a newline at a specific point.
```
{
  "sortImports": {
    "newlinesBetween": false,
    "groups": [
      ["value-builtin", "value-external"],
      ["value-internal", "value-parent", "value-sibling", "value-index"],
      { "newlinesBetween": true },
      "type-import",
      "unknown"
    ]
  }
}
```
```
import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: {
    newlinesBetween: false,
    groups: [
      ["value-builtin", "value-external"],
      ["value-internal", "value-parent", "value-sibling", "value-index"],
      { newlinesBetween: true },
      "type-import",
      "unknown",
    ],
  },
});
```
Use customGroups to define your own groups for matching specific imports. Each custom group has a groupName that can be referenced in groups . The elementNamePattern accepts glob patterns to match import sources.
```
{
  "sortImports": {
    "customGroups": [
      {
        "groupName": "react-libs",
        "elementNamePattern": ["react", "react-**"]
      }
    ],
    "groups": [
      "react-libs",
      ["value-builtin", "value-external"],
      "value-internal",
      ["value-parent", "value-sibling", "value-index"],
      "unknown"
    ]
  }
}
```
```
import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: {
    customGroups: [
      {
        groupName: "react-libs",
        elementNamePattern: ["react", "react-**"],
      },
    ],
    groups: [
      "react-libs",
      ["value-builtin", "value-external"],
      "value-internal",
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
});
```
## Sort Tailwind CSS classes ​
Sorts Tailwind utility classes.
Based on prettier-plugin-tailwindcss .
Disabled by default.
### Example configuration ​
```
{
  "sortTailwindcss": {
    "stylesheet": "./path/to/stylesheet.css",
    "functions": ["clsx", "cn"],
    "preserveWhitespace": true
  }
}
```
```
import { defineConfig } from "oxfmt";

export default defineConfig({
  sortTailwindcss: {
    stylesheet: "./path/to/stylesheet.css",
    functions: ["clsx", "cn"],
    preserveWhitespace: true,
  },
});
```
Regex patterns for attributes and functions are not supported.
## Sort package.json fields ​
Sorts keys in package.json using an opinionated order.
See field ordering for details.
Enabled by default.
### Example configuration ​
To disable:
```
{
  "sortPackageJson": false
}
```
```
import { defineConfig } from "oxfmt";

export default defineConfig({
  sortPackageJson: false,
});
```
To sort scripts alphabetically:
```
{
  "sortPackageJson": {
    "sortScripts": true
  }
}
```
```
import { defineConfig } from "oxfmt";

export default defineConfig({
  sortPackageJson: {
    sortScripts: true,
  },
});
```