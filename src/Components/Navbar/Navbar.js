import React, { useState } from 'react';
import './Navbar.css';
import { TfiAlignRight } from "react-icons/tfi";
import { MdOutlineClose } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
import Contact from '../../Pages/Contact/Contact';
import Tours from '../../Pages/Tour/Tours';
import logo from '../../Assets/logo.png'
import TripPackage from '../../Pages/TripPackage/TripPackage';
import Turkey from '../../Pages/Turkey.js/Turkey';
import Gallary from '../../Pages/Gallary/Gallary';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click)
  };
  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <div>
      <nav>
        <div onClick={handleNavigate} className="logo">
          <img src={logo} alt="logo" />
          <h1>SUHANA DESTINATIONS & TRAVELS</h1>
        </div>
        <div className={click ? "menu active" : "menu"}>

          <NavLink to="/" element={<Home />}>Home</NavLink>
          <NavLink to='/tours' element={<Tours />}>Holy Places</NavLink>
          <NavLink to='/turkey' element={<Turkey />}>Turkey</NavLink>
          <NavLink to="/about" element={<About />}>Itinerary</NavLink>
          <NavLink to="/gallary" element={<Gallary/>}>Gallery</NavLink>
          <NavLink to="/contact" element={<Contact />}>Contact</NavLink>
          <NavLink to="/package" element={<TripPackage />}>Package</NavLink>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {
            click ? <MdOutlineClose style={{ color: "#900C3F" }} size={25} /> : <TfiAlignRight style={{ color: "#900C3F" }} size={25} />
          }

        </div>

      </nav>
    </div>
  )
}

export default Navbar;