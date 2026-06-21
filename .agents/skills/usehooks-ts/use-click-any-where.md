# useClickAnyWhere
Custom hook that handles click events anywhere on the document.
## Usage
```
import { useState } from 'react'

import { useClickAnyWhere } from 'usehooks-ts'

export default function Component() {
  const [count, setCount] = useState(0)

  useClickAnyWhere(() => {
    setCount(prev => prev + 1)
  })

  return <p>Click count: {count}</p>
}
```
## API
▸ useClickAnyWhere ( handler ): void
Custom hook that handles click events anywhere on the document.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| handler | ( event : MouseEvent ) => void | The function to be called when a click event is detected anywhere on the document. |
#### Returns
void
## Hook
```
import { useEventListener } from 'usehooks-ts'

export function useClickAnyWhere(handler: (event: MouseEvent) => void) {
  useEventListener('click', event => {
    handler(event)
  })
}
```