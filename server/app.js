var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParsrer = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}));
app.use(express.json());
app.use(bodyParsrer.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Use the session middleware
app.use(session({ secret: 'keyboard cat' }));
//Passport config
app.use(passport.initialize());
app.use(passport.session());
require('./controllers/passport')(passport);

//Routes
app.use('/users', usersRouter);

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