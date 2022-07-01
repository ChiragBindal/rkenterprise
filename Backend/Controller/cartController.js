/* const Cart = require('../Model/cartModel');
const catchAsync = require('../UtilsRk/catchAsync');

exports.getAllCart = catchAsync( async (req , res , next)=>{
    const cart = await Cart.find();

    res.status(200).json({
        status : 'success',
        results : cart.length,
        data : {
            cart
        }
    })
});

exports.addItemtoCart = catchAsync( async (req , res , next)=>{
    const ans = await Cart.findOne({user  : req.user.id});
    let id = req.user.id
    if(ans){
        await Cart.findOneAndUpdate({id} , {
            "$push" : {
                "cartItems" : req.body.cartItems
            }
        })
    }
    const newItem = await Cart.create({
        user : req.user.id,
        cartItems : req.body.cartItems
    });

    res.status(201).json({
        status : 'success',
        data : {
            product : newItem
        }
    });
}); */

