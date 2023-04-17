 const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required  :true
    },
    cartItems :
       [{
         product : {
            type : mongoose.Schema.ObjectId,
            ref  : 'Product',
            required  : true
        },
        quantity : {
            type : Number,
            required : true
        }
    }]
}, {
    toJSON : {virtuals : true} , 
    toObject : {virtuals : true}
});
cartSchema.index({cartItems : 1 , user : 1},{unique : true})
cartSchema.pre(/^find/ , function(next){
    this.populate('user');
    next();
})
const Cart = mongoose.model('Cart' , cartSchema);
module.exports = Cart; 