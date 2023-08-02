// server.js

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get sample data
app.get('/api/products', (req, res) => {
  // Sample data for products
  const products = [
    { id: 1, name: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 19.99 },
    { id: 2, name: 'Product 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', price: 29.99 },
    { id: 3, name: 'Product 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.', price: 39.99 },
    // Add more sample data if needed
  ];

  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
