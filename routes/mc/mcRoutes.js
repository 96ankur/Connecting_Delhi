const express=require('express');
const router=express.Router();

const mcLogin=require('./mcLogin');
// const dispCompByCategory=require('./dispCompByCategory');
// const sorting=require('./sorting');
// const statusUpdate=require('./statusUpdate');


router.post('/mcLogin',mcLogin.mcLogin);
// router.post('/dispCompByCategory',tokenVerify.tokenVerify,dispCompByCategory.dispCompByCategory);
// router.post('/sorting',tokenVerify.tokenVerify,sorting.sorting);
// router.post('/statusUpdate',tokenVerify.tokenVerify,statusUpdate.statusUpdate);

module.exports = router;