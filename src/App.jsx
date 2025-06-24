import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./pages/layouts/MainLayout";
import Productos from "./pages/Productos";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<MainLayout />} > 

        <Route index element={<Home />} /> 
        <Route path = "/productos" element={<Productos />} />
        <Route path = "/quienesSomos" element={<QuienesSomos />} />
        <Route path = "/contacto" element={<Contacto />} />

        <Route path="*" element={<h1> 404 </h1>} />
        
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
