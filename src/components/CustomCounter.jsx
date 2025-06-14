import React from 'react'
import useCounter from '../Hooks/useHooks'
const customCounter = () => {
    const {increment,decrement,count}=useCounter(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default customCounter






















