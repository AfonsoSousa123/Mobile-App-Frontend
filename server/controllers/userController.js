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

//Send all info related to given id user
exports.anotherProfile = function(req, res) {
    var id = req.body.id;
    var sql = "SELECT utilizador.username, utilizador.email, utilizador.utilizador_id FROM utilizador WHERE utilizador.utilizador_id = " + id;
    connection.query(sql, function(error,results,fields){
        if (error){
            res.send(error);
        }else{
            if(results.length == 0){
                res.send("No user with given id!");
            }else{
                res.json(results[0]);
            }
        }
    });
}

//Send all info related to current user
exports.selfProfile = function(req, res) {
    var id = req.user.utilizador_id;
    if(!id){
        res.send("No id given");
    }else{
        var sql = "SELECT utilizador.username, utilizador.email, utilizador.utilizador_id FROM utilizador WHERE utilizador.utilizador_id = " + id;
        connection.query(sql, function(error,results,fields){
            if(error){
                res.send(error);
            }else{
                if(results.length == 0){
                    res.send("No user with given id!");
                }else{
                    res.json(results[0]);
                }
            }
        });
    }
}
<<<<<<< HEAD

=======
>>>>>>> 14e8308337333a54ce95e5ac10c12ff748a64e02
