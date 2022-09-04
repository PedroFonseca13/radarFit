const { Product } = require('../database/models')

const create = async (productName, description, valor) => {
  const newProduct = await Product.create({ productName, description, valor });

  return newProduct;
}

const getAllProducts = async () => {
  const result = await Product.findAll();

  return result
}

module.exports = { create, getAllProducts }
