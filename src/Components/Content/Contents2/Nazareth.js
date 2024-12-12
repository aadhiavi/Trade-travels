import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Nazareth.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const Nazareth = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Nazareth</h1>
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
                Nazareth is a city in the northern region of Israel, known primarily as the childhood home of Jesus
                Christ. Here’s an exploration of its geographical details, biblical references, and explanations:
                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3>
                Nazareth is located in the Lower Galilee region of northern Israel. It sits in a basin surrounded by
                hills, approximately 25 kilometers (about 15 miles) west of the Sea of Galilee (Lake Kinneret).
                <h3> 2. Topography: </h3>
                The city is situated at an elevation of about 350 meters (1,150 feet) above sea level and is
                characterized by its terraced hillsides and agricultural fields. It is a place of natural beauty and
                historical significance.
                <h2> Biblical References: </h2>
                <h3> 1. Annunciation (Luke 1:26-38): </h3>
                26 In the sixth month of Elizabeth’s pregnancy, God sent the angel Gabriel to Nazareth, a town in
                Galilee, 27 to a virgin pledged to be married to a man named Joseph, a descendant of David. The virgin’s
                name was Mary. 28 The angel went to her and said, “Greetings, you who are highly favored! The Lord is
                with you.”
                29 Mary was greatly troubled at his words and wondered what kind of greeting this might be. 30 But the
                angel said to her, “Do not be afraid, Mary; you have found favor with God. 31 You will conceive and give
                birth to a son, and you are to call him Jesus. 32 He will be great and will be called the Son of the
                Most High. The Lord God will give him the throne of his father David, 33 and he will reign over Jacob’s
                descendants forever; his kingdom will never end.”
                34 “How will this be,” Mary asked the angel, “since I am a virgin?”
                35 The angel answered, “The Holy Spirit will come on you, and the power of the Most High will overshadow
                you. So the holy one to be born will be called the Son of God. 36 Even Elizabeth your relative is going
                to have a child in her old age, and she who was said to be unable to conceive is in her sixth month. 37
                For no word from God will ever fail.”
                38 “I am the Lord’s servant,” Mary answered. “May your word to me be fulfilled.” Then the angel left
                her. <br /><br />
                <b>Explanation:</b> This passage describes the Annunciation, where the angel Gabriel announces to Mary
                that she will conceive and bear the Son of God, Jesus. This event took place in Nazareth, emphasizing
                the city's significance in Christian tradition as the place where the incarnation of Jesus began.
                <h3> 2. Return to Nazareth (Matthew 2:19-23): </h3>
                19 After Herod died, an angel of the Lord appeared in a dream to Joseph in Egypt 20 and said, “Get up,
                take the child and his mother and go to the land of Israel, for those who were trying to take the
                child’s life are dead.”
                21 So he got up, took the child and his mother and went to the land of Israel. 22 But when he heard that
                Archelaus was reigning in Judea in place of his father Herod, he was afraid to go there. Having been
                warned in a dream, he withdrew to the district of Galilee, 23 and he went and lived in a town called
                Nazareth. So was fulfilled what was said through the prophets, that he would be called a Nazarene. <br /><br />
                <b>Explanation:</b> After the death of Herod the Great, Joseph, Mary, and Jesus returned from Egypt and
                settled in Nazareth, fulfilling the prophecy that Jesus would be called a Nazarene. This passage
                underscores Nazareth's role as Jesus' childhood home and the fulfillment of Old Testament prophecies.
                <h2> Spiritual and Cultural Significance: </h2>
                <h3> Christian Pilgrimage: </h3>
                Nazareth is a significant pilgrimage site for Christians, attracting visitors who come to explore its
                biblical history and connections to Jesus' early life and ministry.
                <h3>  Historical Context: </h3>
                The city of Nazareth provides insights into the daily life and cultural context of Jesus' upbringing,
                offering a glimpse into the environment that shaped his teachings and ministry.
                <h3>  Archaeological Discoveries: </h3>
                Excavations in Nazareth have uncovered ancient artifacts and structures that provide historical
                context to the biblical narratives and confirm the city's existence during Jesus' time.
                In summary, Nazareth holds profound importance in Christian theology and history as the place where
                Jesus spent his formative years and began his ministry. It continues to be revered as a place of
                pilgrimage and spiritual reflection, connecting believers to the roots of their faith and the life of
                Jesus Christ.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Nazareth