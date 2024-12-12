import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Taba Border Crossing.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const TabaBorderCrossing = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Taba Border Crossing</h1>
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
                The Taba Border Crossing is a significant border crossing between Egypt and Israel, located
                near the resort town of Taba in the Sinai Peninsula. Here's an overview of the Taba Border
                Crossing:
                <h2> 1. Location and Importance:</h2>
                The Taba Border Crossing is situated at the northeastern tip of the Sinai Peninsula, near
                the Gulf of Aqaba. <br />
                It serves as a crucial gateway for travelers crossing between Egypt and Israel, providing
                access to popular tourist destinations such as the Red Sea resorts of Eilat (Israel) and
                Taba (Egypt), as well as facilitating trade and commerce between the two countries.
                <h2> 2. History:</h2>
                The Taba Border Crossing has a complex history, marked by periods of tension and conflict
                between Egypt and Israel, as well as periods of peace and cooperation. <br />
                Following the signing of the Egypt-Israel Peace Treaty in 1979, the Taba Border Crossing
                became an important symbol of peace and normalization between the two countries. It was
                officially established as a border crossing point for travelers and goods.

                <h2> 3. Crossing Procedures:</h2>
                The Taba Border Crossing facilitates the movement of individuals and vehicles between
                Egypt and Israel. Travelers are required to present valid travel documents, including
                passports and visas, and may be subject to security checks by border authorities. <br />
                The crossing is open to both tourists and local residents, as well as commercial vehicles
                transporting goods between the two countries. <br />
                The crossing is typically open during designated hours, although operating hours may vary
                depending on security conditions and other factors.

                <h2>4. Tourism and Economic Impact:</h2>
                The Taba Border Crossing plays a vital role in promoting tourism and economic development
                in the region, facilitating travel and trade between Egypt and Israel. <br />
                Many tourists use the Taba Border Crossing as a point of entry to visit popular
                destinations such as the Red Sea resorts of Eilat and Taba, as well as historical and
                cultural sites in both countries. <br />
                The crossing also contributes to economic cooperation and collaboration between Egypt and
                Israel, supporting cross-border trade and investment activities.
                Overall, the Taba Border Crossing serves as a vital link between Egypt and Israel,
                facilitating travel, trade, and tourism while also symbolizing the potential for peace and
                cooperation in the region.

            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default TabaBorderCrossing