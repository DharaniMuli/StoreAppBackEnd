var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
var http = require('http');
var path = require('path');
require('./db')
const app = express();
const cors=require('cors');
const bodyParser =require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
// app.use(cors({credentials: true, origin: 'https://storeappfrontend.herokuapp.com'}));

app.options('*', cors())
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../dist/storeappfrontend')));
app.use('/app', express.static(path.join(__dirname, '../dist/storeappfrontend')));


app.use('/items', usersRouter);


var port = process.env.PORT || 4000;
app.set('port', port);


var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port ' + port);
});
