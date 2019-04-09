const {complaint}=require('../../models/complaintSchema');
const mongoose = require('mongoose');
const Joi = require('joi');

exports.statusUpdate = async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    const data = await complaint.findByIdAndUpdate(req.body.id,{$set:{status:3}})
    if(!data) return res.status(204).send();

    res.send('Status Updated');
}

function validate(data){
    const schema = {
        id: Joi.required()
    }
    return Joi.validate(data, schema);
}