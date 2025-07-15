import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import '../styles/MultipleItems.css';
import { NavLink } from 'react-router';
import { Nav } from 'react-bootstrap';

export default function MultipleItems() {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [cargando, setCargando] = useState(true);


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



  if (cargando) return (
    <div className="contenedor-multiple">
      <div className="cargando">
        <div className="spinner"></div>
        <p>Cargando productos destacados...</p>
      </div>
    </div>
  );

  return (
    <div className="contenedor-multiple">
      <div className="titulo-seccion">
        <h2>Productos Destacados</h2>
        <div className="linea-decorativa"></div>
      </div>
      
      <div className="galeria-productos">
      <NavLink to={`/productoDetalle/${productosDestacados[0].id}`}>
        <div 
          className="producto-principal" 
        >
          <div className="imagen-contenedor">
            <img 
              src={productosDestacados[0]?.images?.[0] || '/src/assets/headphone.jpg'} 
              alt={productosDestacados[0]?.title || 'Producto destacado'} 
            />
          </div>
          <div className="info-producto">
            <h3>{productosDestacados[0]?.title || 'Producto sin nombre'}</h3>
            <p>${productosDestacados[0]?.price || '0.00'}</p>
          </div>
        </div>
        </NavLink>
        <div className="productos-secundarios">
          {productosDestacados.slice(1, 4).map((producto, indice) => (
            <NavLink to={`/productoDetalle/${producto.id}`} key={indice}>

            <div 
              key={indice}
              className="producto-secundario"            >
              <div className="imagen-contenedor">
                <img 
                  src={producto?.images?.[0] || '/src/assets/headphone.jpg'} 
                  alt={producto?.title || `Producto ${indice + 1}`} 
                />
              </div>
              <div className="info-producto">
                <h4>{producto?.title || 'No se encuentra el nombre'}</h4>
                <p>${producto?.price || '0.00'}</p>
              </div>
            </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}