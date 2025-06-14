import { useState } from "react"



function  useCounter(initial) {
    const [count,setCount]=useState(initial)

    const increment=()=>setCount(count=>count+1)
    const decrement=()=>setCount(count=>count-1)

    return {increment,decrement,count}
}


export default useCounter


















