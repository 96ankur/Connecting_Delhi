const {user} = require('../../models/userSchema');
const Joi = require('joi');

exports.otpVerify = async (req, res)=>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const otpDetail = await user.findById(req.decodedData._id,{otpDetails:true,_id:false});
    if(!otpDetail) return res.status(204).send();

    if(req.body.otp == otpDetail.otpDetails.otp){
        if((Date.now()-otpDetail.otpDetails.time)<240000){
            await user.findOneAndUpdate({_id: req.decodedData._id}, {$set:{mobileVerification:true}});
            res.send('Your account has been created successfully');
        }
        else return res.status(401).send('OTP expired. Request for OTP once again');
    }else return res.status(401).send('Invalid OTP');
} 

function validate(data){
    const schema = {
        otp: Joi.required()
    }
    return Joi.validate(data, schema);
}