import React, { useState } from 'react';
import axios from 'axios';
 
const ImageUploader = ({ onUpload }) => {
    const [file, setFile] = useState(null);
 
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
 
    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file to upload");
            return;
        }
 
        const formData = new FormData();
        formData.append('file', file);
 
        try {
            const response = await axios.post('https://travelback-thuw.onrender.com/api/upload', formData);
            console.log(response.data);
            onUpload(); 
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };
 
    return (
        <div className='uploader'>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};
 
export default ImageUploader;




