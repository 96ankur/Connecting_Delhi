var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'quizzier2018@gmail.com',
    pass: 'Quizzier#5@PieT'
  },tls:{
    rejectUnauthorized: false
}
});

var rand_num

exports.sendOtp= async(toEmail)=>{

    while(1){
        rand_num=parseInt(Math.random()*100000)
        if(rand_num>9999){
            break
         }
        }
var mailOptions = {
  from: 'quizzier2018@gmail.com',
  to: toEmail,
  subject: 'Connecting_Delhi: "Connecting Individual. Stand United..."',
  text: "Your OTP for Connecting_Registration is: " + rand_num.toString()
};

  try{
    const res = await transporter.sendMail(mailOptions);
    if(res.messageId){
      return {
        otp:rand_num,
        time: Date.now()
        }
    }
  }catch(err){
    return {err}     // this err is sent to userSignup to remove document
  }

}