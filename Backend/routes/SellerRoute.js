const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/SellerController');


router.post("/api/vi/Seller",sellerController.storeProducts);

module.exports = router;