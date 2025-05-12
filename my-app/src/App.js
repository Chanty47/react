import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = process.env.backend_url;

  // Fetch products from the API
  useEffect(() => {
    axios
      .get(API_BASE_URL)  // Make sure this URL is correct in
      .then((response) => {
        setProducts(response.data);  // Set the fetched products
        setLoading(false);  // Data has been loaded
      })
      .catch((err) => {
        setError('Failed to load products');  // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Loading state
  }

  if (error) {
    return <div>{error}</div>;  // Error state
  }

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
