const {user} = require('../../models/userSchema');
const sendOtp = require('../sendOtp');

exports.resendOtp = async (req, res)=>{

    const email = await user.findById(req.decodedData._id,{userEmail:true,_id:false});
    if (!email) return res.status(400).send('Something went wrong. Please signup again');


    otp= await sendOtp.sendOtp(email.userEmail);

    if(otp.hasOwnProperty('err')){
        await user.deleteOne({userEmail: email});
        throw otp.err;    // here err is thrown for logging
    }
    const up = await user.findOneAndUpdate({userEmail:email.userEmail},{$set:{otpDetails:otp}});
    
    res.send('OTP is send on the given email')
}