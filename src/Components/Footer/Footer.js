import React from 'react'
import'./Footer.css'
import { faLocationDot,faPhone,faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer-area'>
            <div>
                <h2>Company ______</h2>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Reservation</li>
                    <li>Privacy Policy</li>
                    <li>Terms &amp; Condition</li>
                </ul>
            </div>
            <div>
               <h2>Contact ______</h2>
               <div>
                    <p><FontAwesomeIcon icon={faLocationDot}/> 122 Street, Dhaka, Bangladesh</p>
                    <p><FontAwesomeIcon icon={faPhone}/> 01315686312</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> jibonislambd823@gmail.com</p>
                    <div>
                        <p><FontAwesomeIcon /></p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Opening ______</h2>
                <ul>
                    <li>Monday - Saturday</li>
                    <li>09AM - 09PM</li>
                    <li>Sunday <br /> 10AM - 08PM</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;