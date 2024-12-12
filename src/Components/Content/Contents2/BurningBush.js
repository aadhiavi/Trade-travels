import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/BurningBush.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const BurningBush = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='content'>
            <h1>About Burning Bush</h1>
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
                The Burning Bush is a significant biblical symbol found in the Book of Exodus, associated
                with the calling of Moses and God's revelation to him. Here's an overview with relevant
                Bible references and historical context:
                <h2> 1. Biblical References:</h2>
                The story of the Burning Bush is found in Exodus 3:1-15. According to the narrative,
                Moses, while tending the flock of his father-in-law Jethro in the wilderness of Sinai, comes
                to Horeb, the mountain of God. <br />
                There, Moses encounters a bush that is on fire but is not consumed by the flames. As he
                approaches the bush, God calls out to Moses from the midst of the bush, instructing him to
                remove his sandals because he is standing on holy ground. <br />
                God identifies Himself as the God of Abraham, Isaac, and Jacob and reveals His plan to
                deliver the Israelites from slavery in Egypt. He commissions Moses to go to Pharaoh and
                demand the release of the Israelites, promising to be with him and to bring the people to
                the land flowing with milk and honey. <br /> <br />
                Exodus 3:1-15 recounts the iconic story of Moses encountering the Burning Bush and receiving
                his divine calling from God. Here's a brief explanation of the passage:
                <h3> 1. Moses' Encounter with the Burning Bush:</h3>
                While tending his father-in-law Jethro's flock in the wilderness near Horeb (Mount Sinai),
                Moses comes across a remarkable sight: a bush that is burning with fire but is not consumed by
                the flames. This piques Moses' curiosity, prompting him to approach the bush to investigate
                further.
                <h3>2. God's Revelation to Moses:</h3>
                As Moses draws near, God calls out to him from within the Burning Bush, addressing him by
                name. God instructs Moses not to come any closer and commands him to remove his sandals, for the
                ground he is standing on is holy. <br />
                God then identifies Himself as the God of Moses' ancestors—Abraham, Isaac, and Jacob—and
                reveals His awareness of the Israelites' suffering and oppression in Egypt. He declares His
                intention to deliver His people from bondage and bring them into a land flowing with milk and
                honey, the land of the Canaanites, Hittites, Amorites, Perizzites, Hivites, and Jebusites.
                <h3> 3. Moses' Response and Commission:</h3>
                Overwhelmed by the encounter, Moses hides his face in reverence and fear. He is hesitant and
                questions God's choice of him for such a monumental task. <br />
                God reassures Moses of His presence and promises to be with him throughout the journey. He
                provides Moses with a sign that will confirm His commission—the eventual worship of God by the
                Israelites at Mount Sinai after their liberation from Egypt. <br />
                Despite his initial reluctance, Moses ultimately accepts God's call and agrees to be the
                instrument through which God will deliver His people.
                <h3> 4. The Significance of the Burning Bush:</h3>
                The Burning Bush serves as a powerful symbol of God's presence, holiness, and divine
                revelation. It captures Moses' attention and serves as the vehicle through which God
                communicates His intentions and instructions to Moses. <br />
                The Burning Bush also underscores God's transcendence and majesty—despite being engulfed in
                flames, the bush is not consumed, signifying God's eternal nature and power over creation.
                In summary, Exodus 3:1-15 narrates the pivotal moment in which Moses encounters God through the
                Burning Bush and receives his divine calling to lead the Israelites out of slavery in Egypt. The
                passage highlights themes of divine presence, revelation, and commission, as well as Moses'
                initial hesitation and eventual acceptance of his role as God's chosen deliverer.

                <h2> 2. Historical Context:</h2>
                The exact location of the Burning Bush is a matter of tradition and interpretation.
                Traditionally, it is believed to have occurred on Mount Horeb, also known as Mount Sinai, in the
                Sinai Peninsula. <br />
                The Burning Bush has been a significant symbol in Jewish, Christian, and Islamic traditions,
                representing divine revelation, holiness, and the presence of God.
                <h2> 3. Religious Significance:</h2>
                The Burning Bush symbolizes God's presence and holiness, as well as His calling and
                commissioning of Moses for a special mission. <br />
                For Jews, the Burning Bush is a powerful symbol of divine revelation and the covenant
                relationship between God and His people. It serves as a reminder of God's faithfulness in
                delivering His people from bondage and leading them to freedom. <br />
                In Christian tradition, the Burning Bush is often interpreted as a prefiguration of Christ,
                the eternal Word of God who takes on human form but is not consumed by the flames of sin and
                death. It also symbolizes the presence of the Holy Spirit, who empowers believers for mission
                and ministry. <br />
                In Islam, the story of Moses and the Burning Bush is also recounted in the Quran, where it
                emphasizes Moses' role as a prophet and messenger of God.
                <h2>4. Modern-day Significance:</h2>
                The Burning Bush continues to be a powerful symbol in religious art, literature, and worship,
                inspiring believers to seek God's presence and guidance in their lives. <br />
                Pilgrims and tourists visiting the Sinai Peninsula often seek out sites associated with the
                Burning Bush, where they can reflect on the biblical narrative and its spiritual significance.
                In summary, the story of the Burning Bush is a foundational account in the biblical narrative,
                symbolizing God's presence, revelation, and commissioning of Moses for a special mission. Its
                enduring significance has made it a cherished symbol in Jewish, Christian, and Islamic
                traditions, inspiring believers to heed God's call and trust in His faithfulness.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default BurningBush