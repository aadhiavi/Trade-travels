import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Golgotha.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const Golgotha = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Golgotha</h1>
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
                Golgotha, also known as Calvary, is the biblical site where Jesus Christ was crucified. The
                name Golgotha is derived from Aramaic and Hebrew words meaning "skull," possibly referring
                to the skull-like shape of the hill or the existence of a skull-shaped rock formation in the
                area. Here's an explanation of Golgotha's significance in the Bible and its historical
                context:
                <h2>1. Biblical References:</h2>
                All four Gospels mention Golgotha as the place of Jesus' crucifixion. In Matthew 27:33, Mark
                15:22, Luke 23:33, and John 19:17, it is referred to as "the place of the skull." <br />
                Matthew 27:33-35 describes Jesus' arrival at Golgotha, his crucifixion between two criminals,
                and the soldiers casting lots for his garments. <br />
                Mark 15:22-25 provides a similar account of Jesus' crucifixion at Golgotha, along with the
                inscription placed above his head: "The King of the Jews." <br />
                Luke 23:33-34 records Jesus' crucifixion at Golgotha and his prayer for forgiveness for those
                who crucified him. <br />
                John 19:17-18 recounts Jesus carrying his own cross to Golgotha and being crucified alongside
                two others. <br />
                <h2>2. Historical Context:</h2>
                Golgotha was located outside the walls of Jerusalem, near one of the city gates, to symbolize
                its association with death and impurity. <br />
                Crucifixion was a common Roman method of execution for criminals and political insurgents. It
                involved nailing or binding the condemned person to a wooden cross and leaving them to die of
                asphyxiation or exhaustion. <br />
                The selection of Golgotha as the site of Jesus' crucifixion fulfilled Old Testament
                prophecies, such as Psalm 22:16-18, which speaks of the piercing of hands and feet, and Isaiah
                53:12, which describes the suffering servant being "numbered with the transgressors."
                <h2>3. Religious Significance:</h2>
                Golgotha is regarded as one of the holiest sites in Christianity, as it represents the place
                where Jesus sacrificed himself for the salvation of humanity. <br />
                The crucifixion of Jesus at Golgotha is central to Christian theology, emphasizing the concept
                of atonement and redemption through Christ's death and resurrection. <br />
                Many Christian denominations and traditions commemorate Jesus' crucifixion and death through
                rituals and services, particularly during Holy Week and Good Friday.
                <h2>4. Modern-day Site:</h2>
                The traditional site of Golgotha is located within the Church of the Holy Sepulchre in the Old
                City of Jerusalem. The church contains the Chapel of Calvary, which is believed to mark the spot
                where Jesus was crucified, as well as the nearby tomb where he was buried and resurrected. <br />
                Pilgrims from around the world visit the Church of the Holy Sepulchre to pray, reflect, and
                venerate the place of Jesus' crucifixion and resurrection. <br />
                In summary, Golgotha holds profound biblical and historical significance as the place where
                Jesus Christ was crucified, fulfilling Old Testament prophecies and serving as the focal point
                of Christian faith and worship.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Golgotha