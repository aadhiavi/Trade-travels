import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mensa Christi , Capernaum.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MensaChristiCapernaum = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Mensa Christi , Capernaum</h1>
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
                The "Mensa Christi" (Table of Christ) refers to a traditional site located in Capernaum, not in
                Jerusalem. Here’s an exploration of its geographical details, biblical references, and explanations:

                <h2>Geographical Details: </h2>
                <h3> 1. Location: </h3>
                Capernaum is an ancient fishing village located on the northern shore of the Sea of Galilee (Lake
                Kinneret) in Israel. It was a significant center of Jesus' ministry during his earthly life.
                <h3> 2. Historical Significance: </h3>
                Capernaum served as Jesus' home base during his ministry in Galilee, and several miracles and teachings
                are associated with this location in the Gospels.

                <h2> Biblical References: </h2>
                <h3> John 21:1-14 (ESV): </h3>
                Jesus Appears to Seven Disciples 1 After this Jesus revealed himself again to the disciples by the Sea
                of Tiberias, and he revealed himself in this way. 2 Simon Peter, Thomas (called the Twin), Nathanael of
                Cana in Galilee, the sons of Zebedee, and two others of his disciples were together. 3 Simon Peter said
                to them, “I am going fishing.” They said to him, “We will go with you.” They went out and got into the
                boat, but that night they caught nothing.
                4 Just as day was breaking, Jesus stood on the shore; yet the disciples did not know that it was Jesus.
                5 Jesus said to them, “Children, do you have any fish?” They answered him, “No.” 6 He said to them,
                “Cast the net on the right side of the boat, and you will find some.” So they cast it, and now they were
                not able to haul it in, because of the quantity of fish. 7 That disciple whom Jesus loved therefore said
                to Peter, “It is the Lord!” When Simon Peter heard that it was the Lord, he put on his outer garment,
                for he was stripped for work, and threw himself into the sea. 8 The other disciples came in the boat,
                dragging the net full of fish, for they were not far from the land, but about a hundred yards off.
                9 When they got out on land, they saw a charcoal fire in place, with fish laid out on it, and bread. 10
                Jesus said to them, “Bring some of the fish that you have just caught.” 11 So Simon Peter went aboard
                and hauled the net ashore, full of large fish, 153 of them. And although there were so many, the net was
                not torn. 12 Jesus said to them, “Come and have breakfast.” Now none of the disciples dared ask him,
                “Who are you?” They knew it was the Lord. 13 Jesus came and took the bread and gave it to them, and so
                with the fish. 14 This was now the third time that Jesus was revealed to the disciples after he was
                raised from the dead.
                <h3> Explanation: </h3> This passage describes Jesus' appearance to the disciples by the Sea of Galilee
                after his resurrection. It includes the miraculous catch of fish and the breakfast prepared by Jesus on
                the shore. While this event does not explicitly mention Capernaum, it reflects the types of activities
                and interactions Jesus had with his disciples in the region, including meals shared together.

                <h2> Spiritual and Historical Significance: </h2>
                <h3> Miracles and Teachings: </h3>
                Capernaum is associated with numerous miracles and teachings of Jesus, including the healing of the
                paralytic (Mark 2:1-12), the centurion's servant (Matthew 8:5-13), and the exorcism in the synagogue
                (Mark 1:21-28).
                <h3> Archaeological Evidence: </h3>
                Archaeological excavations in Capernaum have uncovered the remains of a first-century synagogue and
                evidence of a thriving community during Jesus' time, affirming its historical importance.
                <h3> Pilgrimage Site: </h3>
                Capernaum is a significant pilgrimage site for Christians, offering insights into the life and ministry
                of Jesus in Galilee and providing opportunities for spiritual reflection and prayer.
                In summary, Capernaum, located on the northern shore of the Sea of Galilee, holds immense historical and
                spiritual significance as a center of Jesus' ministry. While not directly associated with the "Mensa
                Christi" in Jerusalem, Capernaum remains a vital site for understanding Jesus' teachings, miracles, and
                interactions with his disciples in the region of Galilee.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MensaChristiCapernaum;