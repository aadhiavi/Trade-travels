import React, { useState } from 'react';
import church from '../../../../Assets/7/SMYRNA - IZMIR6.jpg';
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

const Smyrna = () => {
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
      <h1>About Smyrna (Izmir)</h1>
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
        Smyrna, now İzmir, was a prominent ancient city known for its strategic location and vibrant commercial activities. It had a significant Christian community and was mentioned in Revelation for its suffering and perseverance amidst persecution. <br />
        <h2>Biblical Reference: </h2>
        Smyrna is addressed in Revelation 2:8-11. The letter to Smyrna acknowledges their suffering and poverty but encourages them to remain faithful despite persecution, promising them the crown of life. <br />
        <h2>Historical Context: </h2>
        Smyrna was a thriving commercial and cultural hub, strategically located on the Aegean coast. It had a significant early Christian community that faced persecution. The city was rebuilt by Alexander the Great and later became a prominent Roman city. <br />
        <h2>Geographical Location: </h2>
        Smyrna is now the modern city of İzmir, located on the Aegean coast. <br />
        <h2>Current Status: </h2>
        İzmir is a bustling modern city blending ancient history with contemporary life. Key historical sites include the Agora of Smyrna and remnants of ancient city walls. İzmir is a cultural and economic hub of western Turkey, offering a lively atmosphere and diverse cuisine. <br />
        <h2>Present Updates: </h2>
        İzmir is a bustling modern city with a vibrant culture, including a mix of historical sites and contemporary attractions. <br />
        <h2>Food and Culture: </h2>
        İzmir offers a rich variety of Aegean cuisine, including seafood, olive oil-based dishes, and sweets like “boyoz” and “lokma.” <br />
        <h2>Travel Distance and Mode: </h2>
        From Ephesus to İzmir is about 80 km (50 miles). It’s a 1-hour drive or a 1-hour train ride.
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

export default Smyrna;
