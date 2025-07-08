import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExampleCarouselImage from './ExampleCarouselImage';
import '../styles/MultipleItems.css'

export default function MultipleItems() {
  return (
   <>
   <Container className='multipleContainer'>
      <Row>
        <Col className='primera'><img src="/src/assets/headphone.jpg" alt="" /> <p>Vive la nueva experiencia con los auriculares p200-x3z</p> </Col>
      </Row>
      <Row className='fotosAbajoContainer'>
      <Col className='fotosAbajo'><img src="/src/assets/headphone.jpg" alt="" /></Col>
      <Col className='fotosAbajo'><img src="/src/assets/headphone.jpg" alt="" /></Col>
      <Col className='fotosAbajo'><img src="/src/assets/headphone.jpg" alt="" /></Col>
      </Row>
    </Container>
   </>
  )
}
