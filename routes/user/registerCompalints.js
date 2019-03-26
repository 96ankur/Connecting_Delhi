const {complaint,validate} = require('../../models/complaintSchema');
const {user} = require('../../models/userSchema');
const {mc} = require('../../models/mcSchema');
const {clearHashInRedis} = require('../../services/cache');

exports.registerComplaints = async(req,res)=>{
    
    const data = JSON.parse(req.body.data)
    
    const {error} = validate(data);
    if (error) return res.status(400).send(error.details[0].message);

    let userDetails = await user.findById(req.decodedData._id,{userName:true});
    if (!userDetails)  return res.status(204).send('Something went wrong. Please Login again');

    let mcDetails = await mc.findOne({corporationId: data.corp_id},{_id: true});
    if (!mcDetails)  return res.status(404).send('Invalid Municipal corporation...');

    newComplaint = new complaint({
        user:{userName:userDetails.userName,
               id:req.decodedData._id},
        Image:req.file.path,
        description:data.description,
        m_corporation:{corp_id:data.corp_id,
                       id:mcDetails._id},
        category:data.category,
        location:data.location
    })
    await newComplaint.save();
    
    clearHashInRedis(mcDetails._id);  // here cached data of complaints are deleted for corporations

    res.send('Your complaint has been registered successfully');
}