import React, { createContext, useState, useEffect } from "react";

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
    setCartItems((itemsGuardados) => [...itemsGuardados, producto]);
  };

  const removeFromCart = (idProducto) => {
    setCartItems((productosCargados) => {
      // lo que hace findIndex es basicamente buscar en el array con la condicion que se pide en la funcion. en este caso, le paso el producto al que le hago click y quiero eliminar,
      // y con su id busco ese producto en el carrito. En caso de que no lo encuente, devuelve -1, y hago un return del mismo array sin modificar.
      const productoARemover = productosCargados.findIndex(
        (p) => p.id === idProducto
      );
      if (productoARemover === -1) return productosCargados;
      const nuevaLista = [...productosCargados];
      // productoARemover indica el índice del prodcuto que hay que eliminar, y 1 especifica que se tiene que si o si eliminar un solo producto del array.
      nuevaLista.splice(productoARemover, 1);
      return nuevaLista;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    if (cartItems.length === 0) {
      return 0;
    }
    let total = 0;
    cartItems.forEach((productoActual) => {
      total += productoActual.price;
    });
    return total.toFixed(2);
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
