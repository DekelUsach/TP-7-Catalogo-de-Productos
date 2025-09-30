import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contacto.css';
import InfoContacto from '../Components/InfoContacto.js';

export default function Contacto() {
 

  return (
    <Container fluid className="contacto-contenedor p-0">
      <Row className="banner-superior">
        <Col className="text-center contenido-banner">
          <h1 className="titulo-banner">Contáctanos</h1>
          <p className="subtitulo-banner">Estamos aquí para responder cualquier pregunta que tengas</p>
        </Col>
      </Row>

      <InfoContacto/>


    </Container>
  );
}