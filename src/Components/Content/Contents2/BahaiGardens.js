import React, { useState } from 'react';
import "../Contents.css";
import church from "../../../Assets/slides/bahai gardens.jpg"
import Splitter from '../../Splitter/Splitter';
import { Link } from 'react-router-dom';
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';


const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const BahaiGardens = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='content'>
            <h1>About Bahai Garden</h1>
            <div className='image'>
                <MyComponent src={church} />
            </div>
            <div className='infofile'>
                <div>
                <TextToSpeechButton/>
                </div>
                <div className='videoadio'>
                    <Link to='' className='videofile' ><FaVideo /></Link>
                    <Link to='/gallary' className='videofile' ><FaImage /></Link>
                </div>
            </div>
            <Splitter />
            <div id="readable-content" className='para' style={isOpen ? null : pargraphStyles}>
                The Bahai Gardens in Jerusalem are a stunning complex of terraced gardens that are an iconic feature of the city. Here are some key points about them:
                <h3> 1. Location: </h3> The Bahai Gardens are located on the slopes of Mount Carmel in Haifa, Israel, not in Jerusalem.
                <h3> 2. Purpose and Design: </h3> These gardens are a UNESCO World Heritage Site and are meticulously landscaped with geometric designs and vibrant floral arrangements. They are meant to symbolize the harmony between humanity, nature, and the divine.
                <h3> 3. Significance: </h3> The gardens are an important religious site for the Bahai Faith, a religion that originated in Iran in the 19th century. The founder of the Bahai Faith, Baha'u'llah, spent the last years of his life in Akka (Acre), near Haifa, and the gardens serve as a pilgrimage destination for Bahais worldwide.
                <h3> 4. Structure: </h3> The gardens consist of 19 terraces that extend almost a kilometer up the side of Mount Carmel. At the top of the gardens is the impressive Bahai Shrine of the Bab, a golden-domed structure that houses the remains of the Bab, one of the central figures of the Bahai Faith.
                <h3> 5. Visiting: </h3> The gardens are open to the public for guided tours, which offer visitors a chance to appreciate the beauty of the gardens and learn about their spiritual significance and design.
                <h3> 6. Cultural Importance: </h3> Beyond their religious significance, the Bahai Gardens are also admired for their architectural and horticultural beauty, attracting tourists and visitors from around the world.
                Here are additional details about the history and geographical context of the Bahai Gardens in Haifa:

                <h2> History: </h2>
                <h3> 1. Origin: </h3> The Bahai Gardens were established in stages starting in the early 20th century. The initial terraces were laid out in the 1920s and 1930s, with additional expansions and improvements made over the decades.
                <h3> 2. Development: </h3> The gardens were developed according to the vision of Shoghi Effendi, the Guardian of the Bahai Faith from 1921 to 1957. He oversaw the landscaping and expansion of the gardens, transforming them into the elaborate terraced design that exists today.
                <h3> 3. Bahai Shrine of the Bab: </h3> At the heart of the gardens is the Bahai Shrine of the Bab, completed in 1953. This shrine is the resting place of the Bab, who is considered a central figure in the Bahai Faith. The shrine's golden dome and exquisite architecture make it a focal point of the gardens.
                <h3> 4. Recognition: </h3> In 2008, the Bahai Gardens in Haifa, along with the adjacent Bahai Shrine of the Bab, were inscribed as a UNESCO World Heritage Site in recognition of their cultural and religious significance, as well as their outstanding universal value.

                <h2> Geographical Details: </h2>
                <h3> 1. Location: </h3> The Bahai Gardens are situated on the slopes of Mount Carmel, which overlooks the city of Haifa and the Mediterranean Sea. Mount Carmel is a prominent mountain range in northern Israel, known for its natural beauty and historical importance.
                <h3> 2. Terraced Design: </h3> The gardens are constructed in a series of 19 terraces that cascade down the mountainside, covering an area of about 200,000 square meters. The terraces are meticulously landscaped with a variety of plants, flowers, and trees, creating a harmonious blend of natural beauty and architectural elegance.
                <h3> 3. Panoramic Views: </h3> Due to their elevated location, the Bahai Gardens offer breathtaking panoramic views of the city of Haifa, the bay, and the surrounding landscape. Visitors can enjoy stunning vistas from various points within the gardens as they ascend or descend the terraces.
                <h3> 4. Accessibility: </h3> The gardens are accessible via guided tours, which provide insights into the history, symbolism, and design principles behind the Bahai Gardens. Visitors can explore different sections of the gardens while learning about their significance within the Bahai Faith and their broader cultural context. <br /><br />

                The Bahai Gardens in Haifa were built and developed by the Bahai community under the guidance and direction of Shoghi Effendi, who was the Guardian of the Bahai Faith from 1921 to 1957. Shoghi Effendi oversaw the planning, landscaping, and construction of the gardens, transforming the initial terraces laid out in the early 20th century into the elaborate and magnificent terraced gardens that exist today.
                The actual physical construction work was carried out by skilled workers and landscapers hired by the Bahai community, following the designs and plans set forth by Shoghi Effendi. The gardens were developed as a place of beauty and reverence, symbolizing the principles of the Bahai Faith, including unity, harmony, and peace.
                The Bahai Shrine of the Bab, which is located at the heart of the gardens and serves as their spiritual center, was completed in 1953 and is also part of the architectural and spiritual legacy built by the Bahai community in Haifa. <br /><br />


                <b>Overall, the Bahai Gardens in Haifa are a symbol of peace, unity, and religious devotion, as well as a striking example of garden design and landscaping. the Bahai Gardens in Haifa represent a blend of spiritual significance, architectural beauty, and natural splendor, set against the backdrop of Mount Carmel and overlooking the city and sea below. Their historical development and geographical setting make them a unique and cherished landmark in Israel.</b>
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default BahaiGardens;