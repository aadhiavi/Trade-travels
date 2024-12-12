import React, { useCallback, useEffect, useState } from 'react';
import pamphlate from '../Assets/Suhana Destinations & Travels.jpg';
import './SearchBar.css'
const Slide1 = () => (
    <div className='id'>
        <h1>Welcome to Suhana Destination & Travels</h1>
        <p>Explore all that we offer in combinations of Jordan, Israel, Palestine & Egypt in our 10 days ultimate tour package. This versatile tour gives travellers the opportunity to visit many of the historical, cultural and religious sites within this region.</p>
    </div>
);

const Slide2 = () => (
    <div className='id'>
        <img src={pamphlate} alt="Pamphlet" />
    </div>
);

const Slide3 = () => (
    <div className='id'>
        <h1>Hurry Up!</h1>
        <h3>Limited Time Offer be the 1st Person</h3>
        <p>Explore all that we offer in combinations of Jordan, Israel, Palestine & Egypt in our 10 days ultimate tour package. This versatile tour gives travellers the opportunity to visit many of the historical, cultural and religious sites within this region.</p>
        <h3>Limited Seats available</h3>
        <h3>NOW OPEN</h3>
    </div>
);

const Seats = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [<Slide1 />, <Slide2 />, <Slide3 />];
    const totalSlides = slides.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, [totalSlides]);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 12000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className='slide-info-bookings'>
            <div className="slide-container">
                {slides.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? 'active' : 'inactive'}>
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seats;

