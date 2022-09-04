const { Product } = require('../database/models')

const create = async (productName, description, valor) => {
  const newProduct = await Product.create({ productName, description, valor });

  return newProduct;
}

const getAllProducts = async () => {
  const result = await Product.findAll();

  return result
}

const findProductByID = async (id) => {
  const product = await Product.findOne({
    where: { id },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });

  return product;
};

module.exports = { create, getAllProducts, findProductByID }
