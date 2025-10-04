import React from "react";
import "../style/ProductPage.css";
import shoe from "../assets/Owen.png";

export default function ProductPage() {
  const products = Array(10).fill({
    name: "Owen Sharpe",
    quantity: 3,
    total: 50,
    image: shoe,
  });

  return (
    <div className="product-page">
      <h1 className="page-title">Our Products</h1>

      <div className="product-grid">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <img src={p.image} alt={p.name} className="product-img" />
            <h2 className="product-name">{p.name}</h2>
            <p>Quantity</p>
            <p className="product-quantity">{p.quantity}</p>
            <p>Total Price</p>
            <p className="product-price">${p.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
