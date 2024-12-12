import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/JORDAN  THE BAPTISM SITE.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const Jordanriver = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Jordan River</h1>
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
                The River Jordan holds immense significance in Christianity, particularly in the context of
                the baptism of Jesus Christ. According to the Bible, specifically in the New Testament, the
                River Jordan was the site where John the Baptist baptized Jesus.<br />

                The event is recorded in the Gospels of Matthew, Mark, and Luke. John the Baptist, a
                prophetic figure, was baptizing people in the Jordan River as a symbol of repentance and
                purification. When Jesus approached John to be baptized, John initially hesitated, feeling
                unworthy to baptize the one he believed to be greater than himself. However, Jesus insisted,
                and John complied.
                <br />

                As Jesus emerged from the water after being baptized, the heavens opened, and the Holy
                Spirit descended upon him in the form of a dove. A voice from heaven proclaimed, "This is my
                Son, whom I love; with him, I am well pleased" (Matthew 3:17, NIV). This event marks the
                beginning of Jesus' public ministry, signaling his identity as the Son of God.
                <br />
                The exact location of the baptism site along the River Jordan is traditionally believed to be
                near modern-day Bethany Beyond the Jordan, which is located in present-day Jordan, not far
                from the Dead Sea. This area is now a significant pilgrimage site for Christians, attracting
                visitors from around the world who come to reflect on the baptism of Jesus and participate
                in religious ceremonies and rituals.
                Let's delve a bit deeper with some specific Bible references related to the baptism of Jesus
                at the River Jordan.

                <h2>1. Matthew 3:13-17 (NIV):</h2>
                This passage describes the baptism of Jesus by John the Baptist. <br />
                <b> Verse 13: </b> "Then Jesus came from Galilee to the Jordan to be baptized by John." <br />
                <b> Verse 16-17: </b> "As soon as Jesus was baptized, he went up out of the water. At that moment,
                heaven was opened, and he saw the Spirit of God descending like a dove and alighting on him.
                And a voice from heaven said, 'This is my Son, whom I love; with him, I am well pleased.'"

                <h2>2. Mark 1:9-11 (NIV):</h2>
                Mark's Gospel also records the baptism of Jesus. <br />
                <b> Verse 9: </b> "At that time Jesus came from Nazareth in Galilee and was baptized by John in the
                Jordan." <br />
                <b> Verse 10: </b> "Just as Jesus was coming up out of the water, he saw heaven being torn open and
                the Spirit descending on him like a dove."

                <h2>3. Luke 3:21-22 (NIV):</h2>
                Luke's account of Jesus' baptism parallels those of Matthew and Mark. <br />
                <b> Verse 21: </b> "When all the people were being baptized, Jesus was baptized too. And as he was
                praying, heaven was opened." <br />
                <b> Verse 22: </b> "And the Holy Spirit descended on him in bodily form like a dove. And a voice
                came from heaven: 'You are my Son, whom I love; with you, I am well pleased.'" <br /><br />
                These passages provide a foundational understanding of the baptism of Jesus at the River
                Jordan as recounted in the New Testament Gospels of Matthew, Mark, and Luke. They highlight
                the significant moment when Jesus began his public ministry and received divine affirmation
                of his identity as the beloved Son of God.
                <br />
                The River Jordan holds profound historical, cultural, and religious significance, especially
                in the Middle East. Here's a brief overview of its
                <h3>1. Ancient Times:</h3> The River Jordan has been a vital water source for the region for
                thousands of years. Its waters have sustained various civilizations, including the
                Canaanites, Israelites, Moabites, and Ammonites. The river played a crucial role in the
                agriculture, trade, and transportation of these ancient peoples.
                <h3>2. Biblical Era:</h3> The River Jordan features prominently in the Bible, particularly in the Old
                Testament. It serves as a significant geographical and symbolic boundary. According to
                biblical accounts, the Israelites, led by Joshua, crossed the River Jordan into the Promised
                Land after their exodus from Egypt. The river is also associated with several miraculous
                events, including the parting of its waters for the Israelites to pass and the healing of
                Naaman's leprosy.
                <h3>3. New Testament:</h3> In the New Testament, the River Jordan gains further prominence with the
                baptism of Jesus by John the Baptist. This event marked the beginning of Jesus' public
                ministry and is considered a pivotal moment in Christian theology.
                <h3>4. Historical Conflicts:</h3> Throughout history, control over the River Jordan and its
                surrounding territories has been a source of contention and conflict among various
                civilizations and empires, including the Assyrians, Babylonians, Persians, Greeks, and
                Romans. In modern times, disputes over water rights and access to the river continue to be
                contentious issues among the countries sharing its waters, namely Israel, Jordan, Syria, and
                Palestine.
                <h3>5. Modern Development:</h3> Today, the River Jordan remains a vital water source for the region,
                although its flow has significantly diminished due to overuse, diversion for irrigation, and
                environmental degradation. Efforts to conserve and rehabilitate the river are ongoing, with
                various stakeholders working to address its ecological challenges.
                Overall, the River Jordan's rich history encompasses biblical narratives, ancient
                civilizations, and modern-day geopolitical issues, making it a fascinating subject of study
                and a symbol of enduring cultural and religious significance.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Jordanriver