const {complaint,validate} = require('../../models/complaintSchema');
const {user} = require('../../models/userSchema');
const {mc} = require('../../models/mcSchema');

exports.registerComplaints = async(req,res)=>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let userDetails = await user.findById(req.decodedData._id,{userName:true});
    if (!userDetails)  return res.status(404).send('Something went wrong. Please Login again');

    let mcDetails = await mc.findOne({corporationId: req.body.corp_id},{_id: true});
    if (!mcDetails)  return res.status(404).send('Invalid Municipal corporation...');

    newComplaint = new complaint({
        user:{userName:userDetails.userName,
               id:req.decodedData._id},
        image:req.file.path,
        description:req.body.description,
        m_corporation:{corp_id:req.body.corp_id,
                       id:mcDetails._id},
        category:req.body.category,
        location:req.body.location
    })

    await newComplaint.save();

    res.send('Your complaint has been redistered successfully');
}