import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import bg from './images/bg-img2.jpg'

function App() {
  return (
    <div className='App'>
      <div className='bg-img'>
        <img src={bg}></img>
      </div>
      <Navbar />
    </div>
  )
}

export default App
