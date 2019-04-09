const express = require('express');
const compression = require('compression');
// const bodyParser = require('body-parser');
const user = require('../routes/user/userRoutes');
const admin = require('../routes/admin/adminRoutes');
const mc = require('../routes/mc/mcRoutes');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Expose-Headers", "x-auth-token");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,client-token,x-auth-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use('/user',user);
  app.use('/admin',admin);
  app.use('/mc',mc);
  app.use(error);
   
}