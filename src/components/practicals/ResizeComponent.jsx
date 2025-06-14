

import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {

    const [windowSize,setWindowsize]=useState({width:window.innerWidth,height:window.innerHeight})

    useEffect(()=>{
        
        const handleResize=()=>{
            setWindowsize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }

        window.addEventListener('resize',handleResize)

    },[])


  return (
    <div>
      <h1>Window Width: {windowSize.width}</h1>
      <h1>Window Height: {windowSize.height}</h1>
    </div>
  )
}

export default ResizeComponent
