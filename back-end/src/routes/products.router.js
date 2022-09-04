const router = require('express').Router();
const ProductController = require('../controller/product.controller');

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.findProductByID);

module.exports = router;
