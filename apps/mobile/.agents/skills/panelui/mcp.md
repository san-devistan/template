# The PanelUI MCP server

Lets an agent read the registry directly — search it, view a component's real source, and fetch
its documentation — instead of guessing an API.

## Setup

```bash
npx panelui-cli@latest mcp        # run the server (stdio)
npx panelui-cli@latest mcp init   # write the config for Claude Code
npx panelui-cli@latest mcp init cursor
npx panelui-cli@latest mcp init vscode
```

`mcp init` merges into whatever is already in the file rather than replacing it.

| Editor      | Config file        |
| ----------- | ------------------ |
| Claude Code | `.mcp.json`        |
| Cursor      | `.cursor/mcp.json` |
| VS Code     | `.vscode/mcp.json` |

By hand, it is:

```json
{
  "mcpServers": {
    "panelui": { "command": "npx", "args": ["-y", "panelui-cli@latest", "mcp"] }
  }
}
```

## Tools

### `panelui_get_project_info`

How this project is set up: Expo or not, the package or copied source or both, where components
land, which CSS entry Metro compiles, and which components have already been added.

**Call this first.** It is what decides whether the code you write imports from
`panelui-native` or from `@/components/ui/…`.

Input: none.

### `panelui_search_components`

Search by name and description. Use it before writing any custom UI.

Input: `query` (string).

### `panelui_list_components`

Everything in the registry with a line on each.

Input: `type` (optional — `ui`, `lib`, `hook`, `theme`).

### `panelui_view_component`

One item in full: description, registry dependencies, npm dependencies, and every file's complete
source.

Input: `name` (string), `includeSource` (optional boolean, defaults true).

### `panelui_get_component_docs`

The component's documentation page as markdown — anatomy, every prop with its type, the variants,
worked examples. Generated from the library's TypeScript, so it is the real API.

Input: `name` (string).

### `panelui_get_add_command`

The command that copies components into the project.

Input: `names` (array of strings).

## Without MCP

Everything the server reads is a plain public URL, so an agent with a fetch tool can use the same
sources directly:

```
https://panelui.dev/r/index.json                 the registry index
https://panelui.dev/r/<name>.json                one item, with source
https://panelui.dev/llms.mdx/components/<slug>   a component's docs as markdown
https://panelui.dev/llms.txt                     every page on the site
```
