const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource ');
});

router.post('/', function(res, res, next) {
  // res.send({ message: "User created", code: 200 })
})

module.exports = router;
