import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-text">ShopEase</Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
      </div>
    </header>
  );
};

export default Header;
