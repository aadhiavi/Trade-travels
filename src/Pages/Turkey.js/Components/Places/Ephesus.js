import React, { useState } from 'react';
import church from '../../../../Assets/7/EPHESUS7.jpg';
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

const Ephesus = () => {
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
      <h1>About Ephesus(Efes)</h1>
      <div className='image'>
        <MyComponent src={church} />
      </div>
      <div className='infofile'>
        <div>
          <TextToSpeechButton />
        </div>
        <div className='videoadio'>
          <div>
            <div className='videofile' ><FaVideo /></div>
          </div>
          <div>
            <Link to='/gallary' className='videofile' ><FaImage /></Link>
          </div>
        </div>
      </div>
      <Splitter />
      <div id="readable-content" className='para' style={isOpen ? null : pargraphStyles}>
        <h2>Description</h2>
        Ephesus was a major port city and commercial hub in ancient Asia Minor. It was renowned for the Temple of Artemis, a grand structure considered one of the Seven Wonders of the Ancient World. The city played a pivotal role in early Christianity, and the Apostle Paul spent considerable time here, as documented in the New Testament. <br />
        <h2>Biblical Reference: </h2>
        Ephesus is mentioned in Revelation 2:1-7. The letter to the church in Ephesus praises their hard work and perseverance but criticizes them for losing their first love. <br />
        <h2>Historical Context: </h2>
        Ephesus was a major port city and cultural center in ancient Asia Minor, home to the Temple of Artemis, one of the Seven Wonders of the Ancient World. It was an important early Christian center, where the Apostle Paul spent significant time, as recorded in Acts 19. <br />
        <h2>Current Status: </h2>
        The site of Ephesus is a major archaeological attraction with extensive ruins, including the Library of Celsus and the Great Theatre. It’s a UNESCO World Heritage Site, drawing visitors interested in both its classical and early Christian heritage.Geographical Location: Located near the coast of western Turkey, near the modern town of Selçuk. <br />
        <h2>Present Updates: </h2>
        Today, Ephesus is a popular archaeological site with well-preserved ruins, including the Library of Celsus and the Great Theatre. It’s part of the UNESCO World Heritage Site list. <br />
        <h2>Food and Culture: </h2>
        The local cuisine features traditional Turkish dishes like kebabs and mezes. The area also celebrates various local festivals. <br />
        <h2>Travel Distance and Mode: </h2>
        From Istanbul to Ephesus is approximately 550 km (342 miles). Travel options include a 1-hour flight to İzmir followed by a 1-hour drive, or a 9-hour bus ride.
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

export default Ephesus;