import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Grotto.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const Grotto = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Grotto</h1>
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
                The Grotto of the Nativity is a cave beneath the Church of the Nativity in Bethlehem,
                traditionally regarded as the birthplace of Jesus Christ. Here's a concise overview with
                relevant Bible references and historical context:
                <h2>1. Biblical References:</h2>
                The Grotto of the Nativity is associated with the birth of Jesus as described in Luke 2:1-20.
                According to tradition, Mary and Joseph found shelter in a cave used as a stable, where Jesus
                was born and laid in a manger. <br />
                While the specific location of Jesus' birth is not mentioned in the Bible, early Christian
                tradition identified the cave beneath the Church of the Nativity as the site of the Nativity.
                <h2>2. Historical Context:</h2>
                The Church of the Nativity was originally built by the Roman Emperor Constantine the Great in
                the 4th century AD, encompassing the traditional site of Jesus' birth. The cave beneath the
                church, known as the Grotto of the Nativity, was preserved as a place of worship and veneration. <br />
                Over the centuries, the Church of the Nativity underwent renovations and restorations,
                reflecting the influence of Byzantine, Crusader, and Ottoman rulers. Despite various conflicts
                and periods of neglect, the church and the Grotto of the Nativity have remained central to
                Christian worship and pilgrimage.
                <h2>3. Religious Significance:</h2>
                The Grotto of the Nativity is revered by Christians as one of the holiest sites in the world,
                commemorating the birth of Jesus Christ, the central figure of the Christian faith. <br />
                A silver star embedded in the floor of the Grotto marks the traditional spot where Jesus is
                believed to have been born. This star is inscribed with the Latin phrase "Hic de Virgine Maria
                Jesus Christus natus est" ("Here Jesus Christ was born of the Virgin Mary"). <br />
                The Grotto of the Nativity is a place of pilgrimage and prayer, visited by Christians from
                around the world seeking to connect with the biblical narrative and experience the presence of
                God in the place of Jesus' birth.
                <h2>4. Modern-day Site:</h2>
                The Grotto of the Nativity is located beneath the Church of the Nativity in Bethlehem, in the
                Palestinian territories. It is jointly administered by the Greek Orthodox Church, the Armenian
                Apostolic Church, and the Roman Catholic Church. <br />
                Pilgrims and visitors to the Grotto of the Nativity can descend a flight of stairs to reach
                the underground cave, where they can view the traditional site of Jesus' birth and offer prayers
                and worship. <br />
                In summary, the Grotto of the Nativity is a sacred site revered by Christians as the traditional
                birthplace of Jesus Christ. Its historical significance, architectural features, and religious
                symbolism make it a cherished destination for pilgrims and visitors seeking to experience the
                profound mystery of the Incarnation.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Grotto