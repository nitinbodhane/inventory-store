const config = process.env;

function getMongodbConfig() {
  return {
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DATABASE,
  };
}

function getJwtConfig() {
  return {
    secretOrKey: config.JWT_SECRET,
    tokenExpiration: config.JWT_EXPIRATION,
  };
}

function loggerConfig() {
  return {
    loggerLevel: process.env.LOG_LEVEL,
  };
}

module.exports = {
  getJwtConfig,
  getMongodbConfig,
  loggerConfig,
};
