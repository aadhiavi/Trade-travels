import React from 'react';
import { Link } from 'react-router-dom';
import "./Tours.css";
import img from '../../Assets/wall.jpg'

const Tread = () => {
    return (
        <div className='treadbgm'>
            <div className="timeline">
                <img src={img} alt='img'></img>
                <div className="dayactivity left-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>1</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>Assemble at Hyderabad Airport</h3>
                        <ul>
                            <li>Deppart to amman</li>
                            <li>At Arrival finish immigration formalities</li>
                            <li>Visit <a href="/tours/madaba">Madaba and St. George's Church</a></li>
                            <li>Travel to hotel & check-in</li>
                            <li>Dinner & overnight stay (Amman) (Dinner)</li>
                        </ul>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className="dayactivity right-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>2</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>Breakfast at Hotel in Amman & check out</h3>
                        <ul>
                            <li>Visit <Link to='/tours/mountnebo'>Mt. Nebo</Link></li>
                            <li>Proceed to Sheik Hussain Border</li>
                            <li>Border crossing & proceed to <Link to='/tours/nazareth'>Nazareth</Link></li>
                            <li>Visit <Link to="/tours/marysWell">Mary's well</Link>, <Link to='/tours/basilica'>Basilica of Annunciation</Link></li>
                            <li>Visit Joseph's Workshop & Hotel check-in</li>
                            <li>Dinner & overnight stay (Nazareth) (Breakfast,Lunch & Dinner)</li>
                        </ul>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>



                <div className="dayactivity left-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>3</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>After Breakfast visit Mount of <Link to='/tours/attitudes'>Beattitudes</Link></h3>
                        <ul>
                            <li><Link to='/tours/tabgha'>Tabgha Church of Primacy of Peter</Link></li>
                            <li><Link to='/tours/mensa'>Mensa Christi, Capernaum</Link></li>
                            <li>Proceed to <Link to='/tours/galilean'>Gelilean boat ride</Link></li>
                            <li>Lunch at restaurant with Special Peter's fish</li>
                            <li>Yardenit on the <Link to='/tours/jordanriver'>Jordari River</Link></li>
                            <li>Return to Hotel, Dinner & overnight stay (Nazareth) (Breakfast, Lunch & Dinner)</li>
                        </ul>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>



                <div className="dayactivity right-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>4</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>Breakfast at Hotel in Nazareth & check-out <Link to='/tours/attitudes'>Beattitudes</Link></h3>
                        <ul>
                            <li>Visit <Link to='/tours/canaan'>Cana Church</Link>, <Link to='/tours/mtTabor'>Mt. Tabor site of Transfiguration</Link>, proceed to <Link to='/tours/haifa'>Haifa</Link> & <Link to='/tours/mtCarmel'>Mt. Carmel</Link></li>
                            <li>After Lunch proceed to <Link to='/tours/bahaiShrine'>Bahai Shrine</Link>, <Link to='/tours/muharaga'>Muharaga</Link>, <Link to='/tours/mediterranean'>Mediterranean Sea</Link>, <Link to='/tours/joppa'>Joppa city</Link>, <Link to='/tours/simonthetanner'>Simon the tanner (St. Peter's church)</Link></li>
                            <li>Proceed to <Link to='/tours/simonthetanner'>Bethlehem</Link></li>
                            <li>Dinner & overnight in Bethlehem. (Breakfast, Lunch & Dinner)</li>
                        </ul>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>



                <div className="dayactivity left-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>5</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>After breakfast visit <Link to='/tours/mountolives'>Mt. Olives</Link>, <Link to='#'>Ascension Church</Link>, <Link to='#'>Peter Noster</Link>, Walk<Link to='#'>Palm Sunday</Link> road</h3>
                        <ul>
                            <li>Visit chapel of <Link to='/tours/dominoues'>Dominous Flevit</Link>, <Link to='/tours/gardenGethsemane'>Gethsemane</Link>, <Link to='/tours/gardenTomb'>Garden Tomb(with service)</Link></li>
                            <li>After Lunch visit the <Link to='/tours/superRomm'>Last Supper room</Link></li>
                            <li>Visit <Link to='/tours/kingDavid'>Tomb of King David</Link>, <Link to='/tours/stPeter'>Church of St. Peter of Gallicantu</Link>, <Link to='/tours/caiphas'>House of Caiphas</Link></li>
                            <li>Dinner & overnight in Bethlehem. (Breakfast, Lunch & Dinner)</li>
                        </ul>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>



                <div className="dayactivity right-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>6</p>
                        </div>
                    </div>
                    <div className="dayinfo">
                        <h3>After breakfast visit <Link to='#'>Wailing Wall</Link></h3>
                        <ul>
                            <li>View <Link to='/tours/dome'>Dome Of The Rock (Temple Mount)</Link>, visit <Link to='#'>Yad Va Shem</Link></li>
                            <li>After Lunch visit to <Link to='/tours/shephardsfield'>Shepherd's field</Link></li>
                            <li>Dinner & overnight in Bethlehem. (Breakfast, Lunch & Dinner)</li>
                        </ul>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>



                <div className="dayactivity left-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>7</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>After breakfast visit <Link to=''>Anne's Church & Pools of Bethesda</Link></h3>
                        <ul>
                            <li><Link to='/tours/via14'>Via dolorosa 14 Stations</Link> and <Link to='/tours/pool'>Golgotha</Link></li>
                            <li>After Lunch visit to <Link to='/tours/bethany'> Bethany</Link>, <Link to='/tours/lazarus'>Lazarus' Tomb</Link>, <Link to='/tours/churchNativity'>Church of Nativity</Link>, <Link to='#'>The Grotto of St. Jerome</Link>, </li>
                            <li>Dinner & overnight in Bethlehem. (Breakfast, Lunch & Dinner)</li>
                        </ul>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>



                <div className="dayactivity right-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>8</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>After breakfast proceed to <Link to='#'>Jericho</Link></h3>
                        <ul>
                            <li>View <Link to='/tours/mtTemptation'>Mount of Temptation</Link>, <Link to='/tours/sycamore'>Sycamore tree</Link></li>
                            <li>After Lunch visit to <Link to='/tours/dead'>Dead sea</Link> & Float in it</li>
                            <li>Proceed to <Link to='/tours/taba'>Taba & enter into Egypt</Link></li>
                            <li>Proceed to Dinner & overnight stay in Taba. (Breakfast, Lunch & Dinner)</li>
                        </ul>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>



                <div className="dayactivity left-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>9</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>After breakfast visit <Link to='#'>St. Catherine Monastery</Link></h3>
                        <ul>
                            <li>Visit <Link to='/tours/moses'>Moses' Well</Link> & <Link to='/tours/burning'>Burning Bush</Link>, proceed to <Link to='/tours/cairo'>Cairo</Link></li>
                            <li>After Lunch on the way view <Link to='/tours/read'>Red sea</Link>, <Link to='/tours/maraelim'>Mara and Elim</Link>-<Link to='/tours/maraelimmoseswell'>Moses Wells</Link></li>
                            <li>Proceed to <Link to='/tours/taba'>Taba & enter into Egypt</Link></li>
                            <li>Pass the Wilderness of Sin & reach Rephadim</li>
                        </ul>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>



                <div className="dayactivity right-container">
                    <div className='icon'>
                        <div>
                            <small>Day</small>
                            <p>10</p>
                        </div>
                    </div>
                    <div className="dayinfo ">
                        <h3>After breakfast visit <Link to='/tours/pyramids'>Pyramids and Sphinx</Link></h3>
                        <ul>
                            <li>After Lunch proceed to <Link to='/tours/cairoMuseum'>Cairo Museum</Link>, visit <Link to='/tours/holy'>The Holy Family Church</Link></li>
                            <li>Drop at Airport for midnight flight (Breakfast, Lunch & Dinner)</li>
                        </ul>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tread;