const mongoose = require('mongoose');
const slug = require('slugify');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'A product must have name'],
        unique : true
    },
    description : {
        type : String,
        required : [true , 'A product must have description']
    },
    image : {
        type : String,
       // required : [true , 'A product must have image']
    },
    category : {
        type : String,
        enum : ['Led' , 'HomeAppliances' , 'WiresAndCables'],
        required  :[true , 'A product must have category']
    },
    price : Number,
    slug  :String,
    quantity : {
        type : Number,
        required : [true , 'A product must have quantity']
    }
})

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;