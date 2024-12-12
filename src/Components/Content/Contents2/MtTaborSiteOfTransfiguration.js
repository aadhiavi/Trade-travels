import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mount Tabor Site of Transfiguration.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MtTaborSiteOfTransfiguration = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Tabor Siteof Transfiguration</h1>
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
                Mount Tabor is a significant biblical and geographical landmark located in Lower Galilee, Israel. It
                is traditionally believed to be the site of the Transfiguration of Jesus Christ, an event described
                in the New Testament Gospels of Matthew, Mark, and Luke.
                <h2> Biblical References and Explanation: </h2>
                <h3> 1. Matthew 17:1-9: </h3>
                In Matthew's Gospel, Mount Tabor is described as the place where Jesus took Peter, James, and John up
                a high mountain by themselves. There, Jesus is transfigured before them, and his face shines like the
                sun, and his clothes become dazzling white. Moses and Elijah appear and converse with Jesus. This event
                demonstrates Jesus' divine nature and is a pivotal moment of revelation to the disciples.
                <h3> 2. Mark 9:2-8: </h3>
                Mark's account is similar to Matthew's, emphasizing the radiant transformation of Jesus and the
                appearance of Moses and Elijah. The voice from the cloud identifies Jesus as the beloved Son and
                commands the disciples to listen to him.
                <h3> 3. Luke 9:28-36: </h3>
                Luke's Gospel also narrates the Transfiguration, noting that Jesus went up the mountain to pray, and
                while he prayed, his appearance changed, and his clothing became dazzling white. Moses and Elijah appear
                in glory and speak about Jesus' departure (his upcoming death) in Jerusalem. The disciples witness this
                event and are struck with awe.

                <h2> Matthew 17:1-9 </h2>
                <b> 1. </b> And after six days Jesus took with him Peter and James, and John his brother, and led them up a high
                mountain by themselves. <br />
                <b> 2. </b> And he was transfigured before them, and his face shone like the sun, and his
                clothes became white as light. <br />
                <b> 3. </b> And behold, there appeared to them Moses and Elijah, talking with him. <br />

                <b> 4. </b> And Peter said to Jesus, “Lord, it is good that we are here. If you wish, I will make three tents
                here, one for you and one for Moses and one for Elijah.” <br />
                <b> 5. </b> He was still speaking when, behold, a bright
                cloud overshadowed them, and a voice from the cloud said, “This is my beloved Son, with whom I am well
                pleased; listen to him.” <br />
                <b> 6. </b> When the disciples heard this, they fell on their faces and were terrified. 7
                But Jesus came and touched them, saying, “Rise, and have no fear.” <br />
                <b> 8. </b> And when they lifted up their eyes,
                they saw no one but Jesus only. <br />

                <b> 9. </b> And as they were coming down the mountain, Jesus commanded them, “Tell no one the vision, until the
                Son of Man is raised from the dead.”
                <h2> Explanation: </h2>
                <h3> 1. Setting the Scene (Verses 1-3): </h3>
                Jesus takes Peter, James, and John, his closest disciples, up a high mountain. Traditionally, this
                mountain is believed to be Mount Tabor, though the Gospels do not explicitly name the mountain. <br />
                Jesus is transfigured before them, which means his appearance changes dramatically: his face shines
                like the sun, and his clothes become dazzling white. This transformation reveals his divine glory.
                <h3> 2. Presence of Moses and Elijah (Verse 3): </h3>
                Moses and Elijah, representing the Law and the Prophets respectively, appear and talk with Jesus.
                Their presence signifies Jesus' continuity with the Old Testament Scriptures and prophets.
                <h3> 3. Peter's Response (Verses 4-5): </h3>
                Overwhelmed by the experience, Peter suggests building three tents (booths or shelters) for Jesus,
                Moses, and Elijah. This response reflects Peter’s desire to honor and commemorate this divine moment.
                <br />
                While Peter is speaking, a bright cloud envelops them, and a voice (often identified as God the
                Father’s voice) speaks from the cloud, affirming Jesus as His beloved Son and commanding the disciples
                to listen to him. This echoes the affirmation heard at Jesus' baptism (Matthew 3:17).
                <h3> 4. Disciples' Reaction and Jesus' Comfort (Verses 6-7): </h3>
                The disciples are overcome with fear at the divine manifestation. However, Jesus reassures them,
                touching them and instructing them not to be afraid.
                <h3> 5. Return and Command (Verses 8-9): </h3>
                As they descend the mountain, Jesus tells the disciples not to tell anyone about what they witnessed
                until after his resurrection from the dead. This command emphasizes the confidential nature of the
                revelation until the appropriate time.
                <h2> Key Themes and Significance: </h2>
                • Divine Revelation: The Transfiguration is a moment of divine revelation where Jesus' true nature as
                the Son of God is unveiled to his closest disciples. <br />
                • Confirmation of Jesus' Identity: The presence of Moses and Elijah, the voice from the cloud, and the
                radiant transformation of Jesus all serve to affirm his identity as the fulfillment of the Law and the
                Prophets, and as God's Son. <br />
                • Prefiguring the Resurrection: Jesus' command not to reveal the vision until after his resurrection
                hints at the connection between the Transfiguration and the upcoming events of Jesus' crucifixion,
                death, and resurrection. <br />
                The Transfiguration is a pivotal event in the Gospels, showcasing Jesus' divine nature and reinforcing
                the disciples' understanding of his mission and identity. It underscores Jesus' authority and prepares
                the disciples for the challenges ahead, while also offering a glimpse of the glory that awaits beyond
                the suffering of the cross.
                <h2> Historical and Geographical Details: </h2>
                <b> • Location:</b> Mount Tabor rises prominently from the Jezreel Valley, standing at about 575 meters (1,886
                feet) above sea level. It is located in Lower Galilee, near the modern-day city of Nazareth. <br />
                <b> • Significance:</b> Mount Tabor has been revered since ancient times and has a long history of religious
                significance. It was considered a sacred site even before the time of Jesus and was fortified and
                inhabited at various points in history due to its strategic location. <br />
                <b> • Identification as the Transfiguration Site:</b> The identification of Mount Tabor as the Mount of
                Transfiguration has been traditional in Christian history, dating back to the early centuries of
                Christianity. Early Christian pilgrims and scholars associated it with the events described in the
                Gospels due to its prominence and its location in Galilee, where much of Jesus' ministry took place. <br />
                <b> • Archaeological and Historical Context:</b> Archaeological evidence supports the presence of religious
                structures on Mount Tabor dating back to ancient times, including Christian churches and monasteries
                built to commemorate the Transfiguration. <br />
                <b> • Cultural and Religious Significance:</b> Mount Tabor remains an important pilgrimage site for Christians,
                who visit the Basilica of the Transfiguration, a church built on its summit. The site offers a
                breathtaking view of the surrounding landscape, including the Jezreel Valley and the hills of Galilee. <br />

                <h2>Summary:</h2>
                In summary, Mount Tabor is not only a significant geographical landmark in Israel but also holds deep
                religious significance as the traditional site of the Transfiguration of Jesus Christ. The event, as
                recorded in the Gospels, marks a crucial moment in Christian theology, revealing Jesus' divine glory and
                affirming his identity as the Son of God.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MtTaborSiteOfTransfiguration;