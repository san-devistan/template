# Animation

## Reanimated 4, never core `Animated`

```tsx
import { Animated } from "react-native" // wrong
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated"
```

Core `Animated` drives values from the JS thread, so its animations stutter under exactly the
load the UI thread ones are immune to — and the two do not compose: a core `Animated.Value`
cannot drive a Reanimated style. Every animation in this library is Reanimated, and anything
written beside it should be too.

## A shared value, not state

```tsx
// Wrong: a render per frame.
const [x, setX] = useState(0)
useEffect(() => {
  const id = setInterval(() => setX((v) => v + 1), 16)
  return () => clearInterval(id)
})

// Right: the value lives on the UI thread and the tree never re-renders.
const x = useSharedValue(0)
const style = useAnimatedStyle(() => ({ transform: [{ translateX: x.value }] }))
```

## Gestures come from Gesture Handler

`Gesture.Pan()`, `Gesture.Tap()` and friends, with `GestureDetector` — not `PanResponder`, and
not `onTouch*`. `PanelUIProvider` already provides the gesture root.

## Two callbacks on a drag

Components that are dragged — `Slider`, `ColorPicker` — give you both:

- `onValueChange` fires continuously while dragging. Cheap updates only.
- `onValueCommit` fires once on release. Anything expensive goes here.

Writing a network request into `onValueChange` sends one per frame.
