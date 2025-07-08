import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Productos.css";

export default function Productos() {
  const { categoria } = useParams();
  const navigate = useNavigate();

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

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="productos-container">
      <h2>Productos en: {categoria}</h2>
      <div className="productos-grid">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card">
            <h4>{producto.title}</h4>
            
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
              {/* Acá, hacemos que en el location.state se almacene producto para dsp poder agarrarlo en productodetalle
              Prefiero hacer esto antes que url por una cuestion de que ya tengo cargado todos los productos y no me conviene hacer una nueva query al server
              Ademas de que es evidentemente mas rapido ya que está todo cargado en memoria.
              */}
              <button onClick={() => navigate("/productoDetalle", { state: { producto } })}> 
                Ver detalle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
