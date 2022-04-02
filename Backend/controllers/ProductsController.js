const axios = require('axios');





const getProducts = async (req,res) => {
    let data = [
        {
            "productName": "Coke",
            "productBrand": "Coke Inc",
            "productPrice": 10,
            "productImage": "https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/home/coca-cola-original-20oz.png"
        },
        {
            "productName": "Pepsi",
            "productBrand": "Pepsico Inc",
            "productPrice": 10,
            "productImage": "https://www.pepsicobeveragefacts.com/content/image/products/Pepsi_Zero_20.png?r=20220324"
        },
        {
            "productName": "Mirinda",
            "productBrand": "Pepsico Inc",
            "productPrice": 10,
            "productImage": "https://m.media-amazon.com/images/I/71+6kdHK1vL._SX679_.jpg"
        },
        {
            "productName": "Mountain Dew",
            "productBrand": "Pepsico Inc",
            "productPrice": 10,
            "productImage": "https://m.media-amazon.com/images/I/51qUxNFGt5L._AC_SX679_.jpg"
        },
        {
            "productName": "Sprite",
            "productBrand": "Coke Inc",
            "productPrice": 10,
            "productImage": "https://www.jiomart.com/images/product/600x600/491126479/sprite-1-75-l-product-images-o491126479-p491126479-0-202203151146.jpg"
        }

    ];
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send({
        "success": true,
        data
    })
}

module.exports = {getProducts};