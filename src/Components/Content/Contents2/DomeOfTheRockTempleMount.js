import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Dome of the Rock Temple Mount in Jerusalem.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const DomeOfTheRockTempleMount = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Dome of the Rock Temple Mount in Jerusalem</h1>
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
                The Dome of the Rock, situated on the Temple Mount in Jerusalem, is a significant religious
                and architectural landmark in both Islamic and Jewish traditions. While it is not directly
                mentioned in the Bible, its location on the Temple Mount holds profound religious and
                historical significance in Judaism and Christianity. Here's an explanation: <br /><br />
                <h2> 1. Temple Mount in Biblical Context:</h2>
                <p>
                    The Temple Mount is known as Mount Moriah in the Bible.
                    In Genesis 22:2, God instructs Abraham to take his son Isaac to the land of Moriah and offer
                    him as a sacrifice on one of the mountains there. Although God ultimately provides a ram as
                    a substitute sacrifice, the willingness of Abraham to obey God's command is commemorated in
                    Jewish tradition as a test of faith. Jewish tradition identifies Mount Moriah as the
                    location of the Temple Mount. <br /><br />
                    Temple Mount in Christian Tradition: Jerusalem, including the Temple Mount, holds special
                    importance in Christian belief as the site of significant events in the life of Jesus
                    Christ. Jesus visited the Temple in Jerusalem during his earthly ministry, teaching there
                    and engaging in discussions with religious leaders (Luke 2:41-52, Mark 11:15-19)
                    <br /><br />
                    The Temple and Jesus' Prophecies: Jesus prophesied the destruction of the Temple in
                    Jerusalem, foretelling its destruction and describing signs that would precede it (Matthew
                    24:1-2, Mark 13:1-2, Luke 21:5-6). This prophecy was fulfilled in 70 CE when the Romans
                    destroyed the Second Temple.<br /><br />
                    Religious and Political Significance: While the Dome of the Rock itself is not mentioned in
                    Christian scriptures, its location on the Temple Mount, the site of the former Jewish Temples,
                    underscores its significance in Christian theology and eschatology. Some Christians interpret
                    biblical prophecies about the Temple and Jerusalem as having future implications for the
                    fulfillment of God's plans and purposes (Revelation 11:1-2)
                </p>
                <h2>2. The First and Second Temples: </h2>
                <p>King Solomon built the First Temple on the Temple Mount in Jerusalem, fulfilling his father
                    David's desire to construct a permanent dwelling place for the Ark of the Covenant and the
                    presence of God (1 Chronicles 22:1). The Temple was a central place of worship and sacrifice
                    for the Jewish people until its destruction by the Babylonians in 586 BCE (2 Chronicles
                    36:19). After the Babylonian exile, the Jewish people rebuilt the Temple, known as the
                    Second Temple, on the same site (Ezra 6:15).</p>
                <h2>3. Renovation by Herod</h2>
                <p>3. Herod the Great, a client king appointed by Rome, extensively renovated and expanded the
                    Second Temple, transforming it into a magnificent structure adorned with marble and gold.
                    Herod's Temple was one of the wonders of the ancient world, but it was destroyed by the
                    Romans in 70 CE, as prophesied by Jesus (Matthew 24:2).
                    <br />
                    While the Dome of the Rock is not mentioned in the Bible, its construction on the Temple
                    Mount in Jerusalem connects it to biblical narratives and the religious heritage of Judaism
                    and Christianity, making it a central element in the religious and cultural landscape of the
                    Holy Land.
                </p>
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default DomeOfTheRockTempleMount