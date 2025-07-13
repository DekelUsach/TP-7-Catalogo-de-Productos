import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Carrousel from '../Components/Carrousel';
import axios from "axios";
import MultipleItems from "../Components/MultipleItems";

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
      <Carrousel categorias={categorias} />
      <MultipleItems />
    </>
  )
}