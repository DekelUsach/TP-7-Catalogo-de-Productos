import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

export default function Carrousel(categorias) {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <ExampleCarouselImage src={banner2} />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={banner3} />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={banner1} />
      </Carousel.Item>
    </Carousel>
  );
}
