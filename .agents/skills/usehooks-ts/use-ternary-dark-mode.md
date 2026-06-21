# useTernaryDarkMode
Custom hook that manages ternary (system, dark, light) dark mode with local storage support.
## Usage
```
import { useTernaryDarkMode } from 'usehooks-ts'

type TernaryDarkMode = ReturnType<typeof useTernaryDarkMode>['ternaryDarkMode']

export default function Component() {
  const {
    isDarkMode,
    ternaryDarkMode,
    setTernaryDarkMode,
    toggleTernaryDarkMode,
  } = useTernaryDarkMode()

  return (
    <div>
      <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
      <p>ternaryMode: {ternaryDarkMode}</p>
      <p>
        Toggle between three modes
        <button onClick={toggleTernaryDarkMode}>
          Toggle from {ternaryDarkMode}
        </button>
      </p>
      <p>
        Select a mode
        <br />
        <select
          name="select-ternaryDarkMode"
          onChange={ev => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setTernaryDarkMode(ev.target.value as TernaryDarkMode)
          }}
          value={ternaryDarkMode}
        >
          <option value="light">light</option>
          <option value="system">system</option>
          <option value="dark">dark</option>
        </select>
      </p>
    </div>
  )
}
```
## API
▸ useTernaryDarkMode ( options? ): TernaryDarkModeReturn
Custom hook that manages ternary (system, dark, light) dark mode with local storage support.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| options? | TernaryDarkModeOptions | Options or the local storage key for the hook. |
#### Returns
TernaryDarkModeReturn
An object containing the dark mode state and helper functions.
### Type aliases
Ƭ TernaryDarkMode : "system" | "dark" | "light"
Ternary dark mode options.
Ƭ TernaryDarkModeOptions : Object
Options for the useTernaryDarkMode hook.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| defaultValue? | TernaryDarkMode | The default value for the dark mode. Default ts 'system' |
| initializeWithValue? | boolean | If true (default), the hook will initialize reading localStorage . In SSR, you should set it to false , returning default values initially. Default ts true |
| localStorageKey? | string | The key for storing dark mode preference in local storage. Default ts 'usehooks-ts-ternary-dark-mode' |
Ƭ TernaryDarkModeReturn : Object
Represents the return type of the useTernaryDarkMode hook.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| isDarkMode | boolean | The current state of the dark mode. |
| setTernaryDarkMode | Dispatch < SetStateAction < TernaryDarkMode >> | A function to set the dark mode state. |
| ternaryDarkMode | TernaryDarkMode | The current state of the dark mode. |
| toggleTernaryDarkMode | () => void | A function to toggle the dark mode state. |
## Hook
```
import type { Dispatch, SetStateAction } from 'react'

import { useLocalStorage, useMediaQuery } from 'usehooks-ts'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'
const LOCAL_STORAGE_KEY = 'usehooks-ts-ternary-dark-mode'

export type TernaryDarkMode = 'system' | 'dark' | 'light'

export type TernaryDarkModeOptions = {
  defaultValue?: TernaryDarkMode
  localStorageKey?: string
  initializeWithValue?: boolean
}

export type TernaryDarkModeReturn = {
  isDarkMode: boolean
  ternaryDarkMode: TernaryDarkMode
  setTernaryDarkMode: Dispatch<SetStateAction<TernaryDarkMode>>
  toggleTernaryDarkMode: () => void
}

export function useTernaryDarkMode({
  defaultValue = 'system',
  localStorageKey = LOCAL_STORAGE_KEY,
  initializeWithValue = true,
}: TernaryDarkModeOptions = {}): TernaryDarkModeReturn {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, { initializeWithValue })
  const [mode, setMode] = useLocalStorage(localStorageKey, defaultValue, {
    initializeWithValue,
  })

  const isDarkMode = mode === 'dark' || (mode === 'system' && isDarkOS)

  const toggleTernaryDarkMode = () => {
    const modes: TernaryDarkMode[] = ['light', 'system', 'dark']
    setMode((prevMode): TernaryDarkMode => {
      const nextIndex = (modes.indexOf(prevMode) + 1) % modes.length
      return modes[nextIndex]
    })
  }

  return {
    isDarkMode,
    ternaryDarkMode: mode,
    setTernaryDarkMode: setMode,
    toggleTernaryDarkMode,
  }
}
```