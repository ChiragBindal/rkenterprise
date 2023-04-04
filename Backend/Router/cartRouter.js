 const express = require('express');
const cartController = require('../Controller/cartController');
const authController = require('../Controller/authController');
const Router = express.Router();

Router.route('/')
    .get(cartController.getAllCart)
    .post(authController.protect,cartController.addItemtoCart)
Router.route('/:id').delete(cartController.deleteCart);
module.exports = Router; 