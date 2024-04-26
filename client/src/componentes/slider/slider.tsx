import React, { useState, useEffect } from 'react';
import "../slider/carrusel.css";

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='ContainerSlider'>      
      <img className = "imagenSlider" src={images[index]} alt={`Slide ${index}`} />
    </div>
  );
};

export default Slider;