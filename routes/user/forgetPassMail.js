/*
     This API will send a url to registered email so that user/company can change password
*/
const {user}=require('../../models/userSchema');
const sendMail=require('../sendMail');
const btoa=require('btoa');
const Joi = require('joi');

exports.forgetPasswordMail = async (req,res)=>{
    const {error} = validate(req.body);  //   person value is received from front end by switching company/user tabs
    if(error) return res.status(400).send(error.details[0].message);

    const email = await user.findOne({userEmail:req.body.email},{userEmail:true,_id:false});
    if(!email) return res.status(404).send('This email is not registered');
        
    link='http://localhost:4200/changePassword/'+btoa(req.body.email).replace(/=/g,"")
    sendMail.sendMail(email,link)      // link is the URL that is send to email ID for changing password
    res.send("An URL is sent on this email, use that URL to change password");  
}
        
function validate(data){
    const schema = {
        email: Joi.string().required()
    }
    return Joi.validate(data, schema);
}