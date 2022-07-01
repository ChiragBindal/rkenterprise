const express = require('express');
const productController = require('../Controller/productController');

// Defining Router
const Router = express.Router();

// Applying CRUD operation
Router
    .route('/')
    .get(productController.getAllProduct)
    .post(productController.createProduct);

Router
    .route('/:id')
    .get(productController.getOneProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

Router.route('/getProductCategory').get(productController.getProductCategory);

module.exports = Router;