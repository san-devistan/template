# panelui-cli

Copies a component's source into a project, instead of installing the package. Zero
dependencies; run it with the project's own runner.

## Commands

```bash
npx panelui-cli@latest init              # set an existing app up, or start a new one
npx panelui-cli@latest add button card   # copy components in, with what they depend on
npx panelui-cli@latest list              # everything in the registry
npx panelui-cli@latest mcp               # the MCP server (see mcp.md)
npx panelui-cli@latest mcp init cursor   # write it into an editor's config
```

`init` decides what to do by looking for a `package.json`: in an existing app it writes
`panelui.json`, patches `metro.config.js`, the CSS entry and `tsconfig.json`, and installs the
base dependencies. In an **empty** directory there is no project to configure, so it starts a new
one from a template instead — which is also what `npx create-panelui-app@latest` does.

## Options

| Flag                | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `--yes`, `-y`       | Accept every prompt                            |
| `--overwrite`       | Replace files that already exist               |
| `--dry-run`         | Print what would happen, write nothing         |
| `--cwd <dir>`       | Run against another directory                  |
| `--registry <url>`  | Use a different registry                       |
| `--template <name>` | `starter` or `minimal` — new projects only     |
| `--name <name>`     | Folder and app name — new projects only        |
| `--theme <name>`    | `panel`, `moon` or `grass` — new projects only |

**Never pass `--overwrite` without asking.** It replaces the file including any local edits, and
the whole point of copied source is that it gets edited.

To update a component while keeping local changes: run `add <name> --dry-run` to see which files
would be touched, read the local file, then decide per file.

## `panelui.json`

```json
{
  "$schema": "https://panelui.dev/schema.json",
  "registry": "https://panelui.dev/r",
  "aliases": {
    "components": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "css": "global.css",
  "theme": "theme.css"
}
```

`aliases` is what the imports in the copied source are rewritten to. Change them here, not in
the files.

## The registry

Public, unauthenticated, and the same thing the CLI reads:

```
https://panelui.dev/r/index.json     every item, with its description and dependencies
https://panelui.dev/r/<name>.json    one item, with every file's full source
```

An item names `registryDependencies` (other items it needs, resolved automatically),
`dependencies` (npm packages it needs) and `optionalDependencies` (packages reached through a
guarded import — reported, never installed on someone's behalf).
