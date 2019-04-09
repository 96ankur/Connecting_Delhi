const {complaint} = require('../../models/complaintSchema');

exports.complaintsGraph = async (req,res)=>{
    let tc = Array(12).fill(0);
    let sc = Array(12).fill(0);
    let pc = Array(12).fill(0);
    let pi = Array(4).fill(0);

    const comp = await complaint.find({"m_corporation.corp_id":req.body.corpId},{date:true, status:true, category:true,_id:false});
    
    comp.forEach(element =>{
        let month = (element.date).getMonth()
        tc[month]++;
        if(element.status == 1)  pc[month]++
        else sc[month]++

        switch(element.category){
            case 'Sewage':
                pi[0]++;
            break;

            case 'Water':
                pi[1]++;
            break;

            case 'Roads':
                pi[2]++;
            break;

            case 'Electricity':
                pi[3]++;
            break;
        }
    })
    res.send({
        TC:tc,
        SC:sc,
        PC:pc,
        PI:pi
    });
}