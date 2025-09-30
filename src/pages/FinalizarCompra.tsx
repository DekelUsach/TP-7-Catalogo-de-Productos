import { useCart } from "../context/UseCart.js";
import { useNavigate } from "react-router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/FinalizarCompra.css";

export default function FinalizarCompra() {
  const { cartItems, getTotal, clearCart } = useCart();
  
  // const removerItem = (id) => {
  //   removeFromCart(id);
  // };

  const navigate = useNavigate();

  return (
    <>
      <h1 className="mb-4">Finalizar Compra</h1>

      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {cartItems.map((p) => (
            <Card key={p.id} >
              <Card.Img
                src={p.thumbnail}
                alt={p.title}
                className="item-image"
              />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>Precio: ${p.price}</Card.Text>
              </Card.Body>
              {/* <Button onClick={() => removerItem(p.id)} className="red">Eliminar</Button> */}

            </Card>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-4 text-center">
          <h4>Total: ${getTotal()}</h4>
          <Button
            variant="primary"
            onClick={() => {
              clearCart();
              navigate("compraTerminada");
            }}
          >
            Finalizar compra
          </Button>
        </div>
      )}
    </>
  );
}
