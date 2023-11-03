var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inventory Store' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { message: 'Invalid credentials' });
});

module.exports = router;
