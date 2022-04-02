const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductsController');


router.get("/api/vi/products",productController.getProducts);

module.exports = router;