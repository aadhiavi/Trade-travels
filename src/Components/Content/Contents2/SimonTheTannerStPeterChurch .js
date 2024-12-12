import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Simon The Tanner St Peters Church.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',
}

const SimonTheTannerStPeterChurch = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Simon The Tanner St Peters Church</h1>
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
                Simon the Tanner is not explicitly mentioned in the Bible in connection with a church in Jerusalem.
                However, there is a tradition and historical significance associated with Simon the Tanner in
                Christian tradition, particularly in Jerusalem. Here’s an exploration based on traditions and
                historical context:
                <h2>Biblical Reference: </h2>
                Simon the Tanner is mentioned in the New Testament in Acts 9:43 in connection with the Apostle Peter's
                activities in Joppa (modern-day Jaffa): <br />
                Acts 9:43 (ESV): "And he stayed in Joppa for many days with one Simon, a tanner." <br />
                This verse indicates that Peter stayed in Joppa with Simon the Tanner after performing miracles in the
                region.
                <h2>Historical and Church Tradition: </h2>
                <h3> 1. Church of Saint Peter in Gallicantu: </h3>
                In Christian tradition, there is a significant church in Jerusalem known as the Church of Saint Peter in
                Gallicantu (Latin for "cock crow"). This church is traditionally believed to be located on the hill
                where Peter denied Jesus three times before the rooster crowed (Mark 14:66-72, Matthew 26:69-75, Luke
                22:54-62, John 18:15-27).
                <h3> 2. Connection to Simon the Tanner: </h3>
                While Simon the Tanner is primarily associated with Joppa in the biblical narrative, Christian tradition
                has linked him symbolically with the Church of Saint Peter in Gallicantu. The connection is based on the
                idea of repentance and forgiveness, as Peter's denial and subsequent reconciliation with Jesus are
                central themes in the church's tradition.
                <h3> 3. Symbolism and Significance: </h3>
                The Church of Saint Peter in Gallicantu serves as a place of pilgrimage and reflection on Peter's
                journey of faith, from denial to repentance and restoration. It commemorates the events leading up to
                Jesus' crucifixion and Peter's role in the early Christian community.
                <h2>Geographical Details: </h2>
                <h3> Location of the Church: </h3>
                The Church of Saint Peter in Gallicantu is situated on the eastern slope of Mount Zion in Jerusalem,
                overlooking the Kidron Valley and the Old City. It offers panoramic views of Jerusalem and is near
                several other significant biblical and historical sites.
                <h3> Historical Context: </h3>
                Jerusalem holds immense significance in Christianity as the city where Jesus was crucified, buried, and
                resurrected. It was also the birthplace of the Christian church on Pentecost and a center of early
                Christian activities as described in the New Testament.
                <h2>Spiritual and Historical Significance: </h2>
                <h3> Christian Pilgrimage: </h3>
                The Church of Saint Peter in Gallicantu is an important pilgrimage site for Christians, reflecting on
                Peter's journey and the themes of faith, denial, forgiveness, and reconciliation.
                <h3> Early Christian Heritage: </h3>
                Jerusalem's historical and spiritual significance as the birthplace of Christianity and the setting for
                many biblical events underscores its importance in Christian theology and pilgrimage.

                <h2>Summary</h2>
                In summary, while Simon the Tanner is not directly associated with a church in Jerusalem in the biblical
                text, the Church of Saint Peter in Gallicantu symbolically connects with themes of repentance and
                reconciliation in Christian tradition. It stands as a significant site for pilgrimage and reflection on
                Peter's role in the early Christian community and his relationship with Jesus Christ.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default SimonTheTannerStPeterChurch 