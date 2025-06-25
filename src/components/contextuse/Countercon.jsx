import React, { useContext } from 'react'
import { counterContext } from '../../context/counterContext'

const Countercon = () => {
    const {count,increment,decrement,reset}=useContext(counterContext)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Countercon
