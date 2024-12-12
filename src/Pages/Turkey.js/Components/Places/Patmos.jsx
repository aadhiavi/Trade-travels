import React, { useState } from 'react';
import church from '../../../../Assets/7/patmos.jpg';
import ModelVideo from '../../../../Components/Content/ModelVideo';
import ModelGallary from '../../../../Components/Content/ModelGallary';
import '../../../../Components/Content/Contents.css'
import { FaImage, FaVideo } from 'react-icons/fa';
import Splitter from '../../../../Components/Splitter/Splitter';
import { Link } from 'react-router-dom';
import MyComponent from '../../../../Components/Content/ImageWithBackground';
import TextToSpeechButton from '../../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}

const Patmos = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modelVideo, setModelVideo] = useState(false)
    const [modelGallary, setModelGallary] = useState(false)

    const handleClickModelVideo = () => {
        setModelVideo(!modelVideo)
    }

    const handleClickModelGallary = () => {
        setModelGallary(!modelGallary)
    }

    return (
        <div className='content'>
            <h1>Patmos Islands History</h1>
            <div className='image'>
                <MyComponent src={church} />
            </div>
            <div className='infofile'>
                <div>
                    <TextToSpeechButton />
                </div>
                <div className='videoadio'>
                    <div>
                        <div className='videofile' ><FaVideo /></div>
                    </div>
                    <div>
                        <Link to='/gallary' className='videofile' ><FaImage /></Link>
                    </div>
                </div>
            </div>
            <Splitter />
            <div id="readable-content" className='para' style={isOpen ? null : pargraphStyles}>
                <h2>Patmos History</h2>
                According to ancient mythology, the island of Patmos was first named Litois, in honor of the Goddess Artemis who was also called Litoida because she was the daughter of Lito. Legend says that the island sunk into the sea and that Artemis, with the help of Apollo, managed to persuade Zeus to bring the island back to the surface. As a proof of devotion, the inhabitants of the island named it Litois. Patmos is also linked to another legend, the one of Orestes. It is said that he fled to the island after murdering his mother Clytemnestra, and was hunted by the Erynies.
                The island of Patmos is inhabited since 3,000 BC, but the identity of its first inhabitants is still unknown. Some believe that the Kares, the Leleges and the Pelasgous were the first settlers while some think that the Dorians were the first inhabitants, followed by the Ionians. Finds have excavated various buildings, cemeteries, fortresses, and evidence of an ancient acropolis, testifying the existence of a densely populated area in the past. During the Peloponnesian Wars, the Lacedemonians came to the island to escape from the Athenians. Ruins testify about the flourishing of the island during this period.
                However, the island of Patmos declined when the Romans conquered it. It was used as a place of exile for convicts. This is how Apostle John came to Patmos, exiled by the Roman Emperor Titus Flavius Domitianus in 95 AC. In Patmos, Apostle John conveyed the inhabitants to Christianity and wrote the Book of Revelation, the Apocalypse. Patmos then became a place of worshipping and pilgrimage and actually, the culture and history of Patmos are strongly connected to the Apocalypse of Saint John.
                <br />
                <h2>Byzantine times: Construction of the Monastery</h2>
                After the division of the Roman Empire in 284 AC, Christianity was officially recognized and the Byzantine Empire flourished. During the Byzantine times, the inhabitants of Patmos built a Grand Royal Basilica in honor of Saint John, where the monastery stands today. The island suffered from the Arab raids from the 6th to the 9th century AC, a period during which the Grand Basilica of Saint John was destroyed. In 1085, the Reverend Father Christodoulos was forced by the Turks to abandon its temple in Asia Minor and went to the island of Kos where he founded a monastery. There, he met the monk Arsenios Skinouris who asked him his help to build the Monastery of Saint John in Patmos.
                The construction of the monastery started in 1101, after the permission of the Byzantine Emperor Alexios Komninos the 1st, who gave to Christodoulos the complete authority over the island of Patmos. The fame of the monastery grew and a settlement started to expend around it. During the end of the 12th century, the island of Patmos was transformed into a large commercial center. The monastery acquired a second commercial vessel.
                In 1207, the Venetians conquered Patmos and the reign was given to the Duke of Naxos. Supported by the Duke of Naxos, the island became a semi-autonomous monastic state and gained great wealth and influence. In 1340, the Knights of Saint John who had seized Rhodes conquered the island of Patmos. In 1522, the Turks came to the island and appointed a representative on the island. After a while, they left the island, which they just forced to pay some taxes.
                <br />
                <h2>Ottoman occupation</h2>
                When the Turkish-Venetian Wars ended, tranquillity returned to Patmos and the island flourished, becoming once again an important commercial center. Massive fortifications were built around the monastery as a protection from the pirates. In 1655, Patmos was governed by the monks and prospered again. Its growth stopped in 1659, when Francesco Morosini, the leader of the Venetians, conquered and destroyed the island of Patmos. With shipping, commerce and the efforts of the inhabitants, Patmos regained its lost nobility, glamour and prosperity.
                During the early 18th century, the island's wealth was separated into secular and monastic entities. The Patmian School was founded by Makarios Kalogeras in 1713 near the cave of the Apocalypse. The Russians conquered the island in 1770, after the Turkish-Venetian War. The Greek Revolution started in 1821 and managed to gain the independence of Greece in 1832. Nevertheless, the treaty signed in London did not include the islands of the Dodecanese as part of the newly built Greek State and therefore fell again under Turkish occupation. One of the founders of Filiki Etaireia which took part in the Greek Revolution was Emmanuel Xanthos who was from Patmos.
                <br />
                <h2>Recent years</h2>
                The Italians occupied all the islands of the Dodecanese in 1912, with of course Patmos, and remained there until 1943, when the Germans took over the island. In 1945, the Germans left and the island of Patmos remained autonomous until 1948 when it joined the rest of independent Greece with the rest of the Dodecanese Islands. <br />
                <h2>Present Updates: </h2>
                Today, Ephesus is a popular archaeological site with well-preserved ruins, including the Library of Celsus and the Great Theatre. It’s part of the UNESCO World Heritage Site list. <br />
                <br />
                <h2 style={{ fontSize: "25px", fontWeight: '500', color: 'red' }}>Patmos Island: A Brief Overview</h2>
                <h2>Biblical References: </h2>
                Patmos Island is notably mentioned in the New Testament in Revelation 1:9. According to the text, the Apostle John was exiled to Patmos "because of the word of God and the testimony of Jesus." It was on this island that John received the visions recorded in the Book of Revelation, which detail the apocalyptic visions and messages to the Seven Churches of Asia Minor. <br />
                <h2>Historical Context: </h2>
                Patmos is a small, rocky island in the Aegean Sea, part of the Dodecanese group of islands. Its strategic location and rugged terrain made it suitable for exile and isolation during the Roman Empire. The island’s history dates back to ancient times, with evidence of habitation going back to the 3rd millennium BCE. It was known in antiquity for its production of a type of red dye and had a modest presence in the broader historical and cultural developments of the region.
                In the early Christian era, Patmos gained significance due to its association with the Apostle John. The Roman authorities used the island as a place of exile for political and religious dissidents. John's exile is believed to have occurred around the end of the 1st century CE, during the reign of Emperor Domitian.
                <h2>Present Status: </h2>
                Today, Patmos is a popular destination for pilgrims and tourists, largely due to its connection with the Book of Revelation. The island is known for its scenic beauty, including rocky landscapes and crystal-clear waters. The most significant site on the island is the Monastery of Saint John the Theologian, built in the 11th century. This monastery is a UNESCO World Heritage Site and contains important religious relics and manuscripts.
                Another notable site is the Cave of the Apocalypse (or Grotto of the Apocalypse), where it is traditionally believed that John received his visions. The cave is a revered location for Christian pilgrims and includes a church built over it.
                <br />
                <h2>Food and Culture: </h2>
                Patmos offers a range of traditional Greek cuisine with local specialties such as seafood, olives, and cheese. The island’s culture is deeply influenced by its Christian heritage, and many local festivals are connected to the Orthodox Church calendar. The architecture on Patmos features traditional whitewashed houses and narrow streets, contributing to its picturesque charm. <br />
                <h2>Travel Information: </h2>
                Patmos is accessible by ferry from the nearby islands of Kos, Rhodes, and Samos, as well as from the mainland port of Piraeus. There are also limited flights to the island, typically from other Greek islands or the mainland. Travel within the island is generally done by local buses, taxis, or rental vehicles, with most visitors exploring on foot or by bicycle.
                In summary, Patmos Island holds a special place in Christian history due to its association with the Apostle John and the Book of Revelation. Its historical significance, combined with its religious and cultural attractions, makes it a notable destination for both pilgrims and tourists.
                4o mini
                <br />
                <h2 style={{ fontSize: "25px", fontWeight: '500', color: 'red' }}>Biblical References to Patmos Island: </h2>
                <h2>1.	Revelation 1:9 (NIV):</h2>
                o	“I, John, your brother and companion in the suffering and kingdom and patient endurance that are ours in Jesus, was on the island of Patmos because of the word of God and the testimony of Jesus.” <br />
                o	This verse establishes Patmos as the place where John, the Apostle, was exiled. It highlights the island’s role as a location of John’s exile due to his Christian testimony and his proclamation of the word of God.
                <br />
                <h2>2.	Revelation 1:10 (NIV): </h2>
                o	“On the Lord’s Day I was in the Spirit, and I heard behind me a loud voice like a trumpet,” <br />
                o	John describes his experience on Patmos, where he was in a state of spiritual vision or trance, leading to the reception of the Revelation.
                <br />
                <h2>3.	Revelation 4:1 (NIV):</h2>
                o	“After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, ‘Come up here, and I will show you what must take place after this.’” <br />
                o	This verse continues the description of the visions John received while on Patmos, indicating the divine revelation that he experienced.
                <br />
                <h2>4.	Revelation 11:1 (NIV):</h2>
                o	“I was given a reed like a measuring rod and was told, ‘Go and measure the temple of God and the altar, and count the worshipers there.’” <br />
                o	The visions received on Patmos include detailed instructions and symbols related to the end times, reflecting the book’s apocalyptic nature.

                <br />
                <h2>5.	Revelation 17:1 (NIV):</h2>
                o	“One of the seven angels who had the seven bowls came and said to me, ‘Come, I will show you the punishment of the great prostitute, who sits by many waters.’” <br />
                o	This passage is part of the detailed apocalyptic imagery and prophecies revealed to John on Patmos.
                <br />
                <h2>6.	Revelation 21:10 (NIV):</h2>
                o	“And he carried me away in the Spirit to a mountain great and high, and showed me the Holy City, Jerusalem, coming down out of heaven from God.” <br />
                o	The vision of the New Jerusalem, among other apocalyptic visions, was part of what John experienced on Patmos.
                <h2 style={{ fontSize: "25px", fontWeight: '500', color: 'red' }}>Summary: </h2>
                Patmos Island is biblically significant as the location where John received the apocalyptic visions recorded in the Book of Revelation. The references to Patmos in Revelation emphasize its role as a place of divine revelation and spiritual significance, marking it as the setting for one of the most profound prophetic texts in the New Testament.

            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
            {
                modelVideo && <ModelVideo Srcvdo='' handleClickModelVideo={handleClickModelVideo} />
            }
            {
                modelGallary && <ModelGallary SlideImages='' handleClickModelGallary={handleClickModelGallary} />
            }
        </div>
    )
}

export default Patmos;