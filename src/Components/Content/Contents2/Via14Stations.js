import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Via Dolorasa 14 Station.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const Via14Stations = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Via Dolorasa 14 Station</h1>
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
                The Via Dolorosa, meaning "Way of Suffering" or "Way of Sorrows" in Latin, is a route in the
                Old City of Jerusalem that is traditionally believed to be the path that Jesus walked on the
                way to his crucifixion. Along this route, there are 14 stations that mark significant events
                or moments during Jesus' journey to Calvary. Here's an overview of the Via Dolorosa with
                relevant Bible references: <br />
                Let's delve a bit deeper into each of the 14 stations along the Via Dolorosa, providing more
                context and explanation:

                <h2>1. Pilate's Judgment Hall (Station 1):</h2>  here Jesus is brought before Pontius
                Pilate, the
                Roman governor of Judea, who ultimately condemns him to death despite finding no guilt in
                him (John 18:28-40, Matthew 27:11-26, Mark 15:1-15, Luke 23:1-25).

                <h2> 2. Jesus Takes Up His Cross (Station 2):</h2>  After his condemnation, Jesus takes up
                his cross,
                symbolizing his acceptance of the Father's will and his willingness to undergo the suffering
                of crucifixion (Matthew 27:31, Mark 15:20, Luke 23:26, John 19:17).

                <h2>3. Jesus Falls the First Time (Station 3):</h2>  Under the immense weight of the cross
                and
                weakened by the scourging, Jesus stumbles and falls for the first time, reflecting the
                physical and emotional agony he endures (Tradition).

                <h2> 4. Jesus Meets His Mother Mary (Station 4):</h2> Mary, the mother of Jesus, encounters
                her son on
                the road to Calvary. This meeting emphasizes the deep bond between Jesus and his mother and
                underscores her role as a witness to his suffering (Tradition).

                <h2> 5. Simon of Cyrene Helps Jesus Carry the Cross (Station 5):</h2> Simon of Cyrene is
                compelled by
                the Roman soldiers to carry Jesus' cross, demonstrating the unexpected assistance offered to
                Jesus during his journey to Calvary (Matthew 27:32, Mark 15:21, Luke 23:26).

                <h2> 6. Veronica Wipes the Face of Jesus (Station 6):</h2>  Tradition holds that a woman
                named Veronica
                wipes the face of Jesus with her veil, and his image is miraculously imprinted on it. This
                act of compassion and reverence highlights the humanity of Jesus and the reverence shown by
                the faithful (Tradition).

                <h2> 7. Jesus Falls the Second Time (Station 7): </h2> Despite his efforts, Jesus falls
                under the
                weight of the cross for the second time, signifying his increasing physical weakness and
                suffering (Tradition).

                <h2> 8. Jesus Meets the Women of Jerusalem (Station 8):</h2> Jesus encounters a group of
                women who
                mourn for him, and he speaks to them about the coming judgment. He urges them not to weep
                for him but for themselves and their children, foretelling the destruction of Jerusalem
                (Luke 23:27-31).

                <h2> 9. Jesus Falls the Third Time (Station 9):</h2>Jesus falls under the weight of the
                cross for the
                third time, symbolizing his utter exhaustion and the depth of his suffering as he nears the
                end of his earthly journey (Tradition).

                <h2> 10. Jesus is Stripped of His Garments (Station 10):</h2>  At Golgotha, Jesus' clothes
                are removed,
                and he is left naked before the crowd. This act of humiliation fulfills the prophecy in
                Psalms 22:18 and highlights the extent of Jesus' vulnerability and degradation (Matthew
                27:35-37, Mark 15:24, Luke 23:34, John 19:23-24).

                <h2> 11. Jesus is Nailed to the Cross (Station 11): </h2>Jesus is crucified at Golgotha, and
                nails are
                driven into his hands and feet. This pivotal moment marks the climax of Jesus' redemptive
                mission, as he willingly offers himself as a sacrifice for the sins of humanity (Matthew
                27:35-37, Mark 15:24-26, Luke 23:33, John 19:18-19).

                <h2>12. Jesus Dies on the Cross (Station 12):</h2> Jesus breathes his last words and dies on the
                cross, fulfilling the Father's plan for salvation. His death opens the way for
                reconciliation between God and humanity and demonstrates the depth of God's love for mankind
                (Matthew 27:50, Mark 15:37, Luke 23:46, John 19:30).

                <h2> 13. Jesus is Taken Down from the Cross (Station 13): </h2> Jesus' body is taken down from the
                cross and placed in the arms of his mother, Mary. This poignant moment of sorrow and
                compassion emphasizes the humanity of Jesus and the grief of those who loved him (Matthew
                27:57-58, Mark 15:43-46, Luke 23:50-53, John 19:38-42).

                <h2> 14. Jesus is Laid in the Tomb (Station 14):</h2>  Jesus' body is placed in a tomb, where he is
                buried. This station represents the culmination of Jesus' earthly journey and the
                anticipation of his resurrection, which brings hope and redemption to all who believe
                (Matthew 27:59-61, Mark 15:46, Luke 23:53-56, John 19:41-42).
                Each of these stations invites reflection on the suffering, sacrifice, and love of Jesus
                Christ, encouraging believers to contemplate the depth of God's mercy and the significance
                of Christ's redemptive work on the cross.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Via14Stations