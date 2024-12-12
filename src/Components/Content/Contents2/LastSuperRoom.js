import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Last Supper Room.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const LastSuperRoom = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Last Supper Room</h1>
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
                The Last Supper Room, also known as the Upper Room or Cenacle, is traditionally believed to be the
                site of Jesus Christ's last supper with his disciples before his crucifixion. Located in Jerusalem,
                this place holds significant religious and historical importance for Christians worldwide.
                <h2> Location </h2>
                <b> • Site: </b> The Upper Room is situated on Mount Zion in Jerusalem, near the Old City walls. <br />
                <b> • Identification: </b> The exact location of the Upper Room has been a subject of debate over the centuries.
                The current structure is a Crusader-era building constructed upon earlier Byzantine and possibly even
                first-century foundations.
                <h2> Biblical and Historical Significance </h2>
                <h3> 1. The Last Supper </h3>
                <b> Biblical Reference: </b> Matthew 26:17-30, Mark 14:12-26, Luke 22:7-38, John 13:1-17:26 <br />
                <b> Description: </b> According to the Gospels, Jesus shared a final meal with his disciples in an Upper
                Room in Jerusalem during the Passover feast. During this meal, he instituted the Eucharist (Holy
                Communion) and washed his disciples' feet, imparting important teachings and predictions. <br />
                <b> Significance: </b> The Last Supper is a central event in Christian theology, representing the
                institution of the Eucharist and Jesus' final moments of teaching before his arrest and crucifixion.
                <h3> 2. Post-Resurrection Events </h3>
                <b>Biblical Reference:</b> Acts 1:12-14 <br />
                <b> Description: </b> After Jesus' resurrection, the disciples gathered in the Upper Room for prayer and
                fellowship. It was here that they awaited the coming of the Holy Spirit, which occurred on the day of
                Pentecost. <br />
                <b> Significance: </b> The Upper Room is thus associated not only with the Last Supper but also with the
                birth of the Christian Church through the outpouring of the Holy Spirit.
                <h2> Architectural and Historical Development </h2>
                <h3> 1. Early Christian Era </h3>
                <b> Byzantine Period: </b> Early Christian tradition identified the Upper Room as a significant site,
                leading to the construction of a church over the supposed location. <br />
                <b> Crusader Period: </b> The current structure dates to the Crusader era (12th century), built atop the
                earlier Byzantine church. It reflects Romanesque architectural style and has undergone various
                renovations over the centuries.
                <h3> 2. Ownership and Custodianship </h3>
                The Upper Room has been under the custodianship of different Christian denominations over time,
                including the Franciscans and the Armenian Apostolic Church.
                Today, it is primarily managed by the Franciscan Custody of the Holy Land, with access granted to
                pilgrims and visitors for prayer and reflection.
                <h2> Visitor Experience </h2>
                <h3> 1. Accessibility </h3>
                The Upper Room is open to visitors, who can access the site and view the traditional location of the
                Last Supper.
                The building includes a chapel area where visitors can pray and participate in religious services.
                <h3> 2. Religious Services and Rituals </h3>
                Various Christian denominations conduct worship services and ceremonies in the Upper Room, especially
                during significant religious feasts and pilgrimages.
                The Eucharist (Holy Communion) is often celebrated in commemoration of Jesus' Last Supper.
                <h2> Cultural and Religious Impact </h2>
                <h3> 1. Pilgrimage Destination </h3>
                The Upper Room attracts Christian pilgrims from around the world, who visit to experience the spiritual
                significance of the place where Jesus shared his final meal with his disciples.
                Pilgrims often include the Upper Room in their itinerary when visiting other important Christian sites
                in Jerusalem.
                <h3> 2. Symbol of Unity and Faith </h3>
                Despite theological differences among Christian denominations, the Upper Room serves as a unifying
                symbol of faith and historical continuity.
                It is revered as a sacred space that connects believers with the foundational events of Christianity.
                <h2> Conclusion </h2>
                The Upper Room, or Last Supper Room, in Jerusalem holds profound significance as the traditional site of
                Jesus Christ's last meal with his disciples before his crucifixion. Beyond its historical and
                architectural aspects, it remains a spiritual focal point for Christians, serving as a place of worship,
                prayer, and pilgrimage. Its association with the Eucharist and the birth of the Christian Church
                underscores its enduring importance in Christian theology and tradition.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default LastSuperRoom