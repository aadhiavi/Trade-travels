import React, { useState } from 'react'
import "../Contents.css";
import church from "../../../Assets/slides/Bahai_Shrine.jpg"
import Splitter from '../../Splitter/Splitter';
import { Link } from 'react-router-dom';
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const BahaiShrine = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='content'>
            <h1>About Bahai Shrine</h1>
            <div className='image'>
                <MyComponent src={church} />
            </div>
            <div className='infofile'>
                <div>
        <TextToSpeechButton/>
                </div>
                <div className='videoadio'>
                    <Link to='' className='videofile' ><FaVideo /></Link>
                    <Link to='/gallary' className='videofile' ><FaImage /></Link>
                </div>
            </div>
            <Splitter />
            <div id="readable-content" className='para' style={isOpen ? null : pargraphStyles}>
                The Bahá'í Shrine refers specifically to the Shrine of the Báb, located on Mount Carmel in Haifa,
                Israel. Here's an overview of the geographical details, historical significance, and any potential
                biblical references:
                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3>
                The Bahá'í Shrine of the Báb is situated on the slopes of Mount Carmel in Haifa, Israel. It overlooks
                the Mediterranean Sea and is part of the Bahá'í World Centre, which includes several other significant
                Bahá'í buildings and gardens.
                <h3> 2. Architecture and Design: </h3>
                The Shrine of the Báb is a domed structure surrounded by extensive terraced gardens, which are
                meticulously maintained and symbolize unity and harmony. The shrine itself is a place of pilgrimage and
                worship for adherents of the Bahá'í Faith.
                <h3> 3. Significance: </h3>
                Mount Carmel and its surroundings hold special importance in the Bahá'í Faith due to their association
                with the founder of the religion, the Báb (Mirza Ali Muhammad), who is considered a central figure
                alongside Bahá'u'lláh.
                <h2> Biblical References: </h2>
                While the Bahá'í Faith does not draw directly from the Bible in the same manner as Christianity or
                Judaism, Mount Carmel itself is mentioned in the Bible, particularly in association with the prophet
                Elijah:
                <h3> 1 Kings 18:19-46: </h3>
                This passage describes Elijah's challenge to the prophets of Baal on Mount Carmel. Elijah invites the
                prophets of Baal to prove the power of their gods by calling down fire to consume their sacrifices. When
                their efforts fail, Elijah prays to the God of Israel, who sends fire from heaven to consume Elijah's
                sacrifice, demonstrating God's power and reaffirming His covenant with Israel.
                <h2> Explanation: </h2>
                <h3> • Mount Carmel in Biblical Context: </h3>
                Mount Carmel is historically significant for its association with Elijah's prophetic ministry. Elijah's
                confrontation with the prophets of Baal serves as a pivotal moment of divine intervention, affirming the
                supremacy of the God of Israel.
                <h3> • Bahá'í Faith and Mount Carmel: </h3>
                In the Bahá'í Faith, Mount Carmel holds spiritual significance as the location of the Shrine of the Báb.
                The Báb's teachings laid the groundwork for the Bahá'í Faith, emphasizing principles of unity, peace,
                and the oneness of humanity.
                <h3> • Shrine of the Báb: </h3>
                The Shrine of the Báb on Mount Carmel is a focal point of pilgrimage for Bahá'ís worldwide. It
                symbolizes the unity of religions and the spiritual aspirations of humanity toward peace and harmony.
                <h3> • Unity of Religious Traditions: </h3>
                While the Bahá'í Faith acknowledges the historical and spiritual significance of places like Mount
                Carmel, its teachings emphasize the unity of all religions and the progressive revelation of spiritual
                truths through successive messengers of God.
                In conclusion, while there are no direct biblical references to the Bahá'í Shrine itself, the
                geographical location of Mount Carmel holds biblical significance related to the prophet Elijah. The
                Shrine of the Báb, situated on Mount Carmel, represents a modern expression of faith and spiritual
                devotion within the context of the Bahá'í Faith's teachings of unity, peace, and the oneness of
                humanity.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default BahaiShrine