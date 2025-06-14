import React, { useState } from 'react'
import Child from './Child'

const Parrent = () => {
    const [data,setData]=useState(' ')

  

  return (
    <div>
      <div>{data}</div>
      <Child setData={setData}/>
    </div>
  )
}

export default Parrent
