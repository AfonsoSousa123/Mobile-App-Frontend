var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var bodyParsrer = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');

var app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));
app.use(express.json());
app.use(bodyParsrer.json());
app.use(cookieParser());

// Use the session middleware
app.use(session({ secret: 'keyboard cat' }));

//Passport config
app.use(passport.initialize());
app.use(passport.session());
require('./controllers/passport')(passport);

//Routes
app.use('/users', usersRouter);
app.use('/', indexRouter);

module.exports = app;