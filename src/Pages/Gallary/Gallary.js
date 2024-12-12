import React, { useState } from 'react'
import './Gallary.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Gallary1 from './Components/Gallary1'

const Gallary = () => {
    const [view, setView] = useState(false)

    const handleView = () => {
        setView(!view )
    }

    return (
        <div>
            <Navbar />
            <h1>Gallary</h1>
            <div className="gallary">
                <button className="gallary-item" onClick={handleView}>Holyland Places</button>
                <button className="gallary-item">Turkey Churches</button>
            </div>
            
            {
                view ? <Gallary1 /> : ''
            }
            <Footer />
        </div>
    )
}

export default Gallary