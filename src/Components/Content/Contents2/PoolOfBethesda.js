import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Pool of Bethesda.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: '-webkit-box',
}

const PoolOfBethesda = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='content'>
      <h1>About Pool of Bethesda</h1>
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
        The Pool of Bethesda is a significant location mentioned in the New Testament, particularly in the
        Gospel of John, Chapter 5. Here's an explanation of its biblical significance and historical
        context:

        <h2> 1. Biblical Account: </h2>
        In John 5:1-15, the Pool of Bethesda is described as a place near the
        Sheep Gate in Jerusalem with five porticoes or colonnades. It was known for its healing properties, as
        it was believed that an angel would occasionally stir the waters, and the first person to enter the pool
        after the stirring would be healed of their afflictions. Jesus encounters a man who had been disabled
        for 38 years lying by the pool, and after a brief exchange, Jesus heals him, instructing him to pick up
        his mat and walk.

        <h2> 2. John 5:1-15 </h2>
        recounts an encounter between Jesus and a man who had been disabled for 38
        years near the Pool of Bethesda in Jerusalem: <br />
        <b> Setting: </b> The passage begins by describing the Pool of Bethesda, located near the Sheep Gate in
        Jerusalem, with five porticoes. It was believed that an angel would occasionally stir the waters of the
        pool, and the first person to enter after the stirring would be healed. <br />
        <b> The Disabled Man: </b> Jesus encounters a man who had been disabled for 38 years lying by the pool. The man
        explains to Jesus that he has no one to help him into the pool when the water is stirred, and as a
        result, he has been unable to receive healing. <br />
        <b> Jesus' Healing: </b> Moved by compassion, Jesus says to the man, "Get up! Pick up your mat and walk."
        Immediately, the man is healed, and he picks up his mat and walks. <br />
        <b> Sabbath Controversy: </b> The healing takes place on the Sabbath, which leads to controversy among the
        Jewish religious leaders. They criticize the man for carrying his mat on the Sabbath, and when they find
        out that Jesus was the one who healed him, they accuse Jesus of breaking the Sabbath law. <br />
        <b> Jesus' Authority: </b> In response to the religious leaders' accusations, Jesus defends his actions,
        asserting his authority as the Son of God and declaring that he is doing the work of his Father, who is
        always at work. <br />
        <b> The Man's Testimony: </b> The man who was healed later encounters the religious leaders and tells them that
        it was Jesus who healed him. This leads to further conflict and opposition toward Jesus.
        Overall, this passage highlights Jesus' compassion for the sick and marginalized, his authority to heal,
        and the controversy that his actions often sparked among the religious establishment. It also serves as
        a reminder of the importance of faith and belief in Jesus' ministry of healing and redemption.

        <h2> 3. Symbolism and Significance: </h2>
        The Pool of Bethesda story illustrates Jesus' compassion for
        the sick and his ability to heal. It also highlights the religious and cultural context of first-century
        Jerusalem, where people sought healing and redemption through various rituals and practices. The account
        underscores Jesus' authority as a healer and his willingness to reach out to the marginalized and
        downtrodden.

        <h2> 4. Historical Context: </h2>
        The Pool of Bethesda likely existed as a historical site in ancient
        Jerusalem, although its precise location and archaeological remains have been the subject of debate
        among scholars. The name Bethesda means "house of mercy" or "house of grace" in Aramaic, reflecting its
        reputation as a place of healing and divine intervention.

        <h2> 5. Archaeological Evidence: </h2> Excavations in the vicinity of the traditional site of the Pool
        of Bethesda, near the Church of St. Anne in the Muslim Quarter of the Old City of Jerusalem, have
        uncovered ancient pools and ruins dating back to the Roman period. These findings provide some evidence
        for the historical existence of the Pool of Bethesda, although the exact identification remains
        uncertain.

        <h2> 6. Cultural and Religious Practices: </h2>
        The belief in the healing properties of the Pool of
        Bethesda reflects ancient Jewish beliefs about sacred waters and divine intervention. Similar practices
        were observed at other healing sites in the ancient world, where people would seek physical and
        spiritual healing through immersion in or contact with holy waters. <br /><br />
        Overall, the story of the Pool of Bethesda in the Bible offers a glimpse into the religious and cultural
        milieu of first-century Jerusalem and serves as a testament to Jesus' ministry of compassion, healing,
        and redemption.
      </div>
      <span onClick={() => setIsOpen(!isOpen)}>
        <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
      </span>
    </div>
  )
}

export default PoolOfBethesda