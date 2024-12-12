import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/canan.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const Canaan = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Canaan</h1>
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

                Canna in Jerusalem is a reference to the biblical town of Cana, located in the region of
                Galilee, which is mentioned in the New Testament. Cana gained prominence primarily due to the
                account of Jesus performing his first recorded miracle there, turning water into wine at a
                wedding feast (John 2:1-11). <br />
                This miracle of turning water into wine at the wedding in Cana is significant in Christian
                theology, symbolizing Jesus' divine power and his role as the bringer of abundant life. It is
                also seen as a sign of the inauguration of his ministry and the beginning of the revelation of
                his glory to his disciples. <br /><br />

                John 2:1-11 recounts the story of Jesus' first miracle, which took place at a wedding feast in
                Cana. Here's a brief explanation of the passage:
                <h2>1. Setting the Scene</h2>: The narrative begins with Jesus and his disciples being invited
                to a wedding in Cana of Galilee. Jesus' presence at the wedding underscores the importance of
                community gatherings and celebrations in the New Testament context.
                <h2>2. The Wine Runs Out:</h2> During the festivities, the hosts run out of wine. In Jewish
                culture, running out of wine at a wedding feast would be considered a significant social
                embarrassment and a breach of hospitality.
                <h2>3. Mary's Intervention:</h2> Jesus' mother, Mary, informs him of the wine shortage, possibly
                expecting him to do something about it. Her role in this passage emphasizes her faith in Jesus'
                ability to address the situation.
                <h2>4. Jesus' Miracle:</h2> Despite initially expressing reluctance ("Woman, what does this have
                to do with me? My hour has not yet come"), Jesus instructs the servants to fill six stone water
                jars with water. These jars were used for ceremonial washing, each holding between 20 to 30
                gallons.
                <h2>5. Transformation:</h2> After the jars are filled, Jesus tells the servants to draw some out
                and take it to the master of the feast. When the master tastes the water that had become wine,
                he declares it to be of superior quality compared to the wine served earlier in the celebration.
                <h2>6. The Significance:</h2> This miraculous act of turning water into wine signifies several
                things:
                o It demonstrates Jesus' divine power and authority over nature.
                o It symbolizes the arrival of the Messianic age, as wine is often associated with joy and
                abundance in Jewish tradition.
                o It foreshadows Jesus' role as the provider of spiritual blessings and abundant life.
                <h2>7. Reactions and Belief:</h2> This miracle prompts the disciples to believe in Jesus,
                recognizing him as the Messiah. It also signifies the beginning of Jesus' public ministry and
                the revelation of his glory to his followers.
                The story of the wedding at Cana illustrates Jesus' compassion, power, and willingness to
                intervene in human affairs, as well as his ability to transform the ordinary into the
                extraordinary. <br /><br />

                The exact location of the biblical Cana is a matter of debate among scholars, but tradition
                holds that it is the modern-day village of Kafr Kanna, about 9 kilometers northeast of Nazareth
                in present-day Israel. The site attracts pilgrims and tourists alike who come to visit the
                Wedding Church of Cana, believed to be built on the site of the biblical wedding feast.
                Canna in Jerusalem serves as a reminder of the rich history and religious significance of the
                region, where biblical events continue to resonate with believers and scholars alike.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Canaan