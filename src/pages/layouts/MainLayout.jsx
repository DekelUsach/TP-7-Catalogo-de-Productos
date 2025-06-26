import React from "react";
import { CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import { NavLink, Outlet } from "react-router-dom";
import "./MainLayout.css";

export function MainLayout() {
  return (
    <div className="app-layout">
      <CNavbar className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand>
            <NavLink to="/" className={"logo link"}>
              <img src="/src/assets/logo.png" alt="Home" width="22" height="24" />
              Home
            </NavLink>
            <NavLink className={"link"} to="/productos">Productos</NavLink>
            <NavLink className={"link"} to="/quienesSomos">Nosotros</NavLink>
            <NavLink className={"link"} to="/contacto">Contacto</NavLink>
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
