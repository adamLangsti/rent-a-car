import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul className='navbar-items'>
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
        </div>
    );
};

export default Navbar;
