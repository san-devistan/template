# useUnmount
Custom hook that runs a cleanup function when the component is unmounted.
## Usage
```
import
 
{
 useUnmount 
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

  
useUnmount
(
(
)
 
=>
 
{

    
// Cleanup logic here

  
}
)

  
return
 
<
div
>
Hello world
</
div
>

}
```
## API
▸ useUnmount ( func ): void
Custom hook that runs a cleanup function when the component is unmounted.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| func | () => void | The cleanup function to be executed on unmount. |
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

export
 
function
 
useUnmount
(
func
:
 
(
)
 
=>
 
void
)
 
{

  
const
 funcRef 
=
 
useRef
(
func
)

  funcRef
.
current 
=
 func

  
useEffect
(

    
(
)
 
=>
 
(
)
 
=>
 
{

      funcRef
.
current
(
)

    
}
,

    
[
]
,

  
)

}
```