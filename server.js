const winston = require('winston');
const express = require('express');
const app = express();
const path = require('path');

app.use('/uploads',express.static(path.resolve(__dirname,'uploads')));
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{winston.info(` Listening on port ${PORT} ...`)})