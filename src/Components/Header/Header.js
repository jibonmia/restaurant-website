import React, { useState } from 'react';
import './Header.css'
import {faUtensils,faCaretDown,faBars, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const refreshPage =()=>{
        window.location.reload(false);
      }
    return (
        <header className="header">
            <div className="logo"><FontAwesomeIcon icon={faUtensils} /> FOOD HUB</div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <Link to={'/home'}>HOME</Link>
                <Link to={'/about'}>ABOUT</Link>
                <Link to={'/service'}>SERVICE</Link>
                <Link to={'/menu'}>MENU</Link>
                <div className="dropdown" onClick={toggleDropdown}>
                    PAGES <FontAwesomeIcon icon={faCaretDown} />
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <Link to={'/service'}>Service1</Link>
                            <Link to={'/service'}>Service2</Link>
                            <Link to={'/service'}>Service3</Link>
                        </div>
                    )}
                </div>
                <Link to={'contact'}>CONTACT</Link>
            </nav>
            <button className='Btn' onClick={refreshPage}>BOOK A TABLE</button>
            <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    );
};

export default Header;