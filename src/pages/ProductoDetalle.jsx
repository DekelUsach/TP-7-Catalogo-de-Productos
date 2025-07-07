import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';
import "../styles/ProductoDetalle.css";

export default function ProductoDetalle() {
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto) return <p className="text-center mt-5">No se encontró el producto.</p>;

  return (
    <Container fluid className="p-0 m-0" >
      <Row className="g-0 h-100">
        <Col
          xs={12}
          md={6}
          className="columna d-flex align-items-center justify-content-center bg-light"
        >
          {producto.images && producto.images.length > 0 && (
            <Image
              src={producto.images[0]}
              alt={producto.title}
              fluid
              rounded
              className='p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center'
            />
          )}
        </Col>

        {/* Información del producto */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-start p-4"
         
        >
          <h2 className="mb-3 w-100 text-center text-md-start">{producto.title}</h2>

          <div className="w-100 mb-4">
            <p>{producto.description}</p>
          </div>

          <Row className="w-100 mb-2">
            <Col xs={6}><strong>Precio:</strong></Col>
            <Col xs={6}>${producto.price}</Col>
          </Row>
          <Row className="w-100 mb-2">
            <Col xs={6}><strong>Marca:</strong></Col>
            <Col xs={6}>{producto.brand}</Col>
          </Row>
          <Row className="w-100 mb-2">
            <Col xs={6}><strong>Rating:</strong></Col>
            <Col xs={6}>⭐ {producto.rating}</Col>
          </Row>
          <Row className="w-100 mb-2">
            <Col xs={6}><strong>Descuento:</strong></Col>
            <Col xs={6}>
              <Badge bg="success">{producto.discountPercentage}%</Badge>
            </Col>
          </Row>
          <Row className="w-100 mb-4">
            <Col xs={6}><strong>Stock:</strong></Col>
            <Col xs={6}>{producto.stock}</Col>
          </Row>

          <div className="w-100 text-center text-md-start agregar-carrito">
            <Button variant="primary" size="lg" className="w-100 ">
              Agregar al carrito
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
