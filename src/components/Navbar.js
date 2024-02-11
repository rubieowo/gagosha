import React from 'react'
import './Navbar.css'
import logo from '../images/larger-logo-removebg-preview.png'
import contact from '../images/contact.jpg'
import accessories from '../images/accessories.jpg'
import item1 from '../images/item1.jpg'
import item2 from '../images/item2.jpg'
import item3 from '../images/item3.jpg'
import item4 from '../images/item4.jpg'
import item5 from '../images/item5.jpg'


function Navbar(){
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
       <a className="navbar-brand" href="https://www.facebook.com/profile.php?id=100064539442989&mibextid=ZbWKwL"><img src={logo}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className='nav-item nav-link' href='#card-container'>აქსესუარები</a>
            <a className="nav-item nav-link" href="#contact">კონტაქტი</a>
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
          <a className='gay' href="#card-container"><img src={accessories}></img></a>
          <p>აქსესუარები</p>
        </div>
        <div className='item'>
          <a className='gay' href='#contact'><img src={contact}></img></a>
          <p>ქონტაქტი</p>
        </div>
      </div>
      <br></br> 
      <br></br>
      <br></br>
      <hr></hr>
      <div id='card-container' className='main-container'>
        <div className='each-card'>
          <img className="card-img" src={item1}></img>
          <p className='accessories-text'>მანქანის სანომრეები</p>
        </div>
        <div className='each-card'>
          <img className="card-img" src={item2}></img>
          <p className='accessories-text'>მაგნიტური ტელეფონის დამჭერი</p>
        </div>
        <div className='each-card'>
          <img className="card-img" src={item3}></img>
          <p className='accessories-text'>სარკეების საწვიმრები</p>
        </div>
        <div className='each-card'>
          <img className="card-img" src={item4}></img>
          <p className='accessories-text'>ტორპედოს ხალიჩა</p>
        </div>
        <div className='each-card'>
          <img className="card-img" src={item5}></img>
          <p className='accessories-text'>ტელეფონის დამჭერი</p>
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
