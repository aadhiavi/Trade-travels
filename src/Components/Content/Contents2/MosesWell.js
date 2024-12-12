import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Moses Well.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MosesWell = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Moses Well</h1>
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
                The "Well of Moses," also known as the "Spring of Moses" or "Ain Musa" in Arabic, is a
                significant site in the Sinai Peninsula traditionally associated with the biblical figure of
                Moses. Here's an overview with relevant Bible references and historical context:

                <h2>1. Biblical References:</h2>
                The story of Moses striking a rock to bring forth water is found in the Old Testament book of
                Exodus, specifically in Exodus 17:1-7. According to the narrative, the Israelites, led by Moses,
                journeyed through the wilderness of Sinai and arrived at Rephidim, where there was no water for
                the people to drink. The people complained to Moses, and he cried out to the Lord for help. God
                instructed Moses to strike a rock at Horeb (Mount Sinai), and water would come out of it for the
                people to drink. Moses did as commanded, and water gushed forth from the rock, providing for the
                needs of the Israelites.
                Exodus 17:1-7 recounts the story of the Israelites' journey through the wilderness and their
                complaint about the lack of water. Here's a brief explanation of the passage:

                <h3>1. The Israelites' Complaint:</h3>
                As the Israelites journey through the wilderness, they arrive at Rephidim, but there is no
                water for the people to drink. This leads the people to complain to Moses, expressing their
                thirst and frustration with him. They question why Moses brought them out of Egypt only to lead
                them into the wilderness to die of thirst.

                <h3>2. Moses' Response:</h3>
                Moses, in turn, cries out to the Lord on behalf of the people, seeking guidance and help in
                addressing their need for water. He expresses his concern about the people's murmuring and fears
                that they may stone him if the situation does not improve.

                <h3>3. God's Provision:</h3>
                In response to Moses' plea, God instructs him to take the staff with which he struck the Nile
                River in Egypt and to go ahead of the people. God assures Moses that He will stand before him on
                the rock at Horeb (Mount Sinai), and Moses is to strike the rock. God promises that water will
                come out of the rock, providing for the people's thirst.

                <h3>4. Miraculous Provision of Water:</h3>
                Moses does as God commands, taking the staff and striking the rock at Horeb. As he strikes the
                rock, water miraculously gushes forth from it, providing an abundant supply of water for the
                Israelites and their livestock to drink. <br />
                The passage emphasizes God's faithfulness in meeting the needs of His people, even in the
                midst of their complaints and doubts. It serves as a reminder of God's provision and care for
                His people, as well as the importance of trusting in His guidance and promises.
                In summary, Exodus 17:1-7 illustrates God's miraculous provision of water for the Israelites in
                the wilderness, demonstrating His faithfulness and care for His people even in times of
                difficulty and uncertainty. It underscores the importance of turning to God in prayer and
                trusting in His provision, even when faced with seemingly insurmountable challenges.


                <h2>2. Historical Context:</h2>
                The location of the Well of Moses is traditionally identified with a spring or well in the
                vicinity of the Sinai Peninsula, believed to be near the area where the biblical events took
                place. <br />
                Over the centuries, the site has been revered by pilgrims and travelers as a significant
                biblical landmark associated with the Exodus narrative and the miraculous provision of water by
                God through Moses.

                <h2>3. Religious Significance:</h2>
                The Well of Moses holds profound religious significance for Jews, Christians, and Muslims
                alike, as it is associated with the miraculous provision of water during the Israelites' journey
                through the wilderness. <br />
                The story of Moses striking the rock to bring forth water is seen as a manifestation of God's
                care and provision for His people, demonstrating His faithfulness and power to meet their needs
                even in the most challenging circumstances. <br />
                The site is often visited by pilgrims and tourists as part of religious tours of the Sinai
                Peninsula and other biblical sites in the region, allowing them to connect with the biblical
                narrative and reflect on the spiritual lessons it imparts.

                <h2>4. Modern-day Site:</h2>
                The exact location of the Well of Moses is a matter of tradition and interpretation, and there
                are several springs and wells in the Sinai Peninsula that lay claim to being the site of the
                biblical event. <br />
                Some of these sites have been developed as religious landmarks and tourist attractions,
                featuring commemorative plaques, chapels, or other structures to mark their significance. <br />
                Visitors to the Sinai Peninsula can explore these sites and learn about their historical and
                religious significance, as well as enjoy the natural beauty of the surrounding desert landscape.
                In summary, the Well of Moses is a significant biblical site associated with the miraculous
                provision of water during the Israelites' journey through the wilderness, as described in the
                book of Exodus. Its historical and religious significance continues to resonate with believers
                today, serving as a reminder of God's faithfulness and provision in times of need.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MosesWell