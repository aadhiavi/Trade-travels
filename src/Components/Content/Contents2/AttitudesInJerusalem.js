import React, { useState } from 'react';
import "../Contents.css";
import church from "../../../Assets/slides/Beattitudes in Jerusalem.jpg"
import Splitter from '../../Splitter/Splitter';
import { Link } from 'react-router-dom';
import vdo from "../../../Assets/video.mp4";
import { FaImage, FaVideo } from "react-icons/fa";
import ModelVideo from '../ModelVideo';
import ModelGallary from '../ModelGallary';
import { beattitudes } from '../ContentTitles/Store';
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const AttitudesInJerusalem = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modelVideo, setModelVideo] = useState(false)
    const [modelGallary, setModelGallary] = useState(false)

    const handleClickModelVideo = () => {
        setModelVideo(!modelVideo)

    }
    const handleClickModelGallary = () => {
        setModelGallary(!modelGallary)

    }

    return (
        <div className='content'>
            <h1>Beattitudes in Jerusalem</h1>
            <div className='image' >
                <MyComponent src={church} />
            </div>
            <div className='infofile'>
                <div>
                    <TextToSpeechButton/>
                </div>
                <div className='videoadio'>
                    <div>
                        <div className='videofile' onClick={handleClickModelVideo}><FaVideo /></div>
                    </div>
                    <div>
                        <div className='videofile' onClick={handleClickModelGallary} ><FaImage /></div>
                    </div>
                </div>
            </div>
            <Splitter />
            <div id="readable-content" className='para' style={isOpen ? null : pargraphStyles}>
                <h2> History: </h2>
                The Beatitudes are a set of teachings by Jesus that appear in the Gospel of Matthew (Matthew 5:3-12) and the Gospel of Luke (Luke 6:20-23). These teachings are considered foundational to Christian ethics and spiritual values. Traditionally, they are believed to have been delivered by Jesus during the Sermon on the Mount, which is often associated with a location near the Sea of Galilee, rather than in Jerusalem. However, Jerusalem holds a significant place in the Christian tradition and the early spread of these teachings.
                The Sermon on the Mount, where the Beatitudes were given, is traditionally identified with the Mount of Beatitudes, a hill in northern Israel near the Sea of Galilee. This site has been commemorated since the 4th century, with several churches built over the centuries to honor the place where Jesus delivered these profound teachings.
                Geographical Borders of the Mount of Beatitudes and Jerusalem
                <div>
                    <h2> The Mount of Beatitudes: </h2>
                    The Mount of Beatitudes is located in northern Israel, near the Sea of Galilee. It is traditionally identified as the site where Jesus delivered the Sermon on the Mount. <br />
                    <b>	Location: </b> Northern Israel, near the Sea of Galilee <br />
                    <b>	Coordinates: </b> Approximately 32.8800° N latitude and 35.5500° E longitude <br />
                    <b>	Elevation: </b> Approximately 125 meters (410 feet) above sea level <br />
                    <h2> Jerusalem: </h2>
                    Jerusalem is one of the oldest and most significant cities in the world, with a history that spans thousands of years. It is located in the Judaean Mountains between the Mediterranean Sea and the Dead Sea. <br />
                    <b>	Location: </b> Middle East, in the region historically known as the Land of Israel or Palestine <br />
                    <b>	Coordinates: </b> Approximately 31.7683° N latitude and 35.2137° E longitude <br />
                    <b>	Elevation: </b> Approximately 754 meters (2,474 feet) above sea level <br />
                    Geographical Borders of Jerusalem
                    The modern city of Jerusalem is divided into several areas, including the Old City and various newer districts. The Old City is surrounded by ancient walls and is divided into four quarters: Jewish, Christian, Muslim, and Armenian.
                    <h2> Biblical References: </h2>
                    The Beatitudes can be found in two main biblical passages:
                    <h3> 1.	Matthew 5:3-12 </h3> Part of the Sermon on the Mount, this passage includes eight blessings, each beginning with "Blessed are..." <br />
                    •	"Blessed are the poor in spirit, for theirs is the kingdom of heaven." <br />
                    •	"Blessed are those who mourn, for they shall be comforted." <br />
                    •	"Blessed are the meek, for they shall inherit the earth." <br />
                    •	"Blessed are those who hunger and thirst for righteousness, for they shall be filled." <br />
                    •	"Blessed are the merciful, for they shall obtain mercy." <br />
                    •	"Blessed are the pure in heart, for they shall see God." <br />
                    •	"Blessed are the peacemakers, for they shall be called sons of God." <br />
                    •	"Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven."
                    <h3> 2.	Luke 6:20-23 </h3> Known as the Sermon on the Plain, this version includes four blessings and four corresponding woes.
                    •	"Blessed are you who are poor, for yours is the kingdom of God." <br />
                    •	"Blessed are you who hunger now, for you shall be filled." <br />
                    •	"Blessed are you who weep now, for you shall laugh." <br />
                    •	"Blessed are you when men hate you, and when they exclude you, and revile you, and cast out your name as evil, for the Son of Man’s sake." <br />
                    While the Beatitudes themselves are not directly associated with Jerusalem, the city is deeply interwoven with the broader narrative of Jesus' life and teachings. Jerusalem’s role as the site of Jesus’ passion, crucifixion, and resurrection makes it a central location for understanding the impact and spread of his teachings, including the Beatitudes.
                </div>
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
            {
                modelVideo && <ModelVideo Srcvdo={vdo} handleClickModelVideo={handleClickModelVideo} />
            }
            {
                modelGallary && <ModelGallary SlideImages={beattitudes} handleClickModelGallary={handleClickModelGallary} />
            }

        </div>
    )
}

export default AttitudesInJerusalem