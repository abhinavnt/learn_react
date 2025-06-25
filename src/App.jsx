import React, { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Countercon from './components/contextuse/Countercon'

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
    <Countercon/>
    </BrowserRouter>
    </>
  )
}

export default App
