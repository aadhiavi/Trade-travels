import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import insta from "../../Assets/Instagram-Logo.wine.svg";
import Facebook from "../../Assets/Facebook-f_Logo-Blue-Logo.wine.svg";
import Gmail from "../../Assets/Gmail-Logo.wine.svg";
import Whatsapp from "../../Assets/whatsapp (1).png";
import YouTube from "../../Assets/YouTube-Icon-Full-Color-Logo.wine.svg"

const Footer = () => {

  const phoneNumber = '918790336560';
  const message = 'Hello!';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='footer'>
      <p>All content and rights © 2024</p>
      <div><a href='tel:+91-7799234560'>+91-7799234560,</a> <a href="mailto:suhanadtour@gmail.com">
        suhanadtour@gmail.com
      </a></div>
      <Link to='/terms' >Terms and Conditions</Link>
      <p>Follow us on -</p> 
      <div className='footer-icons'>
       
        <a href='tel:+91-7799234560'>
          <FaPhoneAlt style={{ color: 'blue', marginRight: '5px' }} size={18} />
        </a>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} alt='Whatsapp' style={{ height: "17px", width: '17px' ,margin:'0'}} />
        </a>

        <a href="mailto:suhanadtour@gmail.com">
          <img src={Gmail} alt="Gmail" />
        </a>

        <a href='https://www.instagram.com/samadhanasadan/' >
          <img src={insta} alt="Insta" />
        </a>
        <a href="https://www.youtube.com/@SuhanaDestinationTravels">
          <img src={YouTube} alt="" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=61558738804342">
          <img src={Facebook} alt="Facebook" />
        </a>

        <a href="https://x.com"><FaXTwitter style={{ color: 'white' }} /></a>
      </div>
      
    </div>
  )
}

export default Footer