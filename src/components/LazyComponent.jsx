import React from 'react'

const LazyComponent = () => {
  console.log("lazay component loading");
  
  return (
    <div>
      <h1>this is from LazyComponent</h1>
    </div>
  )
}

export default LazyComponent
