import React from "react";
import { CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import "./MainLayout.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBar from "../../Components/NavBar";
import FooterCustom from "../../Components/FooterCustom";

export function MainLayout() {
  return (
    <div className="app-layout">
      <NavBar/>

      <main className="app-content">
        <Outlet />
      </main>

<FooterCustom/>
    </div>
  );
}
