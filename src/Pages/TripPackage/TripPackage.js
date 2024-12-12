import React, { useState } from 'react'
import "./TripPackage.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { MdCall } from 'react-icons/md'
import img from '../../Assets/MBG.jpg';
import img1 from "../../Assets/4C.jpg"
import img2 from "../../Assets/3C.jpg"
import img3 from "../../Assets/turkey.jpg"
import Model from './Model'
import { FaIndianRupeeSign } from "react-icons/fa6";

const TripPackage = () => {

    const [model, setModel] = useState(false)

    const handleClickModel = () => {
        setModel(!model)

    }

    const packs = [
        {
            image: img1,
            h1: 'Jordan,Israel,Palestine & Egypt tour package',
            p: 'Best of our Holy land 9 nights 10 days package',
            days: '10 days',
            price: '1,64,999/-',
        },
        {
            image: img2,
            h1: 'Jordan,Israel,Palestine tour package',
            p: 'Best of our Holy land 6 nights 7 days package',
            days: '7 days',
            price: '1,54,999/-'
        },
        {
            image: img,
            h1: 'Israel tour package',
            p: 'Best of our Holy land 6 nights 7 days package',
            days: '7 days',
            price: '1,54,999/-'
        },
        {
            image: img3,
            h1: 'Turky tour package',
            p: 'Best of our Holy land 6 nights 7 days package',
            days: '7 days',
            price: '1,64,999/-'
        },
    ]

    return (
        <div>
            <Navbar />
            <div className="trip-package-container">
                <h1>Holy land Tour Packages From Hyderabad</h1>
                <h3>Trip covers <span>Jordan</span>, <span>Israel</span>, <span>Palestine</span> & <span>Egypt</span> countries from Hyderabad</h3>
                <div className='line'></div>
                <h3>starting at <span>INR 1,65,999/-</span>  <span className='price'> INR 2,00,0000/-</span></h3>
                <button onClick={handleClickModel}>Request Callback</button>
            </div>
            <div className='title-label'>
                <h2>Holy land tour packages from hyderabd | Confirm your booking...</h2>
                <p>Suhana Destination Travel Pvt Ltd. is a one stop destination for your travel needs to the Holy Land. It have tie ups with Experienced Guides,Travel Houses and Hotels. Explore all that we offer in combinations or individual of Jordan,Israel,Palestine & Egypt in our 7 to 10 days based on ultimate tour package</p>
            </div>
            <div className='packages'>
                <div className="package-grid">
                    {packs.map((item, i) => (
                        <div className='combo-pack1'>
                            <div className='combo-img'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='combo-price'>
                                <h1>{item.h1}</h1>
                                <p>{item.p}</p>
                                <div className='combo-call'>
                                    <p>{item.days}</p>
                                    <button><FaIndianRupeeSign />{item.price}</button>
                                    <button className='call'><a href='tel:+91-7799234560'><MdCall /></a></button>
                                    <button className='call' onClick={handleClickModel}>Request Callback</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {
                model && <Model handleClickModel={handleClickModel} />
            }
            <Footer />
        </div>
    )
}

export default TripPackage