# Inline ignore comments ​
For JS/TS files, use oxfmt-ignore to skip formatting the next statement:
```
// oxfmt-ignore
const a    = 42;

/* oxfmt-ignore */
const x = () => { return 2; };

<>
  {/* oxfmt-ignore */}
  <span   ugly   format=""   />
</>;
```
For JS-in-Vue, use oxfmt-ignore inside the <script> tag:
```
<script>
// oxfmt-ignore
const a    = 42;
</script>
```
Trailing ignore comments are also supported:
```
const a    = 42; // oxfmt-ignore
```
For other files and non-JS parts of Vue files (e.g., <template> , <style> ), use prettier-ignore comment. See also Prettier's ignore documentation .
Currently, TOML files do not support ignore comments.
## Prettier compatibility ​
- prettier-ignore comment is also supported