import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/lazarusgrab.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}


const LazarusTomb = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Lazarus Tomb</h1>
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
                The tomb of Lazarus, the man whom Jesus famously raised from the dead, is a significant site
                in Christian tradition. Here's an overview of its biblical references and historical
                context:
                <h2>1. Biblical References:</h2>
                The story of Lazarus' resurrection is recounted in John 11:1-44. Lazarus, the brother of Mary
                and Martha, falls ill, and his sisters send word to Jesus, who is in another town. By the time
                Jesus arrives in Bethany, Lazarus has been dead for four days. Jesus commands the stone covering
                the entrance of the tomb to be removed and calls Lazarus forth from the grave, restoring him to
                life.
                <h2>2. Historical Context:</h2>
                Bethany, the village where Lazarus lived and was buried, is located on the eastern slope of
                the Mount of Olives, near Jerusalem. The exact location of the tomb is not specified in the
                Bible, but tradition places it in modern-day al-Eizariya, also known as Bethany. <br />
                The tomb of Lazarus is traditionally associated with a site called the Tomb of Lazarus, which
                is a cave located in al-Eizariya. The tomb is a significant pilgrimage site for Christians, who
                visit to commemorate the miraculous raising of Lazarus by Jesus.
                <h2>3. Religious Significance:</h2>
                The raising of Lazarus is one of the most well-known and dramatic miracles performed by Jesus
                during his earthly ministry. It demonstrates his power over death and foreshadows his own
                resurrection. <br />
                The tomb of Lazarus serves as a tangible reminder of this miraculous event and a symbol of
                Jesus' victory over death. It is a place of prayer, reflection, and pilgrimage for Christians
                seeking to deepen their faith and connect with the biblical narrative.
                <h2>4. Modern-day Site:</h2>
                The Tomb of Lazarus in al-Eizariya consists of a cave with several chambers, believed to be
                the actual tomb where Lazarus was buried. The site also includes a church, built over the tomb
                in the Byzantine period, and a Franciscan monastery. <br />
                The church at the Tomb of Lazarus contains a stone sarcophagus, traditionally believed to be
                the resting place of Lazarus. The site is managed by the Franciscan Custody of the Holy Land and
                welcomes visitors from around the world.
                In summary, the tomb of Lazarus is a significant biblical and historical site associated with
                the miraculous raising of Lazarus by Jesus. It holds religious significance for Christians as a
                place of pilgrimage and prayer, commemorating the power of Jesus over death and the hope of
                resurrection for believers.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default LazarusTomb