# useDocumentTitle
Custom hook that sets the document title.
## Usage
```
import { useDocumentTitle } from 'usehooks-ts'

export default function Component() {
  useDocumentTitle('foo bar')
}
```
## API
▸ useDocumentTitle ( title , options? ): void
Custom hook that sets the document title.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| title | string | The title to set. |
| options? | UseDocumentTitleOptions | The options. |
#### Returns
void
### Type aliases
Ƭ UseDocumentTitleOptions : Object
Hook options.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| preserveTitleOnUnmount? | boolean | Whether to keep the title after unmounting the component (default is true ). |
## Hook
```
import { useRef } from 'react'

import { useIsomorphicLayoutEffect, useUnmount } from 'usehooks-ts'

type UseDocumentTitleOptions = {
  preserveTitleOnUnmount?: boolean
}

export function useDocumentTitle(
  title: string,
  options: UseDocumentTitleOptions = {},
): void {
  const { preserveTitleOnUnmount = true } = options
  const defaultTitle = useRef<string | null>(null)

  useIsomorphicLayoutEffect(() => {
    defaultTitle.current = window.document.title
  }, [])

  useIsomorphicLayoutEffect(() => {
    window.document.title = title
  }, [title])

  useUnmount(() => {
    if (!preserveTitleOnUnmount && defaultTitle.current) {
      window.document.title = defaultTitle.current
    }
  })
}
```