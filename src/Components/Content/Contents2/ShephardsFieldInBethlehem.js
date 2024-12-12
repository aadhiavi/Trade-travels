import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/tour9.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const ShephardsFieldInBethlehem = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Shepards Field in Bethlehem</h1>
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
                The Shepherd's Fields in Bethlehem hold significant biblical and historical importance,
                particularly in relation to the birth of Jesus Christ. Here's an explanation with relevant
                Bible references and historical context:
                <h2>1. Biblical References:</h2>
                Luke 2:8-20 recounts the story of the angel appearing to shepherds in the fields near
                Bethlehem to announce the birth of Jesus. The shepherds are told that they will find the baby
                wrapped in swaddling clothes and lying in a manger. They visit the newborn Jesus and then spread
                the news of his birth. <br /><br />
                The mention of shepherds in this passage reflects the pastoral landscape and the occupation of
                the people in the area around Bethlehem during biblical times. <br /><br />
                Luke 2:8-20 narrates the account of the angelic announcement of Jesus' birth to shepherds in the
                fields near Bethlehem. Here's a breakdown of the passage: <br /><br />
                <b> The Angel's Appearance:</b> The passage begins with shepherds tending their flocks in the fields
                near Bethlehem at night. Suddenly, an angel of the Lord appears to them, and the glory of the
                Lord shines around them, causing fear. <br /><br />
                <b> The Good News:</b> The angel reassures the shepherds, saying, "Do not be afraid. I bring you good
                news that will cause great joy for all the people." The angel then announces the birth of a
                Savior, Christ the Lord, in the city of David, which is Bethlehem. <br /><br />
                <b> The Sign:</b> The angel provides a sign for the shepherds to recognize the newborn Messiah: they
                will find the baby wrapped in swaddling cloths and lying in a manger. <br /><br />
                <b> Heavenly Hosts:</b> Suddenly, a multitude of heavenly hosts appears with the angel, praising God
                and saying, "Glory to God in the highest heaven, and on earth peace to those on whom his favor
                rests." <br /><br />
                <b> The Shepherds' Response:</b> After the angels depart, the shepherds decide to go to Bethlehem to
                see the baby Jesus. They say to one another, "Let's go to Bethlehem and see this thing that has
                happened, which the Lord has told us about." <br /><br />
                <b> Finding the Baby:</b> The shepherds hurry to Bethlehem and find Mary, Joseph, and the baby lying
                in a manger, just as the angel had told them. <br /><br />
                <b> Spreading the News:</b> After seeing the baby Jesus, the shepherds share the news of what they had
                seen and heard with others. All who heard it were amazed at what the shepherds told them. <br /><br />
                <b> Mary's Reaction:</b> The passage concludes with a mention of Mary, who treasured and pondered all
                these things in her heart. <br /><br />
                This passage from Luke highlights several important themes, including: <br />
                • The inclusivity of the Gospel message, as the first announcement of Jesus' birth is made to
                lowly shepherds. <br />
                • The fulfillment of Old Testament prophecies regarding the Messiah's birth in the city of David
                (Micah 5:2). <br />
                • The joy and wonder surrounding the arrival of Jesus, expressed by both the heavenly hosts and
                the shepherds. <br />
                • The importance of personal testimony and witness in sharing the good news of Jesus' birth.
                Overall, Luke 2:8-20 captures the awe-inspiring announcement of Jesus' birth and the shepherds'
                eager response to witness the fulfillment of God's promises.

                <h2>2. Historical Context:</h2>
                Bethlehem, located about six miles south of Jerusalem, has a long history dating back to
                ancient times. In biblical times, it was known as the birthplace of King David and was later
                revered as the birthplace of Jesus. <br />
                The Shepherd's Fields surrounding Bethlehem were likely grazing areas for shepherds tending
                their flocks. The rolling hills and fertile valleys provided ample pasture for sheep and other
                livestock. <br />
                The region around Bethlehem, including the Shepherd's Fields, was part of the territory of the
                tribe of Judah in ancient Israel. It was also associated with the city of David, further
                connecting it to the lineage of Jesus. <br />
                Over the centuries, Bethlehem and the Shepherd's Fields became pilgrimage sites for
                Christians, who sought to visit the traditional sites associated with the birth of Jesus.
                Churches and monasteries were built in the area to commemorate these events.
                <h2>3. Modern Significance:</h2>
                Today, the Shepherd's Fields in Bethlehem continue to attract visitors and pilgrims from
                around the world. The landscape remains largely unchanged, offering visitors a glimpse into the
                biblical world and the life of shepherds in ancient times. <br />
                Several churches and religious institutions, such as the Church of the Nativity and the
                Shepherds' Field Chapel, are located in and around Bethlehem, serving as places of worship and
                pilgrimage for Christians. <br />
                The Shepherd's Fields serve as a reminder of the humble beginnings of Jesus' earthly life and
                the significance of his birth for Christians worldwide. They also symbolize God's choice to
                reveal the news of the Messiah's birth to ordinary shepherds, emphasizing the inclusive nature
                of the Gospel message. <br />
                In summary, the Shepherd's Fields in Bethlehem are closely associated with the biblical
                narrative of Jesus' birth and continue to hold religious and historical significance for
                Christians around the world.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div >
    )
}

export default ShephardsFieldInBethlehem