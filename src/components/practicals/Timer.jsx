import { useEffect, useState } from "react"


const Timer = () => {

    const [time,setTime]=useState(0)
    const [isrunning,setRunning]=useState(false)

    
    useEffect(()=>{
        let inteval

        if(isrunning){
            inteval=setInterval(()=>{
                setTime(prev=>prev+1)
            },1000)
        }


        return ()=> clearInterval(inteval)

    },[isrunning])

     
    const handleStart=()=>setRunning(true)
    const handleStop=()=>setRunning(false)
    const handleReset=()=>setTime(0)



  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Timer
