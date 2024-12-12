import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/David & Goliath Valey (Elah Valley).jpeg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const DavidGoliathValey = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About David & Goliath Valey (Elah Valley)</h1>
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
                The valley associated with the David and Goliath story is commonly understood to be Elah Valley
                (also known as the Valley of Elah), a geographical location in Israel. Here’s an exploration of its
                geographical details, biblical references, and explanations:

                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3>
                Elah Valley is situated southwest of Jerusalem, between the Judean Mountains and the coastal plains of
                Israel. It runs approximately 15 miles (24 kilometers) west of Bethlehem and 9 miles (14 kilometers)
                south of the city of Beit Shemesh.
                <h3> 2. Topography: </h3>
                The valley is characterized by its wide expanse, rolling hills, and fertile agricultural land. It is
                known for its historical significance and biblical associations, particularly with the story of David
                and Goliath.

                <h2>Biblical References: </h2>
                <h3>David and Goliath (1 Samuel 17):</h3>
                1 Now the Philistines gathered their forces for war and assembled at Sokoh in Judah. They pitched camp
                at Ephes Dammim, between Sokoh and Azekah. <br />
                2 Saul and the Israelites assembled and camped in the Valley
                of Elah and drew up their battle line to meet the Philistines. <br />
                3 The Philistines occupied one hill and
                the Israelites another, with the valley between them. <br />

                4 A champion named Goliath, who was from Gath, came out of the Philistine camp. His height was six
                cubits and a span. <br />
                5 He had a bronze helmet on his head and wore a coat of scale armor of bronze
                weighing five thousand shekels; <br />
                6 on his legs he wore bronze greaves, and a bronze javelin was slung on
                his back. <br />
                7 His spear shaft was like a weaver’s rod, and its iron point weighed six hundred shekels. His
                shield bearer went ahead of him. <br />

                8 Goliath stood and shouted to the ranks of Israel, “Why do you come out and line up for battle? Am I
                not a Philistine, and are you not the servants of Saul? Choose a man and have him come down to me.  <br />
                9 If
                he is able to fight and kill me, we will become your subjects; but if I overcome him and kill him, you
                will become our subjects and serve us.” <br />
                10 Then the Philistine said, “This day I defy the armies of
                Israel! Give me a man and let us fight each other.” <br />
                11 On hearing the Philistine’s words, Saul and all
                the Israelites were dismayed and terrified. <br />

                12 Now David was the son of an Ephrathite named Jesse, who was from Bethlehem in Judah. Jesse had eight
                sons, and in Saul’s time he was very old. <br />
                13 Jesse’s three oldest sons had followed Saul to the war: The
                firstborn was Eliab; the second, Abinadab; and the third, Shammah. <br />
                14 David was the youngest. The three
                oldest followed Saul, <br />
                15 but David went back and forth from Saul to tend his father’s sheep at
                Bethlehem. <br />

                16 For forty days the Philistine came forward every morning and evening and took his stand. <br />

                17 Now Jesse said to his son David, “Take this ephah of roasted grain and these ten loaves of bread for
                your brothers and hurry to their camp. <br />
                18 Take along these ten cheeses to the commander of their unit.
                See how your brothers are and bring back some assurance from them. <br />
                19 They are with Saul and all the men
                of Israel in the Valley of Elah, fighting against the Philistines.” <br />

                20 Early in the morning David left the flock in the care of a shepherd, loaded up and set out, as Jesse
                had directed. He reached the camp as the army was going out to its battle positions, shouting the war
                cry. <br />
                21 Israel and the Philistines were drawing up their lines facing each other. <br />
                22 David left his
                things with the keeper of supplies, ran to the battle lines and asked his brothers how they were. <br />
                23 As
                he was talking with them, Goliath, the Philistine champion from Gath, stepped out from his lines and
                shouted his usual defiance, and David heard it.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default DavidGoliathValey;