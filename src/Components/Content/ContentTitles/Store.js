import { Link } from "react-router-dom";
import Be1 from "../../../Assets/Images/006.jpg"
import Be2 from "../../../Assets/Images/007.jpg"
import Be3 from "../../../Assets/Images/IMG-20240723-WA0011.jpg"
import Be5 from "../../../Assets/Images/008.jpg"
import Be7 from "../../../Assets/Images/010.jpg"
import Be8 from "../../../Assets/Images/011.jpg"


 const titles = [
  {
    title: "Bahai Gardens",
    link: "tours/bahaigardens",
  },
  {
    title: "House of Caiphas",
    link: "tours/houseofcaiphas",
  },
  {
    title: "Simon The Tanner St Peters Church",
    link: "tours/simonthetanner",
  },
  {
    title: "Nazareth",
    link: "tours/nazareth",
  },
  {
    title: "Mount Nebo",
    link: "tours/mountnebo",
  },
  {
    title: "Beattitudes in Jerusalem",
    link: "tours/attitudes",
  },
  {
    title: "Bahai Shrine",
    link: "tours/bahaiShrine",
  },
  {
    title: "Jordan River / The Baptism Site",
    link: "tours/jordanriver",
  },
  {
    title: "Bethlehem",
    link: "tours/bethlehem",
  },
  {
    title: "Western Wailing wall in Jerusalem",
    link: "tours/western",
  },
  {
    title: "Pool of Bethesda",
    link: "tours/pool",
  },
  {
    title: "Dome of the Rock Temple Mount",
    link: "tours/dome",
  },
  {
    title: "Shephards Field in Bethlehem",
    link: "tours/shephardsfield",
  },
  {
    title: "Via Dolorasa 14 Station",
    link: "tours/via14",
  },
  {
    title: "Golgotha",
    link: "tours/golgotha",
  },
  {
    title: "Bethany",
    link: "tours/bethany",
  },
  {
    title: "Lazarus Tomb",
    link: "tours/lazarus",
  },
  {
    title: "Church of Nativity",
    link: "tours/churchNativity",
  },
  {
    title: "Grotto",
    link: "tours/grotto",
  },
  {
    title: "Mount Temptation",
    link: "tours/mtTemptation",
  },
  {
    title: "Sycamore Tree",
    link: "tours/sycamore",
  },
  {
    title: "Dead Sea",
    link: "tours/dead",
  },
  {
    title: "Taba Border Crossing",
    link: "tours/taba",
  },
  {
    title: "Moses Well",
    link: "tours/moses",
  },
  {
    title: "Burning Bush",
    link: "tours/burning",
  },
  {
    title: "Cairo",
    link: "tours/cairo",
  },
  {
    title: "Read Sea",
    link: "tours/read",
  },
  {
    title: "Mara & Elim - Moses Well",
    link: "tours/maraelimmoseswell",
  },
  {
    title: "Pyramids & Sphinx",
    link: "tours/pyramids",
  },
  {
    title: "Cairo Museum",
    link: "tours/cairoMuseum",
  },
  {
    title: "Holy Mary Church in Egypt",
    link: "tours/holy",
  },
  {
    title: "Dominoues Flevit in Jerusalem",
    link: "tours/dominoues",
  },
  {
    title: "Garden of Gethsemane",
    link: "tours/gardenGethsemane",
  },
  {
    title: "Garden Tomb",
    link: "tours/gardenTomb",
  },
  {
    title: "Last Supper Romm",
    link: "tours/superRomm",
  },
  {
    title: "Tomb Of King David",
    link: "tours/kingDavid",
  },
  {
    title: "Church of St'Peter of Gallicantu",
    link: "tours/stPeter",
  },
  {
    title: "Mount Tabor Site of Transfiguration",
    link: "tours/mtTabor",
  },
  {
    title: "Haifa",
    link: "tours/haifa",
  },
  {
    title: "Mount Carmel",
    link: "tours/mtCarmel",
  },

  {
    title: "Muharaga",
    link: "tours/muharaga",
  },
  {
    title: "Mediterranean Sea",
    link: "tours/mediterranean",
  },
  {
    title: "Joppa City",
    link: "tours/joppa",
  },
  {
    title: "Tabgha Church of Primary of Peter",
    link: "tours/tabgha",
  },
  {
    title: "Mensa Christi , Capernaum",
    link: "tours/mensa",
  },
  {
    title: "Galilean Boad Ride",
    link: "tours/galilean",
  },
  {
    title: "Mary's Well",
    link: "tours/marysWell",
  },
  {
    title: "Basilica of Annunciation",
    link: "tours/basilica",
  },
  {
    title: "Madaba & St Georges Church",
    link: "tours/madaba",
  },
  {
    title: "David & Goliath Valley (Elah Valley)",
    link: "tours/davidGoliath",
  },
  {
    title: "Pillar of Salt - Loa's Wife",
    link: "tours/pillar",
  },
  {
    title: "River Jabbok - Jacob Wrestles With God",
    link: "tours/riverJabbok",
  },
  {
    title: "Elisha Springs in Jerusalem",
    link: "tours/elisha",
  }
  ,
  {
    title: "Canaan",
    link: "tours/canaan",
  },
  {
    title: "Mara & Elim",
    link: "tours/maraelim",
  },
  {
    title: "Mount Olives",
    link: " mountolives",
  }
]

export const sortedTitles = titles.sort((a, b) => a.title.localeCompare(b.title));

function Store(props) {
  const filteredData = sortedTitles.filter((el) => {
    if (props.input === '') {
      return el;
    }
    else {
      return el.title.toLowerCase().includes(props.input)
    }
  })

  return (
    <center>
      <div className='titlelist-onsearch'>

        {
          filteredData.map((Title,index) => {
            return (
              <div
              key={index}
               style={{marginBottom: "10px"}}>
                <Link style={{ color: "rgb(83, 54, 0)" }} to={Title.link}>{Title.title}</Link>
              </div>
            )
          })
        }


      </div>
    </center>
  )
}

export default Store



const titlesmenu = [
  {
    title: "Bahai Gardens",
    link: "bahaigardens",
  },
  {
    title: "House of Caiphas",
    link: "houseofcaiphas",
  },
  {
    title: "Simon The Tanner St Peters Church",
    link: "simonthetanner",
  },
  {
    title: "Nazareth",
    link: "nazareth",
  },
  {
    title: "Mount Nebo",
    link: "mountnebo",
  },
  {
    title: "Caiphas",
    link: "caiphas",
  },
  {
    title: "Beattitudes in Jerusalem",
    link: "attitudes",
  },
  {
    title: "Bahai Shrine",
    link: "bahaiShrine",
  },
  {
    title: "Jordan River / The Baptism Site",
    link: "jordanriver",
  },
  {
    title: "Bethlehem",
    link: "bethlehem",
  },
  {
    title: "Western Wailing wall in Jerusalem",
    link: "western",
  },
  {
    title: "Pool of Bethesda",
    link: "pool",
  },
  {
    title: "Dome of the Rock Temple Mount",
    link: "dome",
  },
  {
    title: "Shephards Field in Bethlehem",
    link: "shephardsfield",
  },
  {
    title: "Via Dolorasa 14 Station",
    link: "via14",
  },
  {
    title: "Golgotha",
    link: "golgotha",
  },
  {
    title: "Bethany",
    link: "bethany",
  },
  {
    title: "Lazarus Tomb",
    link: "lazarus",
  },
  {
    title: "Church of Nativity",
    link: "churchNativity",
  },
  {
    title: "Grotto",
    link: "grotto",
  },
  {
    title: "Mount Temptation",
    link: "mtTemptation",
  },
  {
    title: "Sycamore Tree",
    link: "sycamore",
  },
  {
    title: "Dead Sea",
    link: "dead",
  },
  {
    title: "Taba Border Crossing",
    link: "taba",
  },
  {
    title: "Moses Well",
    link: "moses",
  },
  {
    title: "Burning Bush",
    link: "burning",
  },
  {
    title: "Cairo",
    link: "cairo",
  },
  {
    title: "Read Sea",
    link: "read",
  },
  {
    title: "Mara & Elim - Moses Well",
    link: "maraelimmoseswell",
  },
  {
    title: "Pyramids & Sphinx",
    link: "pyramids",
  },
  {
    title: "Cairo Museum",
    link: "cairoMuseum",
  },
  {
    title: "Holy Mary Church in Egypt",
    link: "holy",
  },
  {
    title: "Dominoues Flevit in Jerusalem",
    link: "dominoues",
  },
  {
    title: "Garden of Gethsemane",
    link: "gardenGethsemane",
  },
  {
    title: "Garden Tomb",
    link: "gardenTomb",
  },
  {
    title: "Last Super Romm",
    link: "superRomm",
  },
  {
    title: "Tomb Of King David",
    link: "kingDavid",
  },
  {
    title: "Church of St'Peter of Gallicantu",
    link: "stPeter",
  },
  {
    title: "House of Caiphas",
    link: "caiphas",
  },
  {
    title: "Mount Tabor Site of Transfiguration",
    link: "mtTabor",
  },
  {
    title: "Haifa",
    link: "haifa",
  },
  {
    title: "Mount Carmel",
    link: "mtCarmel",
  },

  {
    title: "Muharaga",
    link: "muharaga",
  },
  {
    title: "Mediterranean Sea",
    link: "mediterranean",
  },
  {
    title: "Joppa City",
    link: "joppa",
  },
  {
    title: "Tabgha Church of Primary of Peter",
    link: "tabgha",
  },
  {
    title: "Mensa Christi , Capernaum",
    link: "mensa",
  },
  {
    title: "Galilean Boad Ride",
    link: "galilean",
  },
  {
    title: "Mary's Well",
    link: "marysWell",
  },
  {
    title: "Basilica of Annunciation",
    link: "basilica",
  },
  {
    title: "Madaba & St Georges Church",
    link: "madaba",
  },
  {
    title: "David & Goliath Valley (Elah Valley)",
    link: "davidGoliath",
  },
  {
    title: "Pillar of Salt - Loa's Wife",
    link: "pillar",
  },
  {
    title: "River Jabbok - Jacob Wrestles With God",
    link: "riverJabbok",
  },
  {
    title: "Elisha Springs in Jerusalem",
    link: "elisha",
  }
  ,
  {
    title: "Canaan",
    link: "canaan",
  },
  {
    title: "Mara & Elim",
    link: "maraelim",
  },
  {
    title: "Mount Olives",
    link: "mountolives",
  }
]


export const sortedTitlesMenu = titlesmenu.sort((a, b) => a.title.localeCompare(b.title));


export const beattitudes = [Be1,Be2,Be3,Be5,Be7,Be8]


