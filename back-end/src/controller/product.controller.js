const ProductService = require('../services/products.services')

const createProduct = async (req, res) => {
  try {
    const { productName, description, valor } = req.body;
    const newProduct = await ProductService.create(productName, description, valor);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await ProductService.getAllProducts()

    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}

module.exports = { createProduct, getAllProducts }
