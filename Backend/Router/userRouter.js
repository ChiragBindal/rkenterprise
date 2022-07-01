const express = require('express');
const userController = require('../Controller/userController');
const authController = require('../Controller/authController');

const Router = express.Router();

// Applying auth functions
Router.route('/signUp').post(authController.signUp);
Router.route('/login').post(authController.login);
Router.route('/updatePassword').patch(authController.protect , authController.updatePassword );
Router.route('/updateMe').patch(authController.protect , authController.updateMe);
// Applying CRUD operations
Router.route('/').get(authController.protect , authController.restrictTo ,userController.getAllUsers);
Router.route('/:id').delete(userController.deleteUser);

module.exports = Router;