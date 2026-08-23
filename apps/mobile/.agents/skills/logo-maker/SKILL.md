---
name: logo-maker
description: Design an original app logo — a compact mascot or symbol that stays readable at 32 × 32 and works as an icon at every size. Use when asked to create, design or generate a logo, app icon, brand mark, mascot or avatar for a product, whether or not an image generator is available. Produces either a vector file the project can keep or a prompt for an image model, from one shared set of design rules.
---

# Logo maker

Make a **logo**, not an illustration. The subject is reduced to a symbol that
survives being shrunk to the size of a favicon, and everything that does not
survive that is cut before it is drawn.

Two things decide whether the result is any good, and neither is style: what is
left out, and whether the silhouette reads as one shape.

## Pick the path first

There are two ways to produce the artwork, and the choice is made once, before
any design work:

- **An image generator is available** — use it. Follow `prompt.md`, which turns
  the design rules into a prompt and lists what to reject on the way back.
- **No image generator** — author the mark as SVG. Follow `vector.md`. The
  output is a file the project can keep, diff and re-export, which is often the
  better answer for a product that already has a repository.

Do not claim to have generated an image without one. If neither path is open,
say so and stop.

`design.md` and `palette.md` apply to both. They are separate files so the two
paths cannot drift into two different design languages.

## Workflow

1. **Find the subject.** If the request names one, keep it. If not, and the
   working directory is a product, read the README, the package metadata and
   the landing copy before asking anything — what the product does, who it is
   for and how it should feel is usually already written down.

2. **Ask once, if you must.** One consolidated round of questions covering the
   product, its audience and its tone. Not a branding workshop, and never a
   second round.

3. **Propose three directions before drawing.** One line each:
   `<subject> — <what it says about the product> — <the shape it makes>`.
   When the subject is fixed, vary the treatment instead: composition,
   silhouette, which region carries the second colour, what the expression
   does. When it is not, tie each subject to a different thing the product
   claims. Three arbitrary animals is not three directions.

4. **Offer a batch.** Six candidates, two per direction, labelled `A1`–`C2`.
   Wait for agreement unless the request already authorised drawing.

5. **Draw them**, each as its own square asset. Never ask for a grid or a
   contact sheet in one image — compose the comparison afterwards from finished
   marks.

6. **Check every one against the rejection rules** in `design.md` and
   `palette.md` before showing it. Name the rule anything fails; do not quietly
   repair it and do not claim a pass you did not check.

7. **Report** each candidate's label, subject, palette, saved path and size,
   and what if anything is still wrong with it. Then ask which to refine.

## The one check that decides it

Render the mark at **32 × 32** and look at it. If you cannot tell what it is,
the design has failed, however good it looks at full size — and no amount of
colour or detail fixes it, because detail is what broke it.

Everything in `design.md` exists to make that check pass.
