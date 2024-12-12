import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Garden Tomb.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}


const GardenTomb = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Garden Tomb</h1>
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
                The Garden Tomb is an important and popular Christian site located outside the walls of the Old City of Jerusalem. It is one of the locations proposed as the possible site of Jesus Christ's burial and resurrection, offering an alternative to the more traditional site of the Church of the Holy Sepulchre.
                <h2> Overview </h2>
                •	Name: The Garden Tomb
                •	Location: East Jerusalem, near the Damascus Gate
                •	Significance: Considered by some Christians to be the site of Jesus' crucifixion, burial, and resurrection.
                <h2> Historical Context </h2>
                <h3> 1.	Discovery: </h3>
                o	The Garden Tomb was discovered in 1867 by a group of British explorers.
                o	General Charles Gordon, a British army officer, was particularly influential in promoting the site in the 1880s, leading to it being sometimes referred to as "Gordon's Calvary."
                <h3> 2.	Description: </h3>
                o	The site includes a rock-cut tomb, a large cistern, and a garden area that fits the description found in the Gospels of a garden near the place where Jesus was crucified and buried.
                o	The tomb has a rolling stone track and a weeping chamber, typical of Jewish tombs from the 1st century.
                <h2> Biblical References </h2>
                <h3> 1.	Crucifixion and Burial: </h3>
                o	Reference: John 19:41-42
                o	Passage: "At the place where Jesus was crucified, there was a garden, and in the garden a new tomb, in which no one had ever been laid. Because it was the Jewish day of Preparation and since the tomb was nearby, they laid Jesus there."
                o	Significance: This passage mentions the proximity of the crucifixion site to a garden and a new tomb, characteristics associated with the Garden Tomb.
                <h3> 2.	Resurrection: </h3>
                o	Reference: Matthew 28:1-7, Mark 16:1-8, Luke 24:1-12, John 20:1-18
                o	Passage: Descriptions of Mary Magdalene and other women visiting the tomb early on the first day of the week and finding it empty, with angels announcing Jesus' resurrection.
                o	Significance: These resurrection accounts are central to Christian faith, and the Garden Tomb offers a setting that aligns with these Gospel narratives.
                <h2> Archaeological and Historical Significance </h2>
                <h3> 1.	Tomb Features: </h3>
                o	The tomb in the Garden Tomb complex has two chambers: an outer weeping chamber and an inner burial chamber.
                o	It includes a groove where a rolling stone could have sealed the entrance, similar to the tomb described in the Gospels.
                <h3> 2.	Dating and Authenticity: </h3>
                o	Some archaeologists date the tomb to the 8th or 7th century BCE, earlier than the 1st century, which casts doubt on its identification as Jesus' tomb.
                o	However, the garden's tranquil setting and tomb's features continue to resonate with many pilgrims as a plausible and evocative site.
                <h2> Religious and Cultural Impact </h2>
                <h3> 1.	Pilgrimage Site: </h3>
                o	The Garden Tomb is a significant pilgrimage destination, especially for Protestant Christians.
                o	It provides a peaceful and reflective environment for prayer, worship, and meditation on the events of Jesus' death and resurrection.
                <h3> 2.	Ecumenical Appeal: </h3>
                o	Unlike the more ornate Church of the Holy Sepulchre, the Garden Tomb's simplicity and natural beauty appeal to many visitors seeking a place that feels closer to the Gospel descriptions.
                o	It attracts a diverse group of Christians from various denominations, emphasizing its broad ecumenical significance.
                <h2> Garden and Surroundings </h2>
                <h3> 1.	The Garden: </h3>
                o	The garden surrounding the tomb is well-maintained, featuring flowers, shrubs, and trees, creating a serene atmosphere for visitors.
                o	The presence of an ancient winepress and cistern suggests it was once part of a working agricultural area, consistent with Gospel descriptions.
                <h3> 2.	Golgotha: </h3>
                o	Nearby is a rocky escarpment that some believe could be Golgotha, the place of the skull, mentioned in the Gospels as the site of Jesus' crucifixion (Matthew 27:33, Mark 15:22, Luke 23:33, John 19:17).
                o	The appearance of the rock formation resembles a skull, lending credence to this identification for some believers.
                <h2> Visitor Experience </h2>
                <h3> 1.	Tours and Worship: </h3>
                o	Guided tours are available, offering historical and biblical insights about the site.
                o	Many visitors participate in worship services, communion, and personal prayer, finding spiritual enrichment in the serene environment.
                <h3> 2.	Accessibility: </h3>
                o	The Garden Tomb is located near major transportation routes, making it easily accessible for tourists and pilgrims.
                o	The site is designed to accommodate large groups, with spaces for gatherings and services.
                <h2> Summary </h2>
                The Garden Tomb in Jerusalem is a significant site for Christian pilgrims, offering a tranquil and evocative alternative to the Church of the Holy Sepulchre as the possible location of Jesus Christ's burial and resurrection. While its historical and archaeological authenticity is debated, its features align with biblical descriptions, and its serene setting provides a meaningful place for worship and reflection. The Garden Tomb continues to attract visitors from around the world, emphasizing its spiritual importance and ecumenical appeal.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default GardenTomb