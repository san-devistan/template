# Setup editors ​
Editor extensions use oxlint --lsp from your project, so oxlint must be installed locally.
See Quickstart to install Oxlint.
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
1. Enable fix-on-save in .vscode/settings.json :
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.oxc": "always"
  }
}
```
1. Enable type-aware linting (optional):
To enable it for the whole project, set it in the root Oxlint config:
```
{
  "options": {
    "typeAware": true
  }
}
```
```
import { defineConfig } from "oxlint";

export default defineConfig({
  options: {
    typeAware: true,
  },
});
```
Or set it in .vscode/settings.json :
```
{
  "oxc.typeAware": true
}
```
When oxc.typeAware is unset, the editor uses the root config's options.typeAware value. When set explicitly, it overrides the config value.
You also need to ensure oxlint-tsgolint is installed in your project. See the type-aware linting docs for more details.
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
npm i -g oxlint
```
```
vim.lsp.enable('oxlint')
```
- nvim-lspconfig: oxlint
### coc.nvim ​
```
:CocInstall coc-oxc
```
- oxc-project/coc-oxc
## Other editors ​
For editors with LSP support (Emacs, Helix, Sublime), you can use oxlint --lsp as your language server. To configure it, refer to the LSP configuration reference for the supported options.
## Reference ​
- oxc_language_server
- LSP configuration reference