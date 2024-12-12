import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Joppa City.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const JoppaCity = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Joppa City</h1>
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
                Joppa, also known as Jaffa (modern-day Jaffa), is an ancient port city located on the Mediterranean
                coast of Israel. Here's an exploration of its geographical details, biblical references, and
                explanations:
                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3>
                Joppa (Jaffa) is situated on the southern edge of the Tel Aviv metropolitan area, along the
                Mediterranean Sea. It is one of the oldest ports in the world, with a history dating back over 4,000
                years.
                <h3> 2. Historical Significance: </h3>
                Joppa has been a strategic port city throughout history due to its location on the coast, facilitating
                trade and cultural exchange between the ancient civilizations of Egypt, Phoenicia, Greece, and later
                Rome.
                <h3> 3. Modern Context: </h3>
                Today, Jaffa is a vibrant neighbourhood within the city of Tel Aviv-Yafo, known for its historic
                architecture, artistic community, and cultural diversity. It serves as a popular tourist destination
                with its bustling port, ancient streets, and archaeological sites.
                <h2> Biblical References: </h2>
                <h3> 1. Old Testament: </h3>
                <b>  Jonah and the Great Fish (Jonah 1:1-17): </b> <br />
                Joppa is famously mentioned in the story of Jonah, a prophet who attempted to flee from God's command
                by boarding a ship in Joppa heading for Tarshish. He was swallowed by a great fish and later spat out
                onto dry land after repenting. This event emphasizes God's sovereignty and mercy. <br />
                <b>  Cedars of Lebanon for Solomon's Temple (2 Chronicles 2:16): </b> <br />
                King Solomon received cedars from the King of Tyre via ships that sailed from Joppa. These cedars were
                used in the construction of Solomon's Temple in Jerusalem, highlighting Joppa's role in trade and
                commerce during ancient times.
                <h3> 2. New Testament: </h3>
                <b> Peter's Vision (Acts 10:1-23): </b>
                In the New Testament, Joppa is mentioned in connection with the Apostle Peter. He stayed in the house
                of Simon the Tanner in Joppa, where he had a vision from God instructing him to preach the Gospel to the
                Gentiles, thus breaking down barriers between Jews and Gentiles. <br /><br />
                <b>• Explanation:</b> This vision led Peter to meet Cornelius, a Roman centurion, in Caesarea, marking a
                significant moment in the early church's expansion beyond Jewish boundaries.
                <h2> Spiritual and Historical Significance: </h2>
                <b> • Gateway for Trade and Culture: </b> Joppa's ancient port facilitated trade and cultural exchanges between
                various civilizations, influencing its historical development and significance. <br />
                <b> • Biblical Connections: </b> The biblical references to Joppa highlight its role in pivotal events such as
                Jonah's mission, Solomon's Temple construction, and Peter's vision, underscoring its spiritual and
                historical importance in biblical narratives. <br />
                <b> • Modern Influence: </b> Today, Jaffa (modern Joppa) continues to serve as a cultural and historical hub,
                blending ancient heritage with contemporary urban life within the bustling city of Tel Aviv.

                <h2>Summary</h2>
                In summary, Joppa (Jaffa) is not only a historic port city with significant biblical references but also
                a vibrant cultural center that continues to contribute to Israel's rich cultural and historical
                tapestry. Its ancient roots and modern influence make it a compelling destination for visitors
                interested in exploring both biblical history and contemporary Israeli life.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default JoppaCity