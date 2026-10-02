import { readFile, writeFile } from "node:fs/promises"

const webCss = new URL("../packages/ui/src/styles/globals.css", import.meta.url)
const mobileCss = new URL("../apps/mobile/tokens.css", import.meta.url)
const css = await readFile(webCss, "utf8")

function readVars(selector) {
  const block = css.split(`${selector} {`)[1]?.split("}")[0]

  if (!block) {
    throw new Error(`Missing ${selector} block in globals.css`)
  }

  return [...block.matchAll(/--([\w-]+):\s*([^;]+);/g)]
}

const radius = readVars(":root").find(([, name]) => name === "radius")
const radiusScale = [
  ...(radius ? [radius] : []),
  ...readVars("@theme inline").filter(([, name]) => name.startsWith("radius-")),
].map(([, name, value]) => `--${name}: ${value}`)

function buildVariant(name, selector) {
  const tokens = readVars(selector)
    .filter(([, token]) => token !== "radius")
    .map(([, token, value]) => `--color-${token}: ${value}`)
  const lines = [...tokens, ...radiusScale].map((line) => `      ${line};`)

  return `    @variant ${name} {\n${lines.join("\n")}\n    }`
}

await writeFile(
  mobileCss,
  `/* Generated from packages/ui/src/styles/globals.css by pnpm sync:design-system. */
@layer theme {
  :root {
${buildVariant("light", ":root")}
${buildVariant("dark", ".dark")}
  }
}
`
)
