

import React, { createContext, useState } from 'react'

export const counterContext=createContext()


export const CounterProvider = ({children}) => {

    const [count,setCount]=useState(0)

    const increment = ()=> setCount((prev)=>prev+1)
    const decrement = ()=>setCount((prev)=>prev-1)
    const reset =()=>setCount(0)





  return (
    <counterContext.Provider value={{count,increment,decrement,reset}}>
        {children}
    </counterContext.Provider>
  )
}





