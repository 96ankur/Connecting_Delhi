const {mc, validate} = require('../../models/mcSchema');

exports.mcLogin = async(req, res)=>{

  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let mcDetails = await mc.findOne({corporationId:req.body.corporationId},{corporationPassword: true});

  if (!mcDetails)  return res.status(404).send('Invalid details...');
  
  if(!(req.body.corporationPassword === mcDetails.corporationPassword))
    return res.status(404).send('Invalid details...');
    
  const token = mcDetails.generateAuthToken();
  res.send(token);
}