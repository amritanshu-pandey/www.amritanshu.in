import express = require('express');

module.exports = function (req: express.Request, res: express.Response, next){
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log('Request: '+req.method+', Time: '+new Date()+', URL: '+fullUrl);
  next();
}
