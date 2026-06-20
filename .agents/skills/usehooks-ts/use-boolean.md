# useBoolean
Custom hook that handles boolean state with useful utility functions.
## Usage
```
import
 
{
 useBoolean 
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
 
{
 value
,
 setValue
,
 setTrue
,
 setFalse
,
 toggle 
}
 
=
 
useBoolean
(
false
)

  
// Just an example to use "setValue"

  
const
 
customToggle
 
=
 
(
)
 
=>
 
{

    
setValue
(
(
x
:
 
boolean
)
 
=>
 
!
x
)

  
}

  
return
 
(

    
<
>

      
<
p
>

        Value is 
<
code
>
{
value
.
toString
(
)
}
</
code
>

      
</
p
>

      
<
button
 
onClick
=
{
setTrue
}
>
set true
</
button
>

      
<
button
 
onClick
=
{
setFalse
}
>
set false
</
button
>

      
<
button
 
onClick
=
{
toggle
}
>
toggle
</
button
>

      
<
button
 
onClick
=
{
customToggle
}
>
custom toggle
</
button
>

    
</
>

  
)

}
```
## API
▸ useBoolean ( defaultValue? ): UseBooleanReturn
Custom hook that handles boolean state with useful utility functions.
#### Parameters
| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| defaultValue? | boolean | false | The initial value for the boolean state (default is false ). |
#### Returns
UseBooleanReturn
An object containing the boolean state value and utility functions to manipulate the state.
Throws
Will throw an error if defaultValue is an invalid boolean value.
### Type aliases
Ƭ UseBooleanReturn : Object
The useBoolean return type.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| setFalse | () => void | Function to set the boolean state to false . |
| setTrue | () => void | Function to set the boolean state to true . |
| setValue | Dispatch < SetStateAction < boolean >> | Function to set the boolean state directly. |
| toggle | () => void | Function to toggle the boolean state. |
| value | boolean | The current boolean state value. |
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

import
 
type
 
{
 Dispatch
,
 SetStateAction 
}
 
from
 
'react'

type
 
UseBooleanReturn
 
=
 
{

  value
:
 
boolean

  setValue
:
 Dispatch
<
SetStateAction
<
boolean
>>

  
setTrue
:
 
(
)
 
=>
 
void

  
setFalse
:
 
(
)
 
=>
 
void

  
toggle
:
 
(
)
 
=>
 
void

}

export
 
function
 
useBoolean
(
defaultValue 
=
 
false
)
:
 UseBooleanReturn 
{

  
if
 
(
typeof
 defaultValue 
!==
 
'boolean'
)
 
{

    
throw
 
new
 
Error
(
'defaultValue must be `true` or `false`'
)

  
}

  
const
 
[
value
,
 setValue
]
 
=
 
useState
(
defaultValue
)

  
const
 setTrue 
=
 
useCallback
(
(
)
 
=>
 
{

    
setValue
(
true
)

  
}
,
 
[
]
)

  
const
 setFalse 
=
 
useCallback
(
(
)
 
=>
 
{

    
setValue
(
false
)

  
}
,
 
[
]
)

  
const
 toggle 
=
 
useCallback
(
(
)
 
=>
 
{

    
setValue
(
x 
=>
 
!
x
)

  
}
,
 
[
]
)

  
return
 
{
 value
,
 setValue
,
 setTrue
,
 setFalse
,
 toggle 
}

}
```