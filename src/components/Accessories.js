import React, { useState } from 'react'
import './Accessories.css'
import item1 from '../images/item1.jpg'
import item2 from '../images/item2.jpg'
import item3 from '../images/item3.jpg'
import item4 from '../images/item4.jpg'
import item5 from '../images/item5.jpg'
import item6 from '../images/item6.jpg'

function Accessories() {
    const accessoriesList = ['მაქანის სანოომრები', 'მაგნიტური ტელეფონის დამჭერი', 'სარკეების საწვიმრები', 'ტორპედოს ხალიჩა', 'ტელეფონის დამჭერი', 'მანქანის მტვერსასრუტი']
    const [accessories, setAccessories ] = useState(0);

    function increaseIndex() {
        setAccessories(accessories+1);
        if (accessories === accessoriesList.length-1) {
            setAccessories(0);
        }
    }

    let currentAccessories = accessoriesList[accessories];
  return (
    <div className='accessories-container'>
        <p className='carousel-text' id="accessories">{currentAccessories}</p>
        <div id="carouselExampleControls" className="carousel slide" data-interval="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={item1} alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={item2} alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={item3} alt="Third slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={item4} alt="Fourth slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={item5} alt="Fifth slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={item6} alt="Fifth slide"></img>
                </div>
            </div>
            <a onClick={increaseIndex} className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
  )
}

export default Accessories
