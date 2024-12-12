import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/muharaga.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const Muharaga = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>Mount Muharaga</h1>
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
                "Muharraqa" likely refers to Mount Carmel (Jebel Mar Elyas), an important geographical and
                historical site in Israel. Here's an overview including its geographical details, biblical
                references, and significance:
                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3>
                Mount Carmel is a coastal mountain range in northern Israel, stretching from the Mediterranean Sea
                southeast towards the Jezreel Valley. It rises to about 546 meters (1,791 feet) at its highest point.
                <h3> 2. Topography: </h3>
                The mountain range is characterized by limestone and chalk hills, with fertile valleys and terraced
                slopes. It offers panoramic views of the surrounding landscape and the Mediterranean coast.
                <h3> 3. Historical Significance: </h3>
                Mount Carmel has been inhabited since ancient times and holds religious and cultural significance for
                multiple civilizations. It was a center for worship and spirituality, including the prophet Elijah's
                confrontation with the prophets of Baal (1 Kings 18:19-46).
                <h2> Biblical References: </h2>
                <h3> 1. Elijah and the Prophets of Baal (1 Kings 18:19-46): </h3>
                This passage describes Elijah's challenge to the prophets of Baal on Mount Carmel during the reign of
                King Ahab. Elijah challenges the prophets of Baal to prove the power of their gods by calling down fire
                to consume their sacrifices. After their failure, Elijah prays to the God of Israel, who sends fire from
                heaven to consume his sacrifice, demonstrating God's power and reaffirming His covenant with Israel. <br /><br />

                <b>Explanation:</b> Mount Carmel serves as a backdrop for this dramatic confrontation, highlighting the
                mountain's role as a place of divine intervention and spiritual significance in the biblical narrative.
                <h2> Significance and Interpretation: </h2>
                <h3> Divine Intervention: </h3> Mount Carmel is associated with instances of divine intervention in the
                Old Testament, particularly through the ministry of Elijah. The confrontation with the prophets of Baal
                underscores God's supremacy and the importance of faithfulness to Him.
                <h3> Spiritual Symbolism: </h3> Mount Carmel represents a place of prayer, prophecy, and divine
                revelation in biblical history. It is a symbol of God's power and sovereignty over nature.
                <h3> Cultural and Religious Heritage: </h3> Throughout history, Mount Carmel has been revered by Jews,
                Christians, and Muslims alike as a place of spiritual significance and pilgrimage.
                <h2> Modern Context: </h2>
                <h3> Tourism and Pilgrimage: </h3> Today, Mount Carmel continues to attract visitors from around the
                world who come to explore its historical sites, enjoy its natural beauty, and learn about its religious
                and cultural heritage.
                In conclusion, Mount Carmel (Muharraqa) holds a prominent place in biblical history as the setting for
                Elijah's confrontation with the prophets of Baal. Its geographical features, historical significance,
                and spiritual symbolism make it a significant site in Israel's landscape and religious heritage.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Muharaga;