import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { turkeyarray } from './SlideArray';
import '../../../Components/Header/Header.css'

function SliderTurkey() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);


  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <FaChevronLeft className="arrows" />
      </div>
    )
  }

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <FaChevronRight className="arrows" />
      </div>
    )
  }

  const settings = {
    className: "slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  }

  const settingsNav = {
    swipeToSlide: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    slidesToShow: 9,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 9,
          swipeToSlide: true,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 8,
          swipeToSlide: true,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 7,
          swipeToSlide: true,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true,
          infinite: true,
          arrows: false,
        }
      }, {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
          swipeToSlide: true,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true,
          infinite: true,
          arrows: false,
        }
      }, {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          swipeToSlide: true,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true,
          infinite: true,
          arrows: false,
        }
      }, {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true,
          infinite: true,
          arrows: false,
        }
      }, {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true,
          infinite: true,
          arrows: false,
        }
      },
    ]
  };

  return (
    <div className="slider-container">

      <Slider
        {...settings}
        asNavFor={nav2}
        ref={slider => (sliderRef1 = slider)}
      >
        {
          turkeyarray.map((Image, index) => {
            return (
              <div className='slider1' key={index}>
                <img src={Image.image} alt="" />
                <div  className='info'>
                  <h2>{Image.title}</h2>
                  <p>{Image.discription}</p>
                  <Link to={Image.link}><button >Read more...</button></Link>
                </div>
              </div>
            )
          })
        }

      </Slider>
      <Slider
        {...settingsNav}
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
      >
        {
          turkeyarray.map((Image, index) => {
            return (
              <div className='' key={index}>
                <img src={Image.image} alt="" style={
                  {
                    height: "80px",
                    width: "160px",
                  }
                } />
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default SliderTurkey;