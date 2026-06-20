# useInterval
Custom hook that creates an interval that invokes a callback function at a specified delay using the setInterval API .
## Usage
```
import
 
{
 useState 
}
 
from
 
'react'

import
 
type
 
{
 
ChangeEvent
 
}
 
from
 
'react'

import
 
{
 useInterval 
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

  
// The counter

  
const
 
[
count
,
 setCount
]
 
=
 
useState
<
number
>
(
0
)

  
// Dynamic delay

  
const
 
[
delay
,
 setDelay
]
 
=
 
useState
<
number
>
(
1000
)

  
// ON/OFF

  
const
 
[
isPlaying
,
 setPlaying
]
 
=
 
useState
<
boolean
>
(
false
)

  
useInterval
(

    
(
)
 
=>
 
{

      
// Your custom logic here

      
setCount
(
count 
+
 
1
)

    
}
,

    
// Delay in milliseconds or null to stop it

    isPlaying 
?
 delay 
:
 
null
,

  
)

  
const
 
handleChange
 
=
 
(
event
:
 
ChangeEvent
<
HTMLInputElement
>
)
 
=>
 
{

    
setDelay
(
Number
(
event
.
target
.
value
)
)

  
}

  
return
 
(

    
<
>

      
<
h1
>
{
count
}
</
h1
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

          
setPlaying
(
!
isPlaying
)

        
}
}

      
>

        
{
isPlaying 
?
 
'pause'
 
:
 
'play'
}

      
</
button
>

      
<
p
>

        
<
label
 
htmlFor
=
"
delay
"
>
Delay: 
</
label
>

        
<
input

          
type
=
"
number
"

          
name
=
"
delay
"

          
onChange
=
{
handleChange
}

          
value
=
{
delay
}

        
/>

      
</
p
>

    
</
>

  
)

}
```
## API
▸ useInterval ( callback , delay ): void
Custom hook that creates an interval that invokes a callback function at a specified delay using the setInterval API .
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| callback | () => void | The function to be invoked at each interval. |
| delay | null | number | The time, in milliseconds, between each invocation of the callback. Use null to clear the interval. |
#### Returns
void
## Hook
```
import
 
{
 useEffect
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
 
useInterval
(
callback
:
 
(
)
 
=>
 
void
,
 delay
:
 
number
 
|
 
null
)
 
{

  
const
 savedCallback 
=
 
useRef
(
callback
)

  
// Remember the latest callback if it changes.

  
useIsomorphicLayoutEffect
(
(
)
 
=>
 
{

    savedCallback
.
current 
=
 callback

  
}
,
 
[
callback
]
)

  
// Set up the interval.

  
useEffect
(
(
)
 
=>
 
{

    
// Don't schedule if no delay is specified.

    
// Note: 0 is a valid value for delay.

    
if
 
(
delay 
===
 
null
)
 
{

      
return

    
}

    
const
 id 
=
 
setInterval
(
(
)
 
=>
 
{

      savedCallback
.
current
(
)

    
}
,
 delay
)

    
return
 
(
)
 
=>
 
{

      
clearInterval
(
id
)

    
}

  
}
,
 
[
delay
]
)

}
```