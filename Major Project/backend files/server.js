const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
    "mongodb://127.0.0.1:27017/vendorhub"
)
.then(() => {

    console.log("Database Connected");

})
.catch((err) => {

    console.log(err);

});

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.listen(5000, () => {

    console.log(
        "Server Running On Port 5000"
    );

});