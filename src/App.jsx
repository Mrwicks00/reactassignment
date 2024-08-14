import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Herosection/Hero'
import Anotherhero from './Components/Herosection/Anotherhero'

const App = () => {
  return (
    <div className='theboss-app'>
      <Navbar />
      <Hero />
      <Anotherhero />
    </div>
  )
}

export default App
