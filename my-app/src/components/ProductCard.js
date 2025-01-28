import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-price">
            <span>${product.price.toFixed(2)}</span>
          </div>
          <div className="product-rating">
            <span>{product.rating} ⭐</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
