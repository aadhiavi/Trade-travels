import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Haifa.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const Haifa = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Haifa</h1>
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
                Haifa is a coastal city in northern Israel, known for its historical, cultural, and religious
                significance. Here’s an exploration of Haifa's history, geographical details, and its connections to
                biblical references:
                <h2> Historical and Geographical Details: </h2>
                <h3> 1. Location and Geography: </h3>
                Haifa is situated on the slopes of Mount Carmel, overlooking the Mediterranean Sea. It serves as a
                major port city and is the third-largest city in Israel. <br />
                The city's strategic location has made it a significant center for trade, culture, and religion
                throughout history.
                <h3> 2. Ancient History: </h3>
                Haifa's history dates back thousands of years. It has been inhabited by various civilizations,
                including the Canaanites, Phoenicians, Israelites, Greeks, Romans, and Byzantines. <br />
                During biblical times, the area around Haifa was part of the territory allocated to the tribe of Asher
                (Joshua 19:24-31).
                <h3> 3. Modern History: </h3>
                In more recent history, Haifa grew significantly under Ottoman rule and later as part of the British
                Mandate in Palestine. It became a major industrial and commercial hub in the region.
                <h3> 4. Cultural and Religious Diversity:</h3>
                Haifa is known for its cultural diversity and religious tolerance. It is home to significant
                populations of Jews, Muslims, Christians, and members of the Bahá'í Faith, whose world center is
                located in Haifa.
                <h2> Biblical References: </h2>
                <h3> 1. Joshua 19:24-31: </h3>
                This passage in the Old Testament describes the division of the land among the tribes of Israel.
                Haifa is not specifically mentioned by name, but it was part of the territory allotted to the tribe
                of Asher, which extended to the Mediterranean coast in this region.
                <h3> 2. Connections to Mount Carmel: </h3>
                Mount Carmel, overlooking Haifa, is mentioned in the Bible in several significant contexts: <br />
                <b> Elijah and the Prophets of Baal (1 Kings 18): </b> This famous biblical account takes place on Mount
                Carmel, where Elijah challenges the prophets of Baal and demonstrates the power of God by calling
                down fire from heaven. <br />
                <b> Elijah's vision of rain (1 Kings 18:41-46): </b> After the confrontation with the prophets of Baal,
                Elijah goes up to the top of Mount Carmel to pray for rain, which is eventually granted.
                <h2> Explanation: </h2>
                • Joshua 19:24-31 connects Haifa to biblical history through its inclusion in the territory of the
                tribe of Asher, one of the twelve tribes of Israel. This historical reference underscores Haifa's
                ancient roots and its place within the biblical narrative of settlement and division of the Promised
                Land. <br />
                • Mount Carmel plays a pivotal role in biblical narratives, particularly in the stories of Elijah.
                Elijah's confrontation with the prophets of Baal on Mount Carmel (1 Kings 18) is a dramatic
                demonstration of God's power and Elijah's role as a prophet. It highlights the spiritual
                significance of Mount Carmel as a place of divine intervention and revelation in biblical times.
                Haifa's rich history and geographical significance make it a place of interest not only for its
                modern cultural and economic contributions but also for its deep connections to biblical history and
                narratives, particularly through its association with Mount Carmel and the stories of Elijah.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Haifa