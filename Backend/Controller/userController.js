const User = require('../Model/userModel');
const catchAsync = require('../UtilsRk/catchAsync');

exports.getAllUsers = catchAsync( async (req , res , next)=>{
    const users = await User.find();

    res.status(200).json({
        status : 'success',
        results : users.length,
        data : {
            user : users
        }
    })
});

exports.deleteUser = catchAsync ( async (req , res , next)=>{
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status : 'success',
        data : null
    })
})