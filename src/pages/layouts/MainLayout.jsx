import React, { useEffect, useState } from "react";
import { CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./MainLayout.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "axios";

export function MainLayout() {
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/categories")
        setCategorias(response.data);

      } catch (error) {
        console.error("Error al obtener las categorías:", error);
        setCategorias([]);
      }
    };

    obtenerCategorias();
  }, []);
//Slug corresponde al nomnbre de la categoria que esta hecho para meter en el endpoint
  const handleCategoriaClick = (slug) => {
    navigate(`/productos/${slug}`);
  };

  return (
    <div className="app-layout">
      <CNavbar className="custom-navbar">
        <CContainer fluid>
          <CNavbarBrand>
            <NavLink to="/" className="logo link">
              <img src="/src/assets/logo.png" alt="Home" width="22" height="24" />
              Home
            </NavLink>

            <NavDropdown className="dropdown" title="Productos" menuVariant="dark">
              {Array.isArray(categorias) && categorias.map((cat, index) => (
                <NavDropdown.Item key={index} onClick={() => handleCategoriaClick(cat.slug)}>
                  {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavLink className="link" to="/aboutUs">AboutUs</NavLink>
            <NavLink className="link" to="/contacto">Contacto</NavLink>
          </CNavbarBrand>
        </CContainer>
      </CNavbar>

      <main className="app-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>© 2025 Mi Sitio</p>
      </footer>
    </div>
  );
}
