import React from "react";
import Slider from "react-slick";
import '../styles/Carrousel.css'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
export default function Carrousel() {
  return(
  <Carousel interval={3000}>
  <Carousel.Item>
    <ExampleCarouselImage src={'/src/assets/banner2.png'} />
  </Carousel.Item>

  <Carousel.Item>
    <ExampleCarouselImage src={'/src/assets/banner3.png'} />
  </Carousel.Item>
  <Carousel.Item>
    <ExampleCarouselImage src={'/src/assets/banner1.png'} />
  </Carousel.Item>
</Carousel>
  )
}