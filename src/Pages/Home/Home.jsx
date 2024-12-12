import React, { useEffect, useState } from 'react';
import "./Home.css";
import Navbar from '../../Components/Navbar/Navbar';
import vdo from "../../Assets/MicrosoftTeams-video.mp4";
import Footer from '../../Components/Footer/Footer';
import { LuTicket } from "react-icons/lu";
import { MdOutlineHotel } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Typewriter } from 'react-simple-typewriter';
import { Link, useNavigate } from 'react-router-dom';
import Map from "../../Assets/map.jpg"
import icon1 from "../../Assets/plane.png"
import icon2 from "../../Assets/pin.png"
import icon3 from "../../Assets/luggage.png"
import icon4 from "../../Assets/family.png"
import { FcNext } from "react-icons/fc";
import flag1 from "../../Assets/slides/Dome of the Rock Temple Mount in Jerusalem.jpg";
import flag2 from "../../Assets/Jordan petra.jpg";
import flag3 from "../../Assets/111.jpg";
import flag4 from "../../Assets/egypt.jpg";
import flag5 from "../../Assets/IMG-20240725-WA0008.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { sortedTitles } from '../../Components/Content/ContentTitles/Store';
import SearchableMenu from './Components/Cards/SearchableMenu';
import insta from "../../Assets/Instagram-Logo.wine.svg";
import Facebook from "../../Assets/Facebook-f_Logo-Blue-Logo.wine.svg";
import Gmail from "../../Assets/Gmail-Logo.wine.svg";
import YouTube from "../../Assets/YouTube-Icon-Full-Color-Logo.wine.svg"
import Seats from '../../Content/Seats';
import Reviews from './Components/Reviews';
import PhotosSlider from './Components/PhotosSlider';
import Model from '../TripPackage/Model';


const Home = () => {
  const [color, setColor] = useState(false);
  const [model, setModel] = useState(false)

  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/package')
  }

  const handleClickModel = () => {
    setModel(!model)

  }

  const handleColor = () => {
    if (window.scrollY >= 300) {
      setColor(true);
    } else {
      setColor(false)
    }
  }
  const handleType = (text) => {
    console.log(`Typing: ${text}`);
  }

  const handleDone = () => {
    console.log(`Typewriter animation completed!`);
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  })

  window.addEventListener("scroll", handleColor)

  return (
    <div>
      <Navbar />
      <div className={color ? "color" : "colorbar"}><SearchableMenu titles={sortedTitles} /></div>
      <div className='home-header'>
        <div className='header-title'>
          <h2 className='heading-places'>
            <CiLocationOn />...{' '}
            <span style={{ color: 'red' }}>
              <Typewriter
                words={['Israel', 'Jordan', 'Palestine', 'Egypt', 'Turkey']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={120}
                deleteSpeed={50}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h2>
          <div data-aos="fade-up">
            <Seats />
          </div>
          <div data-aos="fade-right" className='heading-icons-class'>
            <div className='btn-home'><div className='btn-btn-home' onClick={handleNavigate}>Plans!</div><div className='btn-btn-home' onClick={handleClickModel}>Enquiry!</div><a href="https://drive.google.com/file/d/1c7GpUsZa0dKWil1Pe7IT1BTafqIZC7w4/view?usp=sharing"><div className='btn-btn-home'>Brochure</div></a></div>
            <div className='home-icons'>
              <a href='tel:+91-7799234560'>
                <FaPhoneAlt style={{ color: 'green' }} size={21} />
              </a>
              <a href="mailto:suhanadtour@gmail.com">
                <img src={Gmail} si alt="" />
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
              <a href="https://www.twitter.com/"><FaXTwitter style={{ color: 'black' }} size={21} /></a>
            </div>
          </div>
        </div>
        <div className='video'>
          <video src={vdo} autoPlay loop muted />
          <div className='filter'></div>
        </div>
      </div>

      <PhotosSlider />

      <div className='service-plan'>
        <h1 data-aos="fade-down">Our Service</h1>
        <div data-aos="fade-up" className='plans'>
          <div className="plan">
            <div className='p1'><LuTicket /></div>
            <h3>Ticket Booking</h3>
            <p>We book all kind of national or international ticket for your destinaion.</p>
          </div>
          <div className="plan">
            <div className="p2"><MdOutlineHotel /></div>
            <h3>Hotel Booking</h3>
            <p>You can easily book your according to your budget hotel by our website.</p>
          </div>
          <div className="plan">
            <div className="p3"><PiTelegramLogoLight /></div>
            <h3>Tour Plan</h3>
            <p>We provide you the best plan within a short time explore more.</p>
          </div>
          <div className="plan">
            <div className="p4"><MdOutlineFoodBank /></div>
            <h3>Meals Providing</h3>
            <p>We provide you the best of delitious meals.</p>
          </div>
        </div>
      </div>

      <div className='quote'>
        <img className='imge' src={Map} alt="" />
        <div data-aos="fade-left" className='icons-trip1'>
          <img src={icon1} alt="icon" />
        </div>
        <div data-aos="fade-up" className='icons-trip2'>
          <img src={icon3} alt="icon" />
        </div>
        <div data-aos="fade-down" className='icons-trip3'>
          <img src={icon2} alt="icon" />
        </div>
        <div data-aos="fade-right" className='icons-trip4'>
          <img src={icon4} alt="icon" />
        </div>
        <h1 data-aos="fade-up">We always try to give you the best service</h1>
        <p data-aos="fade-up">We always try to make our customer Happy. We provide all kind of facilities. Your Satisfaction is our main priority.</p>
      </div>

      <div className='popular-destinations'>
        <h1 data-aos="fade-down">Our Popular Distinations</h1>
        <div className='popularplaces'>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag1} alt="" />
            </div>
            <h3>Israel</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag2} alt="" />
            </div>
            <h3>Jordan</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag3} alt="" />
            </div>
            <h3>Palestine</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag4} alt="" />
            </div>
            <h3>Egypt</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
          <div data-aos="fade-up" className="popularplace">
            <div className="popularplace-img">
              <img src={flag5} alt="" />
            </div>
            <h3>Turkey</h3>
            <span><Link to="package"><FcNext /></Link></span>
          </div>
        </div>
      </div>
      <Reviews />
      {
        model && <Model handleClickModel={handleClickModel} />
      }
      <Footer />
    </div>
  )
}

export default Home