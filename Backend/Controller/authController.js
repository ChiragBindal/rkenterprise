const User = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('../UtilsRk/catchAsync');
const rkError = require('../UtilsRk/rkError');
const { promisify } = require('util');

const cookieOptions = {
  expires : new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN*24*60*60*1000),
  httpOnly : true
}
if(process.env.NODE_ENV === 'production'){
  cookieOptions.secure = true
};

const filterObj = (obj , ...allowedFields) =>{
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if(allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
}
exports.signUp = catchAsync( async (req , res , next)=>{
    const newUser = await User.create(req.body);

    const token = jwt.sign({id : newUser._id} , process.env.JWT_SECRET , {expiresIn : process.env.JWT_EXPIRES_IN} );

    res.cookie('jwt' , token , cookieOptions);

    res.status(200).json({
        status : 'success',
        data : {
            user : newUser
        },
        token
    })
});

exports.login = catchAsync( async(req , res , next)=>{
  const { email , password} = req.body;

 // 1.) Check if email and password exist
  if(!email || !password){
     return next(new rkError('Please provide email and Password!' , 400));
 };

// 2.) Check if user exist and password is correct
  const user = await User.findOne({email}).select('+password');
    if(!user || !(await user.correctPassword(password , user.password))){
        return next(new rkError('Incorrect email or password' , 401));
    };

// 3.) If everything Ok , send token

  const token = jwt.sign({id : user._id} , process.env.JWT_SECRET , {expiresIn : process.env.JWT_EXPIRES_IN} );
  res.cookie('jwt' , token , cookieOptions);
    res.status(200).json({
        status : 'success',
        data : user,
        token
    });
});

exports.protect = catchAsync( async(req , res , next)=>{
  // console.log(req.headers.authorization);
  // 1.) Getting Tokens and Check if its there
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(' ')[1];
    console.log(token);
  };

  if(!token){
    return next(new rkError('You are not logged in! Please log in to get access' , 401));
  };

  // Verification of token
  const decoded = await promisify(jwt.verify)(token , process.env.JWT_SECRET);

  // Check if user still exist 
  const currentUser = await User.findById(decoded.id);

  if(!currentUser){
    return next(new rkError('The user belonging to this token does not exist' , 401));
  }

  // Check if user changed the Password after the token 
  if(currentUser.changedPasswordAfter(decoded.iat)){
    return next(new rkError('User currently changed the password!Please log in again.' , 400));
  };

  req.user = currentUser ; // to transfer the data from one middleware to other
  next();
});

exports.restrictTo = catchAsync( async(req , res, next)=>{
  if(!req.user.isAdmin){
    return next(new rkError('You donot have the permissions to perform this actions' , 403));
  };
  next();
});

exports.updatePassword = catchAsync( async(req , res, next)=>{
  // 1.) Get user from the collection
  const user = await User.findById(req.user.id).select('+password');
  //2.) Check if posted current password is correct or not
  if(!await user.correctPassword(req.body.passwordCurrent , user.password)){
    return next(new rkError('Your current password is wrong' , 401));
  };
  // 3.) If so , update Password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // 4.) Log users in 
  const token = jwt.sign({id : user._id} , process.env.JWT_SECRET , {expiresIn : process.env.JWT_EXPIRES_IN} );
  res.cookie('jwt' , token , cookieOptions);
  res.status(200).json({
    status : 'success',
    data : {
      user
    },
    token
  });
});

exports.updateMe = catchAsync( async(req , res , next)=>{
  // 1.) Create error if user Posts password
  if(req.body.password || req.user.passwordConfirm){
    return next(new rkError('This route is not for password change/updates. Please use/update my password' , 400));
  };
  // 2.) Update user document
  const filterBody = filterObj(req.body , 'username' , 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id , filterBody , {
    new : true,
    runValidators : true
  });

  res.status(200).json({
    status : 'success',
    data : {
      user : updatedUser
    }
  })
})
