import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const ImageGallery = () => {
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
 
    const deleteImage = async (id) => {
        try {
            await axios.delete(`https://travelback-thuw.onrender.com/api/images/${id}`);
            fetchImages();
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };
 
    return (
        <div>
            <h2>Image Gallery</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map(image => (
                    <div className='uploader' key={image.id}>
                        <img src={image.url} alt={image.id} style={{ width: '270px', height: 'auto' }} />
                        <button onClick={() => deleteImage(image.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
 
export default ImageGallery;
