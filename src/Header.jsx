import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Header() {
  const { totalItems, totalPrice } = useCart();

  const cartBadge = useMemo(
    () =>
      totalItems > 0
        ? `${totalItems} items - $${totalPrice.toFixed(2)}`
        : "Empty",
    [totalItems, totalPrice],
  );

  return (
    <header>
      <nav className="navbar">
        <Link to="/">Mythra Clone</Link>
        <Link to="/cart" className="cart-link">
          🛒 {cartBadge}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
