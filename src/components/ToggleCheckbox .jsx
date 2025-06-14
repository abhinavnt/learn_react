import React, { useState } from 'react'

const ToggleCheckbox  = () => {
    const [checked,setChecked]=useState(false)

    const handleToggle=()=>{
        setChecked(prev=>!prev)
    }

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={e=>setChecked(e.target.checked)} />
      <label >{checked?'checked':'not checked'}</label>
      <br /><br />
      <button onClick={handleToggle}>check</button>
    </div>
  )
}

export default ToggleCheckbox 
