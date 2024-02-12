import React from 'react'
import './Contact.css'
import logo from '../images/ravira.png'


export default function Contact() {
  return (
    <div className='contact-div' id="contact">
        <a href="https://www.facebook.com/profile.php?id=100064539442989" target='_blank'><img className="contact-image" src={logo}></img></a>
        <p className='contact-text2'>571 33 35 59 Whatsapp/Viber</p>
    </div>
  )
}
