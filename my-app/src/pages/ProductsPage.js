import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../styles/ProductsPage.css';  // Import the new styles

const ProductsPage = () => (
  <div className="products-page">
    <h2>Our Products</h2>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductsPage;
