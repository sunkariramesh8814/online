import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  const checkoutRef = useRef();
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  const handleCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: "smooth" });
    // Simulate checkout
    alert(`Order total: $${totalPrice.toFixed(2)}. Payment success!`);
    clearCart();
  };

  return (
    <div className="cart">
      <h1>Shopping Cart ({cart.length} items)</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Continue shopping</Link>
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>
                  ${item.price} x
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    min="0"
                  />
                </p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div ref={checkoutRef} className="cart-total">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
