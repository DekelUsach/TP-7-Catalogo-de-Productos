import React, { useEffect, useState, useRef } from "react";
import { CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "axios";
import logo from '../assets/logo.png';

export default function NavBar() {
    const [categorias, setCategorias] = useState([]);
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
  
  
  
  
  
  
  return (
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
        <NavLink to="/" className="logo link" >
          <img src={logo} alt="Home" width="22" height="24" />
          Home
        </NavLink>

        <NavDropdown className="dropdown" title="Productos" menuVariant="dark">
          {categorias.map((cat, i) => (
            // tengo que usar href si o si porque el componente lo usa por defecto, no puedo agregar navlink to
          <NavDropdown.Item key={i} href={`/TP-7-Catalogo-de-Productos/productos/${cat.slug}`}>
          {cat.name}
        </NavDropdown.Item>
          ))}
        </NavDropdown>

        <NavLink className="link" to="/aboutUs" >
          AboutUs
        </NavLink>
        <NavLink className="link" to="/contacto" >
          Contacto
        </NavLink>
      </CNavbarBrand>

      <div className="side-menu" ref={sideMenuRef}>
        <NavDropdown className="dropdown" title="Productos" menuVariant="dark">
          {categorias.map((cat, i) => (
            <NavLink key={i} to={`/productos/${cat.slug}`}> 
            <NavDropdown.Item  >
              {cat.name}
            </NavDropdown.Item>
            </NavLink>
          ))}
        </NavDropdown>
        <NavLink className="link" to="/aboutUs" >
          AboutUs
        </NavLink>
        <NavLink className="link" to="/contacto" >
          Contacto
        </NavLink>
      </div>
    </CContainer>
  </CNavbar>
  )
}
