import React, { useReducer } from 'react'




function reducerFunction(state,action){
    switch(action.type){
       case 'inc':
        return {count: state.count+1}
      case 'dec':
        return {count:state.count-1}
    }
}




const UseReducer = () => {
 const [state,dispatch]=useReducer(reducerFunction,{count:0})


  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'inc'})}>+</button>
      <button onClick={()=>dispatch({type:'dec'})}>-</button>
      <h1>reducer</h1>
    </div>
  )
}

export default UseReducer
