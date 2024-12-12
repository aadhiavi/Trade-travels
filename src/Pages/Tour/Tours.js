import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import "../Tour/Tours.css";
import Navbar from '../../Components/Navbar/Navbar';
import ContentTitles from '../../Components/Content/ContentTitles/ContentTitles';
import TitlesMenuBar from '../../Content/TitlesMenuBar';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';


const Tours = () => {

  const location = useLocation();
  const isRootRoute = location.pathname === "/tours";

  return (
    <div>
      <Navbar />
      <div className='datacards'>
        <div className='titlebar'>
          {<ContentTitles />}
        </div>
        <div className='tourminititlebar'>
          <TitlesMenuBar />
        </div>
        <div className='titlecontent'>
          {isRootRoute && <Header />}
          <div className='outlet-box'><Outlet /></div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Tours