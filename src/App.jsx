import React, { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomCounter from './components/customCounter'
import UseReducer from './components/UseReducer'
import Timer from './components/Timer'
import { ThemeContext, ThemeProvider } from './context/ThemeProvider'
import ThemeButton from './components/ThemeButton'
import ReactMemo from './components/ReactMemo'

import Test from './components/Test'
import TimerUseReducer from './components/TimerUseReducer'
import Parrenttest from './components/practice/Parrenttest'
import useCounter from './Hooks/useHooks'
import Maptest from './components/practice/Maptest'
import CounerUseReducer from './components/practicals/CounerUseReducer'
import ToggleUse from './components/practice/ToggleUse'
import ApplaySearch from './components/ApplaySearch'
import ApplaySearchTest from './components/practice/ApplaySearchTest'
import DisableButtonExample from './components/DisableButtonExample'
import ToggleCheckbox from './components/ToggleCheckbox '
import ResizeComponent from './components/practicals/ResizeComponent'
import BallFollower from './components/practicals/BallFollower'
import Parrent from './components/test/Parrent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const LazyComponent=React.lazy(()=>import('./components/LazyComponent'))





function App() {

  // const handleRightClick=e=>{
  //   e.preventDefault()
  //   alert("right click disabled")
  // }

  // useEffect(()=>{
  //  document.addEventListener('contextmenu',handleRightClick)

 
  // },[])

  return (
    <>
    <BrowserRouter>
    <Routes>

     <Route path='/lazy' element={<Suspense fallback={<>loading..</>}><LazyComponent/></Suspense>}/>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
