const {complaint} = require('../../models/complaintSchema');
const {user} = require('../../models/userSchema');

var formattedComp;

exports.dispComplaints = async(req,res)=>{
    formattedComp=[];
    let complaints = {};

    userDetail = await user.findById(req.decodedData._id,{userName:true, _id:false});

    if(req.body.type == 'personal'){  // personal will display complaints that belongs to a user
        complaints = await complaint.find({'user.id':req.decodedData._id})
                                    .cache({key:req.decodedData._id})
        if (complaints.length == 0)  return res.status(204).send();
    }else{
        complaints = await complaint.find();
        if (complaints.length == 0)  return res.status(204).send();
    }

    complaints.forEach(element=>{
        formattedComp.push({
            date: element.date.getDate()+"-"+(element.date.getMonth()+1)+"-"+element.date.getFullYear(),
            userName:userDetail.userName,
            description:element.description,
            category:element.category,
            location:element.location,
            m_corporation:element.m_corporation.corp_id,
            status:(element.status==1)?'Pending':'Completed',
            image:element.Image
        })
    })
    res.send(formattedComp);
}    