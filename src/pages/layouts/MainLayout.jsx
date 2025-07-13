import React, { useEffect, useState, useRef } from "react";
import { CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import "./MainLayout.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "axios";
import logo from '../../assets/logo.png';

export function MainLayout() {
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleRef = useRef(null);
  const sideMenuRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products/categories");
        setCategorias(data);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (toggleRef.current) {
      toggleRef.current.checked = false;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sideMenuRef.current &&
        toggleRef.current &&
        !sideMenuRef.current.contains(e.target) &&
        e.target !== toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        toggleRef.current.checked = false;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleCategoriaClick = (slug) => {
    navigate(`/productos/${slug}`);
  };

  return (
    <div className="app-layout">
      <CNavbar className="custom-navbar">
        <CContainer fluid>
          <input
            type="checkbox"
            id="nav-toggle"
            ref={toggleRef}
            className="nav-toggle-checkbox"
          />
          <label htmlFor="nav-toggle" className="nav-toggle-label">☰</label>

          <CNavbarBrand className="navbar-brand">
            <NavLink to="/" className="logo link">
              <img src={logo} alt="Home" width="22" height="24" />
              Home
            </NavLink>

            <NavDropdown className="dropdown" title="Productos" menuVariant="dark">
              {categorias.map((cat, i) => (
                <NavDropdown.Item key={i} onClick={() => handleCategoriaClick(cat.slug)}>
                  {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavLink className="link" to="/aboutUs">AboutUs</NavLink>
            <NavLink className="link" to="/contacto">Contacto</NavLink>
          </CNavbarBrand>

          <div className="side-menu" ref={sideMenuRef}>
            <NavDropdown className="dropdown" title="Productos" menuVariant="dark">
              {categorias.map((cat, i) => (
                <NavDropdown.Item key={i} onClick={() => handleCategoriaClick(cat.slug)}>
                  {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavLink className="link" to="/aboutUs">AboutUs</NavLink>
            <NavLink className="link" to="/contacto">Contacto</NavLink>
          </div>
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
