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
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = '/src/assets/placeholder-banner.jpg';
          }}
        />
      </div>
    </div>
  );
};

export default ExampleCarouselImage;