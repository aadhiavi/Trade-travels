import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Tabgha Church of Primacy of Peter.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const TabghaChurch = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Tabgha Church of Primacy of Peter</h1>
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
                The Church of the Primacy of Peter, also known as the Church of Tabgha, is located in Tabgha on the
                northwest shore of the Sea of Galilee in Israel, not in Jerusalem. Here’s an exploration of its
                geographical details, biblical references, and explanations:
                <h2> Geographical Details: </h2>

                <h3> 1. Location: </h3>
                Tabgha is situated on the northwestern shore of the Sea of Galilee (Lake Kinneret) in Israel. It is a
                picturesque area known for its natural beauty and historical significance in Christianity.

                <h3> 2. Significance: </h3>
                Tabgha is believed to be the location where Jesus performed several miracles, including the
                multiplication of loaves and fishes (feeding the 5,000) as recorded in the Gospels (Matthew 14:13-21,
                Mark 6:30-44, Luke 9:10-17, John 6:1-14).

                <h3> 3. Church of the Primacy of Peter: </h3>
                The Church of the Primacy of Peter is a Franciscan church built on the traditional site where Jesus
                appeared to his disciples after his resurrection and reaffirmed Peter's role as the leader of the
                apostles (John 21:15-19). It commemorates the event where Jesus asked Peter three times, "Do you love
                me?" and instructed him to "Feed my sheep."
                <h2> Biblical References: </h2>

                <h3> John 21:15-19 (ESV): </h3>
                Jesus and Peter 15 When they had finished breakfast, Jesus said to Simon Peter, “Simon, son of John, do
                you love me more than these?” He said to him, “Yes, Lord; you know that I love you.” He said to him,
                “Feed my lambs.” 16 He said to him a second time, “Simon, son of John, do you love me?” He said to him,
                “Yes, Lord; you know that I love you.” He said to him, “Tend my sheep.” 17 He said to him the third
                time, “Simon, son of John, do you love me?” Peter was grieved because he said to him the third time, “Do
                you love me?” and he said to him, “Lord, you know everything; you know that I love you.” Jesus said to
                him, “Feed my sheep. 18 Truly, truly, I say to you, when you were young, you used to dress yourself and
                walk wherever you wanted, but when you are old, you will stretch out your hands, and another will dress
                you and carry you where you do not want to go.” 19 (This he said to show by what kind of death he was to
                glorify God.) And after saying this he said to him, “Follow me.”

                <h3>Explanation:</h3> This passage reflects Jesus' restoration of Peter after his denial and his
                commissioning of Peter to care for the spiritual well-being of the church (the "sheep" and "lambs"). It
                reaffirms Peter's role as a leader among the disciples.
                <h2> Spiritual and Historical Significance: </h2>

                <h3> Christian Pilgrimage: </h3>
                The Church of the Primacy of Peter is an important pilgrimage site for Christians, reflecting on Peter's
                reconciliation with Jesus and his commissioning to lead the early church.

                <h3> Historical Context: </h3>
                The Sea of Galilee and its surrounding areas were significant in Jesus' ministry, serving as the
                backdrop for many of his teachings, miracles, and interactions with his disciples.

                <h3> Symbolism: </h3>
                The Church of the Primacy of Peter symbolizes forgiveness, reconciliation, and leadership within the
                Christian faith, emphasizing Peter's pivotal role in the establishment of the early church.

                <h2>Summary</h2>
                In summary, the Church of the Primacy of Peter (Tabgha) is located on the shores of the Sea of Galilee,
                not in Jerusalem. It commemorates Jesus' restoration of Peter and his commissioning to lead the early
                Christian community, making it a significant site for pilgrimage and reflection within Christianity.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default TabghaChurch