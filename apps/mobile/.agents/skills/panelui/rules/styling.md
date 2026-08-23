# Styling

## Semantic tokens, never a literal

Every colour in the library is a token, and there are six themes reading them. A literal is
correct in exactly one of the six.

```tsx
// Wrong — right in dark Panel, wrong in the other five.
<View className="bg-neutral-900 border-neutral-800">
  <Text className="text-white">Total</Text>
</View>

// Right.
<View className="bg-card border border-border">
  <Text className="text-card-foreground">Total</Text>
</View>
```

The set: `background`, `foreground`, `card`, `popover`, `overlay`, `primary`, `secondary`,
`muted`, `accent`, `destructive`, `info`, `success`, `warning`, `border`, `input`, `ring`,
`surface` (+ `-secondary`, `-tertiary`), `skeleton`, `chart-1`…`chart-5`, and the tinted status
fills `-soft` (an Alert) and `-subtle` (a Badge or Chip). Most have a `-foreground` pair.

## No `dark:` overrides

```tsx
<View className="bg-white dark:bg-neutral-900" />   // wrong
<View className="bg-card" />                        // right
```

`bg-card` is already both. Worse, `dark:` only resolves in the light and dark themes — inside
Moon or Grass, Uniwind compiles it to a class selector that never matches, so the override
silently disappears and you are left with the light value on a dark screen.

## `gap-*`, not `space-y-*`

React Native has no `space-*` utilities at all. They compile to nothing.

```tsx
<View className="space-y-4" />          // wrong: does nothing
<View className="flex-col gap-4" />     // right
```

## `className` is for layout

```tsx
<Button className="bg-blue-500" />              // wrong: fights the variant, breaks themes
<Button variant="primary" className="w-full" /> // right
```

Margin, width, flex, position — yours. Colour, radius, type — the component's, through its
variants.

## `cn()` for conditional classes

```tsx
className={`p-4 ${active ? 'bg-accent' : ''}`}     // wrong: conflicts do not resolve
className={cn('p-4', active && 'bg-accent')}       // right: later classes win
```

## A colour in JavaScript comes from `useCSSVariable`

Some things — an SVG `fill`, a `StatusBar` style, a navigation theme — need the value, not the
class. Read it, do not restate it:

```tsx
// Wrong: frozen at the theme it was written in.
;<Path fill="#262626" />

// Right: follows every theme change, including the named ones the OS knows nothing about.
const [foreground] = useCSSVariable(["--color-foreground"])
;<Path fill={foreground} />
```

## `tv()` at module scope

```tsx
function Card() {
  const variants = tv({ ... });   // wrong: rebuilt every render
}

const variants = tv({ ... });     // right
function Card() { ... }
```
