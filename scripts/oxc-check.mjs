import { readdir, readFile } from "node:fs/promises"
import { builtinModules } from "node:module"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { minifySync } from "oxc-minify"
import { parseSync } from "oxc-parser"
import { ResolverFactory } from "oxc-resolver"
import { transformSync } from "oxc-transform"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const sourceRoots = ["apps", "packages"]
const sourceExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"])
const allowedRuntimeJavaScriptFiles = new Set([
  path.join("apps", "mobile", "scripts", "reset-project.js"),
])
const allowedJavaScriptConfigPattern =
  /(^|[/\\])[\w.-]+\.config\.(?:cjs|js|mjs)$/
const ignoredDirectories = new Set([
  ".expo",
  ".git",
  ".agents",
  ".nitro",
  ".output",
  ".tanstack",
  ".turbo",
  ".vinxi",
  "coverage",
  "dist",
  "_generated",
  "node_modules",
])
const ignoredFiles = new Set([
  path.join("apps", "web", "src", "routeTree.gen.js"),
  path.join("apps", "web", "src", "routeTree.gen.ts"),
])
const builtins = new Set([
  ...builtinModules,
  ...builtinModules.map((name) => `node:${name}`),
])
const assetPattern =
  /\.(avif|bmp|css|gif|ico|jpeg|jpg|json|md|png|svg|webp|woff2?)($|[?#])/

const resolver = new ResolverFactory({
  tsconfig: "auto",
  conditionNames: [
    "types",
    "import",
    "module",
    "browser",
    "react-native",
    "node",
    "default",
  ],
  extensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".cjs", ".json"],
  extensionAlias: {
    ".js": [".ts", ".tsx", ".js", ".jsx"],
    ".jsx": [".tsx", ".jsx"],
    ".mjs": [".mts", ".mjs"],
    ".cjs": [".cts", ".cjs"],
  },
  mainFields: ["browser", "module", "main"],
})

const errors = []
let parsed = 0
let transformed = 0
let minified = 0
let resolved = 0

const sourceFiles = await collectSourceFiles()
const sourceEntries = await Promise.all(
  sourceFiles.map(async (file) => ({
    file,
    source: await readFile(file, "utf8"),
  }))
)

for (const { file, source } of sourceEntries) {
  const relative = path.relative(root, file)
  const lang = languageFor(file)

  if (isJavaScriptSource(file) && !isAllowedJavaScriptFile(relative)) {
    errors.push(
      `${relative}: use TypeScript for app/package source files. ` +
        "JavaScript is only allowed for generated files, config files, or explicit tool entrypoints."
    )
    continue
  }

  let parseResult
  try {
    parseResult = parseSync(file, source, {
      lang,
      sourceType: sourceTypeFor(file),
      showSemanticErrors: true,
    })
    parsed += 1
    reportOxcErrors(relative, "parser", parseResult.errors)
  } catch (error) {
    errors.push(`${relative}: parser failed: ${messageFor(error)}`)
    continue
  }

  let transformResult
  try {
    transformResult = transformSync(file, source, {
      cwd: root,
      lang,
      sourceType: "unambiguous",
      target: "es2022",
      typescript: {
        onlyRemoveTypeImports: true,
      },
      jsx: lang.endsWith("x")
        ? {
            runtime: "automatic",
            importSource: "react",
            development: false,
          }
        : undefined,
    })
    transformed += 1
    reportOxcErrors(relative, "transformer", transformResult.errors)
  } catch (error) {
    errors.push(`${relative}: transformer failed: ${messageFor(error)}`)
    continue
  }

  try {
    const minifyResult = minifySync(file, transformResult.code, {
      module: path.extname(file) !== ".cjs",
      compress: true,
      mangle: false,
    })
    minified += 1
    reportOxcErrors(relative, "minifier", minifyResult.errors)
  } catch (error) {
    errors.push(`${relative}: minifier failed: ${messageFor(error)}`)
  }

  for (const request of importRequests(parseResult)) {
    if (typeof request !== "string") {
      continue
    }

    if (shouldSkipResolve(request)) {
      continue
    }

    const result = resolver.resolveFileSync(file, request)
    if (result.error) {
      errors.push(
        `${relative}: resolver failed for "${request}": ${messageFor(result.error)}`
      )
    } else {
      resolved += 1
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"))
  process.exit(1)
}

console.log(
  `Oxc check passed: parsed ${parsed}, transformed ${transformed}, minified ${minified}, resolved ${resolved}.`
)

async function collectSourceFiles() {
  const filesByRoot = await Promise.all(
    sourceRoots.map((sourceRoot) => walk(path.join(root, sourceRoot)))
  )

  return filesByRoot.flat().toSorted((left, right) => left.localeCompare(right))
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })

  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name)
      const relative = path.relative(root, fullPath)

      if (entry.isDirectory()) {
        if (!ignoredDirectories.has(entry.name)) {
          return walk(fullPath)
        }
        return []
      }

      if (
        entry.isFile() &&
        sourceExtensions.has(path.extname(entry.name)) &&
        !entry.name.endsWith(".d.ts") &&
        !ignoredFiles.has(relative)
      ) {
        return [fullPath]
      }

      return []
    })
  )

  return nestedFiles.flat()
}

function languageFor(file) {
  const extension = path.extname(file)

  if (extension === ".tsx") return "tsx"
  if (extension === ".jsx") return "jsx"
  if (extension === ".ts") return "ts"
  if (extension === ".js") return "jsx"
  return "js"
}

function sourceTypeFor(file) {
  return path.extname(file) === ".cjs" ? "commonjs" : "unambiguous"
}

function isJavaScriptSource(file) {
  return [".js", ".jsx", ".mjs", ".cjs"].includes(path.extname(file))
}

function isAllowedJavaScriptFile(relative) {
  return (
    allowedRuntimeJavaScriptFiles.has(relative) ||
    allowedJavaScriptConfigPattern.test(relative)
  )
}

function reportOxcErrors(file, tool, toolErrors = []) {
  for (const error of toolErrors) {
    errors.push(`${file}: ${tool} reported: ${messageFor(error)}`)
  }
}

function importRequests(parseResult) {
  const requests = new Set()

  for (const item of parseResult.module.staticImports) {
    requests.add(item.moduleRequest.value)
  }

  for (const item of parseResult.module.staticExports) {
    if (item.moduleRequest) {
      requests.add(item.moduleRequest.value)
    }
  }

  return requests
}

function shouldSkipResolve(request) {
  return (
    builtins.has(request) ||
    request.includes("?") ||
    request.includes("!") ||
    request.startsWith("data:") ||
    request.startsWith("http:") ||
    request.startsWith("https:") ||
    assetPattern.test(request)
  )
}

function messageFor(error) {
  if (typeof error === "string") return error
  return error?.message ?? error?.reason ?? JSON.stringify(error)
}
