import React, { useState } from 'react';
import church from '../../../../Assets/7/THYATIRA-AKHISAR8.jpg';
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

const Thyatira = () => {
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
      <h1>About Thyatira (Akhisar)</h1>
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
        Thyatira was known for its commercial prosperity, particularly its textile industry, including the famous dyeing trade. It was an important city for early Christians, mentioned in Revelation for its moral challenges and spiritual encouragement. <br />
        <h2>Biblical Reference: </h2>
        Thyatira is addressed in Revelation 2:18-29. The letter praises their love, faith, service, and perseverance but warns against tolerating the prophetess Jezebel, who leads people into immorality and idolatry. <br />
        <h2>Historical Context: </h2>
        Thyatira was known for its textile industry, including dyeing trade, which is referenced in Acts 16:14 where Lydia, a seller of purple goods from Thyatira, is converted by Paul. The city was a commercial center with a diverse population. <br />
        <h2>Geographical Location: </h2>
        Thyatira is near the modern town of Akhisar in western Turkey. <br />
        <h2>Current Status: </h2>
        The archaeological site in Akhisar includes some ancient remains, though less extensive than other locations. The town of Akhisar has a local museum and is known for its traditional Turkish cuisine and culture. <br />
        <h2>Present Updates: </h2>
        The site has fewer ruins compared to others, but Akhisar has some historical remains and a local museum. <br />
        <h2>Food and Culture: </h2>
        Akhisar features local Turkish cuisine, with an emphasis on traditional dishes like “zeytinyağlılar” (olive oil-based dishes). <br />
        <h2>Travel Distance and Mode: </h2>
        From Bergama to Akhisar is about 80 km (50 miles). Travel options include a 1.5-hour drive or bus ride.
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

export default Thyatira;