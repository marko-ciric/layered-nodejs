/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var crud = require('./lib/crud');
var service = require('./lib/service');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('trucktrack'));
app.use(express.bodyParser());
app.use(express.session());
app.use(express.basicAuth(function (user, pass) {

}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

crud(app, 'user');


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
