const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "Product Title is Required"],
            minLength: [3, "Product Title must be at least 3 characters"],

        },
        price:{
            type: Number,
            required: [true, "Product Price is Required"],
            min: [0, "Price must be more than 0"],
        },
        description:{
            type: String,
            required: [true, "Product Description is Required"],
            minLength:[10, "Product Description must be at least 10 characters"]
        }




    }

);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;