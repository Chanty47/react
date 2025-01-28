import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ applyFilters }) => {
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    applyFilters({ category });
  };

  return (
    <div className="filters-container">
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        className="filters-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Furniture">Furniture</option>
        <option value="Books">Books</option>
        <option value="Toys">Toys</option>
      </select>
      <button className="apply-btn" onClick={handleFilter}>Apply</button>
    </div>
  );
};

export default Filters;
