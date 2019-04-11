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
/*winston.add(new winston.transports.MongoDB({ 
    db: 'mongodb://CD_admin:connectingD1104@ds135776.mlab.com:35776/connecting_delhi',
    level: 'info'
  }));*/ 
}