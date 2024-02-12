import React from 'react'
import './Navbar.css'
import logo from '../images/ravira.png'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="https://www.facebook.com/profile.php?id=100064539442989" target='_blank'><img className='logo-img' src={logo}></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#accessories">აქსესუარები <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link active" href="#">კონტაქტი</a>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar
