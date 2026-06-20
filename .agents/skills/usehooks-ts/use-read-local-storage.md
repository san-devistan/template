# useReadLocalStorage
Custom hook that reads a value from localStorage , closely related to useLocalStorage() .
## Usage
```
import
 
{
 useReadLocalStorage 
}
 
from
 
'usehooks-ts'

export
 
default
 
function
 
Component
(
)
 
{

  
// Assuming a value was set in localStorage with this key

  
const
 darkMode 
=
 
useReadLocalStorage
(
'darkMode'
)

  
return
 
<
p
>
DarkMode is 
{
darkMode 
?
 
'enabled'
 
:
 
'disabled'
}
</
p
>

}
```
## API
▸ useReadLocalStorage < T >( key , options ): T | null | undefined
Custom hook that reads a value from localStorage , closely related to useLocalStorage() .
#### Type parameters
| Name | Description |
| --- | --- |
| T | The type of the stored value. |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| key | string | The key associated with the value in local storage. |
| options | Options < T , false > | Additional options for reading the value (optional). |
#### Returns
T | null | undefined
The stored value, or null if the key is not present or an error occurs.
▸ useReadLocalStorage < T >( key , options? ): T | null
Custom hook that reads a value from localStorage , closely related to useLocalStorage() .
#### Type parameters
| Name | Description |
| --- | --- |
| T | The type of the stored value. |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| key | string | The key associated with the value in local storage. |
| options? | Partial < Options < T , true >> | Additional options for reading the value (optional). |
#### Returns
T | null
The stored value, or null if the key is not present or an error occurs.
### Type aliases
Ƭ Options < T , InitializeWithValue >: Object
Represents the type for the options available when reading from local storage.
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| T | T | The type of the stored value. |
| InitializeWithValue | extends boolean | undefined | - |
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| deserializer? | ( value : string ) => T | Custom deserializer function to convert the stored string value to the desired type (optional). |
| initializeWithValue | InitializeWithValue | If true (default), the hook will initialize reading the local storage. In SSR, you should set it to false , returning undefined initially. |
## Hook
```
import
 
{
 useCallback
,
 useEffect
,
 useState 
}
 
from
 
'react'

import
 
{
 useEventListener 
}
 
from
 
'usehooks-ts'

const
 
IS_SERVER
 
=
 
typeof
 window 
===
 
'undefined'

type
 
Options
<
T
,
 InitializeWithValue 
extends
 
boolean
 
|
 
undefined
>
 
=
 
{

  deserializer
?
:
 
(
value
:
 
string
)
 
=>
 
T

  initializeWithValue
:
 InitializeWithValue

}

// SSR version

export
 
function
 
useReadLocalStorage
<
T
>
(

  key
:
 
string
,

  options
:
 Options
<
T
,
 
false
>
,

)
:
 
T
 
|
 
null
 
|
 
undefined

// CSR version

export
 
function
 
useReadLocalStorage
<
T
>
(

  key
:
 
string
,

  options
?
:
 Partial
<
Options
<
T
,
 
true
>>
,

)
:
 
T
 
|
 
null

export
 
function
 
useReadLocalStorage
<
T
>
(

  key
:
 
string
,

  options
:
 Partial
<
Options
<
T
,
 
boolean
>>
 
=
 
{
}
,

)
:
 
T
 
|
 
null
 
|
 
undefined
 
{

  
let
 
{
 initializeWithValue 
=
 
true
 
}
 
=
 options

  
if
 
(
IS_SERVER
)
 
{

    initializeWithValue 
=
 
false

  
}

  
const
 deserializer 
=
 useCallback
<
(
value
:
 
string
)
 
=>
 
T
 
|
 
null
>
(

    value 
=>
 
{

      
if
 
(
options
.
deserializer
)
 
{

        
return
 options
.
deserializer
(
value
)

      
}

      
// Support 'undefined' as a value

      
if
 
(
value 
===
 
'undefined'
)
 
{

        
return
 
undefined
 
as
 
unknown
 
as
 
T

      
}

      
let
 parsed
:
 
unknown

      
try
 
{

        parsed 
=
 
JSON
.
parse
(
value
)

      
}
 
catch
 
(
error
)
 
{

        
console
.
error
(
'Error parsing JSON:'
,
 error
)

        
return
 
null

      
}

      
return
 parsed 
as
 
T

    
}
,

    
[
options
]
,

  
)

  
// Get from local storage then

  
// parse stored json or return initialValue

  
const
 readValue 
=
 
useCallback
(
(
)
:
 
T
 
|
 
null
 
=>
 
{

    
// Prevent build error "window is undefined" but keep keep working

    
if
 
(
IS_SERVER
)
 
{

      
return
 
null

    
}

    
try
 
{

      
const
 raw 
=
 window
.
localStorage
.
getItem
(
key
)

      
return
 raw 
?
 
deserializer
(
raw
)
 
:
 
null

    
}
 
catch
 
(
error
)
 
{

      
console
.
warn
(
`
Error reading localStorage key “
${
key
}
”:
`
,
 error
)

      
return
 
null

    
}

  
}
,
 
[
key
,
 deserializer
]
)

  
const
 
[
storedValue
,
 setStoredValue
]
 
=
 
useState
(
(
)
 
=>
 
{

    
if
 
(
initializeWithValue
)
 
{

      
return
 
readValue
(
)

    
}

    
return
 
undefined

  
}
)

  
// Listen if localStorage changes

  
useEffect
(
(
)
 
=>
 
{

    
setStoredValue
(
readValue
(
)
)

    
// eslint-disable-next-line react-hooks/exhaustive-deps

  
}
,
 
[
key
]
)

  
const
 handleStorageChange 
=
 
useCallback
(

    
(
event
:
 StorageEvent 
|
 CustomEvent
)
 
=>
 
{

      
if
 
(
(
event 
as
 StorageEvent
)
.
key 
&&
 
(
event 
as
 StorageEvent
)
.
key 
!==
 key
)
 
{

        
return

      
}

      
setStoredValue
(
readValue
(
)
)

    
}
,

    
[
key
,
 readValue
]
,

  
)

  
// this only works for other documents, not the current one

  
useEventListener
(
'storage'
,
 handleStorageChange
)

  
// this is a custom event, triggered in writeValueToLocalStorage

  
// See: useLocalStorage()

  
useEventListener
(
'local-storage'
,
 handleStorageChange
)

  
return
 storedValue

}
```