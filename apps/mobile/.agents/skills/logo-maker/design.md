# Shape, and what to leave out

## The complexity budget

- One dominant outer silhouette, built from roughly **6–10 basic shapes**.
- **One** feature that identifies the subject: a beak, a pair of horns, a
  visor, an ear shape. One. Not the anatomy — the identifying part of it.
- At most **two internal colour regions**.
- A face, if there is one, is **two eyes and one mouth**. No eyebrows, no
  nostrils, no highlights, no cheeks.
- A head or a compact upper body. Not a full figure: legs and feet are detail
  that vanishes at icon size while eating the room the face needed.

Everything repeated goes: feathers, scales, fur tufts, plates, buttons, screws,
stitching, labels. A repeated thing is texture, and texture is noise at 32px.

## The silhouette carries it

Fill the mark solid black. If it is still recognisable, the shape is doing the
work. If it is not, no amount of internal detail will save it — internal detail
is the first thing to disappear.

## Weight and contour

- Thick, rounded, weighty contours. Broad masses rather than outlines.
- **No sharp points.** Every ear, beak, tail, flame, leaf and antenna ends
  blunt and rounded. A needle-thin tip is a pixel at icon size and a jagged
  artefact at every size between.
- No thin lines anywhere. If a stroke is needed, it is a filled shape.
- Both members of a pair are shown — two ears, two horns, two wings. One of a
  pair reads as damage.

## Composition

- The subject fills **75–85%** of the canvas.
- It sits low, rising from the bottom edge or a bottom corner. Cropping at the
  bottom is intentional and gives the mark weight; a subject floating centred
  in empty space reads as a sticker.
- Never crop an identifying paired feature.
- Upright. Do not tilt the mark or rotate the canvas.
- A square canvas with square corners, and no frame, border, card, or rounded
  app-icon mask. The platform applies its own mask; one drawn in is a mask
  inside a mask.

## Reject the result when

- It reads as an illustration rather than a symbol.
- It fails the 32 × 32 check.
- The complexity budget is exceeded — count the shapes.
- Any contour is thin, sharp, spiky or fragile.
- A paired feature is missing, cropped or asymmetric by accident.
- The subject is small, centred like a sticker, tilted, framed, or surrounded
  by empty space.
- The background became a scene, a texture, a halo or a vignette instead of a
  flat field.
- There is text in it. A logo that needs a word to be understood is a wordmark,
  which is a different job.
