
// Make references to enable IDE integration for imported modules
/// <reference path="./Scripts/typings/express/express.d.ts" />
/// <reference path="./Scripts/typings/node/node.d.ts" />
/// <reference path="./Scripts/typings/stylus/stylus.d.ts" />
/// <reference path="./Scripts/typings/mongoose/mongoose.d.ts" />

//Import various node modules
import express = require('express'); //Express  web framework
import path = require('path'); //to work with various path related operations
import stylus = require('stylus'); //A language to write css programatically
import routes = require('./routes/index');
import user_routes = require('./routes/user');
import mongoose = require('mongoose');
var config = require('./config');

var logger = require('express-logger'); //Express logger to save log files
var errorHandler = require('express-errorhandler');
var http = require('http'); //HTTP webserver
var app = express(); //Create the instance of express application
var server = http.createServer(app); //Create http web server
var printLogger = require('./middlewares/logRequest'); //Custom middleware to print request data on console
var pug = require('pug');

app.set('port',config.PORT);
app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(stylus.middleware(path.join(__dirname,'public')));
app.use(logger({path: path.join(__dirname,'logs.txt')}));
app.use(printLogger); //Use app level custom middleware to print the request data on console

mongoose.connect(config.db_dev);

app.get('/', routes.index);
app.get('/create_user', user_routes.create_user);

server.listen(app.get('port'), function(){
  console.log('Express server is listening on port '+app.get('port'));
});
