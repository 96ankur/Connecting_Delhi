const express=require('express');
const router=express.Router();
const auth = require('../../middleware/auth');


const mcLogin=require('./mcLogin');
const dispCompByCategory=require('./dispCompByCategory');
const sorting=require('./sorting');
const statusUpdate=require('./statusUpdate');


router.post('/mcLogin',mcLogin.mcLogin);
router.post('/dispCompByCategory', auth,dispCompByCategory.dispCompByCategory);
router.post('/sorting', auth,sorting.sorting);
router.post('/statusUpdate', auth,statusUpdate.statusUpdate);

module.exports = router;