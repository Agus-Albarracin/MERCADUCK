import React from 'react';
import Slider from '../slider/slider';
import images1 from './img/images2.png';
import images2 from './img/imagen1.png';
import "../slider/carrusel.css";

const Carrusel: React.FC = () => {
  const images: string[] = [
    images1,images2
  ];
  return (
      <Slider images={images}/>
  
  );
};
    // Agrega más objetos de imagen si es necesario
 

export default Carrusel;
;