var connection = require('../db/connect');

//Requests logout
exports.userlogout = function(req, res) {
    req.logOut();
    res.json({
        isLoggedOut: true
    });
}