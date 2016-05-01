
// Make references to enable IDE integration for imported modules
/// <reference path="./Scripts/typings/express/express.d.ts" />
/// <reference path="./Scripts/typings/node/node.d.ts" />
/// <reference path="./Scripts/typings/stylus/stylus.d.ts" />

//Import various node modules
import express = require('express'); //Express  web framework
import path = require('path'); //to work with various path related operations
import stylus = require('stylus'); //A language to write css programatically
import routes = require('./routes/index');

var logger = require('express-logger'); //Express logger to save log files
var errorHandler = require('express-errorhandler');
var http = require('http'); //HTTP webserver
var app = express(); //Create the instance of express application
var server = http.createServer(app); //Create http web server
var printLogger = require('./middlewares/logRequest'); //Custom middleware to print request data on console

app.set('port',process.env.PORT || 3000);
app.set('view engine','jade');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(stylus.middleware(path.join(__dirname,'public')));
app.use(logger({path: path.join(__dirname,'logs.txt')}));
app.use(printLogger); //Use app level custom middleware to print the request data on console

app.get('/', routes.index);

server.listen(app.get('port'), function(){
  console.log('Express server is listening on port '+app.get('port'));
});
