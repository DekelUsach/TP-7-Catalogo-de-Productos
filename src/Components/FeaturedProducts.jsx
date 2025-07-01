import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExampleCarouselImage from './ExampleCarouselImage';

export default function FeaturedProducts() {
  return (
    <Container>
    <Row>
      
      <Col xs={6}><ExampleCarouselImage src={'/src/assets/headphone.jpg'} /></Col>
      
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col xs={5}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
  )
}
