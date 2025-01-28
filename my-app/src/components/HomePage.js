import React from "react";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import "../styles/HomePage.css";

const HomePage = ({ products }) => {
  return (
    <div className="home-page">
      <Banner />
      <div className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <ProductList products={products.slice(0, 4)} />
      </div>
    </div>
  );
};

export default HomePage;
