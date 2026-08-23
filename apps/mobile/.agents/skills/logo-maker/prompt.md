# The image-model path

Use this when an image generator is available. The rules in `design.md` and
`palette.md` still decide whether the result is any good; this file only turns
them into a prompt and says what to do with what comes back.

## One candidate per call

Generate each candidate as its own full-resolution square image. Never ask a
model to lay out a grid, a contact sheet or several logos in one image: the
result is a picture of some logos rather than a logo, and none of them is
usable on its own.

If the runtime supports parallel work, run the candidates concurrently with the
same brief and one assigned direction each.

## The prompt

Fill the bracketed parts and send it as one block.

```text
One highly simplified mascot logo, not a character illustration.

Background: a fully opaque, edge-to-edge, flat [background colour]. This colour
is used for the background only.

Subject: [subject], reduced to one rounded continuous silhouette with one
defining feature.

Complexity: about 6–10 basic shapes. At most two internal colour regions. Two
eyes and one mouth, nothing else on the face. It must stay readable at 32 × 32.

Colour: exactly three — two subject colours plus the background. One subject
colour holds the dominant mass, the other holds one large continuous region and
the facial marks reuse it. Silhouette against background at least 3:1; facial
marks at least 4.5:1.

Shape: thick, rounded, weighty contours. Every tip blunt and rounded — no
points, no spikes, no thin lines. Both members of every paired feature visible.

Composition: upright, rising from the bottom edge and filling 75–85% of a
square canvas with square corners.

Depth: flat shapes first. At most one continuous soft gradient per large
region, all lit from the upper left, each transition spanning more than half
its form. Visible at full size, gone at icon size.

Do not include: highlight blobs, banded or stepped shading, cel shading, inner
outlines, drop shadows, bevels, gloss, plastic or clay rendering, texture,
text, borders, frames, transparency, rounded canvas corners, or an app-icon
mask.
```

## What to do with the result

Inspect it against every rejection rule in `design.md` and `palette.md`. When
one fails:

- Retry once with a **targeted** correction naming the failed rule, not a
  reworded version of the whole prompt.
- Do not fix it in post-processing. Flattening a banded gradient or painting
  out a hotspot hides a failure the next generation will repeat.
- If it fails again, report which rule and move on. A candidate that cannot
  meet the brief is information.

Keep the model's native square output. Do not upscale to reach a requested
number — a resampled 1254 is not a 1536.

Then render it at 32 × 32 and look at it. The rule that decides everything is
the one an image model is least able to check for itself.
