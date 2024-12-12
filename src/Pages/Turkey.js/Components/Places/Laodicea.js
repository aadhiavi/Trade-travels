import React, { useState } from 'react';
import church from '../../../../Assets/7/LAODICEA2.jpg';
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

const Laodicea = () => {
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
      <h1>About Laodicea (Denizli)</h1>
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
        Laodicea was an affluent city known for its commercial success, particularly in banking and textiles. It was also noted in Revelation for its spiritual lukewarmness. The city was a center for early Christianity and had impressive public buildings. <br />
        <h2>Biblical Reference: </h2>
        Laodicea is mentioned in Revelation 3:14-22. The letter criticizes the church for being lukewarm, neither hot nor cold, and urges them to be earnest and repent. <br />
        <h2>Historical Context: </h2>
        Laodicea was a wealthy city known for its banking, textiles, and medical school. It was a major commercial center and had a significant early Christian community. The city's lukewarm water supply was metaphorically used in Revelation to describe its spiritual condition. <br />
        <h2>Geographical Location: </h2>
        Laodicea is near the modern city of Denizli in southwestern Turkey. <br />
        <h2>Current Status: </h2>
        The site of Laodicea near Denizli includes significant ruins such as the amphitheater, city baths, and an ancient church. Denizli is a modern city known for its proximity to the natural wonder of Pamukkale, adding an extra layer of interest for visitors. <br />
        <h2>Present Updates: </h2>
        The ruins include an amphitheater and city baths. Denizli is a modern city with access to nearby Pamukkale hot springs. <br />
        <h2>Food and Culture: </h2>
        Denizli’s cuisine includes traditional Turkish dishes and local specialties. The area is known for its thermal baths and natural attractions. <br />
        <h2>Travel Distance and Mode: </h2>
        From Alaşehir to Denizli is about 70 km (43 miles). It’s a 1-hour drive or bus ride.
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

export default Laodicea;