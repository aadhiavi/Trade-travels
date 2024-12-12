import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Tomb Of King David.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const TombOfKingDavid = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Tomb Of King David</h1>
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
                The Tomb of King David, located on Mount Zion in Jerusalem, is a site traditionally believed to be
                the burial place of King David, the second king of Israel and Judah, renowned in biblical accounts
                for his military prowess, poetic skills, and establishment of Jerusalem as the capital city.
                <h2> Historical and Religious Significance </h2>
                <h3> 1. Biblical References: </h3>
                King David is prominently featured in the Hebrew Bible (Old Testament), particularly in the books of
                Samuel and Chronicles. <br />
                2 Samuel 5:7-10: This passage describes David's conquest of Jerusalem and his establishment of it as
                his capital city. While it doesn't specifically mention his tomb, the historical and religious
                importance of David's reign and his connection to Jerusalem are foundational to Jewish and Christian
                traditions.
                <h3> 2. Traditional Location: </h3>
                The traditional site of the Tomb of King David is on Mount Zion, outside the walls of the Old City of
                Jerusalem. <br />
                The identification of this location as David's tomb dates back to early Jewish tradition and has been
                preserved through centuries of pilgrimage and reverence.
                <h2> Architectural and Cultural Aspects </h2>
                <h3> 1. Structure: </h3>
                The Tomb of King David consists of a simple, rectangular room with a cenotaph (empty tomb) believed to
                be where David was originally buried. <br />
                The cenotaph is covered in a velvet cloth, and visitors can approach to pray and pay respects.
                <h3> 2. Religious Significance: </h3>
                <b> For Jews: </b> The Tomb of King David is a revered site, representing the connection to the Davidic dynasty
                and Jerusalem as the spiritual and political center of Judaism. <br />
                <b> For Christians: </b> David's significance is seen in the lineage leading to Jesus, who is often referred to
                as the "Son of David" in the New Testament, fulfilling Messianic prophecies.
                <h2> History and Custodianship </h2>
                <h3> 1. Custodianship: </h3>
                The site has been managed and maintained by different religious authorities over the centuries,
                including Jewish, Christian, and Muslim custodians. <br />
                Today, it is primarily overseen by the Israeli government, with access granted to visitors of various
                faiths.
                <h3> 2. Cultural Heritage: </h3>
                The Tomb of King David is not only a religious site but also a cultural landmark, reflecting the
                historical and spiritual legacy of King David and his enduring influence on the region.
                <h2> Visitor Experience </h2>
                <h3> 1. Accessibility: </h3>
                The Tomb of King David is accessible to visitors, who can enter the site and view the cenotaph. <br />
                Special religious services and ceremonies are conducted at the site, especially during Jewish holidays
                and other significant occasions.
                <h3> 2. Pilgrimage and Worship: </h3>
                Both Jews and Christians visit the Tomb of King David for pilgrimage, prayer, and reflection. <br />
                It is a place where believers seek spiritual connection and draw inspiration from the legacy of King
                David.
                <h2> Conclusion </h2>
                The Tomb of King David on Mount Zion in Jerusalem holds profound religious and cultural significance as
                a site associated with the biblical King David, revered for his role in establishing Jerusalem and his
                enduring legacy in Jewish and Christian traditions. It serves as a place of pilgrimage, prayer, and
                historical reflection, embodying the deep spiritual roots and cultural heritage of the city of Jerusalem
                and the wider Abrahamic faith traditions.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default TombOfKingDavid