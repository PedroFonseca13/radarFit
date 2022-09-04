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

const findProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductService.findProductByID(id);
    // console.log('Bug#2 ', product);

    if (!product) return res.status(404).json({ message: 'Product does not exist' });

    res.status(200).json(product);
  } catch (error) {
    res.status(error.status || 500).json({ message: 'error.message' });
  }
};

module.exports = { createProduct, getAllProducts, findProductByID }
