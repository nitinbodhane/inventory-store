const { findAllProducts } = require('../models/products')


const getProducts = async (req) => {
  /* Add santization, validation on incoming data */

  const products = await findAllProducts();

  /* Any business logic if any */

  return {
    data: products,
    message: 'List of products retrieved successfully',
    code: 200
  }
}

module.exports = {
  getProducts
}