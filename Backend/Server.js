const path = require('path');
const dotenv = require("dotenv");
const express = require('express');
const app = require("./App");
const productRouter = require("./routes/ProductsRoute");
const sellerRouter = require("./routes/SellerRoute");

dotenv.config();

app.use(productRouter);
app.use(sellerRouter);

async function main (){
    try{
        app.listen(process.env.PORT, () => {
            console.log("listening on port " + process.env.PORT);
        })
    }catch(e){
        console.log(e);
    }
}

main().catch(console.error);