# Composition

## One `PanelUIProvider`, at the root

```tsx
export default function RootLayout() {
  return (
    <PanelUIProvider>
      <Stack />
    </PanelUIProvider>
  )
}
```

It owns four things: the gesture root, the themed page background, the portal host every overlay
renders into, and the toast viewport. **Without it, Dialog, BottomSheet, Popover, Select, Menu
and Toast mount and never appear** — no error, nothing on screen. Do not nest a second one.

## Parts belong to their root

```tsx
// Wrong — throws "Select.Item must be used inside <Select>".
<Select>
  <Select.Trigger />
</Select>
<Select.Item value="a" />

// Right.
<Select>
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="a">A</Select.Item>
  </Select.Content>
</Select>
```

Compound components are assembled with `Object.assign`, so the parts are properties of the root:
`Card.Header`, `Dialog.Content`, `Frame.Panel`, `ColorPicker.Area`. Composition is the API — a
colour picker with no opacity is one with no `ColorPicker.Alpha` in it, not one with a prop
turned off.

## Do not unmount an overlay to close it

```tsx
{
  open && (
    <Dialog open>
      <Dialog.Content>…</Dialog.Content>
    </Dialog>
  )
} // wrong

;<Dialog open={open} onOpenChange={setOpen}>
  {" "}
  // right
  <Dialog.Content>…</Dialog.Content>
</Dialog>
```

Overlays mount lazily and unmount themselves _after_ the exit animation. Ripping the tree out
skips it, and the backdrop can be left behind.

## Fields are `Field`, not a `View` and a `Text`

```tsx
// Wrong: no label association, no error slot, no invalid state.
<View>
  <Text>Email</Text>
  <Input value={email} onChangeText={setEmail} />
</View>

// Right.
<Field>
  <Label>Email</Label>
  <Input value={email} onChangeText={setEmail} errorMessage={error} />
</Field>
```

`Input` also takes `label`, `description` and `errorMessage` directly when the field is simple.

## Reach for a component before a `View`

A styled `View` with a border is a `Card` or a `Surface`. A row of icon, text and a chevron is an
`Item`. A tinted box with a message is an `Alert`. A pill is a `Badge` or a `Chip`. A grey box
while loading is a `Skeleton`. Search the registry first.
