import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import Splitter from '../../Splitter/Splitter';
import church from "../../../Assets/slides/Cairo.jpg";
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const Cairo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='content'>
            <h1>About Cairo</h1>
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
                Cairo, the capital of Egypt, holds significance in biblical history, primarily in relation
                to events involving the Israelites and other ancient peoples of the region. However, it's
                important to note that while Egypt is mentioned numerous times in the Bible, Cairo as a
                specific city is not mentioned by name in the biblical text, as it was founded much later
                than the events recorded in the Bible.
                Here's a brief overview of Cairo's historical context in relation to biblical events:
                <h2>1. Egypt in the Bible:</h2>
                o Egypt is prominently featured in the Bible, especially in the Old Testament. It plays a
                significant role in the narratives of the patriarchs, the Exodus of the Israelites from slavery,
                and various interactions with neighboring nations. <br /><br />
                o Biblical figures such as Abraham, Joseph, Moses, and the prophet Jeremiah have connections to
                Egypt. Abraham traveled to Egypt during a famine (Genesis 12:10), Joseph was sold into slavery
                there and later rose to prominence (Genesis 37-50), and Moses led the Israelites out of Egypt
                during the Exodus (Exodus 1-15).
                Genesis 12:10 recounts an episode in the life of the patriarch Abraham (formerly known as Abram)
                during a time of famine. Here's an explanation of the verse:
                "In verse 10 of Genesis chapter 12, it states: 'Now there was a famine in the land. So Abram
                went down to Egypt to reside there as an alien, for the famine was severe in the land.'"
                Explanation: <br /><br />
                <h2>1. Famine in the Land:</h2>
                o The verse begins by noting that there was a famine in the land where Abraham was residing.
                Famine was a recurrent problem in the ancient Near East and posed significant challenges to
                people's livelihoods and survival. <br /><br />
                <h2>2. Abram's Response:</h2>
                o In response to the famine, Abram (later known as Abraham) decides to go down to Egypt with his
                family. The direction "down to Egypt" likely refers to the geographical descent from the
                elevated regions of Canaan to the lower-lying land of Egypt. <br /><br />
                <h2>3. Residing as an Alien:</h2>
                o Abram's decision to go to Egypt is described as residing there "as an alien" or "sojourner."
                This indicates that Abram and his family were not native to Egypt but were foreigners or
                travelers seeking temporary refuge from the famine in Canaan. <br /><br />
                <h2>4. Reason for Going to Egypt:</h2>
                o The verse explicitly states that Abram went to Egypt because the famine was severe in the land
                where he was living. This suggests that Abram sought relief from the famine by traveling to
                Egypt, where there may have been better prospects for finding food and sustenance.
                Overall, Genesis 12:10 provides a brief but significant insight into Abram's response to the
                famine in Canaan, highlighting his decision to seek refuge in Egypt as a temporary solution to
                the challenges posed by the severe famine in the region. This episode sets the stage for
                subsequent events in Abram's life and his interactions with the Egyptians, which are further
                elaborated upon in later chapters of Genesis. <br /><br />

                Genesis 37-50 narrates the story of Joseph, one of the twelve sons of Jacob (also known as
                Israel), and his rise to prominence in Egypt. Here's a brief explanation of this significant
                narrative: <br /><br />
                <h2>1. Joseph's Dreams and Betrayal:</h2>
                o The story begins with Joseph having dreams that symbolize his future greatness and leadership
                over his family. However, his brothers become jealous of him, especially after he shares these
                dreams with them. <br /><br />
                o Joseph's brothers plot against him and sell him into slavery to a passing caravan, who take
                him to Egypt. They deceive their father, Jacob, by presenting Joseph's torn and bloodied coat,
                leading Jacob to believe that Joseph has been killed by a wild animal. <br /><br />
                <h2>2. Joseph in Egypt:</h2>
                o In Egypt, Joseph is sold as a slave to Potiphar, an officer of Pharaoh. Despite being a slave,
                Joseph gains favor in Potiphar's household and is put in charge of managing his affairs.
                However, Joseph faces temptation when Potiphar's wife tries to seduce him, leading to false
                accusations against him and his imprisonment. <br /><br />
                <h2>3. Interpretation of Dreams:</h2>
                o While in prison, Joseph interprets the dreams of two fellow prisoners, Pharaoh's cupbearer and
                baker. His interpretations come true, but the cupbearer forgets about Joseph until Pharaoh has
                troubling dreams that no one can interpret. <br /><br />
                <h2>4. Rise to Power:</h2>
                o The cupbearer remembers Joseph and tells Pharaoh about his ability to interpret dreams.
                Pharaoh summons Joseph, who interprets his dreams as predicting seven years of abundance
                followed by seven years of famine. Impressed by Joseph's wisdom, Pharaoh appoints him as
                second-in-command over all of Egypt, tasked with overseeing preparations for the upcoming
                famine. <br /><br />
                <h2>5. Reconciliation with His Brothers:</h2>
                o During the famine, Joseph's brothers come to Egypt seeking food. They do not recognize Joseph,
                who has risen to a position of authority and dresses like an Egyptian official. Joseph tests his
                brothers' character and eventually reveals his identity to them, leading to emotional
                reconciliation and forgiveness. <br /><br />
                <h2>6. Reunion with His Father:</h2>
                o Joseph sends for his father, Jacob, and the rest of his family to join him in Egypt, where
                they settle in the land of Goshen. Jacob is overjoyed to be reunited with his son Joseph, whom
                he had believed to be dead. <br /><br />
                <h2>7. Joseph's Legacy:</h2>
                o The story concludes with Joseph's death at a ripe old age. Before his death, Joseph assures
                his brothers that God will one day lead the Israelites out of Egypt and back to the land
                promised to Abraham, Isaac, and Jacob. <br /><br />
                In summary, Genesis 37-50 recounts the remarkable journey of Joseph from being sold into slavery
                by his brothers to becoming a powerful leader in Egypt. It is a story of betrayal, forgiveness,
                and divine providence, demonstrating how God can use even the most challenging circumstances to
                fulfill His purposes and bring about redemption and reconciliation. <br /><br />

                Exodus 1-15 narrates the foundational events of the Israelites' liberation from slavery in Egypt
                under the leadership of Moses. Here's a brief explanation of this significant narrative: <br /><br />
                <h2>1. Enslavement in Egypt (Exodus 1):</h2>
                o The book of Exodus begins by recounting how the descendants of Jacob (Israel) multiplied in
                Egypt but were eventually enslaved by a new Pharaoh who feared their growing numbers. The
                Israelites suffer under harsh bondage and oppression. <br /><br />
                <h2>2. Birth and Call of Moses (Exodus 2-4):</h2>
                o Moses, born to a Levite family during a time when male Hebrew infants were being killed by
                Pharaoh's decree, is miraculously saved and raised in Pharaoh's household. <br /><br />
                o After fleeing Egypt following an incident where he kills an Egyptian taskmaster, Moses
                encounters God at the burning bush on Mount Horeb (Sinai). God commissions Moses to lead the
                Israelites out of Egypt and promises to be with him. <br /><br />
                <h2>3. Plagues and the Exodus (Exodus 5-12):</h2>
                o Moses and his brother Aaron confront Pharaoh and demand the release of the Israelites.
                However, Pharaoh refuses, prompting God to unleash a series of ten devastating plagues upon
                Egypt, culminating in the death of the firstborn in every Egyptian household during the
                Passover. <br /><br />
                o The Israelites are spared from the final plague by applying the blood of a lamb to their
                doorposts, as instructed by God. Following this plague, Pharaoh finally relents and allows the
                Israelites to leave Egypt. <br /><br />
                <h2>4. Crossing of the Red Sea (Exodus 13-15):</h2>
                o As the Israelites leave Egypt, God leads them with a pillar of cloud by day and a pillar of
                fire by night. Pharaoh changes his mind and pursues them with his army. <br /><br />
                o Trapped between the approaching Egyptian army and the Red Sea, the Israelites fear for their
                lives. But God miraculously parts the waters of the sea, allowing the Israelites to cross on dry
                ground. <br /><br />
                o As the Egyptians attempt to pursue them, the waters return and drown the entire Egyptian army,
                while the Israelites are safely delivered on the other side. The Israelites celebrate their
                deliverance with a song of praise, known as the "Song of Moses" (Exodus 15).
                In summary, Exodus 1-15 narrates the dramatic story of the Israelites' liberation from slavery
                in Egypt through a series of miraculous events orchestrated by God and mediated by Moses. It
                underscores themes of divine intervention, deliverance, and the fulfillment of God's covenant
                promises to His people. These events serve as foundational to Israelite identity and faith,
                shaping their understanding of God as their deliverer and redeemer. <br /><br />



                <h2>2. Exodus from Egypt:</h2>
                o The Exodus story is one of the most well-known biblical narratives involving Egypt. According
                to the Bible, the Israelites were enslaved in Egypt and eventually led out of bondage by Moses,
                crossing the Red Sea on their way to the Promised Land. <br /><br />
                o While the biblical account doesn't mention Cairo specifically, the city of Pi-Ramesses
                (associated with the biblical Raamses) is often identified as the location where the Israelites
                dwelled and labored as slaves (Exodus 1:11). <br /><br />
                <h2>3. Later Historical Periods:</h2>
                o Cairo, founded in the 10th century AD by the Fatimid dynasty, became a prominent city in the
                Islamic world, serving as the capital of various dynasties and empires over the centuries.
                o During the medieval period, Cairo was known for its cultural, economic, and intellectual
                achievements, becoming one of the greatest cities in the Islamic world. <br /><br />
                While Cairo itself is not mentioned in the Bible due to its later establishment, its broader
                region of Egypt plays a significant role in biblical narratives, particularly in relation to the
                Israelites' experiences and interactions with neighboring civilizations. The city's rich history
                as a center of civilization, culture, and power in the ancient world continues to be studied and
                celebrated today.
            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Cairo;