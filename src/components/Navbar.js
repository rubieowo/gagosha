import React from 'react'
import './Navbar.css'
import logo from '../images/larger-logo-removebg-preview.png'
import accessories from '../images/accessories.jpg'
import contact from '../images/contact.jpg'
function Navbar(){
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
       <a class="navbar-brand" href="https://www.facebook.com/profile.php?id=100064539442989&mibextid=ZbWKwL"><img src={logo}></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">აქსესუარები</a>
            <a class="nav-item nav-link" href="#">კონტაქტი</a>
          </div>
        </div>
      </nav>
      <div>
        <h1>ჩვენს შესახებ</h1>
        <div className='holder'> 
          <div className='textholder'>
            <p id='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officia asperiores consequuntur harum obcaecati ipsam officiis vero illum laboriosam inventore. Adipisci, eos iure voluptatum facilis error quod minima consequatur maiores?
            </p>
          </div>
        </div>
      </div>
      <div className='grid-thing'>
        <div className='item'>
        <img src={accessories}></img>
         <p>აქსესუარები</p>
        </div>
        <div className='item'>
          <img src={contact}></img>
          <p>ქონტაქტი</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
