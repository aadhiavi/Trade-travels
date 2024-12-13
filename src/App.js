import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tours from './Pages/Tour/Tours';
import { Description } from './Components/Content/ContentTitles/ContentInfo';
import ScrollgToTop from './Components/ScrollgToTop';
import AboutUs from './Pages/AboutUs/AboutUs';
import TripPackage from './Pages/TripPackage/TripPackage';
import TermConditons from './Pages/Contact/TermConditons';
import Whatsapp from "./Assets/whatsapp (1).png";
import insta from "./Assets/Instagram-Logo.wine.svg";
import Facebook from "./Assets/Facebook-f_Logo-Blue-Logo.wine.svg";
import Gmail from "./Assets/Gmail-Logo.wine.svg";
import Turkey from './Pages/Turkey.js/Turkey';
import { FaPhoneAlt } from 'react-icons/fa';
import Gallary from './Pages/Gallary/Gallary';
import Admin from './Pages/Admin/Admin';
import { turkeyarray } from './Pages/Turkey.js/Components/SlideArray';
import Ephesus from './Pages/Turkey.js/Components/Places/Ephesus';
import Popup from './Content/Popup';
import { useEffect, useState } from 'react';

const routes = (
  <Router>
    <ScrollgToTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tours' element={<Tours />}>
          {Description.map((item, i) => (
            <Route path={item.path} key={i} element={item.element} />
          ))}
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='package' element={<TripPackage />} />
        <Route path='terms' element={<TermConditons />} />
        <Route path='turkey' element={<Turkey />}>
          {turkeyarray.map((item, i) => (
            <Route path={item.path} key={i} element={item.element} />
          ))}
        </Route>
        <Route path='gallary' element={<Gallary />} />
        <Route path='trade128' element={<Admin />} />
        <Route path='ephesus' element={<Ephesus />} />
      </Routes>
    </ScrollgToTop>
  </Router>
)

const phoneNumber = '918790336560';
const message = 'Hello!';

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className="App">
      {showPopup && (
       <Popup onClose={closePopup} />
      )}
      {routes}
      <div className='overlay-icons'>
        <a href='tel:+91-7799234560'>
          <FaPhoneAlt style={{ color: 'green' }} size={18} />
        </a>
        <a href="mailto:suhanadtour@gmail.com">
          <img style={{
            width: '32px'
          }} src={Gmail} alt="gmail" />
        </a>
        <a href='https://www.instagram.com/samadhanasadan/' >
          <img style={{
            width: '35px'
          }} src={insta} alt="" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61558738804342">
          <img style={{
            width: '40px'
          }} src={Facebook} alt="" />
        </a>
      </div>
      <div className='iconWhatsapp'>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} alt='whatsapp' style={{
            color: "green",
            width: '45px'
          }} />
        </a>
      </div>
    </div>
  );
}

export default App;
