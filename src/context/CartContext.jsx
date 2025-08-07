import React, { createContext, useState } from "react";

const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
const addToCart = (producto) => {
setCartItems([...cartItems, producto])
}
const removeFromCart = (idProducto) =>{ 
//  remover del carrito
  console.log(idProducto)
}
const clearCart = () => {
  setCartItems([])
}
const getTotal = () => {
  // Devolver el total de la compra
}
  return (
    <CarritoContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal
      }}
    >
      {props.children}
    </CarritoContext.Provider>

  );
};

export default CarritoProvider;
