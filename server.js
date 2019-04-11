const winston = require('winston');
const express = require('express');
const app = express();
const path = require('path');

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

app.use('/',express.static(path.resolve(__dirname,'dist/COI')));
app.use('/uploads',express.static(path.resolve(__dirname,'uploads')));
app.use((req, res) => {
    res.sendFile(__dirname + '/dist/COI/index.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{winston.info(` Listening on port ${PORT} ...`)})