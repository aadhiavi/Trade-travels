import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/tour3.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MtNebo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Mount Nebo</h1>
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
                Mount Nebo is a significant biblical site located in present-day Jordan, near the city of
                Madaba. It holds great religious importance, particularly in Judaism and Christianity.
                Here's a closer look at Mount Nebo's significance in the Bible:
                <h2>1. Old Testament Reference:</h2>
                Mount Nebo is prominently mentioned in the Book of Deuteronomy, the fifth book of the Hebrew
                Bible. In Deuteronomy 34:1-4 (NIV), it is described as the place where Moses ascended to view
                the Promised Land before his death. <br />
                Moses, after leading the Israelites through the wilderness for forty years, was not allowed to
                enter the Promised Land due to an incident of disobedience. Instead, God showed him the land
                from Mount Nebo, promising it to his descendants.

                <h2>2. Moses' Viewing of the Promised Land:</h2>
                According to the biblical narrative, from Mount Nebo, Moses beheld the land of Canaan, which
                would become the homeland of the Israelites. This vision served as a fulfillment of God's
                promise to Abraham and a poignant moment for Moses, as he realized he would not enter the land
                himself. <br />
                Deuteronomy 34:1-4 (NIV) records Moses' experience on Mount Nebo: "Then Moses climbed Mount
                Nebo from the plains of Moab to the top of Pisgah, across from Jericho. There the Lord showed
                him the whole land—from Gilead to Dan, all of Naphtali, the territory of Ephraim and Manasseh,
                all the land of Judah as far as the Mediterranean Sea, the Negev and the whole region from the
                Valley of Jericho, the City of Palms, as far as Zoar."

                <h2>3. Modern Significance:</h2>
                Mount Nebo is revered by Jews, Christians, and Muslims alike. For Christians, it holds special
                significance as the place where Moses saw the Promised Land and where, according to tradition,
                he was buried. The site attracts pilgrims from around the world who come to reflect on Moses'
                legacy and enjoy the panoramic views of the Holy Land from its summit. <br />
                Today, Mount Nebo is home to a Franciscan monastery, which preserves the memory of Moses and
                offers visitors a chance to explore the site's religious and historical significance.
                Mount Nebo's inclusion in the biblical narrative underscores its importance as a sacred place in
                the religious traditions of Judaism and Christianity, serving as a symbol of God's covenant with
                his people and the fulfillment of his promises.
                <br /><br /><hr />

                <h1>Here are the relevant Bible references regarding Mount Nebo:</h1>

                <h2>1. Deuteronomy 34:1-4 (NIV): </h2>
                "Then Moses climbed Mount Nebo from the plains of Moab to the top of Pisgah, across from
                Jericho. There the Lord showed him the whole land—from Gilead to Dan, all of Naphtali, the
                territory of Ephraim and Manasseh, all the land of Judah as far as the Mediterranean Sea,
                the Negev and the whole region from the Valley of Jericho, the City of Palms, as far as
                Zoar."

                <h2>2. Deuteronomy 32:49-50 (NIV):</h2>
                "Go up into the Abarim Range to Mount Nebo in Moab, across from Jericho, and view Canaan,
                the land I am giving the Israelites as their own possession. There on the mountain that you
                have climbed you will die and be gathered to your people, just as your brother Aaron died on
                Mount Hor and was gathered to his people." <br />
                These passages from the Book of Deuteronomy recount Moses' ascent to Mount Nebo, where he
                was shown the Promised Land by God. It was from this vantage point that Moses saw the land
                that God had promised to the Israelites. The references emphasize the significance of Mount
                Nebo in the context of God's covenant with his people and Moses' role as their leader.

            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MtNebo