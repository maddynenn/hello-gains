import React from "react";
import "../style/ProductPage.css";
import shoe from "../assets/Owen.png";
import chocolateShake from "../assets/chocolate.jpeg";
import nuttyDrink from "../assets/nuts.jpg";
import sodas from "../assets/sodas.webp";
import strawberryShake from "../assets/strawberry.jpeg";

export default function ProductPage() {
    const products = [
    {
      name: "Owen Sharpe",
      quantity: 3,
      total: 50,
      image: shoe,
    },
    {
      name: "Chocolate Box",
      quantity: 12,
      total: 12,
      image: chocolateShake,
    },
    {
      name: "Nutmeg Box",
      quantity: 7,
      total: 15,
      image: nuttyDrink,
    },
    {
      name: "Carbonation Vacation",
      quantity: 4,
      total: 3,
      image: sodas,
    },
    {
      name: "Strawberry Blast",
      quantity: 3,
      total: 10,
      image: strawberryShake,
    }
  ];

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
