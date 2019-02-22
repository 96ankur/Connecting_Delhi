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
        required: true,
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
        name:String,
        required: true,
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
        user: {
            name: Joi.string().required(),
            id: Joi.objectId().required()
        },
        image:Joi.string().unique().required(),
        description: Joi.string().min(10).max(100).required(),
        date: Joi.date().required(),
        m_corporation:{
            name: Joi.string().required(),
            id: Joi.objectId().required()
        },
        status: Joi.number().default(1),
        category: Joi.string().required(),
        location: Joi.string().required(),
        support: Joi.number().default(0)
    }
    return Joi.validate(complaint,schema);
}

exports.complaint=mongoose.model('complaintSchema',complaints);
exports.validate = validateComplaint;