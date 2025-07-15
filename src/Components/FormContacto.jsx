import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function FormContacto() {
  return (
    <Col md={7} className="formulario-contacto">
      <h2 className="titulo-seccion">Envíanos un Mensaje</h2>

      <Form>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="nombre">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control type="text" name="nombre" />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="telefono" className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="tel" name="telefono" />
        </Form.Group>

        <Form.Group controlId="asunto" className="mb-3">
          <Form.Label>Asunto</Form.Label>
          <Form.Control type="text" name="asunto" />
        </Form.Group>

        <Form.Group controlId="mensaje" className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} name="mensaje" />
        </Form.Group>

        <Button variant="primary" type="submit" className="boton-enviar">
          Enviar Mensaje
        </Button>
      </Form>
    </Col>
  );
}
