import React, { useState } from 'react'
import Childtest from './Childtest'

const Parrenttest = () => {
    const [user,setUser]=useState()
  return (
    <div>
      hai peopless {user}
      <Childtest name={"Abhinav"} submitFun={setUser}/>
    </div>
  )
}

export default Parrenttest
