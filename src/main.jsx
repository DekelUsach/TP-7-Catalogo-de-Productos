import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MainLayout } from "./pages/layouts/MainLayout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CarritoProvider from "./context/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </StrictMode>
);
