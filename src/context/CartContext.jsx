import React, { createContext, useState, useEffect} from "react";

const CartContext = createContext();

const CarritoProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
      const itemsGuardados = localStorage.getItem("cartItems");
      
      return itemsGuardados ? JSON.parse(itemsGuardados) : [];

  });

  useEffect(() => {
   
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   
  }, [cartItems]);

  const addToCart = (producto) => {
    setCartItems((prev) => [...prev, producto]);
  };

  const removeFromCart = (idProducto) => {
    setCartItems((prev) => prev.filter((p) => p.id !== idProducto));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  

  const getTotal = () => {
    if (cartItems.length === 0) return 0;
    return cartItems.reduce((precioTotalItems, itemActual) => {
      const precio = typeof itemActual.price === 'number' ? itemActual.price : 0;
      return precioTotalItems + precio;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export { CartContext };
export default CarritoProvider;