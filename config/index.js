const config = process.env;

function getMongodbConfig() {
  return {
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DATABASE
  }
}

function getJwtConfig() {
  return {
    secretOrKey: config.JWT_SECRET,
    tokenExpiration: config.JWT_EXPIRATION
  }
}

module.exports = {
  getJwtConfig,
  getMongodbConfig
};