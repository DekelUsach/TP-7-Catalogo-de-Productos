import { Button } from "@coreui/coreui";
import { useCart } from "../context/UseCart";
import { useNavigate } from "react-router";

export default function FinalizarCompra() {
  const { cartItems, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <h1>Finalizar Compra</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cartItems.map((p) => (
          <div key={p.id}>
            <h4>{p.title}</h4>
            <p>${p.price}</p>
            <img
              src={p.thumbnail}
              alt={p.title || "Producto"}
              className="item-image"
            />
          </div>
        ))
      )}
      <p>Total: ${getTotal()}</p>
      <button
        onClick={() => {
          clearCart();
          navigate("compraTerminada");
        }}
      >
        Finalizar compra
      </button>{" "}
    </>
  );
}
