import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Pillar of Salt.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: '-webkit-box',
}


const PillarOfSalt = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='content'>
      <h1>About Pillar of Salt</h1>
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
        The story of the Pillar of Salt is found in the Bible, specifically in the book of Genesis,
        concerning the destruction of Sodom and Gomorrah. Here’s an exploration of its historical context,
        geographical details, biblical references, and explanations:

        <h2> Historical Context: </h2>
        <h3> 1. Geographical Details: </h3>
        Sodom and Gomorrah were cities located in the Jordan River valley, near what is now the Dead Sea in
        Israel and Jordan. The exact location of these ancient cities is debated, but their destruction is a
        well-known biblical narrative.
        <h3> 2. Destruction of Sodom and Gomorrah: </h3>
        According to Genesis 19, these cities were notorious for their wickedness. God decided to destroy them,
        and only Lot, his wife, and their two daughters were warned to flee. They were instructed not to look
        back, but Lot's wife disobeyed and looked back, resulting in her being turned into a pillar of salt.

        <h2> Biblical References: </h2>
        <h3> Genesis 19:24-26: </h3>
        24 Then the Lord rained down burning sulfur on Sodom and Gomorrah—from the Lord out of the heavens. 25
        Thus he overthrew those cities and the entire plain, destroying all those living in the cities—and also
        the vegetation in the land. 26 But Lot’s wife looked back, and she became a pillar of salt. <br /><br />

        <b>Explanation:</b> This passage describes the divine judgment on Sodom and Gomorrah. As Lot and his
        family fled the cities, they were warned not to look back at the destruction. Lot's wife disobeyed this
        command and looked back, instantly being turned into a pillar of salt as a sign of divine punishment.

        <h2> Cultural and Symbolic Significance: </h2>
        <h3> Divine Judgment: </h3>
        The story of the Pillar of Salt serves as a warning about the consequences of disobedience and the
        severity of divine judgment against sin. It underscores the importance of obedience and faithfulness to
        God's commands.
        <h3> Symbol of Transformation: </h3>
        Lot's wife being turned into a pillar of salt is seen as a dramatic and symbolic transformation,
        emphasizing the irreversible nature of God's judgment and the consequences of clinging to the past or
        sinful behaviors.
        <h3> Archaeological and Geographical Considerations: </h3>
        While the exact location of Sodom and Gomorrah remains debated and archaeological evidence is limited,
        the narrative remains a significant part of biblical history and theological reflection.

        <h2> Interpretations and Lessons: </h2>
        <h3> Faith and Obedience: </h3>
        The story encourages believers to trust in God's guidance and to follow His commands faithfully, even in
        difficult circumstances.
        <h3> Historical and Spiritual Reflection: </h3>
        The narrative of the Pillar of Salt invites contemplation on the themes of judgment, mercy, and the
        consequences of moral choices, resonating across cultures and religions as a cautionary tale.

        <h2>Summary</h2>
        In summary, the Pillar of Salt is a poignant biblical account from Genesis that underscores the
        consequences of disobedience and the severity of divine judgment. It serves as a historical marker of
        God's justice and as a moral lesson on the importance of faithfulness and obedience in religious
        traditions and cultural narratives.
      </div>
      <span onClick={() => setIsOpen(!isOpen)}>
        <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
      </span>
    </div>
  )
}

export default PillarOfSalt