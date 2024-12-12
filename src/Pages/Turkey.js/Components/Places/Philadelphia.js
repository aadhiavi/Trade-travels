import React, { useState } from 'react';
import church from '../../../../Assets/7/PHILADELPHIA5.jpg';
import ModelVideo from '../../../../Components/Content/ModelVideo';
import ModelGallary from '../../../../Components/Content/ModelGallary';
import '../../../../Components/Content/Contents.css'
import { FaImage, FaVideo } from 'react-icons/fa';
import Splitter from '../../../../Components/Splitter/Splitter';
import { Link } from 'react-router-dom';
import MyComponent from '../../../../Components/Content/ImageWithBackground';
import TextToSpeechButton from '../../../../Content/TextToSpeechButton';

const pargraphStyles = {
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: '-webkit-box',

}


const Philadelphia = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modelVideo, setModelVideo] = useState(false)
  const [modelGallary, setModelGallary] = useState(false)

  const handleClickModelVideo = () => {
    setModelVideo(!modelVideo)

  }
  const handleClickModelGallary = () => {
    setModelGallary(!modelGallary)

  }

  return (
    <div className='content'>
      <h1>About Philadelphia (Alasehir)</h1>
      <div className='image'>
        <MyComponent src={church} />
      </div>
      <div className='infofile'>
        <div>
          <TextToSpeechButton />
        </div>
        <div className='videoadio'>
          <div>
            <div className='videofile'><FaVideo /></div>
          </div>
          <div>
            <Link to='/gallary' className='videofile' ><FaImage /></Link>
          </div>
        </div>
      </div>
      <Splitter />
      <div id="readable-content" className='para' style={isOpen ? null : pargraphStyles}>
        <h2>Description</h2>
        Philadelphia, now Alaşehir, was a key city for its location on trade routes and its strong Christian community. It was praised in Revelation for its faithfulness and perseverance despite difficulties. <br />
        <h2>Biblical Reference: </h2>
        Philadelphia is addressed in Revelation 3:7-13. The letter commends the church for its faithfulness and endurance, promising protection from the hour of trial and an eternal place in the new Jerusalem. <br />
        <h2>Historical Context: </h2>
        Philadelphia was strategically located on trade routes and was known for its strong Christian community and missionary activities. The city was founded by the Pergamene kings and named after Attalus II, who was known as “Philadelphus” (the lover of his brother). <br />
        <h2>Geographical Location: </h2>
        Philadelphia is near the modern town of Alaşehir in western Turkey. <br />
        <h2>Current Status: </h2>
        Alaşehir has some archaeological sites related to the ancient city, including remnants of churches and city walls. The town is a mix of historical sites and modern life, offering a glimpse into both its ancient past and contemporary culture. <br />
        <h2>Present Updates: </h2>
        The site has some ruins, including parts of a church and city walls. Alaşehir is a small town with a mix of historical and contemporary elements. <br />
        <h2>Food and Culture: </h2>
        The cuisine is similar to other regions of western Turkey, with a focus on traditional dishes. <br />
        <h2>Travel Distance and Mode: </h2>
        From Sardis to Alaşehir is about 50 km (31 miles). Travel options include a 1-hour drive.
      </div>
      <span onClick={() => setIsOpen(!isOpen)}>
        <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
      </span>
      {
        modelVideo && <ModelVideo Srcvdo='' handleClickModelVideo={handleClickModelVideo} />
      }
      {
        modelGallary && <ModelGallary SlideImages='' handleClickModelGallary={handleClickModelGallary} />
      }
    </div>
  )
}

export default Philadelphia;