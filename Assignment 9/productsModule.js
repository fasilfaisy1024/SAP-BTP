const axios = require('axios');

let productsData = [];

async function fetchProducts() {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        productsData = response.data;
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
}

function getProducts() {
    return productsData;
}

module.exports = {
    fetchProducts,
    getProducts,
};
