var LocalStrategy = require('passport-local').Strategy;
var connection = require('../db/connect');
var md5 = require('md5'); //Encript passwords

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================

    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        return done(null, user.user_id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        // select from users where id = 
        var sql = "SELECT * FROM utilizador WHERE utilizador_id = " + id;
        connection.query(sql, function(error, results, fields) {
            if (error) {
                return done(error);
            } else {
                return done(error, results[0]);
            }
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {

            //Require data from body needed to register user
            var newUser = {
                    email: email,
                    password: md5(password),
                    nome: req.body.nome,
                }
                // find a user whose email is the same as the form email
                // we are checking to see if the user trying to login already exists
            var sql = "SELECT * FROM utilizador WHERE email = ?";
            connection.query(sql, [email], function(error, results, fields) {
                if (error) {
                    return done(error);
                } else if (Object.keys(results).length == 0) { //IF = 0 means it didn't return anything so it does not exist so we will create that user ->
                    var sql = "INSERT INTO utilizador SET email = ?, password = ?, nome = ?";
                    connection.query(sql, [newUser.email, newUser.password, newUser.name], function(error, results, fields) { //Execute sql query and add data into the table users
                        if (error) {
                            return done(error);
                        } else {
                            var userId = results.insertId;
                            var sql = "SELECT * FROM utilizador WHERE utilizador_id = " + userId;
                            connection.query(sql, function(error, results, fields) {
                                if (error) {
                                    return done(error); //In case of error return the error or error
                                } else {
                                    var user = results[0]; //Set user equal to results[0]
                                }
                                return done(null, user); //Returns no error and user that was just registed
                            });
                        }
                    });
                } else {
                    return done(null, false); //Does not return error or user
                }
            });
        }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
            var sql = "SELECT *  FROM utilizador WHERE email = ? AND password = ?";
            connection.query(sql, [email, md5(password)], function(error, results, fields) { //Execute sql query to select all from 
                if (error) {
                    return done(error);
                } else {
                    if (Object.keys(results).length == 0) {
                        return done(null, false);
                    } else {
                        return done(null, results[0]);
                    }
                }
            });
        }));
};