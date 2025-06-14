import React, { useEffect } from 'react'

const sampleleffect = () => {

 useEffect(()=>{

   return ()=>{
    alert('the component is unmounting')
   } 
 },[])

  return (
    <div>
      <h1>this is aletmountenr</h1>
    </div>
  )
}

export default sampleleffect
