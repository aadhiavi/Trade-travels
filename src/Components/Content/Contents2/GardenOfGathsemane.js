import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Garden of Gathsemane.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const GardenOfGathsemane = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Garden of Gathsemane</h1>
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
                Dominus Flevit is a Roman Catholic church located on the Mount of Olives in Jerusalem. It is one of
                the significant Christian pilgrimage sites in the city, commemorating an event in the life of Jesus
                Christ as recorded in the New Testament.
                <h2> Overview </h2>
                <b>• Name:</b> Dominus Flevit (Latin for "The Lord Wept") <br />
                <b>• Location:</b> Mount of Olives, Jerusalem <br />
                <b>• Denomination:</b> Roman Catholic <br />
                <b>• Architect:</b> Antonio Barluzzi <br />
                <b>• Completed:</b> 1955
                Historical and Religious Significance
                <h2> Biblical References </h2>
                <h3> 1. Jesus Weeps Over Jerusalem</h3>
                <b> o Reference: </b> Luke 19:41-44 <br />
                <b> o Passage: </b> "As he approached Jerusalem and saw the city, he wept over it and said, 'If you, even
                you, had only known on this day what would bring you peace—but now it is hidden from your eyes. The
                days will come upon you when your enemies will build an embankment against you and encircle you and
                hem you in on every side. They will dash you to the ground, you and the children within your walls.
                They will not leave one stone on another, because you did not recognize the time of God's coming to
                you.'" <br />
                <b> o Significance: </b> This passage recounts Jesus' lament over Jerusalem, predicting its destruction due
                to the people's failure to recognize the messianic visitation. Dominus Flevit commemorates this
                moment of sorrow.
                <h2>Archaeological Significance</h2>
                <b> • Ancient Tombs: </b> Excavations around the site have uncovered a necropolis dating back to the
                Canaanite period and a Byzantine monastery. These findings underscore the historical depth of the
                area and its long-standing religious significance. <br />
                <b> • Byzantine Church: </b> Remains of a Byzantine-era church, including mosaics and inscriptions, indicate
                that the site has been a place of Christian worship for many centuries.
                <h2> Architectural Features </h2>
                <h3> 1. Design:</h3>
                <b> o Antonio Barluzzi: </b> The church was designed by the Italian architect Antonio Barluzzi, who is
                renowned for his work on various churches in the Holy Land. <br />
                <b> o Shape: </b> The church is designed in the shape of a tear drop to symbolize the tears of Christ. This
                unique architectural choice visually represents the sorrowful event it commemorates.
                <h3> 2. Interior:</h3>
                <b> o Altar Window: </b> The altar features a large window that offers a panoramic view of Jerusalem,
                allowing pilgrims to reflect on the city as Jesus did. The window frames the Old City, including the
                Dome of the Rock and the Church of the Holy Sepulchre. <br />
                <b> o Mosaics: </b> The floor of the church contains beautiful mosaics from the Byzantine period, depicting
                various Christian symbols and themes.
                <h3> 3. Exterior:</h3>
                <b> o Garden: </b> The church is surrounded by a garden with ancient olive trees, adding to the serene and
                contemplative atmosphere of the site. <br />
                <b> o Tombs: </b> The surrounding area includes ancient tombs, which have been integrated into the church's
                grounds, emphasizing the historical continuity of the site.
                <h2> Religious and Cultural Impact </h2>
                <h3> 1. Pilgrimage Site:</h3> Dominus Flevit is a major stop for Christian pilgrims visiting the Holy Land. It
                provides a place for reflection and prayer, particularly as pilgrims contemplate Jesus' prophetic
                lament over Jerusalem.
                <h3> 2. Ecumenical Significance:</h3> While it is a Roman Catholic church, Dominus Flevit attracts pilgrims
                from various Christian denominations, highlighting its universal appeal and importance within the
                Christian tradition.
                <h3> 3. Cultural Heritage:</h3> The site is part of the larger cultural and religious heritage of Jerusalem,
                contributing to the city's rich tapestry of sacred places and historical landmarks.
                <h2> Summary </h2>
                Dominus Flevit is a significant religious site on the Mount of Olives in Jerusalem, commemorating
                the moment when Jesus wept over the future fate of Jerusalem as described in the Gospel of Luke.
                Designed by Antonio Barluzzi in the shape of a teardrop, the church offers a place of contemplation
                and prayer with a stunning view of Jerusalem. Its archaeological and historical importance, combined
                with its religious significance, make it a key destination for Christian pilgrims and a notable
                landmark in the Holy Land.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default GardenOfGathsemane