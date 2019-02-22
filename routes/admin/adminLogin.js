const {admin, validate} = require('../../models/adminSchema');

exports.adminLogin = async(req, res)=>{

  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let adminDetails = await admin.findOne({adminId:req.body.adminId},{adminPassword: true});

  if (!adminDetails)  return res.status(404).send('Invalid admin details...');
  
  if(!(req.body.adminPassword === adminDetails.adminPassword))
    return res.status(404).send('Invalid admin details...');
    
  const token = adminDetails.generateAuthToken();
  res.send(token);
}