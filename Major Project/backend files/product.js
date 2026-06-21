const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productName:String,

    price:Number,

    vendor:String

});

module.exports =
mongoose.model(
    "Product",
    productSchema
);