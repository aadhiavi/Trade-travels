import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/River Jabbok - Jacob Wrestles With God.jpeg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const RiverJabbok = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About River Jabbok - Jacob Wrestles With God</h1>
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
                The River Jabbok is a significant geographical and historical feature mentioned in the Bible,
                primarily in connection with the patriarch Jacob. Here’s an exploration of its history, geographical
                details, biblical references, and explanations:

                <h2> Geographical Details: </h2>
                <h3>1. Location: </h3>
                The Jabbok River (or Wadi Zarqa in Arabic) is located in modern-day Jordan, flowing from the eastern
                side of the Jordan River into the Dead Sea. It runs through the historical region of Gilead, an area
                east of the Jordan River known for its rugged terrain and historical significance in biblical times.
                <h3>2. Topography:</h3>
                The Jabbok River passes through a diverse landscape, including valleys and hills, and serves as a
                natural boundary between different regions and kingdoms in ancient times.

                <h2> Biblical References: </h2>
                <h3> Jacob Wrestles at the Jabbok (Genesis 32:22-32): </h3>
                22 That night Jacob got up and took his two wives, his two female servants and his eleven sons and
                crossed the ford of the Jabbok. 23 After he had sent them across the stream, he sent over all his
                possessions. 24 So Jacob was left alone, and a man wrestled with him till daybreak. 25 When the man saw
                that he could not overpower him, he touched the socket of Jacob’s hip so that his hip was wrenched as he
                wrestled with the man. 26 Then the man said, “Let me go, for it is daybreak.”
                But Jacob replied, “I will not let you go unless you bless me.”
                27 The man asked him, “What is your name?”
                “Jacob,” he answered.
                28 Then the man said, “Your name will no longer be Jacob, but Israel, because you have struggled with
                God and with humans and have overcome.”
                29 Jacob said, “Please tell me your name.”
                But he replied, “Why do you ask my name?” Then he blessed him there.
                30 So Jacob called the place Peniel, saying, “It is because I saw God face to face, and yet my life was
                spared.”
                31 The sun rose above him as he passed Peniel, and he was limping because of his hip. 32 Therefore to
                this day the Israelites do not eat the tendon attached to the socket of the hip, because the socket of
                Jacob’s hip was touched near the tendon. <br /><br />

                <b>Explanation:</b> This passage recounts the pivotal moment when Jacob wrestled with a man (often interpreted
                as an angel or a divine being) at the Jabbok River. Jacob’s name is changed to Israel, signifying his
                transformation and blessing from God after wrestling with Him all night. The Jabbok River thus becomes a
                symbol of spiritual struggle and divine encounter.

                <h2> Historical and Symbolic Significance: </h2>
                <h3> Boundary and Crossing: </h3>
                The Jabbok River served as a geographical and political boundary in ancient times, marking the eastern
                extent of the Israelite territory and influencing historical events and conflicts.
                <h3> Spiritual Encounter: </h3>
                Jacob's encounter at the Jabbok River is seen as a significant moment of personal and spiritual
                transformation. It symbolizes wrestling with one's faith and identity and receiving God’s blessing and
                affirmation.
                <h3> Cultural Practices: </h3>
                The story of Jacob at the Jabbok River has influenced cultural and religious practices, such as the
                avoidance of eating the hip tendon among the Israelites, as a reminder of Jacob's encounter and his
                resulting physical injury.

                <h2> Interpretations and Lessons: </h2>
                <h3> Faith and Persistence: </h3>
                The story encourages believers to persevere in their faith and seek God’s blessings, even amidst
                struggles and uncertainties.
                <h3> Historical Context: </h3>
                The Jabbok River remains a tangible reminder of biblical narratives and their enduring impact on
                religious beliefs and cultural practices in the region.

                <h2>Summary</h2>
                In summary, the Jabbok River holds both geographical and spiritual significance, particularly through
                the biblical narrative of Jacob's wrestling with God. It marks a place of historical events and
                spiritual encounters that continue to resonate within religious traditions and cultural heritage.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default RiverJabbok