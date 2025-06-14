import React from 'react'
import Toggle from '../practicals/hooks/Toggle'

const ToggleUse = () => {
  const [isOn,toggle]=Toggle()
  return (
    <div>
      <h1>{isOn? 'on':'off'}</h1>
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default ToggleUse
