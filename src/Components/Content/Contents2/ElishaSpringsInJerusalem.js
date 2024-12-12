import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Elisha Springs in Jerusalem.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const ElishaSpringsInJerusalem = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Elisha Springs in Jerusalem</h1>
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
                Elisha's Spring, also known as Ain es-Sultan or Elisha's Fountain, is a historical and biblical site located near the ancient city of Jericho in the West Bank, rather than in Jerusalem. It is closely associated with the prophet Elisha and has significant biblical references, historical importance, and geographical features.

                <h2> Biblical References: </h2>
                Elisha's spring is prominently mentioned in the Bible in the following context:
                <h3>2 Kings 2:19-22:</h3>
                The story describes how the people of Jericho came to Elisha, complaining about the poor quality of the water. Elisha asked for a new bowl with salt, which he threw into the spring, declaring that the Lord had healed the water. From that time on, the water became pure and the land productive.

                "Then the men of the city said to Elisha, 'Please notice, the situation of this city is pleasant, as my lord sees; but the water is bad, and the ground barren.' And he said, 'Bring me a new bowl, and put salt in it.' So they brought it to him. Then he went out to the source of the water, and cast in the salt there, and said, 'thus says the Lord: "I have healed this water; from it there shall be no more death or barrenness."' So the water remains healed to this day, according to the word of Elisha which he spoke." (2 Kings 2:19-22, NKJV)

                <h2> History: </h2>
                Elisha's spring has been a vital water source for Jericho since ancient times. The spring's water was essential for the survival and prosperity of the city, making Jericho one of the oldest continuously inhabited cities in the world. The spring's association with the miracle performed by Elisha adds to its historical and religious significance.
                Jericho itself is often referred to as the "City of Palms" due to its abundant palm trees, which thrive thanks to the irrigation provided by the spring. Over the centuries, the spring has sustained agricultural activities and supported the local population.
                Geographical Borders and Measurements
                Elisha's Spring is located near the center of Jericho, in the West Bank. Jericho is situated in the Jordan Valley, northeast of Jerusalem.
                <h3> Coordinates: </h3> Approximately 31.8650° N latitude and 35.4590° E longitude
                <h3> Elevation: </h3> Approximately 258 meters (846 feet) below sea level, making Jericho one of the lowest cities in the world.
                <h2> Description: </h2>
                Elisha's Spring produces a steady flow of fresh water, which has historically been used for drinking, irrigation, and supporting local agriculture. The water from the spring is channeled into various irrigation systems, contributing to the lush greenery and fertile lands surrounding Jericho.
                <h3> Water Flow: </h3> The spring discharges an estimated 1,000 to 1,200 cubic meters of water per hour, providing a continuous and reliable water source for the region.
                <h3> Surroundings: </h3> The area around Elisha's Spring is characterized by palm groves, vegetable fields, and various crops that benefit from the irrigation provided by the spring.
                <h2> Key Landmarks: </h2>
                <h3> Jericho: </h3> The ancient city near Elisha's spring, known for its historical and biblical significance, including the famous Battle of Jericho described in the Book of Joshua.
                <h3> Tell es-Sultan: </h3> An archaeological site in Jericho, believed to be the location of ancient Jericho, with layers of ruins dating back to various periods of human settlement.
                <h3> Mount of Temptation: </h3> A mountain overlooking Jericho, traditionally identified as the site where Jesus was tempted by Satan, as described in the Gospels of Matthew and Luke.
                Elisha's spring continues to be a vital resource and a place of historical and religious interest, drawing visitors and pilgrims who seek to connect with its biblical heritage and natural beauty.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default ElishaSpringsInJerusalem