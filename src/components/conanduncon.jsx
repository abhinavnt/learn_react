import React, { useRef, useState } from 'react'

const conanduncon = () => {
const [inputValue,setInputValue]=useState('')
const inputRef=useRef()
function handleChange(e){
   setInputValue(e.target.value)
   console.log(inputValue)
   if(inputValue.includes('mad')){
    alert('not allowed mad')
   }


}
const onsub=(e)=>{
    e.preventDefault()
    alert(`hai ${inputRef.current.value}`)

}   



  return (
    <div>
        {/* controllerd */}
      <form>
        <input type="text" onChange={handleChange}/>
      </form>


      {/* uncontrolled */}
      <form onSubmit={onsub}>
        <input ref={inputRef} type="text" />
        <button >submit</button>
      </form>
    </div>
  )
}

export default conanduncon
