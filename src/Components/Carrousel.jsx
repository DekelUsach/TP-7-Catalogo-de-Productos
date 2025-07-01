import React from "react";
import Slider from "react-slick";
import '../styles/Carrousel.css'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
export default function Carrousel() {
  return(
  <Carousel>
  <Carousel.Item>
    <ExampleCarouselImage src={'/src/assets/banner1.jpg'} />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <ExampleCarouselImage src={'/src/assets/banner2.png'} />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <ExampleCarouselImage src={'/src/assets/banner3.png'} />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}