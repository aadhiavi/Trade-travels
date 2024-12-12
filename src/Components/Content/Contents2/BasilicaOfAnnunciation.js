import React, { useState } from 'react'
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Basilica of Annunciation.jpg"
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const BasilicaOfAnnunciation = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='content'>
            <h1>About Basilica of Annunciation</h1>

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

                The Basilica of the Annunciation is a prominent Christian pilgrimage site located in Nazareth,
                Israel. Here's an exploration of its geographical details, biblical references, and explanations:

                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3>
                The Basilica of the Annunciation is situated in the heart of Nazareth, a city in the Lower Galilee
                region of northern Israel. It stands over the traditional site where the Angel Gabriel is believed to
                have announced to Mary that she would conceive Jesus.
                <h3> 2. Structure: </h3>
                The basilica is a modern church completed in 1969, built over earlier Byzantine and Crusader churches.
                It is one of the largest churches in the Middle East and features impressive architectural elements,
                including a large dome and artwork donated by various countries.

                <h2> Biblical References: </h2>
                <h3> 1. Annunciation (Luke 1:26-38): </h3>
                <b> 26. </b> In the sixth month of Elizabeth’s pregnancy, God sent the angel Gabriel to Nazareth, a town in
                Galilee, <br />
                <b> 27. </b> to a virgin pledged to be married to a man named Joseph, a descendant of David. The virgin’s
                name was Mary. <br />
                <b> 28. </b> The angel went to her and said, “Greetings, you who are highly favored! The Lord is
                with you.”
                <br />
                <b> 29. </b> Mary was greatly troubled at his words and wondered what kind of greeting this might be. <br />
                <b> 30. </b> But the
                angel said to her, “Do not be afraid, Mary; you have found favor with God. <br />
                <b> 31. </b> You will conceive and give
                birth to a son, and you are to call him Jesus. <br />
                <b> 32. </b> He will be great and will be called the Son of the
                Most High. The Lord God will give him the throne of his father David, <br />
                <b> 33. </b> and he will reign over Jacob’s
                descendants forever; his kingdom will never end.”
                <br />
                <b> 34. </b> “How will this be,” Mary asked the angel, “since I am a virgin?”
                <br />
                <b> 35. </b> The angel answered, “The Holy Spirit will come on you, and the power of the Most High will overshadow
                you. So the holy one to be born will be called the Son of God. <br />
                <b> 36. </b> Even Elizabeth your relative is going
                to have a child in her old age, and she who was said to be unable to conceive is in her sixth month. <br />
                <b> 37. </b>
                For no word from God will ever fail.”
                <br />
                <b> 38. </b> “I am the Lord’s servant,” Mary answered. “May your word to me be fulfilled.” Then the angel left
                her.
                <h3>Explanation:</h3> This passage recounts the Annunciation, where the Angel Gabriel appears to Mary in
                Nazareth and announces that she will conceive Jesus through the Holy Spirit. The Basilica of the
                Annunciation commemorates this event, marking the location where Mary received this divine message.

                <h2> Cultural and Spiritual Significance: </h2>
                <h3> Pilgrimage Site: </h3>
                The Basilica of the Annunciation is a major pilgrimage destination for Christians worldwide, who visit
                to honor Mary and reflect on the significance of her role in Christianity.
                <h3> Archaeological Context: </h3>
                Excavations beneath the basilica have uncovered remains of earlier churches, confirming the site's
                historical and religious importance over centuries of Christian worship.
                <h3> Symbolism and Devotion: </h3>
                The basilica serves as a symbol of devotion to Mary, highlighting her pivotal role as the mother of
                Jesus and her acceptance of God's will as expressed through the Annunciation.

                <h2>Summary:</h2>
                In summary, the Basilica of the Annunciation in Nazareth is a significant site for Christians,
                commemorating the Annunciation to the Virgin Mary by the Angel Gabriel. It stands as a testament to
                Mary's faith and obedience to God's plan, drawing pilgrims and visitors to reflect on the foundational
                event of Jesus' incarnation in Christian theology.

            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default BasilicaOfAnnunciation