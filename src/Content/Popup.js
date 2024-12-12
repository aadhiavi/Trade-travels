import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SearchBar.css';
import { MdOutlineClose } from 'react-icons/md';

const Popup = ({onClose }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://travelback-thuw.onrender.com/api/images');
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {images.map(image => (
          <div key={image.id}>
            <img className='popupImage' src={image.url} alt={image.id} />
          </div>
        ))}
        <div className='clsicn' onClick={onClose}>
          <MdOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default Popup;



