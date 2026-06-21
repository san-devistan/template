# useDarkMode
Custom hook that returns the current state of the dark mode.
## Usage
```
import { useDarkMode } from 'usehooks-ts'

export default function Component() {
  const { isDarkMode, toggle, enable, disable } = useDarkMode()

  return (
    <div>
      <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
    </div>
  )
}
```
## API
▸ useDarkMode ( options? ): DarkModeReturn
Custom hook that returns the current state of the dark mode.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options? | DarkModeOptions | The initial value of the dark mode, default false . |
#### Returns
DarkModeReturn
An object containing the dark mode's state and its controllers.
### Type aliases
Ƭ DarkModeOptions : Object
The hook options.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| defaultValue? | boolean | The initial value of the dark mode. Default ts false |
| initializeWithValue? | boolean | If true (default), the hook will initialize reading localStorage . In SSR, you should set it to false , returning the defaultValue or false initially. Default ts true |
| localStorageKey? | string | The key to use in the local storage. Default ts 'usehooks-ts-dark-mode' |
Ƭ DarkModeReturn : Object
The hook return type.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| disable | () => void | Function to disable the dark mode. |
| enable | () => void | Function to enable the dark mode. |
| isDarkMode | boolean | The current state of the dark mode. |
| set | ( value : boolean ) => void | Function to set a specific value to the dark mode. |
| toggle | () => void | Function to toggle the dark mode. |
## Hook
```
import {
  useIsomorphicLayoutEffect,
  useLocalStorage,
  useMediaQuery,
} from 'usehooks-ts'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'
const LOCAL_STORAGE_KEY = 'usehooks-ts-dark-mode'

type DarkModeOptions = {
  defaultValue?: boolean
  localStorageKey?: string
  initializeWithValue?: boolean
}

type DarkModeReturn = {
  isDarkMode: boolean
  toggle: () => void
  enable: () => void
  disable: () => void
  set: (value: boolean) => void
}

export function useDarkMode(options: DarkModeOptions = {}): DarkModeReturn {
  const {
    defaultValue,
    localStorageKey = LOCAL_STORAGE_KEY,
    initializeWithValue = true,
  } = options

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
    initializeWithValue,
    defaultValue,
  })
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    localStorageKey,
    defaultValue ?? isDarkOS ?? false,
    { initializeWithValue },
  )

  // Update darkMode if os prefers changes
  useIsomorphicLayoutEffect(() => {
    if (isDarkOS !== isDarkMode) {
      setDarkMode(isDarkOS)
    }
  }, [isDarkOS])

  return {
    isDarkMode,
    toggle: () => {
      setDarkMode(prev => !prev)
    },
    enable: () => {
      setDarkMode(true)
    },
    disable: () => {
      setDarkMode(false)
    },
    set: value => {
      setDarkMode(value)
    },
  }
}
```