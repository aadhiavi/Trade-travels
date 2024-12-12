import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Western Wailing Wall.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const WesternWailingWall = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Western Wailing Wall</h1>
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
                The Western Wall, also known as the Wailing Wall, is one of the most sacred sites in Judaism and
                a significant religious and historical landmark in Jerusalem. Here's an overview, including its
                biblical references:

                Let's delve deeper into the historical context surrounding the Western Wall: <br /><br />
                <h2>1. Construction of the Temple Mount:</h2> The history of the Western Wall is intertwined
                with the construction of the Temple Mount in ancient Jerusalem. King Solomon, the son of King
                David, built the First Temple on this site around 957 BCE, according to biblical accounts (1
                Kings 6). This temple served as the center of Jewish worship until its destruction by the
                Babylonians in 586 BCE.
                <h2>2. Exile and Return:</h2> Following the destruction of the First Temple, the Jewish people
                were exiled to Babylon. After the Persian conquest of Babylon, King Cyrus issued a decree
                allowing Jews to return to Jerusalem and rebuild their temple. The Second Temple was
                subsequently constructed on the same site, with the rebuilding efforts led by figures like
                Zerubbabel and later expanded and renovated by Herod the Great.
                <h2>3. Herod's Expansion:</h2> Herod the Great, a Roman-appointed king of Judea, embarked on a
                massive building project to refurbish the Second Temple and expand the Temple Mount complex. His
                renovations included the construction of massive retaining walls around the Temple Mount, one of
                which is now known as the Western Wall. Herod's architectural achievements transformed Jerusalem
                into a grand city and enhanced the religious significance of the Temple Mount.
                <h2>4. Roman Conquest and Destruction:</h2> Despite Herod's efforts, the Second Temple was
                ultimately destroyed by the Romans in 70 CE during the Jewish-Roman War. The destruction of the
                temple and the subsequent exile of the Jewish people had a profound impact on Jewish history and
                identity. The Western Wall, as the last standing remnant of the Temple Mount, became a focal
                point for Jewish mourning, remembrance, and prayer.
                <h2>5. Muslim Rule and Jewish Connection:</h2> After the Muslim conquest of Jerusalem in the 7th
                century, the Temple Mount came under Muslim control, and various Islamic structures, including
                the Dome of the Rock and the Al-Aqsa Mosque, were built on the site. Despite changes in
                political control, the Western Wall remained a sacred site for Jews throughout the centuries,
                symbolizing their connection to Jerusalem and their aspirations for national restoration.
                <h2>6. Jewish Mourning and Prayer:</h2> After the destruction of the Second Temple, Jews mourned
                the loss of their sacred site and the exile of their people. The Western Wall became a place of
                pilgrimage and prayer, symbolizing the longing for the restoration of the Temple and the return
                of the Jewish people to their homeland. The term "Wailing Wall" originates from the sounds of
                lamentation and mourning associated with Jewish prayers at the site.
                <h2>7. Modern Practices:</h2> Today, the Western Wall remains a focal point of Jewish religious
                life and pilgrimage. It is divided into separate sections for men and women, with Jews from
                around the world gathering to pray, recite Psalms, and place written prayers in the crevices of
                the wall. It is also a site for bar mitzvah celebrations, where Jewish boys mark their coming of
                age by reading from the Torah.
                <h2>8. Modern Era:</h2> In the 20th century, Jerusalem and the Western Wall became flashpoints
                in the Arab-Israeli conflict. During the 1948 Arab-Israeli War, Jordan occupied East Jerusalem,
                including the Old City, and Jews were barred from accessing the Western Wall. However, during
                the Six-Day War in 1967, Israel regained control of Jerusalem, allowing Jews unrestricted access
                to the Western Wall once again. <br />
                Today, the Western Wall stands as a powerful symbol of Jewish history, faith, and resilience,
                attracting millions of visitors and pilgrims from around the world who come to pray, reflect,
                and connect with the ancient roots of their faith.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default WesternWailingWall