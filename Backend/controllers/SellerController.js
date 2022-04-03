
var AWS = require("aws-sdk");
var fs = require('fs')
var 


//const multer = require('multer');
//c/onst path = require('path');

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAXKBPMQVL5WSSAM4H",
  secretAccessKey: "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"
});

const s3 = new AWS.S3({
    accessKeyId: "AKIAXKBPMQVL5WSSAM4H",
    secretAccessKey: "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"
});

const storeProducts = async (req,res) =>{   
    console.log(req);
    /*const ProductDetails = JSON.parse(JSON.stringify(req.body));
    console.log(ProductDetails);
   // const productimage = fs.readFileSync(ProductDetails.productImage);
    //console.log(productimage);

    const params = {
        Bucket: 'sellerproductimage',
        Key: 'img.jpeg', 
        Body: ProductDetails.productImage
    };

    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
    const datajson = {
        "s3uri":data.Location
    }

        res.send(datajson);

    });


    /*var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "Products";   

    var params = {
        TableName:table,
        Item:{
            ...ProductDetails
            }
        }
   

    console.log("Adding a new item...");
        docClient.put(params)
                .promise()
                    .then(data => res.send({Status:"Item added"}))
                        .catch(console.error);*/
    
};

/*const uploadingProducts = (req,res)=>{

    const storage = multer.diskStorage({
        destination: '../Images/Uploads',
        filename: function(req, file, cb){
            cb(null, productname + path.extname(file.originalname));
        }
    })

    const upload = multer({
        storage : storage,
    }).single('productImage')

    upload(req,res, (err) =>{
        console.log(req.file);
    })
}*/

module.exports = {storeProducts};