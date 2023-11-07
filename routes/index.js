const express = require('express');

const router = express.Router();
const logger = require('../utils/logger');

/* GET home page. */
router.get('/', (req, res) => {
  logger.info('This is homepage request');
  logger.error('Not found error');
  res.render('index', { title: 'Inventory Store' });
});

/* GET home page. */
router.get('/login', (req, res) => {
  res.render('login', { message: 'Invalid credentials' });
});

module.exports = router;
