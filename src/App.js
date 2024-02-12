import React from 'react'
import './App.css'
import bg from './images/bg-img2.jpg'
import Navbar from './components/Navbar'
import Description from './components/Description'
import Buttons from './components/Buttons'
import Accessories from './components/Accessories'
import Contact from './components/Contact'

function App() {
  return (
    <div className='App'>
      <div className='bg-img'>
        <img src={bg}></img>
      </div>
      <Navbar />
      <Description />
      <Buttons />
      <Accessories />
      <Contact />
    </div>
  )
}

export default App
