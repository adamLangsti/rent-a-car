import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul className='navbar-items'>
                <li className='navbar-list-items'>Start</li>
                <li className='navbar-list-items'>Reservation</li>
                <li className='navbar-list-items'>About us</li>
                <li className='navbar-list-items'>Contact us</li>
                <li className='navbar-list-items'>My booking</li>
            </ul>
        </div>
    );
};

export default Navbar;
