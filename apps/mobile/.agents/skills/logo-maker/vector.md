# The vector path

Use this when no image generator is available — and consider it even when one
is, for a product with a repository. A vector mark is a file the project keeps:
it diffs, it re-exports at any size, and it can be corrected by hand.

Be honest about the trade: a geometric symbol is very achievable this way; a
mascot with real character is harder here than with an image model. If the
brief wants character above all, say so.

## Set up the canvas

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
```

- A square `viewBox`, `0 0 512 512`. Every coordinate is then a rounded number
  and the maths stays legible.
- A background `<rect>` covering the whole canvas, fully opaque. No transparency
  and no rounded corners on it.
- Draw the subject between roughly `y=90` and `y=512`, rising off the bottom
  edge, occupying 75–85% of the width.

## Fills only

Build every shape as a filled path. No `stroke` anywhere.

A stroke is a fixed width that does not scale with the shape, so a mark drawn
with strokes thins out when it is exported small and thickens when large. It is
also the easiest way to break the "no thin lines" rule without noticing. Where
an outline is wanted, draw the outline as a filled shape.

Use `stroke-linejoin`-free geometry: round corners by drawing arcs, not by
rounding a stroke's joins.

## Keep the shape count honest

One path per semantic region, not per curve. If the file has thirty paths, the
mark has thirty shapes, and `design.md` allows about ten.

Group with `<g>` only where it carries meaning, and name nothing after its
colour — a `<g id="blue">` is a rename waiting to happen.

## Export

`sharp` rasterises SVG, so the icon sizes come from the same file:

```js
import sharp from "sharp"
import { readFileSync, writeFileSync } from "node:fs"

const svg = readFileSync("logo.svg")
for (const size of [1024, 512, 180, 32]) {
  const png = await sharp(svg, { density: 600 })
    .resize(size, size)
    .png()
    .toBuffer()
  writeFileSync(`logo-${size}.png`, png)
}
```

`density` is the rasterisation resolution, not the output size — too low and
curves come out soft at 1024. Render, then resize.

## Then look at the 32

Open `logo-32.png` at actual size. Not scaled up in a viewer — actual size,
beside other icons if possible. This is the check the whole design exists to
pass, and it is the one most often skipped because the 1024 looks good.

## Reject the file when

- Any element has a `stroke`.
- The background is transparent, inset, or has rounded corners.
- The path count is far above the shape budget.
- Coordinates run outside the `viewBox`.
- The 32px export is unreadable.
