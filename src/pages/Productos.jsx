import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Spinner, Alert, Button, Badge, NavLink } from "react-bootstrap";
import "../styles/Productos.css";

export default function Productos() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [imagenProducto, setImagenProducto] = useState({});

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categoria}`);
        setProductos(response.data.products);

        const indicesIniciales = {};
        response.data.products.forEach(p => {
          indicesIniciales[p.id] = 0;
        });
        setImagenProducto(indicesIniciales);

      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos ):");
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, [categoria]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenProducto(indicesAnteriores => {
        const nuevosIndices = { ...indicesAnteriores };
        productos.forEach(productoActual => {
          const total = productoActual.images.length;
          if (total > 0) {
            nuevosIndices[productoActual.id] = (indicesAnteriores[productoActual.id] + 1) % total;
          }
        });
        return nuevosIndices;
      });
    }, 4000);

    return () => clearInterval(intervalo);
  }, [productos]);

  if (cargando) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
      <Spinner animation="border" variant="light" />
      <span className="ms-3">Cargando productos...</span>
    </div>
  );
  
  if (error) return (
    <Container className="py-5">
      <Alert variant="danger" className="text-center">
        {error}
      </Alert>
    </Container>
  );

  return (
    <Container className="productos-container py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="titulo-categoria text-center mb-4">
            <span className="categoria-texto">{categoria}</span>
            <div className="linea-decorativa"></div>
          </h2>
        </Col>
      </Row>
      
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {productos.map((producto) => (
          <Col key={producto.id}>
            <Card className="producto-card h-100">
              <div className="imagen-contenedor">
                {producto.images.length > 0 ? (
                  <Card.Img 
                    variant="top" 
                    src={producto.images[imagenProducto[producto.id] || 0]} 
                    alt={`${producto.title}`}
                    className="producto-imagen"
                  />
                ) : (
                  <div className="sin-imagen d-flex align-items-center justify-content-center">
                    <span>Imagen no disponible</span>
                  </div>
                )}
              </div>
              
              <Card.Body className="d-flex flex-column">
                <Card.Title className="producto-titulo">{producto.title}</Card.Title>
                
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="success" className="descuento-badge">
                      {producto.discountPercentage}% OFF
                    </Badge>
                    <div className="producto-rating">
                      <span>⭐</span> {producto.rating}
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="producto-precio">
                      ${producto.price}
                    </div>
                    <div className="producto-marca">
                      {producto.brand || "Marca genérica"}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline-light" 
                    className="w-100 boton-detalle"
                  // Propio de react-bootstrap, tampoco puedo usar navlink to
                    href={`/TP-7-Catalogo-de-Productos/productoDetalle/${producto.id}`}
                    >
                    Ver detalle
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}