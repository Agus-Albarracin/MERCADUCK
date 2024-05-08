import React, { useState, useEffect } from 'react';
import "../slider/carrusel.css";

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='ContainerSlider'>    
    <p className='textContainer'> Súper precios en tus <br /> arículos favoritos </p>

    <button onClick={() => { window.location.href = 'prodcutos'; }}>
      Compra Ahora
    </button>
    
    <img className = "imagenSlider" id = "imagenSliderContainer" src={images[index]} alt={`Slide ${index}`} />
    </div>

  );
};

export default Slider;