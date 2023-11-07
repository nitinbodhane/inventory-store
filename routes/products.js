const express = require('express');

const router = express.Router();
const { getProducts } = require('../controllers/products');
const jwtAuthMiddleware = require('../middleware/jwtAuthMiddleware');
const logger = require('../utils/logger');

router.get('/', jwtAuthMiddleware, async (req, res) => {
  try {
    const result = await getProducts(req);
    res.status(200).json(result);
  } catch (err) {
    // Handle errors and send an error response
    logger.error('Error in GET: /products route:', err);

    res.status(500).json({
      error: 'An internal server error occurred',
      message: err?.message,
      code: err?.statusCode || 500,
    });
  }
});

module.exports = router;
