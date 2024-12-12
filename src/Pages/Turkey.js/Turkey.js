import React, { useState } from 'react'
import './Turkey.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SliderTurkey from './Components/SliderTurkey';

const Turkey = () => {

  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  const isRootRoute = location.pathname === "/turkey";
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const handleLinkClick = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <Navbar />
      <div className="turkey-home">
        <div className="turkey-places-titles">
          <button className='none' onClick={handleToggle}>List of Places</button>
          <h3>Places to visit in Turkey</h3>
          <div className={isOpen ? "toggle-list" : "turkey-lists"}>
            <NavLink to="ephesus" onClick={handleLinkClick}>Ephesus</NavLink>
            <NavLink to="laodicea" onClick={handleLinkClick}>Laodicea</NavLink>
            <NavLink to="pergamon" onClick={handleLinkClick}>Pergamon</NavLink>
            <NavLink to="philadelphia" onClick={handleLinkClick}>Philadelphia</NavLink>
            <NavLink to="sardis" onClick={handleLinkClick}>Sardis</NavLink>
            <NavLink to="smyrna" onClick={handleLinkClick}>Smyrna</NavLink>
            <NavLink to="thyatira" onClick={handleLinkClick}>Thyatira</NavLink>
            <NavLink to="patmos" onClick={handleLinkClick}>Patmos Islands</NavLink>
          </div>
        </div>
        <div className="turkey-place-info">
          {isRootRoute && <SliderTurkey />}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Turkey
