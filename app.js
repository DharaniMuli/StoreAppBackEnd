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
app.options('*', cors())
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../dist/storeappfrontend')));
app.use('/app', express.static(path.join(__dirname, '../dist/storeappfrontend')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', usersRouter);


var port = process.env.PORT || 4000;
app.set('port', port);


var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port ' + port);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
