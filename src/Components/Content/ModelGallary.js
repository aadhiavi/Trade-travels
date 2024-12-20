import React, { useEffect, useState, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IoIosPlay } from "react-icons/io";
import { IoPauseOutline } from "react-icons/io5";
import "./Contents.css";

const ModelGallary = ({ handleClickModelGallary, SlideImages }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalSlides = SlideImages.length;
    const slideIntervalTime = 2000;

    const nextSlide = useCallback(() => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    }, [currentSlide, totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    }, [currentSlide, totalSlides]);

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    useEffect(() => {
        if (!isPaused) {
            const slideInterval = setInterval(nextSlide, slideIntervalTime);
            return () => clearInterval(slideInterval);
        }
    }, [isPaused, nextSlide]); // `nextSlide` is now included here

    return (
        <div className='overlaygallary'>
            <div className="crossgallary">
                <FaTimes style={{ color: "white" }} size={25} onClick={handleClickModelGallary} />
            </div>
            <div className="gallaryimg">
                <div className="slide-container">
                    {SlideImages.map((image, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : 'inactive'}`}
                        >
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <div className="btn">
                    <button onClick={prevSlide}><FiChevronLeft /></button>
                    <button onClick={nextSlide}><FiChevronRight /></button>
                    <button onClick={togglePause}>
                        {isPaused ? <IoIosPlay /> : <IoPauseOutline />}
                    </button>
                </div>
                <div className="dots">
                    {SlideImages.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModelGallary;


