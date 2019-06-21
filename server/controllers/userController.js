var connection = require('../db/connect');

//Requests logout
exports.userlogout = function(req, res) {
    req.logOut();
    res.json({
        isLoggedOut: true
    });
}

//Find user in table utilizador
exports.findUser = function(req, res) {
    var sql = "SELECT * FROM utilizador";
    connection.query(sql, function(error, results, fields) {
        if (error) {
            res.send(error);
        } else {
            if (results.length == 0) {
                res.send("No users in database!");
            } else {
                var word = req.body.palavra;
                var sql = "SELECT utilizador.utilizador_id, utilizador.username, utilizador.email FROM utilizador WHERE username LIKE '%" + word + "%'";
                connection.query(sql, function(error, results, fields) {
                    if (error) {
                        res.send(error);
                    } else {
                        res.json(results);
                    }
                });
            }
        }
    });
}