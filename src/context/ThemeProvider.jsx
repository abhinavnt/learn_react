import { createContext, useState } from "react";



export const ThemeContext=createContext()


export const ThemeProvider=({children})=>{
  const [theme,setTheme]=useState(['light'])

  document.body.style.backgroundColor= theme=='light'?'white':'black'
  document.body.style.color=theme=='light'?'black':'white'


 const toggleTheme=()=>{
      setTheme((prevThem)=>(prevThem==='light'?'dark':'light'))
 }

  return(
    <ThemeContext.Provider value={{toggleTheme,theme}}>
    {children}
    </ThemeContext.Provider>
  )
}