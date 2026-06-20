# useCounter
Custom hook that manages a counter with increment, decrement, reset, and setCount functionalities.
## Usage
```
import
 
{
 useCounter 
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
 count
,
 setCount
,
 increment
,
 decrement
,
 reset 
}
 
=
 
useCounter
(
0
)

  
const
 
multiplyBy2
 
=
 
(
)
 
=>
 
{

    
setCount
(
(
x
:
 
number
)
 
=>
 x 
*
 
2
)

  
}

  
return
 
(

    
<
>

      
<
p
>
Count is 
{
count
}
</
p
>

      
<
button
 
onClick
=
{
increment
}
>
Increment
</
button
>

      
<
button
 
onClick
=
{
decrement
}
>
Decrement
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
multiplyBy2
}
>
Multiply by 2
</
button
>

    
</
>

  
)

}
```
## API
▸ useCounter ( initialValue? ): UseCounterReturn
Custom hook that manages a counter with increment, decrement, reset, and setCount functionalities.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| initialValue? | number | The initial value for the counter. |
#### Returns
UseCounterReturn
An object containing the current count and functions to interact with the counter.
### Type aliases
Ƭ UseCounterReturn : Object
The hook return type.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| count | number | The current count value. |
| decrement | () => void | Function to decrement the counter by 1. |
| increment | () => void | Function to increment the counter by 1. |
| reset | () => void | Function to reset the counter to its initial value. |
| setCount | Dispatch < SetStateAction < number >> | Function to set a specific value to the counter. |
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
 
UseCounterReturn
 
=
 
{

  count
:
 
number

  
increment
:
 
(
)
 
=>
 
void

  
decrement
:
 
(
)
 
=>
 
void

  
reset
:
 
(
)
 
=>
 
void

  setCount
:
 Dispatch
<
SetStateAction
<
number
>>

}

export
 
function
 
useCounter
(
initialValue
?
:
 
number
)
:
 UseCounterReturn 
{

  
const
 
[
count
,
 setCount
]
 
=
 
useState
(
initialValue 
??
 
0
)

  
const
 increment 
=
 
useCallback
(
(
)
 
=>
 
{

    
setCount
(
x 
=>
 x 
+
 
1
)

  
}
,
 
[
]
)

  
const
 decrement 
=
 
useCallback
(
(
)
 
=>
 
{

    
setCount
(
x 
=>
 x 
-
 
1
)

  
}
,
 
[
]
)

  
const
 reset 
=
 
useCallback
(
(
)
 
=>
 
{

    
setCount
(
initialValue 
??
 
0
)

  
}
,
 
[
initialValue
]
)

  
return
 
{

    count
,

    increment
,

    decrement
,

    reset
,

    setCount
,

  
}

}
```