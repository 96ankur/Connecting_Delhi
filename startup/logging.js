const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  winston.exceptions.handle(
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
  winston.add(new winston.transports.File({ filename: 'logfile.log' }));
  winston.add(new winston.transports.MongoDB({ 
    db: 'mongodb://localhost/Connecting_Delhi_logs',
    level: 'info'
  })); 
}