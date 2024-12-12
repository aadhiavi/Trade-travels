import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mount Temptation.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MtTemptation = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>Mount Temptation</h1>
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
                Mount Temptation, also known as the Mount of Temptation, is a prominent geographical feature
                near the city of Jericho in the West Bank. It is traditionally associated with the
                temptations of Jesus Christ as described in the New Testament Gospels. Here's an overview
                with relevant Bible references and historical context:

                <h2>1. Biblical References:</h2>

                The temptation of Jesus on the Mount is recorded in the Gospels of Matthew 4:1-11 and Luke
                4:1-13. After his baptism in the Jordan River, Jesus is led by the Holy Spirit into the
                wilderness, where he fasts for forty days and nights.<br />

                During this time, Satan tempts Jesus three times. The temptations include turning stones into
                bread to satisfy his hunger, throwing himself off the pinnacle of the temple to test God's
                protection, and bowing down to worship Satan in exchange for worldly power and authority.<br />

                In both accounts, Jesus responds to each temptation by quoting Scripture, demonstrating his
                obedience to God and resistance to temptation.


                <h3>1. Matthew 4:1-11:</h3>

                In Matthew's account, Jesus is led by the Spirit into the wilderness to be tempted by the
                devil after fasting for forty days and nights.<br />

                Satan tempts Jesus three times: first, to turn stones into bread to satisfy his hunger;
                second, to throw himself off the pinnacle of the temple to test God's protection; and third, to
                worship Satan in exchange for all the kingdoms of the world.<br />

                Jesus responds to each temptation by quoting Scripture, affirming his reliance on God and
                resisting the temptations of Satan.<br />

                After the third temptation, the devil departs, and angels come to minister to Jesus.


                <h3> 2. Luke 4:1-13:</h3>

                Luke's account parallels Matthew's but with some differences in the order of the temptations
                and additional details.<br />

                After fasting for forty days, Jesus is tempted by the devil in the wilderness. The devil
                challenges Jesus to turn stones into bread, to worship him in exchange for all authority and
                glory, and to test God's protection by throwing himself off the pinnacle of the temple.
                Jesus responds to each temptation with Scripture, emphasizing obedience to God and rejecting
                the temptations of the devil.<br />

                After the third temptation, the devil departs from Jesus "until an opportune time" (Luke
                4:13).<br />

                In both accounts, the temptation of Jesus serves as a demonstration of his obedience to God and
                his victory over temptation. Jesus' responses to the devil's temptations highlight his reliance
                on Scripture and his commitment to fulfilling God's will. These passages emphasize the humanity
                of Jesus and his ability to empathize with human weakness while also affirming his divinity and
                authority over the forces of evil.


                <h2> 2. Historical and Geographical Context:</h2>

                Mount Temptation rises to a height of approximately 366 meters (1,201 feet) above sea level
                and overlooks the city of Jericho and the surrounding wilderness.<br />

                The mountain is marked by a sheer cliff face, with several caves and rock formations that have
                historically provided shelter for hermits and ascetics seeking solitude and spiritual
                reflection.<br />

                The tradition of associating Mount Temptation with the temptations of Jesus dates back to the
                early Christian period, with pilgrims and monks visiting the site to commemorate the events
                described in the Gospels.


                <h2> 3. Religious Significance:</h2>

                Mount Temptation holds profound religious significance for Christians as the place where Jesus
                overcame the temptations of Satan and affirmed his obedience to God's will.

                The mountain serves as a symbol of the spiritual battle between good and evil and the victory of
                righteousness over temptation. It is a reminder of Jesus' humanity and his ability to empathize
                with the struggles and challenges faced by humanity.<br />

                The site is often visited by pilgrims and tourists as part of religious tours of the Holy Land,
                allowing them to reflect on the significance of Jesus' temptations and the lessons they impart
                about faith, trust, and obedience to God.


                <h2> 4. Modern-day Site:</h2>
                Today, Mount Temptation is accessible by a winding road or a cable car that leads to the summit,
                where a Greek Orthodox monastery, known as the Monastery of the Temptation, is located.
                The monastery is built into the Cliffside and incorporates natural caves and rock formations. It
                serves as a place of worship, prayer, and contemplation, welcoming visitors and pilgrims from
                around the world.<br />

                In summary, Mount Temptation is a significant biblical and historical site associated with the
                temptations of Jesus Christ during his time in the wilderness. Its rugged landscape and
                spiritual associations make it a meaningful destination for those seeking to explore the life
                and teachings of Jesus in the context of the Holy Land.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MtTemptation