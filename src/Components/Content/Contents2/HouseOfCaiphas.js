import React, { useState } from 'react';
import "../Contents.css";
import church from "../../../Assets/slides/caiaphas-home-1.jpg"
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

const HouseOfCaiphas = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='content'>
            <h1>About House of Caiphas</h1>
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
                The House of Caiaphas, also known as the High Priest's Palace, is an archaeological site located on the eastern slope of Mount Zion in Jerusalem. It is traditionally believed to be the residence of Caiaphas, the high priest who presided over the Sanhedrin during the time of Jesus Christ. This site holds significant historical and religious importance related to events leading up to Jesus' trial and crucifixion.
                <h2> Historical Context: </h2>
                <h3> 1. Biblical Events: </h3>
                <b> •   Jesus' Arrest: </b> According to the Gospels, after Jesus' arrest in the Garden of Gethsemane, he was brought to the house of the high priest Caiaphas for questioning and trial.<br />
                <b> •   Gospels: </b> The accounts of Jesus' trial before Caiaphas are found in Matthew 26:57-68, Mark 14:53-65, Luke 22:54-71, and John 18:12-27.
                <h3> 2. Location: </h3>
                The House of Caiaphas is located near the Church of St. Peter in Gallicantu and the traditional site of the Upper Room (Last Supper Room) on Mount Zion.<br />
                This proximity to other significant biblical sites underscores its role in the events leading to Jesus' crucifixion.

                <h2> Archaeological Discoveries: </h2>
                <h3> 1. Excavations: </h3>
                Archaeological excavations have uncovered remains of a large mansion complex believed to have been the residence of Caiaphas. <br />
                Discoveries include a courtyard, ritual baths (mikveh), and other residential structures dating back to the Second Temple period (1st century BCE to 1st century CE).
                <h3> 2. Pit and Prison Complex: </h3>
                One of the significant discoveries at the site is a pit or cistern complex that may have served as a prison. <br />
                This pit is traditionally associated with the "dungeon" where Jesus may have been held before his trial.

                <h2> Religious and Cultural Significance: </h2>
                <h3> 1. Pilgrimage Site: </h3>
                The House of Caiaphas is a pilgrimage destination for Christians visiting Jerusalem, particularly those interested in the events of Jesus' Passion. <br />
                Pilgrims visit the site to reflect on the biblical accounts of Jesus' arrest, trial, and the fulfillment of prophetic scriptures.
                <h3> 2. Historical Context: </h3>
                The archaeological findings at the House of Caiaphas provide tangible evidence of the urban life and religious practices during the Second Temple period. <br />
                These discoveries enrich the understanding of the socio-political and religious environment in Jerusalem at the time of Jesus.

                <h2> Visitor Experience: </h2>
                <h3> 1. Access: </h3>
                Visitors can explore the excavated remains of the House of Caiaphas and view artifacts that shed light on the daily life and historical context of the site. <br />
                Guided tours are available, offering insights into the archaeological significance and biblical narratives associated with the site.
                <h3> 2. Educational and Spiritual Reflection: </h3>
                The House of Caiaphas offers opportunities for educational tours and spiritual reflection, allowing visitors to connect with the events of Jesus' trial and the religious tensions of the time. <br />
                It serves as a place where visitors can contemplate the implications of Jesus' teachings and his ultimate sacrifice.

                <h2> Summary: </h2>
                The House of Caiaphas, located on the eastern slope of Mount Zion in Jerusalem, is an archaeological site believed to be the residence of the high priest Caiaphas during the time of Jesus. It holds significant historical and religious importance as the place where Jesus was brought for questioning and trial before his crucifixion. The excavated remains and artifacts at the site provide insights into the urban life and religious practices of Jerusalem during the Second Temple period, enriching the understanding of biblical narratives and their cultural context. Today, the House of Caiaphas serves as a pilgrimage destination and educational site where visitors can explore the historical and spiritual dimensions of Jesus' Passion and the events leading to his crucifixion.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default HouseOfCaiphas;