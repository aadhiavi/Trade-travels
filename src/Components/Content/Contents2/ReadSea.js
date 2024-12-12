import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Read Sea.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const ReadSea = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Read Sea</h1>
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
                The Red Sea holds significant historical and biblical importance. It features prominently in
                the Old Testament, particularly in the account of the Israelites' exodus from Egypt. Here's
                a brief overview:
                <h2>1. Exodus from Egypt:</h2> In the Book of Exodus, chapters 13-15, the Red Sea plays a
                central role in the story of the Israelites' escape from slavery in Egypt. As the Israelites
                fled from Pharaoh's pursuing army, led by Moses, they reached the shores of the Red Sea. With
                divine intervention, God parted the waters, allowing the Israelites to cross safely to the other
                side. However, when Pharaoh's army attempted to pursue them, the waters returned, drowning the
                pursuing Egyptians. <br />


                Exodus chapters 13-15 narrate key events surrounding the Israelites' exodus from Egypt,
                including their departure from Egypt, the parting of the Red Sea, and the subsequent song of
                victory. Here's a breakdown of these chapters:
                <h3>Chapter 13:</h3>
                <b> Consecration of the Firstborn:</b> This chapter begins with instructions given to Moses regarding
                the consecration of the firstborn males of Israel to God as a reminder of the events of the
                Exodus. This act is to be observed annually as a commemoration of their deliverance from Egypt. <br /><br />
                <b> Guidance by the Pillar of Cloud and Fire:</b> The Israelites are led out of Egypt by Moses. God
                leads them during the day with a pillar of cloud and at night with a pillar of fire, providing
                them with guidance and protection. <br /> <br />
                <b> The Route of the Exodus:</b> The chapter describes the route taken by the Israelites as they
                depart from Egypt, including their avoidance of the Philistine territory and their encampment by
                the Red Sea.
                <h3>Chapter 14:</h3>
                <b> The Pursuit of the Israelites:</b> Pharaoh regrets letting the Israelites go and mobilizes his
                army to pursue them. As the Israelites camp by the sea, they see the approaching Egyptian army
                and become fearful. <br /> <br />
                <b> Parting of the Red Sea:</b> In one of the most iconic miracles of the Bible, Moses, acting at
                God's command, raises his staff, and the waters of the Red Sea are miraculously parted, allowing
                the Israelites to cross on dry land. The pillar of cloud and fire stands between the Israelites
                and the Egyptians, providing protection. <br /><br />
                <b> Destruction of Pharaoh's Army:</b> After the Israelites have safely crossed, the sea returns to
                its normal state, drowning Pharaoh's army and chariots as they pursue the Israelites. This event
                marks the decisive victory of God over the oppressive forces of Egypt.
                <h3>Chapter 15:</h3>
                <b> The Song of Moses:</b> Following the miraculous deliverance through the Red Sea, Moses and the
                Israelites sing a song of praise and thanksgiving to God for His mighty acts of salvation. This
                song, known as the "Song of Moses," celebrates God's victory over their enemies and His
                faithfulness to His promises. <br /><br />
                <b> Bitter Water Made Sweet:</b> The chapter recounts an incident where the Israelites find bitter
                water at Marah. God instructs Moses to throw a piece of wood into the water, making it sweet and
                drinkable, demonstrating God's provision and care for His people.
                These chapters collectively form a narrative arc that highlights God's faithfulness, power, and
                deliverance in fulfilling His promise to free the Israelites from bondage in Egypt. They also
                emphasize the importance of trust and obedience in following God's guidance, even in the face of
                seemingly insurmountable obstacles.

                <h2>2. Crossing of the Red Sea:</h2> The crossing of the Red Sea is considered one of the most
                miraculous events in the Bible. It symbolizes God's deliverance and protection of His people.
                <h2>3. Geographical Context:</h2> The Red Sea is a body of water lying between Africa and Asia,
                connected to the Indian Ocean to the south. It is known for its rich biodiversity and its
                historical importance as a trade route.
                <h2>4. Historical Significance:</h2> Beyond its biblical relevance, the Red Sea has been a vital
                maritime passage throughout history. It has been crucial for trade between the East and the
                West, connecting civilizations and facilitating cultural exchanges. Ancient Egyptians, Greeks,
                Romans, and later European powers all utilized the Red Sea for commerce and conquest.
                <h2>5. Modern Importance:</h2> Today, the Red Sea remains a strategically important waterway,
                particularly for the transport of oil and goods between Europe, Asia, and Africa. Countries
                bordering the Red Sea, such as Egypt, Sudan, Saudi Arabia, Jordan, and Israel, have significant
                geopolitical interests in its waters.
                <h2>6. Ecological Value:</h2> The Red Sea is home to diverse marine life and coral reefs, making
                it a popular destination for tourists and researchers interested in marine biology.
                The Red Sea's biblical and historical significance, coupled with its strategic and ecological
                importance, continue to make it a fascinating subject of study and exploration.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default ReadSea;