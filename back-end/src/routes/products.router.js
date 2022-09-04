const router = require('express').Router();
const ProductController = require('../controller/product.controller');

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);

module.exports = router;
