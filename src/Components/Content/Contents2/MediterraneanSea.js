import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mediterranean Sea.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MediterraneanSea = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Mediterranean Sea</h1>
            <div className='image'>
                <MyComponent src={church} />
            </div>
            <div className='infofile'>
                <div>
                    <TextToSpeechButton />
                </div>
                <div className='videoadio'>
                    <Link to='' className='videofile' ><FaVideo /></Link>
                    <Link to='/gallary' className='videofile' ><FaImage /></Link>
                </div>
            </div>
            <Splitter />
            <div id="readable-content" className='para' style={isOpen ? null : pargraphStyles}>
                The Mediterranean Sea is a large body of water located between Europe, Africa, and Asia, known for
                its historical, cultural, and geographical significance. Here’s an exploration of its geographical
                details, biblical references, and explanations:
                <h2> Geographical Details: </h2>
                <h3> 1. Location and Extent: </h3>
                The Mediterranean Sea is bordered by Southern Europe to the north, North Africa to the south, and
                Western Asia to the east. It connects to the Atlantic Ocean through the Strait of Gibraltar and to the
                Red Sea through the Suez Canal. <br />
                It covers an area of approximately 2.5 million square kilometers (965,000 square miles) and has a
                maximum depth of about 5,267 meters (17,280 feet).
                <h3> 2. Climate and Ecosystem: </h3>
                The Mediterranean region is characterized by a Mediterranean climate, with hot, dry summers and mild,
                rainy winters. It supports a diverse marine ecosystem with rich biodiversity.
                <h3> 3. Historical and Cultural Importance: </h3>
                The Mediterranean has been a cradle of ancient civilizations, including the Greeks, Romans,
                Phoenicians, Egyptians, and others. Its shores are dotted with numerous archaeological sites and
                ancient cities.
                <h2> Biblical References: </h2>
                <h3> 1. Geographical Mentions: </h3>
                The Mediterranean Sea is referred to in the Bible in various contexts as the "Great Sea" (Numbers
                34:6-7, Joshua 1:4, Ezekiel 47:10, Joel 2:20).
                <h3> 2. Paul's Missionary Journeys: </h3>
                The Apostle Paul traveled extensively across the Mediterranean region during his missionary
                journeys, spreading the message of Christianity. His journeys are detailed in the Book of Acts,
                chapters 13-21. <br />
                Explanation: Paul's travels by ship on the Mediterranean Sea illustrate the importance of maritime
                trade routes in the ancient world and the spread of early Christianity to coastal cities and ports.
                <h3> 3. New Testament Context: </h3>
                Several events in the New Testament involve the Mediterranean Sea: <br />
                Jesus calming the storm on the Sea of Galilee (Matthew 8:23-27, Mark 4:35-41, Luke 8:22-25). <br />
                Paul's shipwreck on his way to Rome (Acts 27-28). <br /><br />
                <b>• Explanation:</b> These events highlight the sea's role as both a means of transportation and a
                backdrop for significant events in the lives of biblical figures, illustrating themes of faith,
                God's providence, and the spread of the Gospel.
                <h2> Spiritual and Symbolic Significance: </h2>
                <h3> Symbol of Unity and Diversity: </h3> The Mediterranean Sea has historically connected diverse
                cultures and civilizations, serving as a symbol of unity amidst cultural diversity.
                <h3> Natural Beauty and Inspiration: </h3> Its scenic coastline and azure waters have inspired
                artists, poets, and writers throughout history, contributing to its cultural and artistic
                significance.
                <h3> Trade and Exchange: </h3> The sea's importance in ancient trade routes facilitated cultural
                exchange, economic prosperity, and the spread of ideas across the Mediterranean basin.
                In summary, the Mediterranean Sea is not only a vital geographical feature but also holds
                significant cultural, historical, and biblical importance. It serves as a backdrop for biblical
                narratives, symbolizes unity and diversity, and continues to play a pivotal role in the region's
                cultural and economic life.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MediterraneanSea;