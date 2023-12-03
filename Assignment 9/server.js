const express = require('express');
const productsModule = require('./productsModule');

const app = express();
const PORT = process.env.PORT || 3000;

productsModule.fetchProducts();


app.get('/api/products', (req, res) => {
  const { productId, category, brand } = req.query;

  let filteredProducts = productsModule.getProducts();

  if (productId) {
    filteredProducts = filteredProducts.filter(product => product.id === productId);
  }

  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  if (brand) {
    filteredProducts = filteredProducts.filter(product => product.brand === brand);
  }

  res.json(filteredProducts);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Products API!');
  });


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

