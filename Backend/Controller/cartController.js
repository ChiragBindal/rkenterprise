const Cart = require('../Model/cartModel');
const catchAsync = require('../UtilsRk/catchAsync');

// Get All Cart .
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
    const {productId , quantity} = req.body;
    if(ans){
        const index = ans.cartItems.findIndex((item) => item.product._id == productId);
        console.log(index);
        if(index > -1)
        {
            ans.cartItems[index].quantity += quantity;
        }
        else{
            ans.cartItems.push({product : productId , quantity});
        }
        await ans.save();
    }
    else{
        await Cart.create({
            user : req.user.id,
            cartItems : [{product : productId , quantity}]
        });
    }
   

    res.status(201).json({
        status : 'success',
        data : ans
    });
});

// Remove items from cart.
exports.removeItemtoCart = catchAsync((req,res,next)=>{
        const productId = req.params.itemId;

        Cart.findByIdAndRemove(productId);
    
        res.status(201).json({
        status : 'success'
    });
});

exports.getOne = catchAsync(async(req,res,next)=>{
    const ans = await Cart.findOne({user  : req.user.id}).populate({path : 'cartItems.product' , select : '-__v -description'});
    if(!ans)
    {
        ans = NULL;
    }
    res.status(200).json({
        status : 'success',
        data : ans
    })
});
exports.deleteCart = catchAsync(async(req,res,next)=>{
    await Cart.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status : 'success',
        data : null
    })
});


