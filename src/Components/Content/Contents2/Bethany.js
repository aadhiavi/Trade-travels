import React, { useState } from 'react';
import "../Contents.css";
import { Link } from 'react-router-dom';
import church from "../../../Assets/slides/bethany.jpg"
import Splitter from '../../Splitter/Splitter';
import { FaImage, FaVideo } from "react-icons/fa";
import MyComponent from '../ImageWithBackground';
import TextToSpeechButton from '../../../Content/TextToSpeechButton';

const pargraphStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

}


const Bethany = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='content'>
            <h1>About Bethany</h1>
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
                Bethany is a village located on the eastern slope of the Mount of Olives, about two miles (3 km)
                southeast of Jerusalem. It is mentioned several times in the New Testament, particularly in relation
                to Jesus' ministry and interactions with his followers. Here's an overview of Bethany with relevant
                Bible references and its historical context:
                <h2> 1. Biblical References: </h2>
                Bethany is best known as the home of Mary, Martha, and Lazarus, who were close friends of Jesus. In Luke
                10:38-42, Jesus visits the home of Mary and Martha, where Martha is busy with household chores while
                Mary sits at Jesus' feet, listening to his teaching. <br /><br />
                <b><u>Luke 10:38-42</u></b> recounts an episode in the life of Jesus where he visits the home of two sisters, Mary and
                Martha. Here's a breakdown of the passage:
                <h3> 1. Hospitality in Bethany: </h3> The passage begins by stating that Jesus and his disciples "came
                to a village where a woman named Martha opened her home to him" (Luke 10:38). This village is
                traditionally identified as Bethany, located near Jerusalem.
                <h3> 2. Martha's Busyness: </h3> As Jesus and his disciples are welcomed into the home, Martha becomes
                preoccupied with serving and preparing food. She is described as "distracted by all the preparations
                that had to be made" (Luke 10:40).
                <h3> 3. Mary's Response: </h3> Meanwhile, Martha's sister, Mary, takes a different approach. Instead of
                helping Martha with the preparations, Mary "sat at the Lord’s feet listening to what he said" (Luke
                10:39).
                <h3> 4. Martha's Complaint: </h3> Martha becomes frustrated with Mary's apparent lack of help and brings
                her concerns to Jesus. She says, "Lord, don’t you care that my sister has left me to do the work by
                myself? Tell her to help me!" (Luke 10:40).
                <h3> 5. Jesus' Response: </h3> In response to Martha's complaint, Jesus gently corrects her, saying,
                "Martha, Martha, you are worried and upset about many things, but few things are needed—or indeed only
                one. Mary has chosen what is better, and it will not be taken away from her" (Luke 10:41-42).
                <h3> 6. Meaning and Lesson: </h3> Jesus' words highlight the contrast between Martha's busyness and
                Mary's attentiveness. While Martha is concerned with practical matters, Mary prioritizes spending time
                with Jesus and listening to his teachings. Jesus commends Mary for choosing the "better" way,
                emphasizing the importance of spiritual nourishment and relationship over worldly distractions.
                <h3> 7. Symbolism:</h3> Martha and Mary represent two different approaches to discipleship. Martha
                symbolizes the active life of service and duty, while Mary symbolizes the contemplative life of devotion
                and discipleship. Jesus' affirmation of Mary's choice suggests that intimate fellowship with him is of
                paramount importance.
                This passage challenges readers to reflect on their own priorities and commitments. It reminds us of the
                value of setting aside time for spiritual reflection and listening to God's word amidst the busyness of
                life. Ultimately, Jesus' words in Luke 10:38-42 encourage us to seek a balance between service and
                devotion, recognizing the significance of both in the Christian life.

                Another significant event that takes place in Bethany is the resurrection of Lazarus. In John 11:1-44,
                Jesus receives word that Lazarus is ill, but he delays his arrival until Lazarus has died. When Jesus
                finally arrives in Bethany, he raises Lazarus from the dead, demonstrating his power over death. <br /><br />
                <b><u>John 11:1-44</u></b> recounts the remarkable event of Jesus raising Lazarus from the dead, showcasing his power
                over death and revealing his divinity. Here's a breakdown of the passage:
                <h3> 1. Illness of Lazarus (Verses 1-6): </h3> The narrative begins by introducing Lazarus, who is
                described as a close friend of Jesus, along with his sisters Mary and Martha. Lazarus becomes seriously
                ill, prompting his sisters to send word to Jesus, saying, "Lord, the one you love is sick" (John 11:3).
                Jesus responds by declaring that Lazarus' illness will not end in death but will bring glory to God.
                <h3> 2. Delay in Jesus' Arrival (Verses 7-16): </h3> Instead of immediately going to Bethany where
                Lazarus lived, Jesus remains where he is for two days. He explains to his disciples that Lazarus has
                already died, and he intends to go to him to awaken him from death. This delay is portrayed as part of
                God's plan to demonstrate his power and bring about faith in Jesus.
                <h3> 3. Arrival in Bethany (Verses 17-37): </h3>
                Jesus eventually arrives in Bethany, where he finds that Lazarus has been dead for four days. Martha,
                Lazarus' sister, goes out to meet Jesus and expresses her faith in his ability to heal. Jesus assures
                her that Lazarus will rise again, and Martha acknowledges her belief in the resurrection at the last
                day. Jesus then asks for Mary, and she comes to him, accompanied by mourners. Jesus is deeply moved by
                their grief and the sight of Mary weeping, demonstrating his compassion and humanity.
                <h3> 4. Jesus Raises Lazarus (Verses 38-44): </h3> Jesus approaches the tomb, which is a cave with a
                stone covering the entrance. He instructs the stone to be removed, despite Martha's initial hesitation
                due to the stench of decomposition. Jesus prays to the Father, thanking him for hearing his prayer and
                affirming his divine authority. He then calls out in a loud voice, "Lazarus, come out!" (John 11:43),
                and Lazarus emerges from the tomb, still wrapped in burial cloths. Jesus commands the bystanders to
                unbind Lazarus and let him go.
                <h3> 5. Impact and Significance: </h3> The resurrection of Lazarus serves as a pivotal moment in Jesus'
                ministry, affirming his identity as the resurrection and the life (John 11:25) and foreshadowing his own
                resurrection. This miraculous sign confirms Jesus' divinity and power over death, prompting many
                witnesses to believe in him. However, it also intensifies the opposition of the religious leaders, who
                become more determined to put Jesus to death.
                In summary, John 11:1-44 narrates the extraordinary event of Jesus raising Lazarus from the dead,
                underscoring his authority as the Son of God and the fulfillment of his mission to bring life and
                salvation to humanity.

                Bethany is also mentioned in connection with Jesus' triumphal entry into Jerusalem. In Matthew
                21:1-11, Mark 11:1-11, and Luke 19:28-44, Jesus sends his disciples to Bethany to fetch a donkey for him
                to ride into Jerusalem, fulfilling the prophecy of Zechariah 9:9. <br /><br /><br />
                Matthew 21:1-11, Mark 11:1-11, and Luke 19:28-44 narrate the account of Jesus' triumphal entry into
                Jerusalem, often referred to as Palm Sunday. Despite slight variations in details, the essence of the
                event remains consistent across the synoptic Gospels. Here's an explanation of each passage:
                <h3> 1. Matthew 21:1-11: </h3>
                In Matthew's account, Jesus instructs his disciples to go to a village where they will find a donkey
                and its colt tied, and he tells them to bring the animals to him. This fulfills the prophecy of
                Zechariah 9:9, which foretells the Messiah's entry into Jerusalem riding on a donkey. <br />
                The disciples follow Jesus' instructions, and they bring the donkey and its colt to him. Jesus sits on
                the colt as he enters Jerusalem. <br />
                A large crowd gathers, spreading their cloaks on the road and cutting branches from trees to spread on
                the road before him. The crowd chants, "Hosanna to the Son of David! Blessed is he who comes in the name
                of the Lord! Hosanna in the highest heaven!" (Matthew 21:9).
                <h3> 2. Mark 11:1-11: </h3>
                Mark's account is similar to Matthew's, with Jesus instructing his disciples to find a colt tied up in
                a village. Jesus tells them that if anyone questions them, they are to say, "The Lord needs it and will
                send it back here shortly" (Mark 11:3). <br />
                The disciples find the colt and bring it to Jesus. As he rides into Jerusalem, people spread their
                cloaks and leafy branches on the road, while others shout, "Hosanna! Blessed is he who comes in the name
                of the Lord! Blessed is the coming kingdom of our father David! Hosanna in the highest heaven!" (Mark
                11:9-10).
                <h3> 3. Luke 19:28-44: </h3>
                Luke's account also depicts Jesus sending two disciples ahead to find a colt tied in a village. They
                follow Jesus' instructions, and when questioned, they respond as instructed. <br />
                As Jesus approaches Jerusalem riding on the colt, the disciples begin to praise God joyfully, saying,
                "Blessed is the king who comes in the name of the Lord! Peace in heaven and glory in the highest!" (Luke
                19:38). <br />
                Some Pharisees in the crowd ask Jesus to rebuke his disciples, but Jesus responds, "I tell you, if
                they keep quiet, the stones will cry out" (Luke 19:40). <br />
                Jesus weeps over Jerusalem, foreseeing its future destruction due to its failure to recognize the time
                of God's coming to them. <br />
                In all three accounts, Jesus' triumphal entry into Jerusalem symbolizes his messianic kingship and the
                fulfillment of Old Testament prophecy. The crowds welcome him enthusiastically, but their understanding
                of Jesus' kingship is often misunderstood, expecting a political ruler to overthrow Roman rule rather
                than the spiritual redemption he brings. This event marks the beginning of Jesus' final week before his
                crucifixion and resurrection, known as Holy Week. <br />

                After Jesus' resurrection, Bethany is the place from which he ascends into heaven. In Luke 24:50-53
                and Acts 1:9-12, Jesus leads his disciples out to Bethany, blesses them, and ascends into heaven.
                <h2> 2. Historical Context: </h2>
                Bethany was a small village located along the main road between Jericho and Jerusalem. It was situated
                on the eastern side of the Mount of Olives, overlooking the Judean desert. <br />
                The name Bethany means "house of dates" or "house of figs," suggesting that the area was known for its
                agricultural produce. <br />
                Bethany's proximity to Jerusalem made it a convenient stopping point for travelers and pilgrims
                journeying to the holy city. Its location along major trade routes also contributed to its significance
                as a waypoint for travelers.
                <h2> 3. Religious Significance: </h2>
                Bethany holds religious significance for Christians as the site of several key events in the life and
                ministry of Jesus Christ. The raising of Lazarus from the dead, in particular, is seen as a powerful
                demonstration of Jesus' divinity and his power over death. <br />
                The village of Bethany serves as a reminder of Jesus' deep friendships and personal connections with
                his followers, as seen in his interactions with Mary, Martha, and Lazarus.
                <h2> 4. Modern-day Site: </h2>
                The modern-day village of al-Eizariya, located near the traditional site of Bethany, is believed by
                some to be the biblical Bethany. The site contains several churches and monasteries commemorating the
                events associated with Jesus' ministry in the area. <br />
                The Tomb of Lazarus, located in al-Eizariya, is a significant pilgrimage site for Christians, who
                believe it to be the burial place of Lazarus. <br />
                In summary, Bethany holds special significance in Christian tradition as the site of key events in the
                life and ministry of Jesus Christ, including the raising of Lazarus from the dead and Jesus' ascension
                into heaven. Its historical and biblical importance underscores its role as a sacred place in the story
                of Christianity.

            </div>
            <span onClick={() => setIsOpen(!isOpen)}>
                <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
            </span>
        </div>
    )
}

export default Bethany