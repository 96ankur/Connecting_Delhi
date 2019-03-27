const {complaint} = require('../../models/complaintSchema');
const Joi = require('joi');

exports.complaintsCount= async (req,res)=>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const totalComplaints = await complaint.countDocuments({"m_corporation.corp_id":req.body.corp_id})
    const pendingComplaints = await complaint.countDocuments({"m_corporation.corp_id":req.body.corp_id,status:1})
    const completedComplaints = await complaint.countDocuments({"m_corporation.corp_id":req.body.corp_id,status:3})
    
    const count = {
        totalComplaints:totalComplaints,
        pendingComplaints:pendingComplaints,
        completedComplaints:completedComplaints
    }
    res.send(count);                    
}

function validate(data){
    const schema = {
        corp_id: Joi.string().required()
    }
    return Joi.validate(data, schema);
}