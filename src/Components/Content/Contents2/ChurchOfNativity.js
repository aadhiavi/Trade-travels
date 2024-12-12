import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Church Of Nativity.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}


const ChurchOfNativity = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Church Of Nativity</h1>
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
                The Church of the Nativity, located in Bethlehem, is one of the oldest continuously
                operating churches in the world and holds deep significance as the traditional birthplace of
                Jesus Christ. Here's an overview of its biblical references and historical context:
                <h2>1. Biblical References:</h2>
                The birth of Jesus in Bethlehem is recorded in the New Testament Gospels of Matthew and Luke.
                In Matthew 2:1-12, wise men from the East come to Jerusalem seeking the newborn king of the
                Jews, and King Herod learns from the chief priests and scribes that the Messiah is to be born in
                Bethlehem. In Luke 2:1-20, Mary and Joseph travel to Bethlehem for the census decreed by Caesar
                Augustus, and Jesus is born there and laid in a manger because there was no room for them in the
                inn. <br />
                While the specific location of Jesus' birth is not mentioned in the biblical accounts,
                tradition identifies the site with the cave beneath the Church of the Nativity in Bethlehem.
                Matthew 2:1-12 recounts the story of the visit of the Magi, or wise men, to Bethlehem to pay
                homage to the newborn King of the Jews. Here's an explanation of the passage:
                <h3>1. The Arrival of the Magi (Verses 1-2):</h3> The passage begins by stating that "after
                Jesus was born in Bethlehem of Judea" (Matthew 2:1), wise men from the East arrive in Jerusalem,
                inquiring about the one who has been born king of the Jews. These wise men are traditionally
                referred to as Magi, a term used to describe astrologers, scholars, or priests from the East.
                <h3>2. Inquiry to Herod (Verses 3-6):</h3> The arrival of the Magi and their question about the
                newborn king causes King Herod and all Jerusalem to be troubled. Herod gathers the chief priests
                and scribes to inquire where the Messiah is to be born. They cite the prophecy of Micah 5:2,
                which states that the Messiah will be born in Bethlehem.
                <h3>3. Journey to Bethlehem (Verses 7-8):</h3> Herod secretly meets with the Magi and asks them
                to report back to him once they have found the child, under the guise of wanting to worship him.
                The Magi then continue on their journey, following the star that had appeared to them in the
                East.
                <h3>4. The Magi's Encounter with Jesus (Verses 9-11):</h3> The star leads the Magi to Bethlehem,
                where it stops over the place where Jesus is. Upon seeing the star, the Magi rejoice with
                exceeding great joy. Entering the house, they find Mary and the child Jesus and worship him,
                presenting gifts of gold, frankincense, and myrrh.
                <h3>5. Divine Warning (Verse 12):</h3> After paying homage to Jesus, the Magi are warned in a
                dream not to return to Herod. They depart for their own country by another route, bypassing
                Jerusalem and Herod's potential harm.
                <h3>6. Significance:</h3> The story of the Magi's visit to Jesus in Bethlehem carries several
                layers of significance:
                It demonstrates the fulfillment of Old Testament prophecies regarding the coming of the
                Messiah, particularly Micah's prophecy about the Messiah's birthplace. <br />
                It emphasizes the universal significance of Jesus' birth, as the Magi represent the Gentile
                nations coming to worship the Jewish Messiah. <br />
                The gifts of gold, frankincense, and myrrh are symbolic of Jesus' identity and mission: gold
                representing his kingship, frankincense his divinity, and myrrh his eventual sacrificial death.
                Overall, Matthew 2:1-12 presents the story of the Magi as a significant event in the infancy
                narrative of Jesus, highlighting the themes of prophecy fulfillment, worship, and the inclusion
                of Gentiles in God's plan of salvation.

                <h2>2. Historical Context:</h2>
                The Church of the Nativity was originally constructed by the Roman Emperor Constantine the
                Great and his mother Helena in the 4th century AD. It was built over the traditional site of
                Jesus' birth, which had been identified by early Christian pilgrims. <br />
                The church underwent several renovations and additions over the centuries, with significant
                contributions from Byzantine, Crusader, and Ottoman rulers. Despite various conflicts and
                periods of neglect, the church has remained a central place of worship for Christians throughout
                history.
                <h2>3. Religious Significance:</h2>
                The Church of the Nativity is revered by Christians as one of the holiest sites in the world,
                commemorating the birth of Jesus Christ, the central figure of the Christian faith. <br />
                The church is divided into multiple sections, including the Grotto of the Nativity, which is
                believed to be the actual cave where Jesus was born. A silver star marks the spot where
                tradition holds that Jesus was laid in the manger. <br />
                The Church of the Nativity is a major pilgrimage destination for Christians from around the
                world, particularly during the Christmas season. It is also recognized as a UNESCO World
                Heritage Site.
                <h2>4. Modern-day Site:</h2>
                The Church of the Nativity is located in Bethlehem, in the Palestinian territories. It is
                jointly administered by the Greek Orthodox Church, the Armenian Apostolic Church, and the Roman
                Catholic Church. <br />
                The church complex includes the Basilica of the Nativity, the Church of St. Catherine, and
                various chapels and monastic buildings. It underwent extensive restoration and conservation
                efforts in the 2010s to preserve its historic and architectural heritage.
                In summary, the Church of the Nativity is a revered religious site that commemorates the birth
                of Jesus Christ in Bethlehem, as described in the New Testament Gospels. Its rich history,
                architectural significance, and religious importance make it a cherished symbol of the Christian
                faith and a destination for pilgrims and visitors from around the world.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default ChurchOfNativity