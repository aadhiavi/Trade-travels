import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../ContentTitles/ContentTitles.css';

const ContentTitles = () => {

  const [search, setSearch] = useState('');

  const titles = [
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
      title: "Last Supper Romm",
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


  const sortedTitles = titles.sort((a, b) => a.title.localeCompare(b.title));
  


  return (
    <div className='title'>
      <div className='searchinput'>
        <input
          placeholder='Search for the Holy Destination'
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className='searchedlist'>
        {
          sortedTitles.filter(Title => Title.title.toLowerCase().includes(search.toLowerCase())).map((Title,index) => {
            return (
            <NavLink key={index}  to={Title.link}>{Title.title}</NavLink>
            )
          })
        }
      </div>
    </div>
  )
}
export default ContentTitles