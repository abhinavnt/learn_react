import React, { useState } from 'react'

const useCounter = (initial=0) => {
   const [count,setCount]=useState(initial)
   const increment=()=>setCount(prev=>prev+1)
   const decrement=()=>setCount(prev=>prev-1)
  return {count,increment,decrement}
}

export default useCounter
