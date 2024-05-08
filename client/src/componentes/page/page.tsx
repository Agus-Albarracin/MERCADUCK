import React from 'react';
import "../page/page.css"
import pageImagen1 from "../page/img/pageImagen1.png"
import pageImagen2 from "../page/img/pageImagen2.png"

export const Page: React.FC = () => {
  return (
   <div className="ContainerBox" >
     <div className="box"  style={{backgroundImage: `url(${pageImagen1})`}}>  <p>Ofertas de temporada</p> <h1 style={{  fontSize:'40px'}}>Hasta 30% menos</h1> <p style={{  fontSize:'20px'}}>En Smartphones seleccionados</p>     <button onClick={() => { window.location.href = 'prodcutos'; }}>
      Compra Ahora
    </button>  </div>   

     <div className="box"  style={{backgroundImage: `url(${pageImagen2})`}}>  <p>Recién llegados</p> <h1>Lleva tu sonido <br /> dondequieras</h1> <p>Mejores marcas de audífonos</p>   <button onClick={() => { window.location.href = 'prodcutos'; }}>
      Compra Ahora
    </button> </div>  </div>   
    
  );
};

// Este es un componente funcional de React que renderiza una caja con cuatro párrafos.
export const BoxWithParagraphs: React.FC = () => {
  return (
    <div className="container-parraf">
      <div className="box-parraf ">
        {/* Cada párrafo contiene un texto específico */}
        <p>Recogida en la acera</p>
        <p>Envío gratis en compras de más de $[499]</p>
        <p>Precios bajos garantizados</p>
        <p>Disponible para ti 24/7 </p>
      </div>
    </div>
  );
};
