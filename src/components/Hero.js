import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import logo1 from '../images/volvo.png';
import logo2 from '../images/merc.png';
import logo3 from '../images/rolls.png';

const Hero = () => {
    const images = [logo1, logo2, logo3];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className='hero-container'>
            <div className='overlay' />
            <img
                src={images[activeIndex]}
                alt='car-selection'
                style={{ maxWidth: '40%' }}
            />
        </section>
    );
};

export default Hero;
