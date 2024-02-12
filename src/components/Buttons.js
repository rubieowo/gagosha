import React from 'react'
import './Buttons.css'
import Accessories from '../images/accessories.jpg'
import Contact from '../images/contact.jpg'

function Buttons() {
  return (
    <div className='everything-wrapper'>
        <div className='button-wrapper'>
            <div className='item'>
                <a href='#accessories'><img className='imga' src={Accessories}></img></a>
                <p className='text'>აქსესუარები</p>
            </div>
            <div className='item'>
                <a href='#contact'><img className='imga' src={Contact}></img></a>
                <p className='text'>კონტაქტი</p>

            </div>
        </div>
    </div>
  )
}

export default Buttons

