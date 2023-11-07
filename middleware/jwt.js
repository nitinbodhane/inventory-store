const jwt = require('jsonwebtoken');

const { secretOrKey, tokenExpiration: expiresIn } = require('../config').getJwtConfig();

function generateToken(user) {
  return jwt.sign(user, secretOrKey, { expiresIn });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secretOrKey);
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
