# Automatic fixes ​
Oxlint can automatically fix some lint violations. Automatic fixes are only applied when passing the relevant CLI flags. You choose when to apply them.
In code editor integrations (such as VS Code, Zed, etc.), automatic fixes are exposed as "code actions" that you can apply in-editor.
You can see all rules which have fixers in the rules list .
## Safe fixes ​
Safe fixes are changes that do not alter program behavior.
Apply safe fixes:
```
oxlint --fix
```
## Suggestions ​
Suggestions are changes that may alter behavior or may not match your intent.
Apply suggestions:
```
oxlint --fix-suggestions
```
## Dangerous fixes ​
Dangerous fixes are aggressive changes that may break your code.
Apply dangerous fixes:
```
oxlint --fix-dangerously
```
## Combining fix modes ​
You can combine safe fixes and suggestions:
```
oxlint --fix --fix-suggestions
```
You can also include dangerous fixes:
```
oxlint --fix --fix-suggestions --fix-dangerously
```
## Rule support ​
Not all rules provide fixes. Some rules support safe fixes, some provide suggestions, and some do not provide fixes yet. For some rules, a fixer is not realistically possible and cannot or should not be added.
If a rule is missing a fixer and you believe it warrants one, contributions are welcome.
## Type-aware linting and fixes ​
Fixers can be applied with type-aware lint rules as well.
You can apply safe fixes with type-aware linting enabled like so:
```
oxlint --type-aware --fix
```
Or with just oxlint --fix if you have type-aware linting enabled via your config file.
## JS Plugins ​
JS Plugins that provide fixers or suggestions can also be applied by Oxlint.