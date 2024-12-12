import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mount Olives.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MtOlives = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Mount Olives</h1>
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
                Mount Olivet, also known as the Mount of Olives, is a prominent geographic feature located to
                the east of Jerusalem. It holds significant religious and historical importance in Judaism,
                Christianity, and Islam. In the Bible, particularly in the Old and New Testaments, Mount
                Olivet is mentioned in various contexts:

                <h2> 1. Old Testament References:</h2>
                <b> 2 Samuel 15: </b> This chapter recounts King David's flight from Jerusalem during the rebellion
                of his son Absalom. As David ascends the Mount of Olives, he weeps and prays, anticipating
                the outcome of the conflict. <br />
                <b> Zechariah 14: </b> This prophetic passage mentions the Mount of Olives as the site where God
                will stand during the final judgment and the establishment of His kingdom.

                <h2>2. New Testament References: </h2>
                <b> Matthew 24: </b> In this chapter, Jesus delivers his Olivet Discourse to his disciples,
                discussing the signs of the end times and his second coming. The discourse is given on the
                Mount of Olives, overlooking Jerusalem. <br />
                <b> Matthew 26, Mark 14, Luke 22, John 18: </b> These chapters describe Jesus' frequent visits to
                the Mount of Olives during his ministry. It is also the location of the Garden of
                Gethsemane, where Jesus prayed before his arrest. <br />
                <b> Acts 1: </b> After his resurrection, Jesus appears to his disciples on the Mount of Olives and
                instructs them to wait in Jerusalem for the outpouring of the Holy Spirit. He then ascends
                to heaven from this location.

                <h2>3. Significance:</h2>
                <b> Prophetic: </b> In both Jewish and Christian traditions, the Mount of Olives is associated with
                messianic expectations and eschatological events, including the return of the Messiah and
                the final judgment. <br />
                <b> Religious Pilgrimage: </b> The Mount of Olives has long been a site of religious pilgrimage for
                Jews, Christians, who visit to pray, reflect, and commemorate biblical events.
                The Mount of Olives serves as a tangible link to the rich history and spiritual significance
                of Jerusalem, making it a cherished and revered location for believers of various faiths.

                <h2>Some additional details about its significance and features:</h2>
                <h3> 1. Geography:</h3>
                Mount of Olives is part of the larger mountain range that stretches from the Judean Desert
                in the east to the Jerusalem Hills in the west. <br />
                The ridge rises to about 800 meters (2,625 feet) above sea level, providing a commanding
                view of Jerusalem and its surroundings

                <h3>2. Cultural and Religious Importance:</h3>
                In Judaism, the Mount of Olives is significant for its association with various biblical
                events and as the location of the world's oldest continually used Jewish cemetery. <br />
                For Christians, it holds deep spiritual significance due to its connection with the life
                and ministry of Jesus Christ, particularly events such as the Olivet Discourse, the Agony in
                the Garden, and the Ascension.

                <h3>3. Historical Landmarks: </h3>
                The ridge is dotted with historical landmarks and religious sites, including churches, and
                chapels. The Church of All Nations (also known as the Church of the Agony or Basilica of the
                Agony) is located at the foot of the Mount of Olives and is built over the traditional site
                of the Garden of Gethsemane. <br />
                The Chapel of the Ascension, traditionally identified as the site from which Jesus
                ascended to heaven, is situated on the summit of the mount. <br />
                Dominating the skyline is the Tower of the Ascension, a landmark built in the late 19th
                century by the Russian Orthodox Church. <br />
                The Jewish cemetery on the mountain's slopes is one of the most important burial sites in
                Judaism, with graves dating back centuries, including those of prominent figures from Jewish
                history.

                <h3>4. Modern Significance:</h3>
                Today, the Mount of Olives remains a significant religious and cultural site, attracting
                pilgrims, tourists, and worshippers from around the world. <br />
                The ridge's commanding view of Jerusalem also makes it a popular spot for visitors seeking
                panoramic views of the city. <br />
                Overall, the Mount of Olives stands as a symbol of Jerusalem's rich religious heritage and
                serves as a focal point for spiritual reflection and worship for people of various faiths.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MtOlives