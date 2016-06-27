var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var routes = require('./routes');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(3000);
