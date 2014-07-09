var express        = require('express');
var morgan         = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

// configuration for db
var db = require('./config/db');

// set our port
var port = process.env.PORT || 3000;
// mongoose.connect(db.url);

app.use(morgan('dev')); // logging to console for development use
app.use(bodyParser.json());
app.use(methodOverride()); // simulate DELETE and PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// configure routes
require('./server/router')(app); 

// start app
app.listen(port);
console.log('Listening on port ' + port);
exports = module.exports = app;
