import React from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const IncList = [
  'Economy airfare',
  'All Visa/Border taxes/Airport pickup if any',
  'Covid Coverage Insurance upto 69 Years',
  'Bottle of water each day',
  '3 times buffet Indian Menu (Breakfast/Lunch/Dinner)',
  '3*/4* accommodation Wi-Fi',
  'Wi-Fi enabled coach',
  'All Sightseeing tickets',
  'All Relevant Fees in Jordan/Israel/Egypt',
]

const ExcluList = [
  'Anything not mentioned in Inclusion',
  'Tips to the Guide and the Driver at Jordan, Isarel, Egypt',
  'RT PCR test if required in Land (Jordan, Israel and Egypt)',
  'Personal expenses',
  'Any medical Expenses',
]

const termList = [
  "You should hold valid Passport with minimum six months validity from the date of travel.",
  "For 70 and above of age additional amount of Rs. 7,000/- will be collected towards travel insurance.",
  "The cost of this will be Rs. 1,45,000/- per person on TWIN sharing basis. The tour is for 10 Nights/11 Days, visiting Jordan, lsrael, Palestine & Egypt, Turkey children lessthan 12 years will have to pay Rs. 74,999/-.",
  "If you prefer to stay in a single room an additional amount of Rs. 20,000/- will have to be paid.",
  "Differently abled people will not be in a position to join this tour as they need to walk long distances to visit each monument.",
  "The cost of the tour is inclusive of all charges except your personal expenses.",
  "You can carry up to US $ 5,000/- (equivalent to three Lach and fifty thousand rupees) for your own personal expenses.",
  "The climate will be warm. Hence you are advised to carry summer clothing.",
  "You are advised to carry all diagnostic and medication reports and medicines, if you are suffering from any illness.",
  'The cheque/ DD may be drawn in the favour of "Pick Your Trip".',
  "The first and last page of your passport along with a passport size photograph is required while you register with us.",
]
const guidList = [
  "Two boarding pass will be issued up to Muscat according to the Kuwait Airways /Oman Airways which you are travelling and second boarding pass for Amman. Passenger informed to keep the Amman boarding pass safely with them.",
  "To and from E-ticket should be kept safely.",
  "Keep your passport in hand bag while boarding at Chennai. Don't leave the passport in the counter or hand over to any stranger.",
  "Baggage tag to be received and fixed the backside of the ticket, produced at Amman and Chennai airport.",
  "Punctuality should be strictly maintained and every morning you are advised to assembled 10 minutes before the scheduled tour departure time. Also do report after each site visit, on time.",
  "Carry a plastic mug, as toilets in all the three countries usually don't provide it and only tissue paper is available.",
  "Listen to the narration given in all importent spots by your Tour leader/Paster and the clear your doubts if you any",
  "Carry a Bible, devotional song book, prayer boot etc.",
  "Never forget to take with you a Universal Electronic Adapter to charge your mobiles, digital cameras etc. because the nature of electronic plugs varies across different countries.",
  'Always look for the Team Leader/ the Tour Guide and obey their instructions,as they are the "reliable shepherds" of our tour program and their knowledge and experience will help you and each and every member in the make a peaceful, easy and memorable pilgrimage.',
  "Carry water bottles and fill it with water from the designated tape hotel.",
  "Do not caarry meat/fish items inside the bus",
  "Do not throw snacks, empty water bottles inside the bus.",
  "Paper and other waste materials to be put in the dust bin available inside the bus.",
  "Carry your Passport, wallet, gold or any valuable items in your hand bag and do not leave them in the bus or hotel.",
  "We advise you to hold foreign exchange with bills of transaction along with the passport",
  "Room Key to be kept safely with you or hand it over to the receptionist when leaving In case you lose the Hotel room Key, you will have to pay US$100 as fine. Do not consume any hot/cold drinks snacks from the fridge. This will be charged extra and is very costly.",
  "Take your shower by standing inside the bath tub and pull the curtain so that water does not flow into the room and wet the carpet. You will be fined for wetting the carpet and the room will start giving bad odour. This is not good for your health.",
]
const TermConditons = () => {
  const navigate = useNavigate()
  const handleAdmin = () => {
    navigate('/trade128')
  }

  return (
    <div>
      <Navbar />
      <div className="terms">
        <div className="container-terms">
          <h1>Inclusions</h1>
          <ol>
            {IncList.map((li, i) => {
              return (
                <li key={i}>{li}</li>
              )
            })}
          </ol>
        </div>
        <div className="container-terms">
          <h1>Exclusions</h1>
          <ol>
            {ExcluList.map((li, i) => {
              return (
                <li key={i}>{li}</li>
              )
            })}
          </ol>
        </div>
        <div className="container-terms">
          <h1>Terms & Conditions</h1>
          <ul>
            {termList.map((li, i) => {
              return (
                <li key={i}>{li}</li>
              )
            })}
          </ul>
        </div>
        <div className="container-terms">
          <h1 onClick={handleAdmin}>Important Guidlines</h1>
          <ul>
            {guidList.map((li, i) => {
              return (
                <li key={i}>{li}</li>
              )
            })}
          </ul>
        </div >
      </div>
      <Footer />
    </div>
  )
}

export default TermConditons