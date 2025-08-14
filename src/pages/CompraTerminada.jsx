import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/CompraTerminada.css';

export default function CompraTerminada() {
  return (
    <div className="compra-terminada-container">

      <div className="compra-banner">
        <h1 className="compra-titulo">¡Felicidades!</h1>
        <p className="compra-subtitulo">Tu compra se ha completado con éxito</p>
      </div>

      <Container className="compra-detalle">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <p className="mensaje">
              Gracias por confiar en nosotros. Te enviaremos un correo con todos los detalles de tu pedido.
            </p>
            <Button
              as={Link}
              to="/productos"
              variant="primary"
              size="lg"
              className="boton-volver"
            >
              Seguir Comprando
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
