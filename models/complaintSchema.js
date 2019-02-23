/**
 * 1- Pending
 * 2- Completed but not verified
 * 3- completed and verified
 */
const Joi = require('joi');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var complaints=new Schema({
    user:{
        name:String,
        id:mongoose.Schema.Types.ObjectId
    },
    image:{
        type:String,
        unique: true,
        required:true
    },
    description:{
        type:String,
        minlength: 10,
        maxlength: 100,
        required:true,
    },
    date:{
        type:Date,
        required: true,
        default:Date.now()
    },
    m_corporation:{
        corp_id:String,
        id:mongoose.Schema.Types.ObjectId
    },
    status:{
        type:Number,
        default:1
    },
    category:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    support:{
        type:Number,
        default:0
    }
});

function validateComplaint(complaint){
    const schema = {
        description: Joi.string().min(10).max(100).required(),
        corp_id:Joi.string().required(),
        category: Joi.string().required(),
        location: Joi.string().required(),
    }
    return Joi.validate(complaint,schema);
}

exports.complaint=mongoose.model('complaintSchema',complaints);
exports.validate = validateComplaint;