/*
    This API will run when user/company click Url sent on their email id
 */

var {user} = require('../../models/userSchema')
const bcrypt=require('bcrypt')
const saltRounds = 10;
const Joi = require('joi')

exports.forgetPasswordUrl= async (req,res)=>{

    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.newPassword, salt);
    
    const data = await user.findOneAndUpdate({userEmail:req.body.email},{$set:{userPassword:hash}});
    if(!data) return res.status(404).send('URL has been changed.\nPlease click once again on that URL');
    
    res.send("password has been updated successfully")
}

function validate(data){
    const schema = {
        newPassword: Joi.string().required(),
        email: Joi.string().email().required()
    }
    return Joi.validate(data, schema);
}