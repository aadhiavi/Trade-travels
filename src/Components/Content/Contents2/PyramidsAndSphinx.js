import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Pyramids & Sphinx.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const PyramidsAndSphinx = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Pyramids & Sphinx</h1>
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
                <h2>Absence in Biblical Texts</h2>
                <b> • No Direct Mention: </b> The pyramids and the Sphinx are not explicitly mentioned in the
                biblical texts. The Bible, particularly the Old Testament, does not refer to these monuments
                directly. <br />
                <b> • Egypt in the Bible: </b> Egypt plays a significant role in the Bible, especially in the
                narratives of Genesis and Exodus. The Israelites' sojourn in Egypt, the story of Joseph, and
                the Exodus under Moses are central themes. However, the focus is on the people and events
                rather than specific monuments.
                <h2>Indirect Connections</h2>
                <b> • Joseph in Egypt: </b> Joseph's rise to power in Egypt (Genesis 41) places him in a context
                where the pyramids already existed, as they were built during the Old Kingdom (circa
                2686–2181 BCE), long before the traditional dating of Joseph's time. <br />
                <b> • Exodus: </b> The story of the Israelites' enslavement and eventual Exodus from Egypt under
                Moses (Exodus 1-15) also indirectly connects to the era of the pyramids, though the
                narrative does not describe them.

                <h2>Historical Context of the Pyramids and Sphinx</h2>
                <h3> Pyramids</h3>
                <b> • Construction Period: </b> The most famous pyramids, including the Great Pyramid of Giza, were
                built during Egypt's Old Kingdom, particularly the Fourth Dynasty (circa 2613–2494 BCE). <br />
                <b> • Purpose: </b> Pyramids were constructed as tombs for the pharaohs and were designed to ensure
                their journey to the afterlife. The Great Pyramid was built for Pharaoh Khufu (Cheops). <br />
                <b> • Architecture: </b> The pyramids are marvels of ancient engineering, constructed with precise
                alignment to cardinal points and remarkable geometric accuracy.

                <h3> Sphinx</h3>
                <b> • Construction Period: </b> The Great Sphinx of Giza is believed to have been constructed during
                the reign of Pharaoh Khafre (circa 2558–2532 BCE), who also built the second pyramid at
                Giza. <br />
                <b> • Purpose: </b> The Sphinx, with its lion's body and human head, is thought to represent the
                pharaoh and to serve as a guardian of the Giza Plateau. <br />
                <b> • Symbolism: </b> The Sphinx combines strength and wisdom, symbolizing the pharaoh's power and
                divine protection.

                <h2>Engineering and Labor</h2>
                <b> • Construction Techniques: </b> The methods used to build the pyramids involved sophisticated
                knowledge of mathematics and astronomy. Large labor forces, possibly including skilled
                workers, laborers, and slaves, were organized to quarry, transport, and assemble the massive
                stone blocks. <br />
                <b> • Labor Force: </b> Contrary to popular belief, evidence suggests that the builders of the
                pyramids were well-fed laborers rather than slaves. They were organized into crews with
                hierarchical structures.
                <h2>Religious Significance</h2>
                <b> • Afterlife Beliefs: </b> The pyramids and the Sphinx are deeply rooted in Egyptian beliefs about
                the afterlife. The pyramids were seen as stairways to the heavens for the pharaohs, ensuring
                their immortality and eternal presence with the gods. <br />
                <b> • Sun Worship: </b> The alignment and structure of the pyramids also reflect the Egyptians'
                worship of the sun god Ra. The east-west alignment symbolizes the pharaoh's journey with the
                sun.

                <h2>The Pyramids and the Bible's Historicity</h2>
                <b> • Archaeological Correlations: </b> While the Bible does not mention the pyramids, archaeological
                findings provide context for the historical periods described in the biblical narratives.
                The presence of the pyramids during the time of the patriarchs and the Israelites in Egypt
                offers a backdrop for understanding the environment and culture of ancient Egypt. <br />
                <b> • Symbolic Interpretations: </b> Some biblical scholars and commentators have explored symbolic
                interpretations, drawing parallels between the grandeur of Egypt (as epitomized by the
                pyramids) and the spiritual journey of the Israelites.
                <h2>Summary</h2>
                The pyramids and the Sphinx, though not mentioned in the Bible, are significant in
                understanding the historical and cultural context of ancient Egypt, a key setting for many
                biblical events. These monuments represent the pinnacle of ancient Egyptian engineering,
                religious beliefs, and the sociopolitical structure of the time. The Bible’s narratives,
                especially those involving Joseph and Moses, gain additional depth when viewed against the
                backdrop of these ancient wonders. <br /><br /><hr /><br />

                <h1>About all the pyrimids in egypt and why they are built</h1><br /><br />
                The pyramids of Egypt are among the most iconic and enduring monuments of the ancient world,
                primarily built as tombs for pharaohs and elite individuals. Here's a comprehensive overview
                of the major pyramids in Egypt, their construction, and their purposes:
                <h2>Major Pyramids in Egypt</h2>
                <h3>1. Step Pyramid of Djoser</h3>
                • Location: Saqqara <br />
                • Dynasty: Third Dynasty <br />
                • Pharaoh: Djoser (circa 2667–2648 BCE) <br />
                • Architect: Imhotep <br />
                • Description: The Step Pyramid is considered the earliest colossal stone building in Egypt
                and marks a significant evolution in pyramid construction, transitioning from traditional
                mastaba tombs to a six-tiered structure.
                <h3>2. Pyramid of Meidum</h3>
                • Location: Meidum <br />
                • Dynasty: Third Dynasty <br />
                • Pharaoh: Initially for Huni, completed by Sneferu (circa 2613–2589 BCE) <br />
                • Description: The Meidum Pyramid was originally built as a step pyramid and later
                transformed into a true pyramid. It partially collapsed in antiquity, leaving a distinctive
                tower-like structure.
                <h3> 3. Bent Pyramid</h3>
                • Location: Dahshur <br />
                • Dynasty: Fourth Dynasty <br />
                • Pharaoh: Sneferu (circa 2600 BCE) <br />
                • Description: The Bent Pyramid is unique due to its change in angle from 54 to 43 degrees
                halfway up, giving it a bent appearance. This alteration was likely made to prevent
                structural failure.
                <h3>4. Red Pyramid</h3>
                • Location: Dahshur <br />
                • Dynasty: Fourth Dynasty <br />
                • Pharaoh: Sneferu (circa 2590 BCE) <br />
                • Description: Named for its reddish hue, the Red Pyramid is considered the first successful
                true pyramid with smooth sides. It served as a template for future pyramids.
                <h3>5. Great Pyramid of Giza (Pyramid of Khufu)</h3>
                • Location: Giza <br />
                • Dynasty: Fourth Dynasty <br />
                • Pharaoh: Khufu (Cheops) (circa 2589–2566 BCE) <br />
                • Description: The Great Pyramid is the largest pyramid in Egypt, originally standing at
                146.6 meters (481 feet). It showcases extraordinary precision and engineering skills,
                including the alignment to the cardinal points.
                <h3>6. Pyramid of Khafre</h3>
                • Location: Giza <br />
                • Dynasty: Fourth Dynasty <br />
                • Pharaoh: Khafre (circa 2558–2532 BCE) <br />
                • Description: Slightly smaller than the Great Pyramid, Khafre's pyramid is part of a
                complex that includes the Great Sphinx. It retains some of its original casing stones at the
                top.
                <h3>7. Pyramid of Menkaure</h3>
                • Location: Giza <br />
                • Dynasty: Fourth Dynasty <br />
                • Pharaoh: Menkaure (circa 2532–2504 BCE) <br />
                • Description: The smallest of the three main Giza pyramids, Menkaure's pyramid stands at 65
                meters (213 feet). Its complex includes three subsidiary pyramids and a mortuary temple.
                <h3>8. Pyramid of Unas</h3>
                • Location: Saqqara <br />
                • Dynasty: Fifth Dynasty <br />
                • Pharaoh: Unas (circa 2375–2345 BCE) <br />
                • Description: Notable for being the first pyramid to feature the Pyramid Texts, a
                collection of religious spells and inscriptions aimed at ensuring the pharaoh’s safe passage
                to the afterlife.
                <h3>9. Pyramid of Teti</h3>
                • Location: Saqqara <br />
                • Dynasty: Sixth Dynasty <br />
                • Pharaoh: Teti (circa 2345–2333 BCE) <br />
                • Description: Teti's pyramid, although relatively small, also contains Pyramid Texts and is
                part of a complex with a mortuary temple and smaller pyramids for queens.
                <h2>Purposes of the Pyramids</h2>
                <h3>1. Royal Tombs:</h3>
                The primary purpose of the pyramids was to serve as monumental tombs for pharaohs. They
                were designed to ensure the pharaoh’s safe passage and eternal life in the afterlife.
                <h3>2. Religious and Symbolic Significance:</h3>
                The pyramids were seen as a representation of the primordial mound from which the ancient
                Egyptians believed the world was created. Their shape symbolized the rays of the sun,
                helping the pharaoh ascend to join the gods, particularly the sun god Ra.
                <h3>3. Demonstration of Power:</h3>
                Pyramids were a testament to the pharaoh’s power, wealth, and ability to mobilize
                resources and labor. They served as enduring symbols of their reign and divine status.
                <h3>4. Cultural and Political Statements:</h3>
                The construction of pyramids was a statement of the pharaoh’s control over the land and
                people. It demonstrated the centralized authority and the sophisticated administrative
                systems in place to support such monumental projects.
                <h2>Construction Techniques</h2>
                <h3>1. Labor Force: </h3>
                Contrary to earlier beliefs that the pyramids were built by slaves, evidence suggests that
                a well-organized labor force consisting of skilled workers, craftsmen, and laborers
                constructed the pyramids. These workers were housed in nearby temporary cities and provided
                with food, medical care, and accommodations.
                <h3>2. Engineering and Materials: </h3>
                The pyramids were constructed using large limestone and granite blocks. Workers quarried
                these blocks, transported them using sledges and ramps, and precisely placed them to form
                the pyramid's structure. <br />
                The precision in alignment, the careful planning of internal chambers, and the techniques
                for lifting and positioning massive stones highlight the advanced engineering skills of
                ancient Egyptians.
                <h2>Legacy of the Pyramids</h2>
                The pyramids of Egypt continue to captivate the world with their grandeur and mystery. They
                provide invaluable insights into ancient Egyptian civilization, including its religious
                beliefs, social organization, and technological advancements. These structures have become
                symbols of Egypt's ancient heritage and a testament to human ingenuity.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default PyramidsAndSphinx