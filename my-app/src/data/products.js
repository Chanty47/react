const products = [
  {
    id: 1,
    name: "Apple iPhone 14",
    price: 999.99,
    category: "Electronics",
    image: "https://source.unsplash.com/300x300/?iphone",
    description: "Latest Apple iPhone 14 with A15 Bionic chip.",
    rating: 4.8,
    stock: 20,
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: 849.99,
    category: "Electronics",
    image: "https://source.unsplash.com/300x300/?samsung,galaxy",
    description: "Powerful smartphone with stunning camera.",
    rating: 4.5,
    stock: 15,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: 399.99,
    category: "Electronics",
    image: "https://source.unsplash.com/300x300/?sony,headphones",
    description: "Noise-canceling wireless headphones with exceptional sound.",
    rating: 4.7,
    stock: 25,
  },
  {
    id: 4,
    name: "Nike Air Max 270",
    price: 150.0,
    category: "Fashion",
    image: "https://source.unsplash.com/300x300/?nike,shoes",
    description: "Stylish and comfortable sneakers for everyday wear.",
    rating: 4.6,
    stock: 30,
  },
  {
    id: 5,
    name: "Levi's 501 Original Fit Jeans",
    price: 89.99,
    category: "Fashion",
    image: "https://source.unsplash.com/300x300/?levis,jeans",
    description: "Classic denim jeans with a timeless look.",
    rating: 4.4,
    stock: 40,
  },
  {
    id: 6,
    name: "IKEA Malm Bed Frame",
    price: 199.99,
    category: "Furniture",
    image: "https://source.unsplash.com/300x300/?ikea,bed",
    description: "Minimalist bed frame with a sleek design.",
    rating: 4.3,
    stock: 10,
  },
  {
    id: 7,
    name: "Kindle Paperwhite",
    price: 139.99,
    category: "Books",
    image: "https://source.unsplash.com/300x300/?kindle",
    description: "Lightweight e-reader with adjustable warm light.",
    rating: 4.9,
    stock: 35,
  },
  {
    id: 8,
    name: "Dell XPS 13 Laptop",
    price: 1299.99,
    category: "Electronics",
    image: "https://source.unsplash.com/300x300/?dell,laptop",
    description: "Ultra-thin, powerful laptop with stunning 4K display.",
    rating: 4.7,
    stock: 12,
  },
  {
    id: 9,
    name: "Adidas Ultraboost 21",
    price: 180.0,
    category: "Fashion",
    image: "https://source.unsplash.com/300x300/?adidas,shoes",
    description: "High-performance running shoes with superior comfort.",
    rating: 4.6,
    stock: 28,
  },
  // Add more products dynamically
];

// Generate products dynamically for remaining entries
for (let i = 10; i <= 100; i++) {
  const categories = ["Electronics", "Fashion", "Furniture", "Books", "Toys"];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomImageQuery = randomCategory.toLowerCase().split(" ")[0]; // Use category name for image search

  products.push({
    id: i,
    name: `Product ${i}`,
    price: parseFloat((Math.random() * 500).toFixed(2)) + 20,
    category: randomCategory,
    image: `https://source.unsplash.com/300x300/?${randomImageQuery}`,
    description: `Description for Product ${i}. This is a detailed and professional description for testing purposes.`,
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // Between 3.0 and 5.0
    stock: Math.floor(Math.random() * 50) + 10,
  });
}

export default products;