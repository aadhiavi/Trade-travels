import React, { useEffect, useRef, useState } from 'react';
import ColorThief from 'colorthief';
import './Contents.css'

const MyComponent = ({ src }) => {
  const [shadowStyle, setShadowStyle] = useState('');
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    if (img) {
      img.onload = () => {
        try {
          const colorThief = new ColorThief();
          const dominantColor = colorThief.getColor(img);

          if (dominantColor.length === 3) {
            const rgbColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;

            setShadowStyle(`0px -150px 120px 100px ${rgbColor}`);
          } else {
            console.error('Dominant color is not in the expected format:', dominantColor);
          }
        } catch (error) {
          console.error('Error extracting color:', error);
        }
      };

      img.src = src;
    }
  }, []);

  return (
    <div>
      <center >
        <img
          ref={imgRef}
          src={src}
          alt="Background"
          style={{
            boxShadow: shadowStyle
          }}
        />
        <span className='image-border'></span>
      </center>

    </div>
  );
}

export default MyComponent; 