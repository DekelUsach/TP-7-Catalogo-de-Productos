import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });
  const [error, setError] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(antes => ({ ...antes, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError(true);
      setEnviado(false);
    }
    else {
      console.log('Formulario enviado:', formData);
      setEnviado(true);
      setError(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    }
  };

  return (
    <Container fluid className="contacto-contenedor p-0">
      <Row className="banner-superior">
        <Col className="text-center contenido-banner">
          <h1 className="titulo-banner">Contáctanos</h1>
          <p className="subtitulo-banner">Estamos aquí para responder cualquier pregunta que tengas</p>
        </Col>
      </Row>

      <Container className="contenido-principal">
        <Row className="mt-5 mb-5">

          <Col md={5} className="info-contacto">
            <h2 className="titulo-seccion">Información de Contacto</h2>
            <p className="descripcion-contacto">
              ¿Tienes preguntas sobre nuestros productos o servicios? Completa el formulario y nuestro equipo te responderá lo antes posible.
            </p>

            <div className="detalles-contacto">
              <div className="item-contacto">
                <div className="icono-contacto">📍</div>
                <div>
                  <h3>Dirección</h3>
                  <p>Yatay 240</p>
                </div>
              </div>

              <div className="item-contacto">
                <div className="icono-contacto">📞</div>
                <div>
                  <h3>Teléfono</h3>
                  <p>+54 911 1234-5678</p>
                </div>
              </div>

              <div className="item-contacto">
                <div className="icono-contacto">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>contacto@dekelcorp.com</p>
                </div>
              </div>

              <div className="item-contacto">
                <div className="icono-contacto">🕒</div>
                <div>
                  <h3>Horario</h3>
                  <p>Lunes a Viernes: 9:00 - 17:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={7} className="formulario-contacto">
            <h2 className="titulo-seccion">Envíanos un Mensaje</h2>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="nombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-3">
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="telefono" className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="asunto" className="mb-3">
                <Form.Label>Asunto</Form.Label>
                <Form.Control
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="mensaje" className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                />
              </Form.Group>

              {error && (
                <Col className="text-center mb-3">
                  <div className="mensaje-error">
                    <h2>Error</h2>
                    <p>Por favor, completa todos los campos obligatorios.</p>
                  </div>
                </Col>
              )}



              {enviado && (
                <Col className="text-center">
                  <div className="mensaje-exito">
                    <h2>¡Mensaje Enviado!</h2>
                    <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
                  </div>
                </Col>
              )}
              <Button variant="primary" type="submit" className="boton-enviar">
                Enviar Mensaje
              </Button>

            </Form>

          </Col>
        </Row>


      </Container>


    </Container>
  );
}