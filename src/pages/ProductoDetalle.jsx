import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';
import "../styles/ProductoDetalle.css";
import Cargando from "../Components/Cargando";
import { useCart } from "../context/UseCart";

export default function ProductoDetalle() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
const {addToCart} = useCart();    
  useEffect(() => {
    const traerProducto = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProducto(res.data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar el producto");
      } finally {
        setCargando(false);
      }
    };

    traerProducto();
  }, [id]);
  if (cargando) return (
   <Cargando/>
  );
  
  if(error) return <p>Esto no esta funcionando</p>
  if (!producto) return <p className="text-center mt-5">No se encontró el producto ):</p>;
  

  return (
    <Container fluid className="p-0 m-0 hero" >
      <Row className="g-0 h-100 g-row">
        <Col
          xs={12}
          md={6}
          className="columna d-flex align-items-center justify-content-center bg-light imagen-producto p-0 m-0  me-auto"
        >
          {producto.images && producto.images.length > 0 && (
            <Image
              src={producto.images[0]}
              alt={producto.title}
              fluid
              rounded
              className='p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center hero-image rounded-0'
            />
          )}
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-start p-4 contenedor-info"
        >
          <h2 className="mb-3 w-100 text-center text-md-start title">{producto.title}</h2>

          <div className="w-100 mb-4 description">
            <p>{producto.description}</p>
          </div>

          <Row className="w-100 mb-2">
            <Col xs={6}><strong>Precio:</strong></Col>
            <Col xs={6}>${producto.price}</Col>
          </Row>
          <Row className="w-100 mb-2">
            <Col xs={6}><strong>Marca:</strong></Col>
            <Col xs={6}> {producto.brand || "No brand"}</Col>
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

          <div className="w-100 text-center text-md-start mb-4 row agregar-carrito ">
            <Button onClick={() => addToCart(producto)} variant="primary" size="lg" className="w-100 ">
              Agregar al carrito
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
