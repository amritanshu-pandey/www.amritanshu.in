"use strict";
module.exports = function (req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Request: ' + req.method + ', Time: ' + new Date() + ', URL: ' + fullUrl);
    next();
};
