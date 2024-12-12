import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mara & Elim - Moses Well.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: '-webkit-box',
}


const MaraAndElimMosesWell = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='content'>
      <h1>About Mara & Elim - Moses Well</h1>
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
        <b>Mara</b> is mentioned in the Book of Exodus as a place the Israelites encountered during their
        journey from Egypt to the Promised Land. The key details are as follows: <br />
        <h2> Biblical Reference : Exodus 15:22-26.</h2>
        <h3>• Description:</h3> After crossing the Red Sea, the Israelites traveled for three days in
        the Desert of Shur without finding water. When they arrived at Mara, they found water, but
        it was bitter and undrinkable.
        <h3>• Name Significance:</h3> The place was named Mara (which means "bitter" in Hebrew)
        because of the bitterness of the water.
        <h3>• Miracle:</h3> The people complained to Moses about the bitter water. Moses cried out to
        the Lord, who showed him a piece of wood. Moses threw the wood into the water, and the water
        became sweet and drinkable.
        <h3>• Lesson:</h3> God used this event to test the faith of the Israelites and to teach them
        obedience. He also made a decree and a law for them and assured them that if they followed
        His commands, they would not suffer the diseases He brought upon the Egyptians. <br /><br />

        <b>Elim</b> is another significant location mentioned in the Israelites' journey.
        <h2>	Biblical Reference: Exodus 15:27.</h2>
        <h3> • Description:</h3>  After leaving Mara, the Israelites came to Elim.
        <h3> • Features:</h3>  Elim was an oasis with twelve springs of water and seventy palm trees, providing
        a place of rest and refreshment for the Israelites.
        <h3> • Significance:</h3>  The number of springs and palm trees can be seen symbolically (twelve
        springs possibly representing the twelve tribes of Israel and seventy palm trees possibly
        representing abundance and completeness).
        <h2>Exodus 15:27 (NIV):</h2> "Then they came to Elim, where there were twelve springs and seventy
        palm trees, and they camped there near the water."
        <h3>1. Arrival at Elim:</h3>
        After the bitter experience at Mara, the Israelites traveled to Elim, which is presented
        as a place of refreshment and plenty. <br />
        The journey to Elim marks a transition from scarcity and bitterness to abundance and rest.

        <h3>2. Twelve Springs of Water:</h3>
        The presence of twelve springs is significant. Symbolically, the number twelve often
        represents completeness and the twelve tribes of Israel. <br />
        Each tribe could have had access to its own spring, ensuring ample water supply for
        everyone, which contrasts sharply with the lack of water they previously experienced.

        <h3>3. Seventy Palm Trees:</h3>
        The seventy palm trees provided shade and possibly dates, adding to the resources
        available at Elim. <br />
        The number seventy might symbolize a sense of completeness and divine provision, as the
        number is often associated with totality in the Bible (e.g., seventy elders, seventy
        nations).

        <h3>4. Camping Near the Water:</h3>
        The verse emphasizes that the Israelites camped near the water, highlighting the
        importance of water as a life-sustaining resource in the desert environment. <br />
        This location would have been ideal for rest and recuperation after their arduous travels
        and the hardships they faced in Egypt and during their journey. <br /> <br /> <hr />
        <h1>Theological and Symbolic Significance</h1>
        <h3>1. Divine Provision:</h3>
        Elim represents God's provision and care for the Israelites. Despite the challenges they
        faced, God led them to a place where their needs were abundantly met. <br />
        This serves as a reminder of God’s faithfulness and ability to provide for His people in times
        of need.

        <h3>2. Contrast with Mara:</h3>
        The stark contrast between Mara and Elim underscores the theme of testing and reward. After
        enduring the bitter waters of Mara and demonstrating their need for God’s help, the Israelites
        are led to the refreshing oasis of Elim. <br />
        This journey can be seen as a metaphor for the spiritual journey from suffering to divine
        consolation.

        <h3>3. Encouragement for Faith:</h3>
        For believers, Elim can symbolize moments of respite and blessings that follow periods of
        trial and hardship. <br />
        The passage encourages trust in God’s timing and faithfulness, even when immediate
        circumstances seem challenging. <br />
        In summary, Exodus 15:27 captures a moment of divine provision and rest for the Israelites,
        symbolizing God’s ongoing care and the rewards of faithfulness amidst trials.

        <h2> Historical Context:</h2> The events at Mara and Elim are part of the larger narrative of the
        Exodus, a foundational story in Jewish, Christian, and Islamic traditions. It describes the
        liberation of the Israelites from slavery in Egypt under the leadership of Moses. <br /><br />
        <h2> Theological Themes:</h2>
        <h3>• Testing and Faith:</h3> The incident at Mara highlights themes of testing and faith. God tested the
        Israelites' trust in Him and His provision.
        <h3>• Obedience and Covenant:</h3> God’s promise to protect the Israelites from diseases if they obeyed
        Him is an early indication of the covenant relationship between God and His people.
        <h3>• Provision and Sustenance:</h3> The journey to Elim and its abundant resources demonstrates God’s
        ability to provide for His people, even in the wilderness.

        <h2>Mara and Elim in Historical and Archaeological Studies</h2>
        <h3>• Identification of Locations:</h3> While the exact locations of Mara and Elim are uncertain, some
        scholars and archaeologists have attempted to identify possible sites in the Sinai Peninsula.
        However, definitive evidence linking specific sites to these biblical places is lacking.
        <h3>• Symbolism in Tradition:</h3> Both locations have taken on symbolic meanings in Jewish and Christian
        traditions. Mara represents times of trial and bitterness in life, while Elim symbolizes divine
        provision and rest.

        <h2>Lessons for Modern Readers </h2>
        <h3>• Spiritual Reflection:</h3> The story encourages believers to trust in God’s provision and
        faithfulness, even when facing difficulties.
        <h3>• Obedience and Trust:</h3> It emphasizes the importance of obedience to God’s commandments and
        trusting His guidance.
        <h3>• Community and Support:</h3> The transition from the bitter waters of Mara to the abundant oasis of
        Elim can be seen as a metaphor for the journey from hardship to divine support and community.
        These stories are foundational to understanding the journey of the Israelites and the nature of
        their relationship with God as depicted in the Bible.
      </div>
      <span onClick={() => setIsOpen(!isOpen)}>
        <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
      </span>
    </div>
  )
}

export default MaraAndElimMosesWell