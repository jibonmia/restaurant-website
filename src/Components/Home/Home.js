import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import React from 'react';
import hero from '../../Images/hero.png'
import bookingImage from '../../Images/home set.jpg'

const Home = () => {
    const refreshPage = () => {
        window.location.reload(false);
    }
    return (
        <div>
            <div className='home-container'>
                <div className='home-content'>
                    <h1>Enjoy <span>Our</span></h1>
                    <h1>Delicious Meal</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <button className='Btn' onClick={refreshPage}>BOOK A TABLE</button>
                </div>
                <div className='home-image'>
                    <img src={hero} alt="" />
                </div>
            </div>
            <div className='booking-container'>
                <div className='booking-image'>
                    <img src={bookingImage} alt="" />
                </div>
                <div className='booking-content'>
                    <h2>Reservation ______</h2>
                    <p>Book A Table Online</p>
                    <div className='from'>
                        <input type="text" placeholder='Your Name' />
                        <input type="email" placeholder='Your Email' />
                    </div>
                    <div className='from'>
                        <input type="text" placeholder='Date and Time' />
                        <input type="text" placeholder='Number of people' />
                    </div>
                    <div className='btn'>
                        <button className='Btn'>Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;