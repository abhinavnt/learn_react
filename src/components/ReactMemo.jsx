import React from 'react'

const ReactMemo = () => {
    console.log('renderd once');
    
  return (
    <>
    <h1>helo from rectmemo</h1>
    </>
  )
}

export default React.memo(ReactMemo)
