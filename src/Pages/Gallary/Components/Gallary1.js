import React, { useState } from 'react';
import img1 from '../../../Assets/Images/001.jpg';
import img2 from '../../../Assets/Images/002.jpg';
import img3 from '../../../Assets/Images/003.jpg';
import img4 from '../../../Assets/Images/004.jpg';
import img5 from '../../../Assets/Images/005.jpg';
import img6 from '../../../Assets/Images/006.jpg';
import img7 from '../../../Assets/Images/007.jpg';
import img8 from '../../../Assets/Images/008.jpg';
import img9 from '../../../Assets/Images/009.jpg';
import img10 from '../../../Assets/Images/010.jpg';
import img11 from '../../../Assets/Images/011.jpg';
import img12 from '../../../Assets/Images/012.jpg';
import img13 from '../../../Assets/Images/013.jpg';
import img14 from '../../../Assets/Images/014.jpg';
import img15 from '../../../Assets/Images/015.jpg';
import img16 from '../../../Assets/Images/016.jpg';
import img17 from '../../../Assets/Images/017.jpg';
import img18 from '../../../Assets/Images/018.jpg';
import img19 from '../../../Assets/Images/019.jpg';
import img20 from '../../../Assets/Images/020.jpg';
import img21 from '../../../Assets/Images/021.jpg';
import img22 from '../../../Assets/Images/022.jpg';
import img23 from '../../../Assets/Images/023.jpg';
import img24 from '../../../Assets/Images/024.jpg';
import img25 from '../../../Assets/Images/025.jpg';
import img26 from '../../../Assets/Images/026.jpg';
import { MdClose } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BiExpandAlt } from "react-icons/bi";
import '../Gallary.css'

const ImagesTour = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26];

const Gallery1 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsExpanded(false);
    };

    const handleExpandClick = () => {
        setIsExpanded(true);
    };

    const handleCloseClick = () => {
        setSelectedImage(null);
        setIsExpanded(false);
    };

    const handleNextImage = () => {
        const currentIndex = ImagesTour.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % ImagesTour.length;
        setSelectedImage(ImagesTour[nextIndex]);
    };

    const handlePrevImage = () => {
        const currentIndex = ImagesTour.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + ImagesTour.length) % ImagesTour.length;
        setSelectedImage(ImagesTour[prevIndex]);
    };

    return (
        <div className="images-container">
                {ImagesTour.map((image, index) => (
                    <div className='grid-image' key={index} onClick={() => handleImageClick(image)}>
                        <img src={image} alt={`Slide ${index}`} />
                        <span className='view'><BiExpandAlt /></span>
                    </div>
                ))}
        
            {selectedImage && (
                <div className="modal-overlay" onClick={handleCloseClick}>
                    <div className={`modal-content ${isExpanded ? 'expanded' : ''}`} onClick={e => e.stopPropagation()}>
                        <button className="nav-button prev-button" onClick={handlePrevImage}><FaChevronLeft /></button>
                        <img src={selectedImage} alt="Selected" onClick={handleExpandClick} />
                        <button className="nav-button next-button" onClick={handleNextImage}><FaChevronRight /></button>
                        <button className="close-button" onClick={handleCloseClick}><MdClose /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery1;
// import React from 'react'

// const Gallary1 = () => {
//   return (
//     <div>Gallary1</div>
//   )
// }

// export default Gallary1