 const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required  :true
    },
    cartItems :[ {
        product : {
        type : mongoose.Schema.ObjectId,
        ref  : 'Product',
        required  : true
    },
        quantity : {
            type  : Number,
            required : true,
            default : 1
        },
        price : {
            type  : Number,
            required : true
        }
    }]
});

const Cart = mongoose.model('Cart' , cartSchema);
module.exports = Cart; 