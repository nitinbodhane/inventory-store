const { findAllProducts } = require('../models/products');
const logger = require('../utils/logger');

const getProducts = async (req) => {
  /* Add santization, validation on incoming data */
  logger.log(req.body);

  const products = await findAllProducts();

  /* Any business logic if any */

  return {
    data: products,
    message: 'List of products retrieved successfully',
    code: 200,
  };
};

module.exports = {
  getProducts,
};
