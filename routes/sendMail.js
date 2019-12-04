var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'quizzier2018@gmail.com',
        pass: 'xyz'
    },tls: {
        rejectUnauthorized: false
    }
    });
exports.sendMail=async (sendTo,text)=>{
    var mailOptions = {
        from: 'quizzier2018@gmail.com',
        to: sendTo,
        subject: 'Connecting Individual . Stand United :-)',
        text: text
        };

    try{
        const res = await transporter.sendMail(mailOptions);
        if(res.messageId){
          return {}
    }
      }catch(err){
        return {err}     // this err is sent to userSignup to remove document
      }
}
    
