import React, { useState } from 'react'

const DisableButtonExample  = () => {


  const [inputValue,setInputValue]=useState('')

  return (
    <div>
      <input type="text" placeholder='search here' value={inputValue} onChange={e=>setInputValue(e.target.value)} /> 
      <button disabled={inputValue.trim()===""}>submit</button>     
    </div>
  )
}

export default DisableButtonExample 
