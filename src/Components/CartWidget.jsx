import React from "react";
import { useCart } from "../context/UseCart";
import { NavDropdown, Badge } from "react-bootstrap";
import carrito from "../assets/carrito.png";
import "../styles/Carrito-btn.css";

export default function CartWidget() {
  const { cartItems, removeFromCart, getTotal } = useCart();

  const removerItem = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-widget">
      <NavDropdown
        title={
          <div className="cart-button">
            <img src={carrito} alt="Carrito" width="22" height="24" />
            {cartItems.length > 0 && (
              <Badge bg="danger" className="cart-badge">
                {cartItems.length}
              </Badge>
            )}
          </div>
        }
        id="cart-dropdown"
        className="cart-dropdown"
      >
        <NavDropdown.Header>
          <h6 className="mb-0">Carrito de Compras</h6>
        </NavDropdown.Header>

        {cartItems.length === 0 ? (
          <NavDropdown.Item disabled>
            <p className="mb-0 text-muted">El carrito está vacío</p>
          </NavDropdown.Item>
        ) : (
          <>
            {cartItems.map((item, index) => {
             
              
              return (
                <NavDropdown.Item key={`${item.id}-${index}`} className="cart-item">
                  <div className="item-info">
                    <img 
                      src={item.thumbnail || item.images?.[0] || ''} 
                      alt={item.title || 'Producto'} 
                      className="item-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="item-details">
                      <h6 className="item-title">{item.title}</h6>
                      <p className="item-price">${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}</p>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      removerItem(item.id);
                      // Funcion que sirve para que no se cierr el dropdown cuando le das a eliminar en un dropdownItem
                      e.stopPropagation() 
                    }}
                  >
                    ×
                  </button>
                </NavDropdown.Item>
              );
            })}
            
            <NavDropdown.Divider />
            
            <NavDropdown.Item disabled className="cart-total">
              <strong>Total: ${ getTotal()}</strong>
            </NavDropdown.Item>
            
            <NavDropdown.Item className="checkout-btn">
              Finalizar Compra
            </NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </div>
  );
}
