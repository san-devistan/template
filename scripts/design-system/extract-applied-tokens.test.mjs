import assert from "node:assert/strict"
import test from "node:test"

import {
  getGeneratedWebHeader,
  wasGeneratedFromWebTokens,
} from "./extract-applied-tokens.mjs"

const tokens = {
  colors: { light: { primary: "black" }, dark: { primary: "white" } },
  radius: { base: "0.5rem" },
  fonts: { web: { sans: "Inter", heading: "Geist Mono" } },
  typography: {},
  motion: {},
  shadow: {},
}

test("recognizes CSS generated from the current web tokens", () => {
  const css = `${getGeneratedWebHeader(tokens)}\n:root { --primary: gray; }`

  assert.equal(wasGeneratedFromWebTokens(css, tokens), true)
  assert.equal(
    wasGeneratedFromWebTokens(css, {
      ...tokens,
      colors: { ...tokens.colors, light: { primary: "blue" } },
    }),
    false
  )
})
