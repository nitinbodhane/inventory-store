const { MongoClient, ServerApiVersion } = require('mongodb');
const logger = require('../utils/logger');

const { database, host, port } = require('../config').getMongodbConfig();

const connectionString = `mongodb://${host}:${port}`;

const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Export a connection function that returns a database instance
async function connectToDatabase() {
  try {
    await client.connect();
    const dbConn = client.db(database);
    return dbConn;
  } catch (err) {
    logger.error('Failed to connect to the database:', err);
    throw err; // Rethrow the error for handling in your application
  }
}

module.exports = {
  connectToDatabase,
};
