import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Productos() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categoria}`);
        setProductos(response.data.products);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos ):");
      } finally {
        setCargando(false);
      }
      //acá, el finally sirve para que se ejecute siempre sin importar el try-catch. En este caso, debería poner el cargando en false una vez que se traen las cosas.
      //estaria genial que funcione, pero dummy-json es tan rápido que no llega a poner el cargando.
    };

    obtenerProductos();
  }, [categoria]);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Productos en: {categoria}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {productos.map(producto => (
          
          <div key={producto.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
            <h4>{producto.title}</h4>
            <p>{producto.description}</p>
            <p><strong>Precio:</strong> ${producto.price}</p>

            <strong>Marca:</strong> {producto.brand ? producto.brand : "No brand"}
            <p><strong>Rating:</strong> ⭐ {producto.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
