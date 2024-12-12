import React from 'react';
import './AboutUs.css';
import { MdOutlineClose } from 'react-icons/md';
import img from '../../Assets/Success.gif';

const Overlay = ({ message, onClose }) => {
    return (
        <div className="overlay">
            <div className="overlay-content">
                <img src={img} alt="" height={60} width={60} />
                <p>{message}</p>
                <div className='closeIcon' onClick={onClose}><MdOutlineClose size={25} /></div>
            </div>
        </div>
    );
};

export default Overlay;