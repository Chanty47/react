import React from "react";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import products from "../data/products";

const HomePage = () => {
  const featuredProducts = products.slice(0, 8); // Show top 8 products

  return (
    <div>
      <Banner />
      <h2>Featured Products</h2>
      <ProductList products={featuredProducts} />
    </div>
  );
};

export default HomePage;
