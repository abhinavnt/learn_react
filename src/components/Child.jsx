import React from 'react'

const Child = ({setData}    ) => {

function dataset(){
    setData("message from child")
}

  return (
    <div>
      <button onClick={dataset}>set any data</button>
    </div>
  )
}

export default Child
