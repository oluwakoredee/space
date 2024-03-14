/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home' 
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Technology from './pages/Technology'

function App() {
  return (
    <div className=' '>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Crew' element={<Crew/>}/>
      <Route path='/Destination' element={<Destination/>}/>
      <Route path='/Technology' element={<Technology/>}/>
    </Routes>
    </div>
  )
}

export default App
