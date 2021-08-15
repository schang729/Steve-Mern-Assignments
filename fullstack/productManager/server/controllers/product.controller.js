const Product = require("../models/product.model");

const addNewProduct = (req,res) => {
    const { body } = req;
    Product.create({

        title: body.title,
        price: body.price,
        description: body.description,


    })
    .then(newProduct => res.json(newProduct))
    .catch((err) => 
        res.status(400).json({error:err}))



};
const getAllProducts = (req,res) => {
    Product.find()
        .then((allProducts)=> res.json({ allProducts }))
        .catch((err) => 
        res.status(400).json({error:err}))
};

const deleteProduct = (req,res) =>{
    Product.deleteOne({ _id: req.params.productId })
        .then((deletedProduct) => res.status(200).send("Product Deleted"))
        .catch((err) => 
        res.status(400).json({error:err}))

};
const getProductById = (req,res) =>{
    Product.findOne({ _id: req.params.productId })
        .then((product)=> res.json({product}))
        .catch((err) => 
        res.status(400).json({error:err}))

};

const updateProduct = (req,res) =>{
    Product.findOneAndUpdate(
        { _id: req.params.productId },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ updatedProduct}))
        .catch((err) => 
        res.status(400).json({error:err}))



}





module.exports = {
    addNewProduct,
    getAllProducts,
    deleteProduct,
    getProductById,
    updateProduct,


}