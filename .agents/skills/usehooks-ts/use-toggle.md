# useToggle
Custom hook that manages a boolean toggle state in React components.
## Usage
```
import
 
{
 useToggle 
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
value
,
 toggle
,
 setValue
]
 
=
 
useToggle
(
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
(
)
 
=>
 
{

          
setValue
(
true
)

        
}
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
(
)
 
=>
 
{

          
setValue
(
false
)

        
}
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
▸ useToggle ( defaultValue? ): [ boolean , () => void , Dispatch < SetStateAction < boolean >>]
Custom hook that manages a boolean toggle state in React components.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| defaultValue? | boolean | The initial value for the toggle state. |
#### Returns
[ boolean , () => void , Dispatch < SetStateAction < boolean >>]
A tuple containing the current state, a function to toggle the state, and a function to set the state explicitly.
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

export
 
function
 
useToggle
(

  defaultValue
?
:
 
boolean
,

)
:
 
[
boolean
,
 
(
)
 
=>
 
void
,
 Dispatch
<
SetStateAction
<
boolean
>>
]
 
{

  
const
 
[
value
,
 setValue
]
 
=
 
useState
(
!
!
defaultValue
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
 
[
value
,
 toggle
,
 setValue
]

}
```