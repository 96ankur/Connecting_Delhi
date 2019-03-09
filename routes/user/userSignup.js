const {user, validate} = require('../../models/userSchema');
const sendOtp = require('../sendOtp');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const validator = require('aadhaar-validator');
const saltRounds = 10;

exports.userSignup = async (req, res)=>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
     
    let userDetails= await    user.findOne({ userEmail: req.body.userEmail })    
    if (userDetails) return res.status(400).send('User already registered...');
    
    if(!validator.isValidNumber(req.body.userAadhar)) return res.status(400).send('Aadhar number is invalid')

    userDetails = new user(_.pick(req.body, ['userName', 'userEmail', 'userPassword', 'userAadhar', 'userPhone']));
    const salt = await bcrypt.genSalt(saltRounds);
    userDetails.userPassword = await bcrypt.hash(userDetails.userPassword, salt);
    await userDetails.save();

    otp= await sendOtp.sendOtp(req.body.userEmail);

    if(otp.hasOwnProperty('err')){
        await user.deleteOne({userEmail:req.body.userEmail});
        throw otp.err;    // here err is thrown for logging
    }

    await user.findOneAndUpdate({userEmail:req.body.userEmail},{$set:{otpDetails:otp}});
    
    const token = userDetails.generateAuthToken();
    res.header('x-auth-token', token).send('An OTP is send on the given email');
}