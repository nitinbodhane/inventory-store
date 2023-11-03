
const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/products')
const jwtAuthMiddleware = require('../middleware/jwtAuthMiddleware')

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

router.get('/', myLogger, jwtAuthMiddleware, async (req, res, next) => {
  try {

    const result = await getProducts(req);
    res.status(200).json(result);

  } catch (err) {

    // Handle errors and send an error response
    console.error('Error in GET: /products route:', err);

    res.status(500).json({
      error: 'An internal server error occurred',
      message: err?.message,
      code: err?.statusCode || 500
    });

  }
})


module.exports = router;
