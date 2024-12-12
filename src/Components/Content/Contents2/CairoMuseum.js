import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Cairo Museum.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const CairoMuseum = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Cairo Museum</h1>
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
                The Cairo Museum, officially known as the Egyptian Museum, is one of the most famous and important
                museums in the world, dedicated to showcasing the rich heritage and history of ancient Egypt. Here’s
                an in-depth look at the museum:
                <h2>Overview </h2>
                <b>• Name: </b> The Egyptian Museum (also known as the Museum of Egyptian Antiquities) <br />
                <b>• Location: </b> Tahrir Square, Cairo, Egypt <br />
                <b>• Established: </b> 1902 <br />
                <b>• Architect: </b> French architect Marcel Dourgnon <br />
                <b>• Type: </b> Archaeological museum <br />
                <b>• Collection Size: </b> Over 120,000 items <br />
                <h2>History </h2>
                <b>• Foundation: </b> The Egyptian Museum was established to house and protect Egypt's vast collection
                of
                ancient artifacts, which had previously been displayed in a number of different locations. <br />
                <b>• Building: </b> The museum building, an impressive example of neoclassical architecture, was
                constructed
                in 1902 and has been the primary repository of Egyptian artifacts since then. <br />
                <b>• New Grand Egyptian Museum (GEM): </b> The Egyptian Museum's extensive collection has necessitated
                the
                creation of a new museum, the Grand Egyptian Museum, near the Giza Pyramids, which is set to be the
                largest archaeological museum in the world upon completion. Many artifacts, including the entire
                Tutankhamun collection, are being moved there.
                <h2>Collections and Highlights</h2>
                <h3>1. Tutankhamun’s Treasures </h3>
                <b>o Golden Mask: </b> The iconic funerary mask of King Tutankhamun, made of solid gold and inlaid with
                semi-precious stones, is one of the most famous artifacts in the world. <br />
                <b>o Treasury: </b> The collection includes jewelry, chariots, thrones, and other items from
                Tutankhamun's
                tomb, discovered by Howard Carter in 1922.
                <h3>2. Royal Mummies Room </h3>
                <b>o Pharaohs: </b> The mummies of some of Egypt’s most famous pharaohs, including Ramses II, Seti I,
                and
                Hatshepsut, are housed in a specially designated room. <br />
                <b>o Conservation: </b> These mummies provide invaluable insights into ancient Egyptian burial practices
                and
                mummification techniques.
                <h3>3. Statues and Sculptures </h3>
                <b>o Khafre Enthroned: </b> A statue of Pharaoh Khafre, who built the second pyramid at Giza, depicts
                him
                seated with the protective god Horus as a falcon behind his head. <br />
                <b>o Other notable statues: </b> Colossal statues of Amenhotep III, various deities, and other pharaohs.
                <h3>4. Papyrus and Manuscripts </h3>
                <b>o Texts: </b> The museum houses numerous papyrus documents, including administrative records,
                literary
                texts, and the famous Book of the Dead, which provides insight into ancient Egyptian religion and
                administration.
                <h3>5. Jewelry and Daily Life Artifacts </h3>
                <b>o Jewelry: </b> The museum's collection includes a stunning array of ancient Egyptian jewelry made
                from
                gold, silver, and precious stones. <br />
                <b>o Artifacts: </b> Items used in daily life, such as pottery, tools, and clothing, provide a glimpse
                into the everyday lives of ancient Egyptians.
                <h3>6. Funerary Artifacts </h3>
                <b>o Coffins and Sarcophagi: </b> The museum has an extensive collection of elaborately decorated
                coffins and sarcophagi from various periods of Egyptian history. <br />
                <b>o Canopic Jars: </b> Containers used to hold the internal organs of the deceased, essential for the
                mummification process.
                <h2>Importance and Impact</h2>
                <b>• Cultural Heritage: </b> The Egyptian Museum plays a crucial role in preserving and showcasing
                Egypt's <br />
                ancient heritage, making it accessible to both scholars and the general public. <br />
                <b>• Educational Resource: </b> It serves as an educational resource, providing insights into ancient
                Egyptian civilization, religion, art, and daily life. <br />
                <b>• Tourism: </b> The museum is a major tourist attraction, drawing visitors from all over the world
                who
                come to see its unparalleled collection of ancient artifacts.
                <h2>Future Developments </h2>
                <b>• Grand Egyptian Museum: </b> The GEM, located near the Giza Pyramids, aims to house many of the
                artifacts currently in the Egyptian Museum. This new museum will offer state-of-the-art facilities
                and more space to display the vast collection. <br />
                <b>• Conservation Efforts: </b> Both museums are involved in ongoing conservation efforts to preserve
                and
                protect Egypt's priceless artifacts for future generations.
                <h2>Visiting Information </h2>
                <b>• Opening Hours: </b> Typically open daily from 9:00 AM to 5:00 PM, with extended hours on certain
                days. <br />
                <b>• Location: </b> Tahrir Square, easily accessible in the heart of Cairo. <br />
                <b>• Tickets: </b> Entry fees vary, with additional charges for special exhibits like the Royal Mummies
                Room. <br /><br />
                The Egyptian Museum in Cairo remains a cornerstone of archaeological study and public education
                regarding ancient Egypt, maintaining its status as a world-renowned institution.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default CairoMuseum