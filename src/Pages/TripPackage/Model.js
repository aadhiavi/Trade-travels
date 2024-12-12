import React from 'react'
import "./TripPackage.css";
import AboutUs from '../AboutUs/AboutUs';
import { FaXTwitter } from "react-icons/fa6";
import insta from "../../Assets/Instagram-Logo.wine.svg";
import Facebook from "../../Assets/Facebook-f_Logo-Blue-Logo.wine.svg";
import Gmail from "../../Assets/Gmail-Logo.wine.svg";
import YouTube from "../../Assets/YouTube-Icon-Full-Color-Logo.wine.svg"
import { FaPhoneAlt } from 'react-icons/fa';
import Whatsapp from "../../Assets/whatsapp (1).png";
import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
const Model = ({ handleClickModel }) => {


    const phoneNumberWtsp = '918790336560';
    const message = 'Hello!';

    const whatsappUrl = `https://wa.me/${phoneNumberWtsp}?text=${encodeURIComponent(message)}`;

    return (
        <div className='overlay'>
            <div className="model">
                <div className="cross">
                    <MdOutlineClose style={{ color: "wheate" }} size={30} onClick={handleClickModel} />
                </div>
                <AboutUs />
                <div className='heading-icons'>
                    <a href='tel:+91-7799234560'>
                        <FaPhoneAlt style={{ color: 'green' }} size={18} />
                    </a>
                    <a href="mailto:suhanadtour@gmail.com">
                        <img src={Gmail} alt="" />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <img src={Whatsapp} alt='' style={{
                            color: "green",
                            width: '45px'
                        }} />
                    </a>
                    <a href='https://www.instagram.com/samadhanasadan/' >
                        <img src={insta} alt="" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61558738804342">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="https://www.youtube.com/@SuhanaDestinationTravels">
                        <img src={YouTube} alt="" />
                    </a>
                    <a href="https://www.x.com"><FaXTwitter style={{ color: 'black' }} size={20} /></a>
                </div>
                <small style={{margin:'10px 0', fontSize:'10px'}}><Link to='/terms'>Terms & Conditions Apply</Link></small>
            </div>
        </div>
    )
}

export default Model