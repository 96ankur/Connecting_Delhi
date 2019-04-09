const {user} = require('../../models/userSchema');
const bcrypt = require('bcrypt');
const Joi = require('joi');

exports.userLogin = async(req, res)=>{

  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const userDetails = await user.findOne({userEmail:req.body.userEmail},{userPassword: true});
  if (!userDetails)  return res.status(401).send("Invalid Email or Password");
  
  const validPassword = await bcrypt.compare(req.body.userPassword, userDetails.userPassword);
  console.log(validPassword)
  if (!validPassword) return res.status(401).send("Invalid Email or Password");
    
  const token = userDetails.generateAuthToken(userDetails._id);
  res.send(token);
}

function validate(req) {
    const schema = {
      userEmail: Joi.string().min(10).max(30).email().required(),
      userPassword: Joi.string().required()
    };
    return Joi.validate(req, schema);
  }