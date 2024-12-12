import React, { useState } from 'react';
import church from '../../../../Assets/7/SARDIS - SART9.jpg';
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

const Sardis = () => {
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
      <h1>About Sardis (Sart)</h1>
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
        Sardis was an ancient capital of Lydia and a major trade center known for its wealth and the production of gold. The city was also significant for its Jewish and early Christian communities, as mentioned in Revelation for its spiritual wakefulness. <br />
        <h2>Biblical Reference: </h2>
        Sardis is mentioned in Revelation 3:1-6. The letter rebukes the church for being spiritually dead despite having a reputation for being alive and calls for repentance <br />
        <h2>Historical Context: </h2>
        Sardis was a wealthy city and a former capital of Lydia, known for its gold production and its strategic location on trade routes. It had a significant Jewish population and an early Christian community. <br />
        <h2>Geographical Location: </h2>
        Sardis is near the modern town of Sart in western Turkey. <br />
        <h2>Current Status: </h2>
        The ruins at Sart include the remains of the Temple of Artemis, the ancient synagogue, and a well-preserved gymnasium. Sardis is less crowded with tourists, providing a more tranquil setting to explore its rich history. <br />
        <h2>Present Updates: </h2>
        The ruins include a well-preserved synagogue and the Temple of Artemis. Sardis is less frequented by tourists but offers rich historical insights. <br />
        <h2>Food and Culture: </h2>
        The local culture includes traditional Turkish cuisine with influences from the region’s history. <br />
        <h2>Travel Distance and Mode: </h2>
        From Akhisar to Sardis is about 50 km (31 miles). It’s a 1-hour drive.
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

export default Sardis;