import React, { useState } from 'react';
import church from '../../../../Assets/7/PERGAMON6.jpg';
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

const Pergamon = () => {
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
      <h1>About Pergamum (Bergama) </h1>
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
        Pergamum was an influential city known for its impressive library, which rivaled that of Alexandria. It was a center of learning and culture, with notable monuments such as the Altar of Zeus, now housed in Berlin. The city also had a significant Christian community, noted for its early struggles. <br />
        <h2>Biblical Reference: </h2>
        Pergamum is mentioned in Revelation 2:12-17. The letter commends the church for holding fast to Jesus' name even in the face of persecution, but criticizes them for tolerating false teachings and immoral practices. <br />
        <h2>Geographical Location: </h2>
        Pergamum is near the modern town of Bergama in northwestern Turkey. <br />
        <h2>Historical Context: </h2>
        Pergamum was renowned for its library and the Altar of Zeus, which was considered one of the greatest architectural achievements of its time. The city was a center for both pagan worship and early Christianity. The Altar of Zeus was later moved to the Pergamon Museum in Berlin. <br />
        <h2>Current Status: </h2>
        Bergama, the modern town near the ancient site, has a rich collection of ruins including the Acropolis, the Asklepion (an ancient medical center), and the remains of the Temple of Athena. It remains less frequented than other ancient sites but offers a deep historical experience. <br />
        <h2>Present Updates: </h2>
        Bergama has several ruins, including the Acropolis and the Asclepius Medical Center. It’s less touristy but still rich in history. <br />
        <h2>Food and Culture: </h2>
        The local cuisine includes traditional Turkish dishes and unique regional specialties. The area has a more traditional and less tourist-oriented culture. <br />
        <h2>Travel Distance and Mode: </h2>
        From İzmir to Bergama is about 100 km (62 miles). Travel options include a 1.5-hour drive or bus ride.
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

export default Pergamon;
