import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount]=useState(0)
    const [start,setStart]=useState(false)
    
    useEffect(()=>{
     let timer
     if(start){
        timer=setInterval(()=>{
            setCount((count)=>count+1)
        },1000)
     }else{
     }

     return ()=>clearInterval(timer)
    },[start])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setStart(true)}>start</button>
      <button onClick={()=>setStart(false)}>stop</button>
      <button onClick={()=>{setCount(0);setStart(false)}}>reset</button>
    </div>
  )
}

export default Timer

















