# useCountdown
Custom hook that manages countdown.
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
 useCountdown 
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
intervalValue
,
 setIntervalValue
]
 
=
 
useState
<
number
>
(
1000
)

  
const
 
[
count
,
 
{
 startCountdown
,
 stopCountdown
,
 resetCountdown 
}
]
 
=

    
useCountdown
(
{

      countStart
:
 
60
,

      intervalMs
:
 intervalValue
,

    
}
)

  
const
 
handleChangeIntervalValue
 
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

    
setIntervalValue
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
div
>

      
<
p
>
Count: 
{
count
}
</
p
>

      
<
input

        
type
=
"
number
"

        
value
=
{
intervalValue
}

        
onChange
=
{
handleChangeIntervalValue
}

      
/>

      
<
button
 
onClick
=
{
startCountdown
}
>
start
</
button
>

      
<
button
 
onClick
=
{
stopCountdown
}
>
stop
</
button
>

      
<
button
 
onClick
=
{
resetCountdown
}
>
reset
</
button
>

    
</
div
>

  
)

}
```
## API
▸ useCountdown ( countdownOptions ): [ number , CountdownControllers ]
Custom hook that manages countdown.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| countdownOptions | CountdownOptions | The countdown's options. |
#### Returns
[ number , CountdownControllers ]
An array containing the countdown's count and its controllers.
### Type aliases
Ƭ CountdownControllers : Object
The countdown's controllers.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| resetCountdown | () => void | Reset the countdown. |
| startCountdown | () => void | Start the countdown. |
| stopCountdown | () => void | Stop the countdown. |
Ƭ CountdownOptions : Object
The countdown's options.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| countStart | number | The countdown's starting number, initial value of the returned number. |
| countStop? | number | The countdown's stopping number. Pass -Infinity to decrease forever. Default ts 0 |
| intervalMs? | number | The countdown's interval, in milliseconds. Default ts 1000 |
| isIncrement? | boolean | True if the countdown is increment. Default ts false |
## Hook
```
import
 
{
 useCallback 
}
 
from
 
'react'

import
 
{
 useBoolean
,
 useCounter
,
 useInterval 
}
 
from
 
'usehooks-ts'

type
 
CountdownOptions
 
=
 
{

  countStart
:
 
number

  intervalMs
?
:
 
number

  isIncrement
?
:
 
boolean

  countStop
?
:
 
number

}

type
 
CountdownControllers
 
=
 
{

  
startCountdown
:
 
(
)
 
=>
 
void

  
stopCountdown
:
 
(
)
 
=>
 
void

  
resetCountdown
:
 
(
)
 
=>
 
void

}

export
 
function
 
useCountdown
(
{

  countStart
,

  countStop 
=
 
0
,

  intervalMs 
=
 
1000
,

  isIncrement 
=
 
false
,

}
:
 CountdownOptions
)
:
 
[
number
,
 CountdownControllers
]
 
{

  
const
 
{

    count
,

    increment
,

    decrement
,

    reset
:
 resetCounter
,

  
}
 
=
 
useCounter
(
countStart
)

  
/*

   * Note: used to control the useInterval

   * running: If true, the interval is running

   * start: Should set running true to trigger interval

   * stop: Should set running false to remove interval.

   */

  
const
 
{

    value
:
 isCountdownRunning
,

    setTrue
:
 startCountdown
,

    setFalse
:
 stopCountdown
,

  
}
 
=
 
useBoolean
(
false
)

  
// Will set running false and reset the seconds to initial value.

  
const
 resetCountdown 
=
 
useCallback
(
(
)
 
=>
 
{

    
stopCountdown
(
)

    
resetCounter
(
)

  
}
,
 
[
stopCountdown
,
 resetCounter
]
)

  
const
 countdownCallback 
=
 
useCallback
(
(
)
 
=>
 
{

    
if
 
(
count 
===
 countStop
)
 
{

      
stopCountdown
(
)

      
return

    
}

    
if
 
(
isIncrement
)
 
{

      
increment
(
)

    
}
 
else
 
{

      
decrement
(
)

    
}

  
}
,
 
[
count
,
 countStop
,
 decrement
,
 increment
,
 isIncrement
,
 stopCountdown
]
)

  
useInterval
(
countdownCallback
,
 isCountdownRunning 
?
 intervalMs 
:
 
null
)

  
return
 
[
count
,
 
{
 startCountdown
,
 stopCountdown
,
 resetCountdown 
}
]

}
```