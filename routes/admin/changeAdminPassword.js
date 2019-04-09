const Joi = require('joi');
const {admin} = require('../../models/adminSchema');

exports.changeAdminPassword = async(req,res)=>{
    
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let adminDetails = await admin.findById(req.decodedData._id,{_id: false, adminPassword: true});
    
    if (!adminDetails)  return res.status(401).send('Something went wrong. Please login again');

    if(!(req.body.oldPassword === adminDetails.adminPassword))
        return res.status(401).send('Invalid details');

    await admin.findByIdAndUpdate(req.decodedData._id,{adminPassword: req.body.newPassword});
        res.send('Password is changed successfully');
}

function validate(data){
    const schema = {
        oldPassword: Joi.string().min(5).max(50).required(),
        newPassword: Joi.string().min(5).max(50).required()
    }
    return Joi.validate(data, schema);
}