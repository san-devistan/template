# Native controls

Several components take a `native` prop and hand off to the platform's own toolkit — SwiftUI on
iOS, Jetpack Compose on Android — through the optional `@expo/ui` package. Without that package
installed the prop does nothing and the component draws itself, which is the intended fallback.

## "Native" means Liquid Glass on iOS

`native` on its own gets you a platform button that still looks like iOS 18. Pass `glass` too:

```tsx
<Button native />                        // a platform button, no material
<Button native glass />                  // Liquid Glass
<Button native glass variant="primary" /> // glassProminent — keeps the accent fill
```

Drawing the material by hand over a plain platform button throws the accent fill away; the
prominent style is what keeps it.

**Liquid Glass is iOS 26+.** Below that the modifier is inert and you get the ordinary platform
style, which is indistinguishable from the prop not working. Before changing code on a report of
"no glass", check what the call passes and what OS it is running on.

## A native control ignores `className` and every token

The platform owns its colours, metrics and shape. Anything the look depends on has to be a prop
or a modifier, and spacing has to come from the container around it.

```tsx
<Switch native className="bg-primary" />   // the class does nothing
<View className="px-4"><Switch native /></View>   // spacing from outside
```

## Never host elements inside a labelled native button

Passing elements instead of a string makes the platform host them, and a hosted view only
measures where something above it is fixed on both axes.

```tsx
<Button native glass><Icon /></Button>            // fine — an icon button is a square
<Button native glass><Text>Save</Text></Button>   // crashes: the width is nobody's
<Button native glass>Save</Button>                // right — a string
```

The crash is in native code, where a JavaScript `try` has nothing to catch. This has cost two
crashes already.
