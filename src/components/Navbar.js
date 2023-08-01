import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevMenu) => !prevMenu);
    };

    return (
        <nav className='navbar-container'>
            <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                className={`menu-icon ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            />
            <ul className={`navbar-items ${menuOpen ? 'active' : 'inactive'}`}>
                <li className='navbar-list-items'>
                    <a href='#' className='navbar-list-items-links'>
                        Start
                    </a>
                </li>
                <li className='navbar-list-items'>
                    <a href='#' className='navbar-list-items-links'>
                        Reservation
                    </a>
                </li>
                <li className='navbar-list-items'>
                    <a href='#' className='navbar-list-items-links'>
                        About us
                    </a>
                </li>
                <li className='navbar-list-items'>
                    <a href='#' className='navbar-list-items-links'>
                        Contact us
                    </a>
                </li>
                <li className='navbar-list-items'>
                    <a href='#' className='navbar-list-items-links'>
                        My booking
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
