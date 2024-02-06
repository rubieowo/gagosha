import React from 'react'
import './Navbar.css'
import logo from '../images/larger-logo-removebg-preview.png'
import accessories from '../images/accessories.jpg'
import contact from '../images/contact.jpg'
import Accessories from './Accessories'
import { createBrowserRouter, BrowserRouter, Route,  Routes} from "react-router-dom";


function Navbar(){
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary">
       <a class="navbar-brand" href="https://www.facebook.com/profile.php?id=100064539442989&mibextid=ZbWKwL"><img src={logo}></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">აქსესუარები</a> 
            <a class="nav-item nav-link" href="#contact">კონტაქტი</a>
          </div>
        </div>
      </nav>
      <div>
        <h1>ჩვენს შესახებ</h1>
        <div className='holder'> 
          <div className='textholder'>
            <p id='text'>იცოდით რომ ყველაზე ხელმისაწვდომ ფასად შეგიძლიათ შეიძინოთ ავტომობილის აქსესუარები ჩვენთან. შესაკვეთად მოგვწერეთ 571 33 35 59 Whatsapp/Viber ან დარეკეთ საჭიროების შემთხვევაში
            </p>
          </div>
        </div>
      </div>
      <div className='grid-thing'>
        <div className='item'>
         <a className='gay' href={Accessories}><img src={accessories}></img></a>
         <p>აქსესუარები</p>
        </div>
        <div className='item'>
          <a className='gay' href='#contact'><img src={contact}></img></a>
          <p>ქონტაქტი</p>
        </div>
      </div>
      <div className='contact-container' id="contact">
          <a href="https://www.facebook.com/profile.php?id=100064539442989&mibextid=ZbWKwL"><img src={logo} className="contact-image"></img></a>
          <p className='contact-number'>571 33 35 59</p>
          <p className='contact-number'>597 15 81 80 (Whatsapp/Viber)</p>
      </div>
    </>
  )
}

export default Navbar
