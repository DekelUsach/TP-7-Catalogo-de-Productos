import React from 'react'
import "../styles/Home.css";
import Carrousel from '../Components/Carrousel';
import FeaturedProducts from '../Components/FeaturedProducts';

export default function Home() {
  return (
    <>
        <Carrousel></Carrousel>
       <div className='featured'>Featured products</div>
        <FeaturedProducts/>
    
    
    
    </>
  )
}
