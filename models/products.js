const { connectToDatabase } = require('../db/mongoconn');

function findProductById() {
  return {};
}

async function findAllProducts() {
  const db = await connectToDatabase();

  const collection = db.collection('products');

  return collection.find().toArray();
}

module.exports = {
  findAllProducts,
  findProductById,
};
