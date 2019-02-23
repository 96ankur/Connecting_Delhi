const Joi = require('joi');
const {user} = require('../../models/userSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.changeUserPassword = async(req,res)=>{
    
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let userDetails = await user.findById(req.decodedData._id,{_id: false, userPassword: true});
    if (!userDetails)  return res.status(404).send('Invalid user details...');

    const validPassword = await bcrypt.compare(req.body.oldPassword, userDetails.userPassword);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    const salt = await bcrypt.genSalt(saltRounds);
    hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

    await user.findByIdAndUpdate(req.decodedData._id,{userPassword: hashedPassword});
        res.send('Password is changed successfully');
}

function validate(data){
    const schema = {
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().required()
    }
    return Joi.validate(data, schema);
}