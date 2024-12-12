import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Dead Sea.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const DeadSea = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Dead Sea</h1>
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
                The Dead Sea, also known as the Salt Sea, is a remarkable geographical feature located in
                the Middle East, bordered by Jordan to the east and Israel and the West Bank to the west.
                Here's an overview of the Dead Sea with relevant Bible references, its history, and its
                benefits: <br /><br />
                <h2>1. Biblical References:</h2>
                o The Dead Sea is mentioned in several biblical passages, including Genesis 14:3, where it is
                referred to as the Salt Sea, and Genesis 19:24-26, which recounts the destruction of Sodom and
                Gomorrah near its shores. <br /><br />
                o The prophet Ezekiel also refers to the Dead Sea in Ezekiel 47:8-12, describing a vision of
                water flowing from the temple, which transforms the salty waters of the Dead Sea into fresh
                water, teeming with fish and vegetation. <br /><br />
                <h2>2. Historical Context:</h2>
                o The Dead Sea is one of the world's saltiest bodies of water, with a salinity level of around
                34%, making it nearly ten times saltier than the ocean. Its high salinity prevents most forms of
                aquatic life from flourishing in its waters. <br /><br />
                o The Dead Sea's mineral-rich mud and water have been renowned for their therapeutic properties
                for thousands of years. Ancient civilizations, including the Egyptians, Romans, and Israelites,
                valued the Dead Sea for its healing properties and used its minerals and mud for medicinal and
                cosmetic purposes. <br /><br />
                <h2>3. Modern-day Significance and Benefits:</h2>
                o The Dead Sea continues to be a popular destination for tourists and health enthusiasts seeking
                its therapeutic benefits. The mineral-rich waters and mud are believed to alleviate various skin
                conditions such as psoriasis, eczema, and acne, as well as joint pain and arthritis. <br /><br />
                o The unique composition of minerals found in the Dead Sea, including magnesium, calcium,
                potassium, and bromine, are thought to have rejuvenating effects on the skin, promoting
                detoxification and hydration. <br /><br />
                o The Dead Sea's mud is also used in spa treatments and skincare products worldwide, valued for
                its exfoliating, cleansing, and nourishing properties. <br /><br />
                o Beyond its therapeutic benefits, the Dead Sea is a natural wonder and a significant geological
                and ecological site, attracting researchers and scientists interested in studying its unique
                ecosystem and geological formations.
                In summary, the Dead Sea holds both historical and religious significance, as well as practical
                benefits for health and wellness. Its mineral-rich waters and mud have been treasured for their
                therapeutic properties for millennia, making it a valuable resource for both tourism and
                scientific research.


                The Red Sea is renowned for its unique ecosystem and mineral-rich waters, which offer several
                potential medicinal benefits. While direct exports and imports specifically related to medicinal
                products from the Red Sea may not be widely documented, here are some potential medicinal
                benefits associated with products derived from the Red Sea: <br /><br />
                <h3>1. Marine-derived Pharmaceuticals:</h3> The Red Sea is home to a diverse array of marine
                organisms, many of which have shown promise in pharmaceutical research. Compounds extracted from
                marine organisms such as sponges, corals, algae, and certain fish species have demonstrated
                pharmacological properties with potential applications in medicine, including anti-inflammatory,
                antimicrobial, and anticancer activities. <br /><br />
                <h3>2. Thalassotherapy:</h3> Thalassotherapy, or the therapeutic use of seawater and marine
                products, has long been practiced in coastal regions around the world, including areas adjacent
                to the Red Sea. Seawater contains a variety of minerals and trace elements, such as magnesium,
                calcium, potassium, and iodine, which are believed to have beneficial effects on the skin,
                circulation, and overall health. Thalassotherapy treatments may include seawater baths, wraps,
                and massages. <br /><br />
                <h3>3. Dead Sea Products:</h3> While not part of the Red Sea, the Dead Sea, which is connected
                to the Red Sea via the Gulf of Aqaba, offers a range of medicinal benefits. Dead Sea mud and
                salt are rich in minerals such as magnesium, calcium, potassium, and bromine, which are known
                for their therapeutic properties. Dead Sea mud is commonly used in skincare products for its
                exfoliating, cleansing, and hydrating effects, while Dead Sea salt baths are believed to
                alleviate various skin conditions and joint pain. <br /><br />
                <h3>4. Algal Products:</h3> The Red Sea is home to a diverse range of algae, some of which
                produce bioactive compounds with potential medicinal applications. These compounds have been
                studied for their antioxidant, anti-inflammatory, and antimicrobial properties, and may find use
                in pharmaceuticals, nutraceuticals, and cosmetic products.
                While the Red Sea region offers significant potential for the development of medicinal products
                and therapies, it's essential to conduct rigorous scientific research to validate the safety and
                efficacy of these treatments. Additionally, sustainable practices must be prioritized to ensure
                the conservation of the Red Sea's unique marine ecosystem for future generations.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default DeadSea