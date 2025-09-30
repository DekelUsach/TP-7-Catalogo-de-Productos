import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FormContacto from './FormContacto.js';

export default function InfoContacto() {
  return (
<Container className="contenido-principal">
        <Row className="mt-5 mb-5">

          <Col md={5} className="info-contacto">
            <h2 className="titulo-seccion">Información de Contacto</h2>
            <p className="descripcion-contacto">
              ¿Alguna preguntita? No dudes en consultar!
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
          <FormContacto/>

        </Row>


      </Container>  )
}
