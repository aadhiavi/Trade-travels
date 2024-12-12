import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Sycamore Tree.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const SycamoreTree = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Sycamore Tree</h1>
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
                The sycamore tree is mentioned in the Bible in relation to the story of Zacchaeus, a tax
                collector who encounters Jesus in the city of Jericho. Here's an overview with relevant
                Bible references and historical context:
                <h2>1. Biblical Reference:</h2>
                The story of Zacchaeus is recorded in the Gospel of Luke 19:1-10. Zacchaeus, a wealthy tax
                collector, seeks to see Jesus as he passes through Jericho. Being of short stature, Zacchaeus
                climbs a sycamore tree to get a better view of Jesus as he passes by. <br />
                Jesus notices Zacchaeus in the tree and calls him by name, inviting himself to Zacchaeus'
                house. This encounter leads to Zacchaeus' repentance and transformation, as he promises to give
                half of his possessions to the poor and to repay four times over anyone he has cheated.
                Luke 19:1-10 recounts the story of Zacchaeus, a tax collector, who encounters Jesus in the city
                of Jericho. Here's a brief explanation of the passage: <br />
                <h3>1. Zacchaeus' Encounter with Jesus:</h3>
                Zacchaeus, a wealthy tax collector, hears that Jesus is passing through Jericho and seeks to
                see him. Being of short stature, Zacchaeus climbs a sycamore tree to get a better view of Jesus
                as he passes by. <br />
                When Jesus reaches the spot where Zacchaeus is, he looks up and calls Zacchaeus by name,
                instructing him to come down from the tree because he intends to stay at Zacchaeus' house.
                <h3>2. Zacchaeus' Response:</h3>
                Zacchaeus immediately comes down from the tree and welcomes Jesus into his home with joy and
                excitement. However, the people in the crowd grumble about Jesus' decision to visit the home of
                a notorious sinner like Zacchaeus. <br />
                While in Zacchaeus' house, Jesus' presence prompts a transformation in Zacchaeus' heart. He
                declares that he will give half of his possessions to the poor and promises to repay four times
                over anyone he has cheated. <br />
                <h3>3. Jesus' Response:</h3>
                Jesus acknowledges Zacchaeus' repentance and declares, "Today salvation has come to this
                house, because this man, too, is a son of Abraham. For the Son of Man came to seek and to save
                the lost" (Luke 19:9-10). <br />
                Jesus' words affirm his mission to seek and save the lost, emphasizing the inclusivity of
                God's grace and the transformative power of encountering Jesus in one's life.
                In summary, Luke 19:1-10 portrays the story of Zacchaeus as an example of Jesus' mission to seek
                and save the lost. Despite Zacchaeus' reputation as a sinner and the disapproval of the crowd,
                Jesus reaches out to him in love and acceptance, leading to Zacchaeus' repentance and
                transformation. This passage highlights Jesus' concern for those who are marginalized or
                despised by society and the profound impact of encountering Jesus on one's life. <br />

                <h2>2. Historical and Geographical Context:</h2>
                The sycamore tree mentioned in the story of Zacchaeus is believed to be a type of fig tree
                known as Ficus sycomorus, which is native to the Middle East and North Africa. <br />
                Sycamore trees were common in the region during biblical times and were valued for their shade
                and fruit. They could grow to be quite large and had broad, spreading branches, making them
                suitable for climbing. <br />
                <h2>3. Religious Significance:</h2>
                The story of Zacchaeus and the sycamore tree is often interpreted as a symbol of Jesus'
                inclusivity and willingness to reach out to those who are marginalized or despised by society. <br />
                Zacchaeus' decision to climb the sycamore tree demonstrates his eagerness to see Jesus and his
                willingness to go to great lengths to overcome any obstacles that might prevent him from
                encountering Jesus. <br />
                Jesus' decision to invite himself to Zacchaeus' house despite the social stigma associated
                with tax collectors underscores his mission to seek and save the lost and to bring about
                repentance and transformation in the lives of individuals. <br />
                <h2>4. Modern-day Significance:</h2>
                The story of Zacchaeus and the sycamore tree continues to be celebrated in Christian tradition
                as a reminder of God's grace and mercy towards sinners. <br />
                The sycamore tree mentioned in the biblical account is believed to have been preserved and
                venerated by Christian pilgrims over the centuries. While the exact tree mentioned in the Bible
                may no longer exist, sycamore trees can still be found in the region around Jericho and other
                parts of the Holy Land. <br />
                In summary, the sycamore tree mentioned in the Bible holds significance as the setting for the
                encounter between Jesus and Zacchaeus, illustrating Jesus' mission to seek and save the lost and
                the transformative power of encountering Jesus in one's life.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default SycamoreTree