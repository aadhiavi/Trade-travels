import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Church of StPeter of Gallicantu.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const ChurchOfStPeter = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Church of St’Peter of Gallicantu</h1>
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
                The Church of St. Peter in Gallicantu is a Roman Catholic church located on the eastern
                slope of Mount Zion in Jerusalem. It commemorates several events from the life of Jesus
                Christ, particularly his trial and Peter's denial of him, as recorded in the New Testament. <br />
                <h2>Historical and Religious Significance</h2>

                <h3> 1. Name and Meaning:</h3>
                St. Peter: The church is dedicated to St. Peter, one of Jesus' apostles, who denied
                knowing Jesus three times before the rooster crowed (Gallicantu means "cock's crow" in
                Latin).<br />
                Location: The church is situated near the ancient site of the House of Caiaphas, the high
                priest who presided over Jesus' trial.

                <h3> 2. Biblical References:</h3>
                Peter's Denial: The church commemorates Peter's denial of Jesus, which occurred after
                Jesus' arrest and during his trial at the house of the high priest Caiaphas.
                Gospels: The denial is described in all four Gospels (Matthew 26:69-75, Mark 14:66-72,
                Luke 22:54-62, John 18:15-27).

                <h2> Architectural Features</h2>
                <h3> 1. Design:</h3>
                The Church of St. Peter in Gallicantu was built in the Byzantine style and later renovated
                by the Franciscans in the 20th century.<br />
                It features a striking bell tower and a modern chapel, with architectural elements that
                blend historical and contemporary styles.

                <h3> 2. Interior:</h3>
                The interior of the church includes beautiful mosaics and artwork depicting scenes from
                Peter's denial and other biblical events. <br />
                A notable feature is the Chapel of the Cock Crowing, which marks the traditional location
                where Peter is believed to have heard the rooster crow after his denial.

                <h2> Historical Context</h2>
                <h3> 1. Location Identification:</h3>
                The church is located near the traditional site of the House of Caiaphas, where Jesus was
                brought for trial after his arrest in the Garden of Gethsemane. <br />
                This proximity underscores the historical accuracy and significance of the church in
                relation to biblical events.

                <h3> 2. Archaeological Discoveries:</h3>
                Excavations in the area have uncovered ancient remains that support the historical context
                of the biblical events described in the Gospels. <br />
                These discoveries add to the authenticity and historical depth of the site as a place
                linked to the life of Jesus and the early Christian community.

                <h2> Religious and Cultural Impact</h2>
                <h3> 1. Pilgrimage Destination:</h3>
                The Church of St. Peter in Gallicantu is a major pilgrimage site for Christians,
                particularly those commemorating events related to Jesus' Passion and Peter's role in the
                early Christian narrative. <br />
                Pilgrims visit the church to pray, reflect, and participate in religious services,
                especially during Holy Week and other significant Christian observances.

                <h3> 2. Ecumenical Significance:</h3>
                The church welcomes visitors from various Christian denominations, fostering ecumenical
                dialogue and understanding. <br />
                It serves as a symbol of unity in faith and shared reverence for the biblical events that
                occurred in Jerusalem.

                <h2> Visitor Experience</h2>
                <h3>1. Guided Tours and Services:</h3>
                Visitors to the Church of St. Peter in Gallicantu can participate in guided tours that
                explain the historical and religious significance of the site. <br />
                Religious services, including Masses and prayer vigils, are regularly held, providing
                opportunities for worship and spiritual reflection.

                <h3> 2. Archaeological Exhibits:</h3>
                The church features exhibits and displays related to archaeological findings in the area,
                enriching visitors' understanding of the historical context of biblical events.

                <h2> Summary</h2>
                The Church of St. Peter in Gallicantu is a significant Roman Catholic church located on
                Mount Zion in Jerusalem, commemorating Peter's denial of Jesus and other events from the
                Passion narrative. Its historical and religious significance, coupled with its architectural
                beauty and archaeological context, make it a meaningful destination for pilgrims and
                visitors seeking to connect with the biblical history of Jerusalem and the early Christian
                faith.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default ChurchOfStPeter;