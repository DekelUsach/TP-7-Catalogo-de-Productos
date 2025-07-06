import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Productos.css";

export default function Productos() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [imagenProducto, setImagenProducto] = useState({}); 
// Con esto hacemos que unicamente se ejecute cuando cambie la categoria, y no cada vez que se renderice el componente.
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categoria}`);
        setProductos(response.data.products);

        // ponemos que cada indice de imagen empieze en 0 para que se muestre siempre la primera imagen que traiga la base de datos.
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

  // con esta funcion (sacada de un repo de github y adaptada) hacemos que cada 5 segundos se cambie la imagen del producto.
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenProducto(indicesAnteriores => {
        const nuevosIndices = { ...indicesAnteriores };
        productos.forEach(productoActual => {
          const total = productoActual.images.length;
          if (total > 0) {
            nuevosIndices[productoActual.id] = (indicesAnteriores[productoActual.id] + 1) % total; //el total es para que vuelva a 0 el indice cuando llegue al final del array de imagenes para que vuelva a repetir el ciclo.
          }
        });
        return nuevosIndices;
      });
    },4000);

    return () => clearInterval(intervalo); // limpia el intervalo al desmontar el componente y pasar a otra categoria.
  }, [productos]);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="productos-container">
      <h2>Productos en: {categoria}</h2>
      <div className="productos-grid">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card">
            <h4>{producto.title}</h4>
            <p>{producto.description}</p>
            <p><strong>Precio:</strong> ${producto.price}</p>

            {producto.images.length > 0 ? (
              <img
                src={producto.images[imagenProducto[producto.id] || 0]}
                alt={`${producto.title}`}
                className="producto-imagen"
              />
            ) : (
              <p>No image available</p>
            )}

            <p><strong>Marca:</strong> {producto.brand || "No brand"}</p>
            <p><strong>Rating:</strong> ⭐ {producto.rating}</p>

            <div className="botonAñadir">
              <button>Hacer algo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
