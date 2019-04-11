const {complaint}=require('../../models/complaintSchema');
const {user} = require('../../models/userSchema');
const Joi = require('joi');

var formattedComp;

function findUserName(userDetails, _id){
    let name;
    userDetails.forEach(element => {
    if(element.id == _id) name = element.userName
    });
    return name;
}

exports.sorting = async(req,res)=>{
    formattedComp=[];
    let complaints;

    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    if(req.body.sortingType === "category"){
        complaints = await complaint.find({category: req.body.sortingParam},{ _id:false});
        if(complaints.length == 0) return res.status(204).send('');
        userDetails =await user.find({},{userName:true})
    }else{
        complaints = await complaint.find({"m_corporation.corp_id": req.body.sortingParam},{ _id:false})
        if(complaints.length == 0) return res.status(204).send('');
        userDetails =await user.find({},{userName:true})
    }
    complaints.forEach(element=>{
        formattedComp.push({
            date: element.date.getDate()+"-"+(element.date.getMonth()+1)+"-"+element.date.getFullYear(),
            userName: findUserName(userDetails,element.user.id),
            description:element.description,
            category:element.category,
            location:element.location,
            m_corporation:element.m_corporation.name,
            status:(element.status==1)?'Pending':'Completed',
            image:element.image
        })
    })
    res.send(formattedComp);
}

function validate(data){
    const schema = {
        sortingParam: Joi.string().required(),
        sortingType: Joi.string().required()
    }
    return Joi.validate(data, schema);
}