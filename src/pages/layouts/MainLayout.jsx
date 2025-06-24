import React from "react";
import { CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import { NavLink } from "react-router-dom";  
import {Link, Outlet} from "react-router-dom"
import "./MainLayout.css";

export function MainLayout() {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand>
          <NavLink to="/">
            <img src="/src/assets/logo.png" alt="Home" width="22" height="24" />
            Home
          </NavLink>
          <NavLink to="/productos">
            Productos
          </NavLink>
          <NavLink to="/quienesSomos">
            Nosotros
          </NavLink>
          <NavLink to="/contacto">
            Contacto
          </NavLink>
        </CNavbarBrand>
      </CContainer>
      <Outlet/>
    </CNavbar>
  );
}
