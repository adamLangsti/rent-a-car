import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import logo1 from '../images/volvo.png';
import logo2 from '../images/merc.png';
import logo3 from '../images/rolls.png';

const Hero = () => {
    let images = [logo1, logo2, logo3];

    const [nextImage, setNextImage] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    function handlePrevImage() {
        setActiveIndex(
            (prevIndex) => (prevIndex - (1 % images.length)) % images.length
        );
    }

    function handleNextImage() {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    return (
        <section aria-label='Newest Photos'>
            <button className='carousel-button prev' onClick={handlePrevImage}>
                &#8592;
            </button>
            <button className='carousel-button next' onClick={handleNextImage}>
                &#8594;
            </button>
            <div className='carousel'>
                <ul>
                    {images.map((image, index) => (
                        <li
                            key={index}
                            className={
                                activeIndex === index ? 'active' : 'slide'
                            }>
                            <img src={image} alt={`Car ${index + 1}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hero;
