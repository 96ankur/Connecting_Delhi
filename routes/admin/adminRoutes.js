const express=require('express');
const router=express.Router();
const auth = require('../../middleware/auth');

const adminLogin=require('./adminLogin');
const changeAdminPassword=require('../mc/changeAdminPassword');
// const complaintsGraph = require('./complaintsGraph');



router.post('/adminLogin',adminLogin.adminLogin);
router.post('/changeAdminPassword',auth,changeAdminPassword.changeAdminPassword);
// router.post('/complaintsGraph',/*auth,*/complaintsGraph.complaintsGraph);

module.exports = router;