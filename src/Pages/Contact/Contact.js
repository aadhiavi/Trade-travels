import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from '../../Components/Footer/Footer'
import Img from "../../Assets/download.jpg"
import './Contact.css'
import AboutUs from '../AboutUs/AboutUs';
import { Link } from 'react-router-dom';
import dd from "../../Assets/check.png";
import visa from "../../Assets/visa.png";
import Mastercard from "../../Assets/card.png";
import rupay from "../../Assets/payment.png"
import money from "../../Assets/money.png"
import loan1 from "../../Assets/hdfc-bank-logo.svg"
import loan2 from "../../Assets/Axis_Bank-Logo.wine.svg"
import loan3 from "../../Assets/indifi.png"
import loan4 from "../../Assets/Bajaj Finance.svg"
import loan5 from "../../Assets/ICICI_Bank_Logo.svg.png"
import loan6 from "../../Assets/flexi_new_header.svg"
import loan7 from "../../Assets/sankash.png"



const Contact = () => {
  return (
    <div className='contact-page'>
      <Navbar />
      <div className='contact-image'>
        <img src={Img} alt="" />
        <h1>Get in Touch with Us!</h1>
        <p>At Suhana Destinations and Travels, we’re here to make your travel dreams come true. Whether you have questions, need assistance, or want to plan your next adventure, feel free to reach out. Our team is always ready to provide personalized recommendations and help you with all your travel needs.</p>
        <div className='line'></div>
        <Link to="/package">Go to Packages</Link>
      </div>


      <div id='heading'>
        <h1>Our Branches</h1>
        <div id='branch'>
          <h2>Hyderabad</h2>
          <h2>Mumbai</h2>
          <h2>Chennai</h2>
          <h2>Banglore</h2>
        </div>
      </div>

      <h1 id='head'>Common Inquiries</h1>
      <div id='containers'>
        <div className='card cashmethod'>
          <h1>
            Accepted Payment Options
          </h1>
          <p>You have the option to make payments through various methods including checks</p>
          <br /><br />
          <div className='cards-cash'>
            <img src={dd} alt="" />
            <img src={visa} alt="" />
            <img src={Mastercard} alt="" />
            <img src={rupay} alt="" />
            <img src={money} alt="" />
          </div>
        </div>
        <div className='card'>
          <div className='loans'>
            <p><span>Note: </span>We are providing loan fecility with EMIs for all our tours through our Prtner Banks</p><br /><br />
            <div className='cards-cash'>
              <img src={loan1} alt="loan" />
              <img src={loan2} alt="loan" />
              <img src={loan3} alt="loan" />
              <img style={{ height: '65px'
              }} src={loan4} alt="loan" />
              <img src={loan5} alt="loan" />
              <img src={loan6} alt="loan" />
              <img src={loan7} alt="loan" />
            </div>
          </div>
        </div>
        <div className='card'>
          <h1>
            What is the closest landmark ?
          </h1>
          <p>Conveniently situated near Jubilee Bus Station, and from Diamond Point, this establishment offers easy access for both locals and travelers. Its prime location ensures seamless transportation options and hints at nearby adventures waiting to be explored. Whether you're commuting or seeking new experiences, finding this destination is a breeze.</p>
        </div>
        <div className='card'>
          <h1>
            Business Hours : When we're available
          </h1>
          <p style={{ lineHeight: '2', textAlign:'start' }}>Business Functionality <br />
            Monday :- 9:30 am - 6:00 pm  <br />
            Tuesday :- 9:30 am - 6:00 pm  <br />
            Wednesday :- 9:30 am - 6:00 pm  <br />
            Thursday :- 9:30 am - 6:00 pm  <br />
            Friday :- 9:30 am - 6:00 pm  <br />
            Saturday :- 9:30 am - 6:00 pm  <br />
            Sunday :- Closed </p>
        </div>
      </div>

      <h1 id='head'>Contact Details</h1>
      <div className='contact'>

        <div id='con'>
          <div className='detail'>
            <h3>PhoneNumber</h3>
            <center> <IoMdCall className='icons' /></center>
            <a href='tel:+91-7799234560'>+91-7799234560,</a><br />
            <a href='tel:+91-9849875094,'>+91-9849875094,</a><br />
            <a href='tel:+91-6300749109'>+91-6300749109</a>
          </div>

          <div className='detail'>
            <h3>Office Address</h3>
            <center> <FaLocationDot className='icons' /></center>
            <p>
              Plot no.128,  <br />
              Gunrock Enclave,  <br />
              Transport Road  Karkhana,  <br />
              Secunderabad-09. Telangana
            </p>
          </div>

          <div className='detail'>
            <h3>Send Message</h3>
            <center> <MdEmail className='icons' /></center>
            <a href="mailto:suhanadtour@gmail.com">
              suhanadtour@gmail.com
            </a>
          </div>
        </div>
        <AboutUs />

      </div>
      <div className='map-box'>
        <div id='map'>
          <iframe
            title="Map"
            width="100%"
            height="400"
            loading="eager"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9489401657565!2d78.49147997473932!3d17.46215780064766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a68c2a0903f%3A0xd387194c51b66c9d!2sTransport%20Rd%2C%20Sitaram%20Nagar%2C%20Gunrock%20Enclave%2C%20Secunderabad%2C%20Telangana%20500009!5e0!3m2!1sen!2sin!4v1718882931485!5m2!1sen!2sin"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact