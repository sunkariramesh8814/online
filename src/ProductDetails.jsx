import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error("Product not found");
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleAddToCart = () => {
    const itemToAdd = { ...product, quantity };
    addToCart(itemToAdd);
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <Link to="/">← Back to Shop</Link>
      <div className="detail-content">
        <img src={product.image} alt={product.title} />
        <div className="detail-info">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <div className="quantity-selector">
            <label>Quantity: </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1"
            />
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
