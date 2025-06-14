import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const ThemeButton = () => {
const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div style={{width:'100px',height:'100px'}}>
      <h1>current theme: {theme}</h1>
      <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  )
}

export default ThemeButton
