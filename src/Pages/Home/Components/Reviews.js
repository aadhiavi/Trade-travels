import React from "react";
import { IoStarSharp } from "react-icons/io5";
import User from '../../../Assets/user.png';
import Slider from "react-slick";
import '../Home.css'

function AutoPlay() {
    const reviewData = [
        {
            image: User, person: ' Sarah T.', rating: <><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
            msg: "A life-changing journey! This Bible-focused tour was deeply spiritual and insightful, with visits to iconic biblical sites like Jerusalem and Petra. The guides were knowledgeable, and I left with a greater understanding of the scriptures."
        },
        {
            image: User, person: 'Mark', rating: <><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
            msg: "An unforgettable experience! From the Holy Land to the pyramids of Egypt, this tour covered the most significant biblical locations. It truly brought the Bible to life. Highly recommend for anyone looking to connect with their faith!"
        },
        {
            image: User, person: 'Peter ', rating: <><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
            msg: "Everything I hoped for and more. The tour was perfectly balanced between history and spirituality, with visits to sites like the Dead Sea and the Mount of Olives. A must-do for any Bible enthusiast."
        },
        {
            image: User, person: 'David', rating: <><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
            msg: "A remarkable tour! We saw key biblical sites, and the history behind each place was fascinating. The tour was well-organized, though the travel time could be long at times. Still, worth every moment."
        },
        {
            image: User, person: 'Emma', rating: <><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
            msg: "This Bible tour was incredible! From walking in the footsteps of Jesus in Jerusalem to experiencing Egypt’s ancient biblical history, every stop was meaningful. Highly recommend for spiritual travelers."
        },
        {
            image: User, person: 'John', rating: <><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></>,
            msg: "A great experience overall! We explored biblical landmarks with expert guides. Jerusalem was a highlight, but a bit more free time would have been nice. Still, it was a deeply enriching journey."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows:false,
        responsive: [
            {
                breakpoint: 1770,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    cssEase: "linear",
                }
            },{
                breakpoint: 700,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    cssEase: "linear",
                }
            }
        ]
    };
    return (
        <div className="review-slider">
            <h1>Reviews</h1>
            <Slider {...settings}>
                {
                    reviewData.map((item, i) => (
                        <div key={i} className="review-card">
                            <div className="review-img">
                                <img src={item.image} alt="" />
                                <div className="review-name">
                                    <h4>{item.person}</h4>
                                    <div className="p1">{item.rating}</div>
                                </div>
                            </div>
                            <p>{item.msg}</p>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default AutoPlay;




