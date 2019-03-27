const {complaint}=require('../../models/complaintSchema');
const {mc} = require('../../models/mcSchema')
const Joi = require('joi');

var formattedComp;
exports.dispCompByCategory= async (req,res)=>{
    formattedComp=[];

    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    const corpId = await mc.findById(req.decodedData._id,{corporationId: true, _id: false});
    if(!corpId) return res.status(404).send();

    const complaints = await complaint.find({"m_corporation.corp_id":corpId.corporationId,category:req.body.category},{})
                                      .cache({key:req.decodedData._id})
    if(complaints.length == 0) return res.status(204).send();
    
    complaints.forEach(element=>{
        formattedComp.push({
            id:element._id,
            date: element.date.getDate()+"-"+(element.date.getMonth()+1)+"-"+element.date.getFullYear(),
            userName:element.user.userName,
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
        category: Joi.string().required()
    }
    return Joi.validate(data, schema);
}