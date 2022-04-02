const express = require('express');
const app = express();
const cors = require('cors');



app.use(
    cors({
      origin: ["http://localhost:6500", "https://checkout.stripe.com","https://medeasy-group18.herokuapp.com"],
    })
);
app.use(express.json());

module.exports = app;
