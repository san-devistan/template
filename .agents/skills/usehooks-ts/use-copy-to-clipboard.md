# useCopyToClipboard
Custom hook that copies text to the clipboard using the Clipboard API .
## Usage
```
import
 
{
 useCopyToClipboard 
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
copiedText
,
 copy
]
 
=
 
useCopyToClipboard
(
)

  
const
 
handleCopy
 
=
 
(
text
:
 
string
)
 
=>
 
(
)
 
=>
 
{

    
copy
(
text
)

      
.
then
(
(
)
 
=>
 
{

        
console
.
log
(
'Copied!'
,
 
{
 text 
}
)

      
}
)

      
.
catch
(
error 
=>
 
{

        
console
.
error
(
'Failed to copy!'
,
 error
)

      
}
)

  
}

  
return
 
(

    
<
>

      
<
h1
>
Click to copy:
</
h1
>

      
<
div
 
style
=
{
{
 display
:
 
'flex'
 
}
}
>

        
<
button
 
onClick
=
{
handleCopy
(
'A'
)
}
>
A
</
button
>

        
<
button
 
onClick
=
{
handleCopy
(
'B'
)
}
>
B
</
button
>

        
<
button
 
onClick
=
{
handleCopy
(
'C'
)
}
>
C
</
button
>

      
</
div
>

      
<
p
>
Copied value: 
{
copiedText 
??
 
'Nothing is copied yet!'
}
</
p
>

    
</
>

  
)

}
```
## API
▸ useCopyToClipboard (): [ CopiedValue , CopyFn ]
Custom hook that copies text to the clipboard using the Clipboard API .
#### Returns
[ CopiedValue , CopyFn ]
An tuple containing the copied text and a function to copy text to the clipboard.
### Type aliases
Ƭ CopiedValue : string | null
The copied text as string or null if nothing has been copied yet.
Ƭ CopyFn : ( text : string ) => Promise < boolean >
Function to copy text to the clipboard.
#### Type declaration
▸ ( text ): Promise < boolean >
##### Parameters
| Name | Type | Description |
| --- | --- | --- |
| text | string | The text to copy to the clipboard. |
##### Returns
Promise < boolean >
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
 
CopiedValue
 
=
 
string
 
|
 
null

type
 
CopyFn
 
=
 
(
text
:
 
string
)
 
=>
 
Promise
<
boolean
>

export
 
function
 
useCopyToClipboard
(
)
:
 
[
CopiedValue
,
 CopyFn
]
 
{

  
const
 
[
copiedText
,
 setCopiedText
]
 
=
 
useState
<
CopiedValue
>
(
null
)

  
const
 copy
:
 CopyFn 
=
 
useCallback
(
async
 text 
=>
 
{

    
if
 
(
!
navigator
?.
clipboard
)
 
{

      
console
.
warn
(
'Clipboard not supported'
)

      
return
 
false

    
}

    
// Try to save to clipboard then save it in the state if worked

    
try
 
{

      
await
 navigator
.
clipboard
.
writeText
(
text
)

      
setCopiedText
(
text
)

      
return
 
true

    
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
'Copy failed'
,
 error
)

      
setCopiedText
(
null
)

      
return
 
false

    
}

  
}
,
 
[
]
)

  
return
 
[
copiedText
,
 copy
]

}
```