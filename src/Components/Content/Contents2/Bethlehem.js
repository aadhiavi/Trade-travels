import React, { useState } from 'react'
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Bethlehem.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const Bethlehem = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='content'>
            <h1>About Bethlehem </h1>
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
                Bethlehem holds significant importance in biblical history as the birthplace of Jesus Christ. It
                is mentioned numerous times in the Bible, particularly in the Old Testament prophecies regarding
                the Messiah and in the New Testament accounts of Jesus' birth. Here's an overview:

                <h2>1. Old Testament Prophecies:</h2> Bethlehem is first mentioned in the Old Testament in the
                book of Genesis (Genesis 35:19), where it is called Ephrath or Ephrathah. However, its
                significance as the birthplace of the Messiah is foretold in the prophecy of Micah: "But you,
                Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me
                one who will be ruler over Israel, whose origins are from of old, from ancient times" (Micah
                5:2). This prophecy is cited in the Gospel of Matthew as being fulfilled by Jesus' birth in
                Bethlehem.

                <h2>2. The Birth of Jesus:</h2> In the New Testament, the Gospel accounts of Matthew and Luke
                both describe Jesus' birth in Bethlehem. According to these narratives, Mary and Joseph, who
                were from Nazareth, traveled to Bethlehem because of a census decreed by Caesar Augustus. While
                they were there, Mary gave birth to Jesus in a stable, as there was no room for them in the inn.
                The Gospel of Luke describes how she wrapped him in swaddling clothes and laid him in a manger
                (Luke 2:1-7).
                <h2>3. The Visit of the Magi:</h2> Matthew's Gospel also records the visit of the Magi, or wise
                men, to Bethlehem following the appearance of a star that signaled the birth of a king. The Magi
                came from the East to worship the newborn Jesus and brought gifts of gold, frankincense, and
                myrrh (Matthew 2:1-12).
                <h2>4. The Slaughter of the Innocents:</h2> In Matthew's Gospel, King Herod, upon hearing from
                the Magi about the birth of a new king in Bethlehem, orders the massacre of all male children
                under the age of two in Bethlehem and its vicinity (Matthew 2:16-18). This tragic event is often
                referred to as the Slaughter of the Innocents. <br />
                Overall, Bethlehem's significance in the Bible lies in its fulfillment of prophecy regarding the
                birth of the Messiah and its association with the beginning of Jesus' earthly life and ministry.
                Today, Bethlehem remains a significant pilgrimage site for Christian’s worldwide, drawing
                visitors to the Church of the Nativity, which is built over the traditional site of Jesus'
                birth. <br /><br />

                Beyond its biblical significance, Bethlehem has a rich history that extends back thousands of
                years. Here are some additional historical points about Bethlehem:
                <h3>1. Ancient Origins:</h3> Bethlehem's history predates the biblical accounts. It was
                originally a Canaanite city known as "Ephrath," meaning "fruitful." Later, it became known as
                Bethlehem, which means "house of bread" in Hebrew.
                <h3>2. Davidic Connection:</h3> Bethlehem is also famous for being the ancestral home of King
                David, the great king of Israel. David was born in Bethlehem, and it is often referred to as the
                "City of David." His connection to Bethlehem is significant in biblical narratives and Jewish
                history.
                <h3>3. City of Ruth and Boaz:</h3> The biblical book of Ruth is set in Bethlehem during the time
                of the judges in Israel. Ruth, a Moabite woman, came to Bethlehem with her mother-in-law Naomi.
                There, she met and eventually married Boaz, a wealthy landowner. Their story is one of loyalty,
                love, and redemption.
                <h3>4. Historical Conquests and Occupations:</h3> Over the centuries, Bethlehem witnessed
                various conquests and occupations by different empires, including the Assyrians, Babylonians,
                Persians, Greeks, and Romans. Each empire left its mark on the city, contributing to its
                cultural and historical significance.
                <h3>5. Christian Pilgrimage Site:</h3> Since early Christian times, Bethlehem has been a
                significant pilgrimage destination. The Church of the Nativity, built over the traditional site
                of Jesus' birth, has been a focal point for pilgrims visiting the Holy Land. Over the centuries,
                numerous Christian denominations have maintained a presence in Bethlehem, contributing to its
                religious diversity and cultural heritage.
                <h3>6. Modern History:</h3> In more recent history, Bethlehem has been part of various political
                and territorial disputes. It was under Ottoman rule until the end of World War I when it came
                under British administration as part of the British Mandate for Palestine. After the
                Arab-Israeli War of 1948, Bethlehem came under Jordanian control until the Six-Day War in 1967
                when it was occupied by Israel. Since the Oslo Accords in the 1990s, Bethlehem has been part of
                the Palestinian territories, administered by the Palestinian Authority.
                These historical layers add depth to Bethlehem's significance, portraying it not only as the
                birthplace of Jesus but also as a city with a rich and diverse heritage shaped by millennia of
                human civilization.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Bethlehem