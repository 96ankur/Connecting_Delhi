const {complaint} = require('../../models/complaintSchema');

var formattedComp;

exports.dispComplaints = async(req,res)=>{
    formattedComp=[];
    let complaints = {};

    if(req.body.type == 'personal'){  // personal will display complaints that belongs to a user
        complaints = await complaint.find({'user.id':req.decodedData._id});
        if (complaints.length == 0)  return res.status(404).send('You have not yet registered any complaint');
    }else{
        complaints = await complaint.find();
        if (complaints.length == 0)  return res.status(404).send('You have not yet registered any complaint');
    }

    complaints.forEach(element=>{
        formattedComp.push({
            date: element.date.getDate()+"-"+(element.date.getMonth()+1)+"-"+element.date.getFullYear(),
            userName:element.user.name,
            description:element.description,
            category:element.category,
            location:element.location,
            m_corporation:element.m_corporation.corp_id,
            status:(element.status==1)?'Pending':'Completed',
            image:element.image
        })
    })
    res.send(formattedComp);
}    