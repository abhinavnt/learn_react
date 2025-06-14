import React, { useEffect, useReducer, useState } from 'react'


function reducerFun(state,action){

    switch(action.type){
     case 'inc':
        return {count:state.count+1}
     case 'reset':
        return {count: state.count=0}
        
    }
}



const TimerUseReducer = () => {
    const [state,dispatch]=useReducer(reducerFun,{count:0})
    const [start,setStart]=useState(false)


     
    useEffect(()=>{
        let timer
      if(start){

          timer=setInterval(()=>{
              dispatch({type:'inc'})
            },1)
        }

       return ()=>clearInterval(timer)

    },[start])
    

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>setStart(true)}>start</button>
      <button onClick={()=>setStart(false)}>stop</button>
      <button onClick={()=>(setStart(false),dispatch({type:'reset'}))}>reset</button>
    </div>
  )
}

export default TimerUseReducer
