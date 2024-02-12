import React from 'react'
import './App.css'
import bg from './images/bg-img2.jpg'
import Navbar from './components/Navbar'
import Description from './components/Description'
import Buttons from './components/Buttons'
import Accessories from './components/Accessories'

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
    </div>
  )
}

export default App
