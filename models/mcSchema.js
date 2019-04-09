const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var mCorporation = new Schema({
    corporationId:{
        type:String,
        required:true,
        minlength: 3,
        maxlength: 50,
        unique:true
    },
    appreciation:{
        type:Number,
        default:0
    },
    downgrade:{
        type:Number,
        default:0
    },
    corporationPassword:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 80,
        unique:true
    }
});

mCorporation.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
    return token;
}

function validateMC(mCorporation){
    const schema = {
        corporationId: Joi.string().min(3).max(50).required(),
        appreciation: Joi.number().default(0),
        downgrade: Joi.number().default(0),
        corporationPassword: Joi.string().min(5).max(50).required()
    }
    return Joi.validate(mCorporation,schema)
}

exports.mc = mongoose.model('corporationSchema',mCorporation);
exports.validate = validateMC;  