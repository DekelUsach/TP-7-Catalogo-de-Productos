import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/AboutUs.css';

export default function AboutUs() {
  return (
    <Container fluid className="about-us-container">
      <Row className="ban-about">
        <Col className="hero-content text-center">
          <h1 className="ban-title">Nuestra Historia</h1>
          <p className="ban-subtitulo">Conectando a las personas con productos excepcionales desde hace mas de 10 años</p>
        </Col>
      </Row>

      <Row className="section historia">
        <Col md={6} className="historia-imagen"></Col>
        <Col md={6} className="historia-texto">
          <h2>Nuestro Comienzo</h2>
          <p>
            Todo comenzó en un pequeño garaje con una simple idea: crear una experiencia de compra
            en línea que fuera tan personal y confiable como visitar tu tienda local favorita.
            Lo que empezó como un proyecto de dos amigos apasionados por la tecnología y el diseño,
            se ha convertido en un destino confiable para miles de clientes.
          </p>
          <p>
            Hoy, seguimos manteniendo ese espíritu emprendedor mientras crecemos y nos adaptamos
            a las necesidades cambiantes de nuestros clientes.
          </p>
        </Col>
      </Row>

      <Row className="section valores">
        <Col className="text-center mb-5">
          <h2>Nuestros Valores Fundamentales</h2>
          <p className="section-subtitle ch">Lo que nos guía cada día</p>
        </Col>
        
        <Row className="valores-cards">
          <Col md={3} className="mb-4">
            <Card className="valor-card">
              <div className="valor-icon">⭐</div>
              <Card.Body>
                <Card.Title>Calidad</Card.Title>
                <Card.Text>
                  Seleccionamos cuidadosamente cada producto para garantizar la mejor experiencia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="valor-card">
              <div className="valor-icon">🤝</div>
              <Card.Body>
                <Card.Title>Confianza</Card.Title>
                <Card.Text>
                  Construimos relaciones duraderas basadas en la transparencia y honestidad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="valor-card">
              <div className="valor-icon">💡</div>
              <Card.Body>
                <Card.Title>Innovación</Card.Title>
                <Card.Text>
                  Buscamos constantemente nuevas formas de mejorar tu experiencia de compra.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="valor-card">
              <div className="valor-icon">❤️</div>
              <Card.Body>
                <Card.Title>Comunidad</Card.Title>
                <Card.Text>
                  Creemos en el poder de conectar personas a través de productos significativos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>

      <Row className="section equipo">
        <Col className="text-center mb-5">
          <h2 className='conoce'>Conoce a Nuestro Equipo</h2>
          <p className="section-subtitle ch">Las personas detrás de la experiencia</p>
        </Col>
        
        <Row className="equipo-cards">
          <Col md={4} className="mb-4 equipo-card-container">
            <Card className="equipo-card">
              <div className="equipo-foto equipo1"></div>
              <Card.Body className='card-personas'>
                <Card.Title>Dekel Usach</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fundador & CEO</Card.Subtitle>
                <Card.Text>
                  Apasionado por la tecnología y el funcionamiento que la gente no vé.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
       
        </Row>
      </Row>

      <Row className="section compromiso">
        <Col className="text-center">
          <h2>Nuestro Compromiso</h2>
          <p className="section-subtitle">Lo que puedes esperar de nosotros</p>
        </Col>
        
        <Row className="mt-5">
          <Col md={4} className="compromiso-item">
            <div className="compromiso-icon">🚚</div>
            <h3>Envío Rápido</h3>
            <p>Entrega en 24-48 horas en la mayoría de las áreas</p>
          </Col>
          
          <Col md={4} className="compromiso-item">
            <div className="compromiso-icon">✅</div>
            <h3>Garantía de Satisfacción</h3>
            <p>30 días para devoluciones sin complicaciones</p>
          </Col>
          
          <Col md={4} className="compromiso-item">
            <div className="compromiso-icon">💬</div>
            <h3>Soporte Excepcional</h3>
            <p>Equipo de atención al cliente disponible 24/7</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}