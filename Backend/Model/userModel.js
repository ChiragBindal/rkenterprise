const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { parse } = require('dotenv');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true , 'A user must have name'],
        unique : true
    },
    email : {
        type : String,
        required : [true , 'A user must have email'],
        unique : true,
        lowercase : true,
        validate : [validator.isEmail , 'Please provide valid email']
    },
    photo : String,
    isAdmin : {
        type : Boolean,
        default : false
    },
    password : {
        type : String,
        required : [true , 'Please provide a password'],
        minlength : [8 , 'Password must contain atleast 8 Characters'],
        select : false
    },
    passwordConfirm : {
        type : String,
        required : [true , 'Please confirm your password'],
        validate : {
            validator : function(el){
                return el === this.password ;
            },
            message : "Password must be same"
        }
    },
    passwordChangedAt : Date,
    passwordResetToken : String,
    passwordResetExpires : Date,
    active : {
        type : Boolean,
        default : true,
        select : false
    },
},{
    toJSON : {virtuals : true} , 
    toObject : {virtuals : true}
}
);
userSchema.virtual('cartproduct',{
    ref : 'Cart',
    foreignField : 'user',
    localField : '_id'
}
);
userSchema.pre('save' , async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password , 12);
    this.passwordConfirm = undefined;

    next();
});

userSchema.methods.correctPassword = async function(candidatePassword , userPassword){
    return bcrypt.compare(candidatePassword , userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp){
    if(this.passwordChangedAt){
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime()/1000 , 10);
        return JWTTimestamp < changedTimestamp;
    }
}

const User = mongoose.model('User' , userSchema);

module.exports = User;