import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./pages/layouts/MainLayout";
import Productos from "./pages/Productos";
import Home from "./pages/Home";
import QuienesSomos from "./pages/AboutUs";
import Contacto from "./pages/Contacto";
import AboutUs from "./pages/AboutUs";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:categoria" element={<Productos />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="productoDetalle" element={<ProductoDetalle />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
