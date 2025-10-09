import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  images?: string[];
  brand?: string;
  rating?: number;
  discountPercentage?: number;
  [key: string]: any;
}

type CartItems = Product[];

interface CartContextType {
  cartItems: CartItems;
  addToCart: (producto: Product) => void;
  removeFromCart: (idProducto: number) => void;
  clearCart: () => void;
  getTotal: () => string | number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const itemsGuardados = localStorage.getItem("cartItems");
    return itemsGuardados ? JSON.parse(itemsGuardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (producto: Product) => {
    setCartItems((itemsGuardados: Product[]) => [...itemsGuardados, producto]);
  };

  const removeFromCart = (idProducto: number) => {
    setCartItems((productosCargados: Product[]) => {
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
    cartItems.forEach((productoActual: Product) => {
      total += productoActual.price;
    });
    return total.toFixed(2); //es para mostrar solo 2 decimales
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
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
export type { Product, CartContextType };
export default CarritoProvider;
