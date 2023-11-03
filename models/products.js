const { connectToDatabase } = require('../db/mongoconn')

function findProductById() {
  return {};
}

async function findAllProducts (options) {
  const db = await connectToDatabase();

  const collection = db.collection('products');

  return await collection.find().toArray();
}

module.exports = {
  findAllProducts
}