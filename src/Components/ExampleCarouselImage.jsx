import React from 'react';
import '../styles/Carrousel.css';

const ExampleCarouselImage = ({ src, alt = 'Banner promocional' }) => {
  return (
    <div className="contenedor-imagen-carrousel">
      <div className="mascara-imagen">
        <img 
          src={src} 
          alt={alt} 
          className="imagen-carrousel"
        
        />
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
