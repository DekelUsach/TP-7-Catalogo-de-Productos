import React, { useState } from "react";
import { useCart } from "../context/UseCart";
import carrito from "../assets/carrito.png";
import "../styles/Carrito-btn.css";

export default function CartWidget() {
  const { cartItems, removeFromCart, getTotal } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-widget">
      <button 
        className="cart-button" 
        onClick={toggleDropdown}
        aria-label="Abrir carrito"
      >
        <img src={carrito} alt="Carrito" width="22" height="24" />
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h6>Carrito de Compras</h6>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar carrito"
            >
              ×
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>El carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item, index) => {
                  // Validar que el item tenga las propiedades necesarias
                  if (!item || !item.id || !item.title) {
                    return null;
                  }
                  
                  return (
                    <div key={`${item.id}-${index}`} className="cart-item">
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
                        onClick={() => handleRemoveItem(item.id)}
                        aria-label={`Eliminar ${item.title}`}
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${typeof getTotal() === 'number' ? getTotal().toFixed(2) : '0.00'}</strong>
                </div>
                <button className="checkout-btn">
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Overlay para cerrar el dropdown al hacer clic fuera */}
      {isOpen && (
        <div 
          className="cart-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
