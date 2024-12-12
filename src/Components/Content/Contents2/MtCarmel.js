import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mount Carmel.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MtCarmel = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Mount Carmel</h1>
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
                Mount Carmel is a prominent mountain range in northern Israel, extending along the Mediterranean Sea
                near the city of Haifa. It holds significant geographical, historical, and biblical importance.
                Here’s an exploration of Mount Carmel with relevant biblical references and explanations:
                <h2> Geographical Details: </h2>
                <h3> 1. Location and Topography: </h3>
                Mount Carmel stretches approximately 25 miles (40 kilometers) from east to west, forming a ridge that
                overlooks the Mediterranean coast. <br />
                It rises to its highest point at about 1,792 feet (546 meters) above sea level and is characterized by
                rocky terrain, forests, and Mediterranean vegetation.
                <h3> 2. Strategic Importance: </h3>
                Historically, Mount Carmel has been strategically important due to its commanding views over the
                coastal plain and its proximity to major ancient trade routes.
                <h3> 3. Natural Beauty and Ecology: </h3>
                The mountain range is known for its natural beauty, including lush forests, diverse flora and fauna,
                and panoramic views of the Mediterranean Sea.
                <h2> Biblical References: </h2>
                <h3> 1. Elijah and the Prophets of Baal (1 Kings 18:16-46): </h3>
                One of the most famous biblical events associated with Mount Carmel is Elijah's confrontation with the
                prophets of Baal during the reign of King Ahab. Elijah challenges the prophets of Baal to a contest to
                demonstrate whose God is the true God. On Mount Carmel, Elijah calls down fire from heaven to consume a
                sacrifice, proving the power of the God of Israel in contrast to the powerless idols of Baal. <br /><br />
                <b> • Explanation: </b> This event showcases Mount Carmel as a place of divine intervention and a symbol of God's
                power. It emphasizes Elijah's role as a prophet and demonstrates the importance of faithfulness to the
                God of Israel.
                <h3> 2. Elijah's Prayer for Rain (1 Kings 18:41-46): </h3>
                After the confrontation with the prophets of Baal, Elijah goes to the top of Mount Carmel to pray for
                rain. He sends his servant to look toward the sea seven times, and eventually, a small cloud appears,
                signaling the end of a severe drought. <br /><br />
                <b> • Explanation: </b> This episode underscores Mount Carmel's association with prayer, divine
                response, and the
                restoration of blessings. It highlights the significance of Mount Carmel as a place where prophets
                sought God's guidance and witnessed His miraculous interventions. <br /><br />


                1 Kings 18:41-46 recounts a significant event in the life of the prophet Elijah, which takes place on
                Mount Carmel. Here is the passage from the English Standard Version (ESV):


                <h2> 1 Kings 18:41-46 (ESV): </h2>
                41 And Elijah said to Ahab, “Go up, eat and drink, for there is a sound of the rushing of rain.” 42 So
                Ahab went up to eat and to drink. And Elijah went up to the top of Mount Carmel. And he bowed himself
                down on the earth and put his face between his knees. 43 And he said to his servant, “Go up now, look
                toward the sea.” And he went up and looked and said, “There is nothing.” And he said, “Go again,” seven
                times. 44 And at the seventh time he said, “Behold, a little cloud like a man's hand is rising from the
                sea.” And he said, “Go up, say to Ahab, ‘Prepare your chariot and go down, lest the rain stop you.’” 45
                And in a little while the heavens grew black with clouds and wind, and there was a great rain. And Ahab
                rode and went to Jezreel. 46 And the hand of the Lord was on Elijah, and he gathered up his garment and
                ran before Ahab to the entrance of Jezreel.


                <h2> Explanation: </h2>
                <h3> 1. Context: </h3>
                Prior to this passage, Elijah had just confronted and defeated the prophets of Baal in a dramatic
                display of God's power on Mount Carmel. He called down fire from heaven to consume his sacrifice,
                proving that the Lord, the God of Israel, is the one true God (1 Kings 18:16-40).
                <h3> 2. Elijah's Prayer for Rain: </h3>
                After the confrontation with the prophets of Baal, Elijah tells King Ahab to go and eat and drink
                because he hears the sound of a coming rainstorm. Despite there being no immediate signs of rain, Elijah
                climbs to the top of Mount Carmel to pray for rain.
                <h3> 3. Persistent Prayer: </h3>
                Elijah's posture of putting his face between his knees while praying signifies intense and earnest
                prayer. He sends his servant to look toward the sea seven times, symbolizing persistence and faith in
                God's promise of rain.
                <h3> 4. Divine Response: </h3>
                On the seventh time, Elijah's servant reports seeing a small cloud rising from the sea, about the size
                of a man's hand. This tiny cloud is the harbinger of the coming rainstorm.
                <h3> 5. Proclamation and Result: </h3>
                Elijah instructs his servant to inform King Ahab to prepare his chariot and return to Jezreel quickly
                before the rain makes the roads impassable.
                Shortly after Elijah's prayer, the sky darkens with clouds, and there is a great rainstorm as God
                fulfills Elijah's prayer and ends the severe drought that had afflicted the land.
                <h3> 6. Elijah's Endurance and Speed: </h3>
                The passage concludes with the remarkable detail that, after the rain began, the hand of the Lord was on
                Elijah, enabling him to run ahead of Ahab's chariot all the way to the entrance of Jezreel. This
                showcases not only Elijah's endurance but also God's empowerment of His prophet.
                <h2> Spiritual Lessons: </h2>
                <h3>  Faith and Persistence in Prayer: </h3> Elijah's example teaches us about the importance of
                persistent prayer and faith in God's promises, even when circumstances seem bleak.
                <h3>  God's Sovereignty over Nature: </h3> The passage underscores God's control over the elements,
                demonstrating His power to bring rain in response to prayer and His faithfulness to His people.
                <h3>  Prophetic Authority: </h3> Elijah's actions confirm his role as a prophet chosen by God,
                entrusted with the authority to intercede and bring about divine interventions.
                In summary, 1 Kings 18:41-46 illustrates Elijah's faith, persistence, and the power of prayer in
                bringing about God's miraculous response to end a severe drought and bring rain to the land of Israel.
                It stands as a testament to God's sovereignty and His faithfulness to His promises.

                <h2> Spiritual and Historical Significance: </h2>
                <h3>  Symbol of God's Power: </h3> Mount Carmel serves as a symbol of God's sovereignty and power,
                particularly
                through the miraculous events involving Elijah. It reinforces the biblical theme of faithfulness to God
                and His ability to bring about significant changes in circumstances. <br />
                <h3>  Spiritual Retreat and Contemplation: </h3> Throughout history, Mount Carmel has also been
                associated with
                spiritual retreats and contemplative practices. The Carmelite Order, founded in the 12th century, traces
                its origins to hermits who lived on Mount Carmel and sought a life of prayer and solitude. <br />
                <h3>  Modern Context: </h3> Today, Mount Carmel continues to attract visitors for its historical,
                religious, and
                natural attractions. It is home to various religious sites and offers hiking trails that provide
                stunning views of the surrounding landscape. <br />

                <h2>Summary:</h2>
                In summary, Mount Carmel's geographical features, historical significance, and biblical associations
                make it a compelling site for understanding both natural beauty and spiritual depth in the context of
                Israel's landscape and religious heritage.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MtCarmel;