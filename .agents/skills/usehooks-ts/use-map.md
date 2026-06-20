# useMap
Custom hook that manages a key-value Map state with setter actions.
## Usage
```
import
 
{
 
Fragment
 
}
 
from
 
'react'

import
 
{
 useMap 
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

  
const
 
[
map
,
 actions
]
 
=
 
useMap
<
string
,
 
string
>
(
[
[
'key'
,
 
'🆕'
]
]
)

  
const
 
set
 
=
 
(
)
 
=>
 
{

    actions
.
set
(
String
(
Date
.
now
(
)
)
,
 
'📦'
)

  
}

  
const
 
setAll
 
=
 
(
)
 
=>
 
{

    actions
.
setAll
(
[

      
[
'hello'
,
 
'👋'
]
,

      
[
'data'
,
 
'📦'
]
,

    
]
)

  
}

  
const
 
reset
 
=
 
(
)
 
=>
 
{

    actions
.
reset
(
)

  
}

  
const
 
remove
 
=
 
(
)
 
=>
 
{

    actions
.
remove
(
'hello'
)

  
}

  
return
 
(

    
<
div
>

      
<
button
 
onClick
=
{
set
}
>
Add
</
button
>

      
<
button
 
onClick
=
{
reset
}
>
Reset
</
button
>

      
<
button
 
onClick
=
{
setAll
}
>
Set new data</button>

      
<
button
 
onClick
=
{
remove
}
 
disabled
=
{
!
map
.
get
(
'hello'
)
}
>

        
{
'Remove "hello"'
}

      
</
button
>

      
<
pre
>

        Map (

        
{
Array
.
from
(
map
.
entries
(
)
)
.
map
(
(
[
key
,
 value
]
)
 
=>
 
(

          
<
Fragment
 
key
=
{
key
}
>
{
`
\n  
${
key
}
: 
${
value
}
`
}
</
Fragment
>

        
)
)
}

        
<
br
 
/>
)

      
</
pre
>

    
</
div
>

  )

}
```
## API
▸ useMap < K , V >( initialState? ): UseMapReturn < K , V >
Custom hook that manages a key-value Map state with setter actions.
#### Type parameters
| Name | Description |
| --- | --- |
| K | The type of keys in the map. |
| V | The type of values in the map. |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| initialState? | MapOrEntries < K , V > | The initial state of the map as a Map or an array of key-value pairs (optional). |
#### Returns
UseMapReturn < K , V >
A tuple containing the map state and actions to interact with the map.
### Type aliases
Ƭ MapOrEntries < K , V >: Map < K , V > | [ K , V ][]
Represents the type for either a Map or an array of key-value pairs.
#### Type parameters
| Name | Description |
| --- | --- |
| K | The type of keys in the map. |
| V | The type of values in the map. |
Ƭ UseMapActions < K , V >: Object
Represents the actions available to interact with the map state.
#### Type parameters
| Name | Description |
| --- | --- |
| K | The type of keys in the map. |
| V | The type of values in the map. |
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| remove | ( key : K ) => void | Remove a key-value pair from the map. |
| reset | Map < K , V >[ "clear" ] | Reset the map to an empty state. |
| set | ( key : K , value : V ) => void | Set a key-value pair in the map. |
| setAll | ( entries : MapOrEntries < K , V >) => void | Set all key-value pairs in the map. |
Ƭ UseMapReturn < K , V >: [ Omit < Map < K , V >, "set" | "clear" | "delete" >, UseMapActions < K , V >]
Represents the return type of the useMap hook. We hide some setters from the returned map to disable autocompletion.
#### Type parameters
| Name | Description |
| --- | --- |
| K | The type of keys in the map. |
| V | The type of values in the map. |
## Hook
```
import
 
{
 useCallback
,
 useState 
}
 
from
 
'react'

type
 
MapOrEntries
<
K
,
 
V
>
 
=
 Map
<
K
,
 
V
>
 
|
 
[
K
,
 
V
]
[
]

type
 
UseMapActions
<
K
,
 
V
>
 
=
 
{

  
set
:
 
(
key
:
 
K
,
 value
:
 
V
)
 
=>
 
void

  
setAll
:
 
(
entries
:
 MapOrEntries
<
K
,
 
V
>
)
 
=>
 
void

  
remove
:
 
(
key
:
 
K
)
 
=>
 
void

  reset
:
 Map
<
K
,
 
V
>
[
'clear'
]

}

type
 
UseMapReturn
<
K
,
 
V
>
 
=
 
[

  Omit
<
Map
<
K
,
 
V
>
,
 
'set'
 
|
 
'clear'
 
|
 
'delete'
>
,

  UseMapActions
<
K
,
 
V
>
,

]

export
 
function
 
useMap
<
K
,
 
V
>
(

  initialState
:
 MapOrEntries
<
K
,
 
V
>
 
=
 
new
 
Map
(
)
,

)
:
 UseMapReturn
<
K
,
 
V
>
 
{

  
const
 
[
map
,
 setMap
]
 
=
 
useState
(
new
 
Map
(
initialState
)
)

  
const
 actions
:
 UseMapActions
<
K
,
 
V
>
 
=
 
{

    set
:
 
useCallback
(
(
key
,
 value
)
 
=>
 
{

      
setMap
(
prev 
=>
 
{

        
const
 copy 
=
 
new
 
Map
(
prev
)

        copy
.
set
(
key
,
 value
)

        
return
 copy

      
}
)

    
}
,
 
[
]
)
,

    setAll
:
 
useCallback
(
entries 
=>
 
{

      
setMap
(
(
)
 
=>
 
new
 
Map
(
entries
)
)

    
}
,
 
[
]
)
,

    remove
:
 
useCallback
(
key 
=>
 
{

      
setMap
(
prev 
=>
 
{

        
const
 copy 
=
 
new
 
Map
(
prev
)

        copy
.
delete
(
key
)

        
return
 copy

      
}
)

    
}
,
 
[
]
)
,

    reset
:
 
useCallback
(
(
)
 
=>
 
{

      
setMap
(
(
)
 
=>
 
new
 
Map
(
)
)

    
}
,
 
[
]
)
,

  
}

  
return
 
[
map
,
 actions
]

}
```