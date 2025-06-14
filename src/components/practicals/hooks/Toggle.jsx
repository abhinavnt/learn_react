import React, { useCallback, useState } from 'react'

const Toggle = (initial=false) => {
   const [value,setValue]=useState(initial)

   const Toggle=useCallback(()=>{
    setValue(prev=>!prev)
   },[])


  return [value,Toggle]
}

export default Toggle
