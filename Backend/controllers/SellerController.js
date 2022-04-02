var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAXKBPMQVLYODWYWXQ",
  secretAccessKey: "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"
});

const storeProducts = async (req,res) =>{   

    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "Products";   

    var params = {
        TableName:table,
        Item:{
            "ProductId" : "5",
            "ProductName" : "Mutton",
            "Brand":"Apple",
            "Quantity": 10,
            "ProductImage":"abc"
            }
        }
   

    console.log("Adding a new item...");
        docClient.put(params)
                .promise()
                    .then(data => res.send({Status:"Item added"}))
                        .catch(console.error);
    
};

module.exports = {storeProducts};