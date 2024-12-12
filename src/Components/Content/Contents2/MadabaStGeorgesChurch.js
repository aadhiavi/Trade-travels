import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Madaba & St Georges Church.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MadabaStGeorgesChurch = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Madaba & St Georges Church</h1>
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
                Madaba is an ancient city in Jordan known for its Byzantine and Umayyad mosaics, particularly the
                famous mosaic map of the Holy Land. St. George's Church, located in Madaba, houses this renowned
                mosaic among other historical artifacts. Here’s an exploration of its geographical details,
                historical context, and any relevant biblical references:

                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3>
                Madaba is located southwest of Amman, the capital city of Jordan. It lies within the historical region
                of Moab and is part of the Madaba Governorate.
                <h3> 2. St. George's Church: </h3>
                St. George's Church in Madaba is notable for housing the Madaba Map, a mosaic dating back to the 6th
                century AD. This mosaic map depicts the Holy Land, including Jerusalem and other biblical sites,
                providing valuable insights into geographical and historical knowledge of the region during that time.

                <h2> Biblical References: </h2>
                <h3> 1. Historical Context: </h3>
                While Madaba itself is not mentioned in the Bible, the region of Moab, where Madaba is located, has
                biblical significance. Moab features prominently in the Old Testament as the territory east of the
                Jordan River inhabited by the descendants of Lot (Genesis 19:36-38) and figures in the stories of Ruth
                and King David.
                <h3> 2. Mosaics and Biblical Artifacts: </h3>
                The Madaba Map, housed in St. George's Church, is not a direct biblical reference but provides
                historical and geographical context to biblical events and sites. It illustrates the Holy Land as known
                during the Byzantine period, offering insights into pilgrimage routes and biblical landscapes.

                <h2> Cultural and Historical Significance: </h2>
                <h3> Madaba Map: </h3>
                The mosaic map in St. George's Church is one of the oldest surviving cartographic depictions of the Holy
                Land. It serves as a valuable artifact for understanding the geography and religious significance of the
                region during Byzantine times.
                <h3> Christian Pilgrimage: </h3>
                Madaba, and particularly St. George's Church with its mosaic map, attracts Christian pilgrims interested
                in exploring historical Christianity and the visual representation of biblical narratives.
                <h3> Archaeological Discoveries: </h3>
                Excavations in Madaba have uncovered various ancient artifacts and structures, shedding light on the
                city's rich history and its role in the broader cultural and religious landscape of the region.

                <h2> Summary: </h2>
                Madaba, with its St. George's Church and the famous Madaba Map, holds significant historical and
                cultural importance, particularly for its insights into early Christian art and geography. While not
                directly mentioned in the Bible, Madaba's artifacts and mosaics provide valuable context to biblical
                events and the cultural milieu of the ancient Near East. The Madaba Map, in particular, continues to be
                a remarkable testament to the region's historical and religious heritage.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MadabaStGeorgesChurch;