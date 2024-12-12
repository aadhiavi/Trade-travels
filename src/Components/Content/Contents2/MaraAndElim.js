import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Mara & Elim - Moses Well.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const MaraAndElim = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Mara & Elim</h1>
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
                The stories of Marah and Elim are found in the Book of Exodus in the Bible, specifically in
                Exodus 15:22-27. These events occurred during the Israelites' journey from Egypt to the
                Promised Land. Here's an overview:
                Marah (Exodus 15:22-25):

                <h2>1. Context:</h2> Following the miraculous crossing of the Red Sea and the celebration of the
                Song of Moses, the Israelites continue their journey through the wilderness.
                Elim (Exodus 15:27): <br />
                <b> Description:</b> After leaving Marah, the Israelites journey to Elim, where they find twelve
                springs and seventy palm trees. They camp there by the water. <br />
                <b> Abundance and Refreshment:</b> Elim stands in contrast to Marah. While Marah was a place of
                bitterness and scarcity, Elim is a place of abundance and refreshment. The twelve springs and
                seventy palm trees provide ample water and shade for the Israelites and their livestock. <br />
                <b> Significance:</b> Elim serves as a reminder of God's faithfulness and provision. It demonstrates
                that God not only meets the basic needs of His people but also blesses them abundantly.

                <h2>2. Arrival at Marah:</h2> After traveling for three days without finding water, the
                Israelites reach Marah, where they find water, but it is bitter and undrinkable.
                <h2>3. God's Intervention:</h2> The people grumble against Moses, questioning why he led them
                into a situation without water. In response, Moses cries out to God, who shows him a piece of
                wood. Moses throws the wood into the water, and miraculously, the water becomes sweet and
                drinkable.
                <h2>4. Symbolism:</h2> The name "Marah" means "bitter," reflecting the bitterness of the water.
                This event serves as a test of the Israelites' faith and a demonstration of God's provision and
                power. It also teaches the Israelites the importance of trusting in God's guidance and
                provision, even in difficult circumstances.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default MaraAndElim;