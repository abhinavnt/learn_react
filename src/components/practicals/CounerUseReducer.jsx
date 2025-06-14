import React, { useReducer } from 'react'


const reducer=(state,action)=>{
    switch(action.type){
        case 'inc':
            return {count:state.count+1}
        case 'dec':
            return {count:state.count-1}
        case 'reset':
            return {count:0}
        default:
            return state
    }
}





const CounerUseReducer = () => {


    const [state,dispatch]=useReducer(reducer,{count:0})


  return (
    <div>
        <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'inc'})}>+</button>
      <button onClick={()=>dispatch({type:'dec'})}>-</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default CounerUseReducer
