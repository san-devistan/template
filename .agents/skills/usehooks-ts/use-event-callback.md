# useEventCallback
Custom hook that creates a memoized event callback.
## Usage
```
import
 
{
 useEventCallback 
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
 handleClick 
=
 
useEventCallback
(
event 
=>
 
{

    
// Handle the event here

    
console
.
log
(
'Clicked'
,
 event
)

  
}
)

  
return
 
<
button
 
onClick
=
{
handleClick
}
>
Click me
</
button
>

}
```
## API
▸ useEventCallback < Args , R >( fn ): (... args : Args ) => R
Custom hook that creates a memoized event callback.
#### Type parameters
| Name | Type | Description |
| --- | --- | --- |
| Args | extends unknown [] | An array of argument types for the event callback. |
| R | R | The return type of the event callback. |
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| fn | (... args : Args ) => R | The callback function. |
#### Returns
fn
A memoized event callback function.
▸ ( ...args ): R
##### Parameters
| Name | Type |
| --- | --- |
| ...args | Args |
##### Returns
R
## Hook
```
import
 
{
 useCallback
,
 useRef 
}
 
from
 
'react'

import
 
{
 useIsomorphicLayoutEffect 
}
 
from
 
'usehooks-ts'

export
 
function
 
useEventCallback
<
Args 
extends
 
unknown
[
]
,
 
R
>
(

  
fn
:
 
(
...
args
:
 Args
)
 
=>
 
R
,

)
:
 
(
...
args
:
 Args
)
 
=>
 
R

export
 
function
 
useEventCallback
<
Args 
extends
 
unknown
[
]
,
 
R
>
(

  fn
:
 
(
(
...
args
:
 Args
)
 
=>
 
R
)
 
|
 
undefined
,

)
:
 
(
(
...
args
:
 Args
)
 
=>
 
R
)
 
|
 
undefined

export
 
function
 
useEventCallback
<
Args 
extends
 
unknown
[
]
,
 
R
>
(

  fn
:
 
(
(
...
args
:
 Args
)
 
=>
 
R
)
 
|
 
undefined
,

)
:
 
(
(
...
args
:
 Args
)
 
=>
 
R
)
 
|
 
undefined
 
{

  
const
 ref 
=
 
useRef
<
typeof
 fn
>
(
(
)
 
=>
 
{

    
throw
 
new
 
Error
(
'Cannot call an event handler while rendering.'
)

  
}
)

  
useIsomorphicLayoutEffect
(
(
)
 
=>
 
{

    ref
.
current 
=
 fn

  
}
,
 
[
fn
]
)

  
return
 
useCallback
(
(
...
args
:
 Args
)
 
=>
 ref
.
current
?.
(
...
args
)
,
 
[
ref
]
)
 
as
 
(

    
...
args
:
 Args

  
)
 
=>
 
R

}
```