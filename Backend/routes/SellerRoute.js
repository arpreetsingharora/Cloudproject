const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/SellerController');



router.post("/api/vi/Seller/createNewProduct",sellerController.storeProducts);
//router.post("/api/vi/Seller/productImages", sellerController.storeImages);

module.exports = router;