// src/components/ExampleCarouselImage.js
import React from 'react';
import Image from 'react-bootstrap/Image';
const ExampleCarouselImage = ({ src, alt = '' }) => {
  return (
    <img src={src} alt={alt} />
  );
};

export default ExampleCarouselImage;
