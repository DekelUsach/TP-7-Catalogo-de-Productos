import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/MultipleItems.css';

export default function MultipleItems() {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [cargando, setCargando] = useState(true);

  const navegar = useNavigate();

  useEffect(() => {
    const obtenerProductosAleatorios = async () => {
      try {
        setCargando(true);
      
        // traemos 100 productos aleatorios y de esos 100 hacemos un sort y agarramos los primeros 4.
        const { data } = await axios.get('https://dummyjson.com/products?limit=100');
        
        if (!data.products || data.products.length === 0) {
          throw new Error("No se encontraron productos");
        }

        const productosAleatorios = [...data.products]
          .sort(() => 0.5 - Math.random())
          .slice(0, 4)
          .filter(producto => producto && producto.images && producto.images.length > 0);

        if (productosAleatorios.length === 0) {
          throw new Error("No se encontraron productos válidos");
        }

        setProductosDestacados(productosAleatorios);
      } catch (err) {
        console.error("Error al obtener productos aleatorios:", err);
        setProductosDestacados([]);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductosAleatorios();
  }, []);

  const manejarClicProducto = (producto) => {
    if (producto) {
      navegar("/productoDetalle", { state: { producto } });
    }
  };

  if (cargando) return <div className="multipleContainer">Cargando productos destacados...</div>;

  return (
    <Container className='multipleContainer'>
      <Row>
        <Col 
          className='primera' 
          onClick={() => manejarClicProducto(productosDestacados[0])}
        >
          <img 
            src={productosDestacados[0]?.images?.[0] || '/src/assets/headphone.jpg'} 
            alt={productosDestacados[0]?.title || 'Producto destacado'} 
            className="img-fluid"
          />
          <p>{productosDestacados[0]?.title || 'Producto sin nombre'}</p>
        </Col>
      </Row>
      <Row className='fotosAbajoContainer'>
        {productosDestacados.slice(1, 4).map((producto, indice) => (
          <Col 
            key={indice}
            className='fotosAbajo' 
            onClick={() => manejarClicProducto(producto)}
          >
            

            <img 
              src={producto?.images?.[0] || '/src/assets/headphone.jpg'} 
              alt={producto?.title || `Producto ${indice + 1}`} 
              className="img-fluid"
            />
            <p>{producto?.title || 'No se encuentra el nombre'}</p>
          </Col>
        ))}
       
      </Row>
    </Container>
  );
}