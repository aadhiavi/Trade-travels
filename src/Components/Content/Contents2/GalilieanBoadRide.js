import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Galiliean Boad Ride.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}


const GalilieanBoadRide = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Galiliean Boad Ride</h1>
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
                The "Galilean boat ride" refers to a historical and geographical context associated with the Sea of
                Galilee (Lake Kinneret) in Israel, particularly focusing on the biblical narratives involving Jesus
                and his disciples. Here's an exploration of its geographical details, biblical references, and
                explanations:
                <h2> Geographical Details: </h2>

                <h3> 1. Location: </h3>
                The Sea of Galilee, also known as Lake Kinneret, is located in northern Israel. It is the lowest
                freshwater lake on Earth and is situated about 200 meters (about 700 feet) below sea level. The Sea of
                Galilee is fed primarily by the Jordan River and is surrounded by hills and mountains.

                <h3> 2. Size and Depth: </h3>
                The Sea of Galilee covers an area of approximately 166 square kilometers (64 square miles) and has a
                maximum depth of about 43 meters (141 feet). It is known for its clear blue waters and is a popular
                tourist destination in Israel.
                <h2> Biblical References: </h2>

                <h3> 1. Jesus Walks on Water (Matthew 14:22-33): </h3>
                22 Immediately Jesus made the disciples get into the boat and go on ahead of him to the other side,
                while he dismissed the crowd. <br />
                23 After he had dismissed them, he went up on a mountainside by himself to
                pray. Later that night, he was there alone, 24 and the boat was already a considerable distance from
                land, buffeted by the waves because the wind was against it. <br />
                25 Shortly before dawn Jesus went out to them, walking on the lake. <br />
                26 When the disciples saw him walking on the lake, they were terrified. “It’s a ghost,” they said, and
                cried out in fear. <br />
                27 But Jesus immediately said to them: “Take courage! It is I. Don’t be afraid.” <br />
                28 “Lord, if it’s you,” Peter replied, “tell me to come to you on the water.” <br />
                29 “Come,” he said. <br />
                Then Peter got down out of the boat, walked on the water and came toward Jesus. 30 But when he saw the
                wind, he was afraid and, beginning to sink, cried out, “Lord, save me!”
                31 Immediately Jesus reached out his hand and caught him. “You of little faith,” he said, “why did you
                doubt?”
                32 And when they climbed into the boat, the wind died down. 33 Then those who were in the boat worshiped
                him, saying, “Truly you are the Son of God.” <br /><br />
                <b>Explanation:</b> This passage recounts one of the most well-known miracles of Jesus, where he walks
                on water to reach his disciples who are struggling in a boat due to strong winds. Peter attempts to walk
                on water toward Jesus but begins to sink when he doubts. This event demonstrates Jesus' power over
                nature and his ability to strengthen faith.

                <h3> 2. Calming the Storm (Mark 4:35-41): </h3>
                35 That day when evening came, he said to his disciples, “Let us go over to the other side.” 36 Leaving
                the crowd behind, they took him along, just as he was, in the boat. There were also other boats with
                him. 37 A furious squall came up, and the waves broke over the boat, so that it was nearly swamped. 38
                Jesus was in the stern, sleeping on a cushion. The disciples woke him and said to him, “Teacher, don’t
                you care if we drown?” <br />
                39 He got up, rebuked the wind and said to the waves, “Quiet! Be still!” Then the wind died down and it
                was completely calm. <br />
                40 He said to his disciples, “Why are you so afraid? Do you still have no faith?” <br />
                41 They were terrified and asked each other, “Who is this? Even the wind and the waves obey him!”
                <br /><br />
                <b>Explanation:</b> In this passage, Jesus demonstrates his authority over the elements by calming a
                storm
                that threatens to capsize the boat with his disciples. This miracle reveals Jesus' divine power and the
                disciples' growing understanding of his identity.
                <h2> Spiritual and Symbolic Significance: </h2>

                <h3> Faith and Trust: </h3>
                The stories of Jesus' interactions with his disciples on the Sea of Galilee underscore themes of
                faith, trust, and reliance on God's power in challenging situations.

                <h3> Miraculous Power: </h3>
                The miracles performed by Jesus on the Sea of Galilee demonstrate his authority over nature and his
                ability to provide protection and guidance to his followers.

                <h3> Historical and Cultural Context: </h3>
                The Sea of Galilee served as a central location for Jesus' ministry and teachings, reflecting the
                importance of water and fishing in the lives of the disciples and the broader community.

                <h2>Summary</h2>
                In summary, the Galilean boat rides mentioned in the Bible illustrate significant moments in Jesus'
                ministry on the Sea of Galilee, showcasing his miracles, teachings, and interactions with his disciples.
                These events hold deep spiritual and symbolic significance in Christian theology, emphasizing faith,
                divine authority, and the transformative power of Jesus' presence.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default GalilieanBoadRide;