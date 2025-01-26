import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product, message, onClose }) => {
  if (!product) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-details">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{message}</h2>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
