import React, { useState } from 'react'

const Childtest = ({name,submitFun}) => {
    
  return (
    <div>
      <p>{name}</p>
      <input type="text" onChange={(e)=>submitFun(e.target.value)} />
    </div>
  )
}

export default Childtest
