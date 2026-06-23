# Setup editors ​
Editor extensions use oxfmt --lsp from your project, so oxfmt must be installed locally.
See Quickstart to install Oxfmt.
## Supported editors ​
- VS Code (and Cursor, etc.)
- Zed
- JetBrains
- Neovim
- Other editors
## VS Code ​
### Install ​
Download the official Oxc VS Code extension from:
- Visual Studio Marketplace
- Open VSX Registry
The extension is compatible with other VS Code-based editors , including Cursor.
### Team setup ​
1. Recommend the extension for contributors:
.vscode/extensions.json :
```
{
  "recommendations": ["oxc.oxc-vscode"]
}
```
1. Enable format on save in .vscode/settings.json :
```
{
  "oxc.fmt.configPath": ".oxfmtrc.json",
  "editor.defaultFormatter": "oxc.oxc-vscode",
  "editor.formatOnSave": true
}
```
To set per language:
```
{
  "[javascript]": {
    "editor.defaultFormatter": "oxc.oxc-vscode",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "oxc.oxc-vscode",
    "editor.formatOnSave": true
  }
}
```
### Reference ​
- oxc-project/oxc-vscode
## Zed ​
### Install ​
- Oxc Zed Extension
### Reference ​
- oxc-project/oxc-zed
## JetBrains ​
IntelliJ IDEA and WebStorm.
### Install ​
- Oxc in JetBrains Marketplace
### Reference ​
- oxc-project/oxc-intellij-plugin
## Neovim ​
### nvim-lspconfig ​
```
npm i -g oxfmt
```
```
vim.lsp.enable('oxfmt')
```
- nvim-lspconfig: oxfmt
### conform.nvim ​
```
require("conform").setup({
  formatters_by_ft = {
    javascript = { "oxfmt" },
    javascriptreact = { "oxfmt" },
    typescript = { "oxfmt" },
    typescriptreact = { "oxfmt" },
    json = { "oxfmt" },
    vue = { "oxfmt" },
  },
})
```
- conform.nvim
### coc.nvim ​
```
:CocInstall coc-oxc
```
- oxc-project/coc-oxc
## Other editors ​
For editors with LSP support (Emacs, Helix, Sublime), configure:
```
oxfmt --lsp
```
Or, for editors without LSP support:
```
cat foo/bar.js | oxfmt --stdin-filepath dummy.js --config ./path/to/config.json
```
## Reference ​
- oxc_language_server