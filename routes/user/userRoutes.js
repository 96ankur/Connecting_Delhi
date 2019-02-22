const express=require('express');
const router=express.Router();
const multer=require('multer');
const auth = require('../../middleware/auth');

const userSignup=require('./userSignup');
// const userLogin=require('./user/userLogin');
// const otpVerify=require('./otpVerify');
// const registerComplaints=require('./user/registerComplaints');
// const allComplaints=require('./displayAllComplaints');
// const forgetPasswordMail=require('./forgetPassMail');
// const forgetPasswordUrl=require('./forgetPassUrl');
// const userMyComplaints=require('./user/userMyComplaints');
// const changeUserPassword=require('./user/changeUserPassword')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+'-'+file.originalname)
    }
});
// const fileFilter=(req, file, cb)=>{
//     if(file.mimetype=='image/jpeg'||file.mimetype == 'image/png'){
//         cb(null, true);
//     }else{
//         cb(new Error('sorry'),true);
//     }
// }
const upload=multer({
    storage: storage//,
    // limits: {
    // fileSize: 1024 * 1024 * 5
    // },
    // fileFilter:fileFilter
});


router.post('/userSignup',userSignup.userSignup);




module.exports = router;