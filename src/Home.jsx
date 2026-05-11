import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="home">
      <h1>Shop Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title.substring(0, 50)}...</h3>
              <p>${product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
