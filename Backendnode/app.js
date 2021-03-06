var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminLoginRouter = require('./routes/adminlogin');
var subscribedRouter = require('./routes/subscribed');
var changesubRouter = require('./routes/changesub');
var registerNewUserRouter = require('./routes/registerNewUser');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/adminlogin', adminLoginRouter);
app.use('/subscribed', subscribedRouter);
app.use('/changesub', changesubRouter);
app.use('/registerNewUser', registerNewUserRouter);

module.exports = app;
