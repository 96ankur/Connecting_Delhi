const Joi = require('joi')
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose =require('mongoose');
const Schema=mongoose.Schema

var user = new Schema({
    userName:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 20,
        unique:true
    },
    userEmail:{
        type:String,
        lowercase: true,
        minlenth: 10,
        maxlength: 30,
        required:true,
        unique:true
    },
    userAadhar:{
        type: Number,
        required:true,
        unique:true
    },
    userPassword:{
        type:String,
        required:true,
    },
    userPhone:{
        type: String,
        minlength: 10,
        maxlength: 10,
        unique: true,
        required:true
    },
    mobileVerification:{
        type:Boolean,
        default:false
    },
    otpDetails:{
        otp:Number,
        time:{
            type:Number,
            default:Date.now()
        }
    }
})

user.methods.generateAuthToken = function(email) { 
    const token = jwt.sign({ _id: this._id, email: email}, config.get('jwtPrivateKey'));
    return token;
}

function validateUser(user){
    const schema = {
        userName: Joi.string().min(5).max(20).required(),
        userEmail: Joi.string().min(10).max(30).email().required(),
        userAadhar: Joi.number().required(),
        userPassword: Joi.string().required(),
        userPhone: Joi.string().min(10).max(10).required()
    }
    return Joi.validate(user,schema);
}
exports.user=mongoose.model('userSchema',user);
exports.validate = validateUser;