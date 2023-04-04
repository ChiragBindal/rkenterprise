const Cart = require('../Model/cartModel');
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
    console.log(ans);
    let id = ans.id;
    if(ans){
        await Cart.findOneAndUpdate({id} , {
            "cartItems":
            {
                "$push" : req.body.cartItems
            }
        })
    }
    else{
        const newItem = await Cart.create({
            user : req.user.id,
            cartItems : req.body.cartItems
        });
    }
   

    res.status(201).json({
        status : 'success',
        data : data
    });
});
exports.removeItemtoCart = catchAsync((req,res,next)=>{

});

exports.deleteCart = catchAsync(async(req,res,next)=>{
    await Cart.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status : 'success',
        data : null
    })
});


