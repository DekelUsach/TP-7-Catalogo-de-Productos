import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Carrousel from '../Components/Carrousel';
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";
import MultipleItems from "../Components/MultipleItems";
import Slider from "react-slick";

export default function Home() {
    const [categorias, setCategorias] = useState([]);
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
  console.log(categorias);
  return (
    <>
        <Carrousel></Carrousel>
       <div className='featured'>Featured products</div>
        <MultipleItems/>
    
    
    </>
  )
}
