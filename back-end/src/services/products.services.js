const { Product } = require('../database/models')

const create = async (productName, description, valor) => {
  const newProduct = await Product.create({ productName, description, valor });

  return newProduct;
}

module.exports = { create }
