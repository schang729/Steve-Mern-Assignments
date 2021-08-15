const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.post('/api/product', ProductController.addNewProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.delete('/api/product/delete/:productId', ProductController.deleteProduct);
    app.get('/api/product/:productId', ProductController.getProductById);
    app.put('/api/product/:productId', ProductController.updateProduct);


}