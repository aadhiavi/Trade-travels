import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Holy Mary Church in Egypt.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const HolyMaryChurchInEgypt = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Holy Mary Church in Egypt</h1>
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
                The Holy Mary Church, also known as the Church of the Virgin Mary, holds significant religious and
                historical importance in Egypt. Often referred to as the Coptic Orthodox Church of the Virgin Mary,
                there are several churches dedicated to the Virgin Mary throughout Egypt, with some being especially
                noteworthy due to their historical and religious significance.
                <h2> Notable Holy Mary Churches in Egypt </h2>
                <h3>1. Hanging Church (Saint Virgin Mary's Coptic Orthodox Church) </h3>
                <b> • Location: </b> Old Cairo (Coptic Cairo) <br />
                <b> • History: </b> The Hanging Church, or Al-Muallaqa, is one of the oldest churches in Egypt, dating back
                to the third century. It is called the Hanging Church because it was built above a gatehouse of the
                Roman Babylon Fortress. <br />
                <b> • Significance: </b> It serves as the seat of the Coptic Orthodox Pope of Alexandria and is renowned for
                its beautiful architecture and rich history.
                <h3>2. Church of the Virgin Mary in Zeitoun </h3>
                <b> • Location: </b> Zeitoun district, Cairo <br />
                <b> • History: </b> Built in the early 20th century, it gained international attention due to reported
                apparitions of the Virgin Mary from 1968 to 1971, witnessed by thousands of people. <br />
                <b> • Significance: </b> The apparitions were deemed miraculous by the Coptic Orthodox Church, and the site
                has become a pilgrimage destination.
                <h3>3. Virgin Mary’s Tree (Matariya) </h3>
                <b> • Location: </b> Matariya, Cairo <br />
                <b> • History: </b> Tradition holds that the Holy Family rested under this tree during their flight into
                Egypt. The site has a chapel commemorating the event. <br />
                <b> • Significance: </b> It is a key pilgrimage site, reflecting the deep connection between Egypt and the
                early life of Jesus Christ.
                <h2> Biblical References to the Virgin Mary and Egypt </h2>
                <h3>1. Flight into Egypt: </h3>
                <b> o Reference: </b> Matthew 2:13-15 <br />
                <b> o Passage: </b> "When they had gone, an angel of the Lord appeared to Joseph in a dream. 'Get up,' he
                said, 'take the child and his mother and escape to Egypt. Stay there until I tell you, for Herod is
                going to search for the child to kill him.' So he got up, took the child and his mother during the
                night and left for Egypt, where he stayed until the death of Herod. And so was fulfilled what the
                Lord had said through the prophet: 'Out of Egypt I called my son.'" <br />
                <b> o Significance: </b> This passage highlights the Holy Family's flight to Egypt, making Egypt an integral
                part of the early narrative of Jesus Christ. Many sites in Egypt are associated with this event.
                <h2> Historical Significance of Holy Mary Churches in Egypt </h2>
                <h3>1. Coptic Tradition: </h3>
                The Coptic Orthodox Church, one of the oldest Christian denominations, venerates the Virgin Mary.
                Churches dedicated to her honor the Holy Family's connection to Egypt. <br />
                The Coptic Church has a rich tradition of Marian devotion, reflected in the numerous churches and
                monasteries named after her.
                <h3>2. Architectural Heritage: </h3>
                Many Holy Mary Churches in Egypt feature unique architectural styles that blend Roman, Byzantine,
                and Coptic influences. They often include beautiful icons, intricate woodwork, and ancient relics. <br />
                The Hanging Church is notable for its wooden roof in the shape of Noah's Ark, symbolizing
                salvation.
                <h3>3. Pilgrimage Sites: </h3>
                Churches such as the Church of the Virgin Mary in Zeitoun and the Virgin Mary’s Tree in Matariya
                attract pilgrims from around the world. These sites are celebrated for their connections to Marian
                apparitions and biblical events. <br />
                Annual feasts and festivals, particularly the Feast of the Assumption and the Feast of the
                Nativity of the Virgin Mary, draw large crowds.
                <h2> Religious and Cultural Impact </h2>

                <h3>1. Ecumenical Relations: </h3>
                The Marian churches in Egypt play a crucial role in fostering ecumenical relations between
                different Christian denominations, including the Coptic Orthodox Church, Roman Catholic Church, and
                various Protestant communities. <br />
                Events such as Marian apparitions often attract interest and reverence across denominational
                lines.
                <h3>2. Cultural Heritage: </h3>
                The Holy Mary Churches are integral to Egypt's cultural and religious heritage, representing
                centuries of Christian presence in a predominantly Muslim country. <br />
                These churches contribute to Egypt's diverse cultural landscape, highlighting the coexistence and
                historical continuity of its Christian minority.
                <h2> Summary </h2>
                The Holy Mary Churches in Egypt, such as the Hanging Church and the Church of the Virgin Mary in
                Zeitoun, hold immense historical and religious significance. They commemorate the Virgin Mary's
                connection to Egypt through biblical events like the Flight into Egypt, serving as vital centers of
                worship, pilgrimage, and cultural heritage. These churches reflect the deep roots of Christianity in
                Egypt and continue to be focal points of Marian devotion and ecumenical significance.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default HolyMaryChurchInEgypt