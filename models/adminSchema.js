const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin = new Schema({
    adminId:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 50,
        unique:true
    },
    adminPassword:{
        type:String,
        required:true,
        minlength: 8,
        maxlength: 80,
        unique:true
    }
});

admin.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
    return token;
}

function validateAdmin(admin){
    const schema = {
        adminId: Joi.string().min(5).max(50).required(),
        adminPassword: Joi.string().min(5).max(50).required()
    }
    return Joi.validate(admin, schema);
}

exports.admin = mongoose.model('AdminSchema', admin);
exports.validate = validateAdmin;
