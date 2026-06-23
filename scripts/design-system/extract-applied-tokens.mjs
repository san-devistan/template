import { readFile, writeFile } from "node:fs/promises"

import { COLOR_TOKENS } from "./tokens.mjs"

function blockFor(css, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const match = css.match(
    new RegExp(`(?:^|\\n)\\s*${escaped}\\s*\\{([\\s\\S]*?)\\n\\s*\\}`)
  )

  if (!match) {
    throw new Error(`Could not find ${selector} block in globals.css`)
  }

  return match[1]
}

function readVars(block) {
  return Object.fromEntries(
    [...block.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((match) => [
      match[1],
      match[2].trim(),
    ])
  )
}

function requiredVar(vars, name, source) {
  const value = vars[name]

  if (!value) {
    throw new Error(`Missing --${name} in ${source}`)
  }

  return value
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value))
}

function getPath(value, pathName) {
  return pathName.split(".").reduce((current, key) => current?.[key], value)
}

function collectChanges(before, after) {
  const changes = []

  for (const mode of ["light", "dark"]) {
    for (const token of COLOR_TOKENS) {
      const pathName = `colors.${mode}.${token}`

      if (before.colors[mode][token] !== after.colors[mode][token]) {
        changes.push(pathName)
      }
    }
  }

  for (const pathName of [
    "radius.base",
    "fonts.web.sans",
    "fonts.web.heading",
  ]) {
    const beforeValue = getPath(before, pathName)
    const afterValue = getPath(after, pathName)

    if (beforeValue !== afterValue) {
      changes.push(pathName)
    }
  }

  return changes
}

export function extractAppliedTokens(tokens, css) {
  const rootVars = readVars(blockFor(css, ":root"))
  const darkVars = readVars(blockFor(css, ".dark"))
  const themeVars = readVars(blockFor(css, "@theme inline"))
  const updated = cloneJson(tokens)

  for (const token of COLOR_TOKENS) {
    updated.colors.light[token] = requiredVar(rootVars, token, ":root")
    updated.colors.dark[token] = requiredVar(darkVars, token, ".dark")
  }

  updated.radius.base = requiredVar(rootVars, "radius", ":root")

  if (themeVars["font-sans"]) {
    updated.fonts.web.sans = themeVars["font-sans"]
  }

  if (themeVars["font-heading"]) {
    updated.fonts.web.heading = themeVars["font-heading"]
  }

  return {
    tokens: updated,
    changes: collectChanges(tokens, updated),
  }
}

export async function importAppliedTokens({ tokensFile, webCss }) {
  const css = await readFile(webCss, "utf8")
  const tokens = JSON.parse(await readFile(tokensFile, "utf8"))
  const result = extractAppliedTokens(tokens, css)

  if (result.changes.length > 0) {
    await writeFile(tokensFile, `${JSON.stringify(result.tokens, null, 2)}\n`)
  }

  return result.changes
}
