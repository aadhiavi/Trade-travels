import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mary's Well.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const MarysWell = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Mary's Well</h1>
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
                Mary's Well, or Bir Maryam in Arabic, is traditionally associated with a site in the old city of
                Nazareth, not in Jerusalem. It holds significance in Christian tradition and local folklore as the
                place where the Virgin Mary fetched water and where the Archangel Gabriel appeared to her during the
                Annunciation. Here’s an exploration based on the correct location and details:
                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3>
                Mary's Well is located in Nazareth, which is in the Lower Galilee region of northern Israel. It is
                situated within the modern-day city of Nazareth and is considered a significant historical and religious
                site.
                <h3> 2. Significance: </h3>
                According to tradition, Mary's Well is where the Virgin Mary would have drawn water, and it is also
                associated with the Annunciation, where Gabriel announced to Mary that she would conceive Jesus.
                <h2> Biblical References: </h2>
                <h3>Annunciation (Luke 1:26-38): </h3>
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
                <b>Explanation:</b> This passage describes the Annunciation, where the angel Gabriel appears to Mary in
                Nazareth and announces that she will conceive and bear the Son of God, Jesus. Mary's Well is
                traditionally associated with this event, though the specific location is not mentioned in the biblical
                text.
                <h2> Cultural and Spiritual Significance: </h2>
                <h3> Pilgrimage Site: </h3>
                Mary's Well is a significant pilgrimage site for Christians, commemorating the Annunciation and offering
                a place for prayer and reflection.
                <h3> Historical Context: </h3>
                The site of Mary's Well in Nazareth provides historical context to the biblical narratives and serves as
                a focal point for understanding the early life of Jesus and the cultural environment of first-century
                Galilee.
                <h3> Local Tradition: </h3>
                In addition to its biblical significance, Mary's Well holds importance in local folklore and traditions,
                connecting the community to its historical and religious roots.
                In summary, Mary's Well in Nazareth is a place of spiritual and historical significance associated with
                the Annunciation to the Virgin Mary. It serves as a focal point for Christian pilgrimage and prayer,
                reflecting the deep roots of faith and tradition in the region of Galilee.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MarysWell