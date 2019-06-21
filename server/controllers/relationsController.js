var connection = require('../db/connect');

//Friend request from session user to another user
exports.followPerson = function (req, res) {
    var id = req.user.utilizador_id;
    var secondUser = req.body.id;
    if (id == secondUser) {
        res.send("Can't follow yourself!");
    } else {
        //Insert data into the table relations setting relation as following user
        var sql = "INSERT INTO relacoes SET status = ?, user1 = ?, user2 = ?";
        connection.query(sql, [2, id, secondUser], function (error, results, fields) {
            if (error) {
                res.send(error);
            } else {
                res.json(results.insertId);
            }
        });
    }
}

//Unfollow someone
exports.unfollowPerson = function (req, res) {
    var userId = req.user.utilizador_id;
    var secondUser = req.body.id;
    if (!secondUser) {
        res.send("No second user id was given!");
    } else {
        //Check if there is any relation with the given id
        var sql = "SELECT * FROM relacoes WHERE relacoes.user1 = ? AND relacoes.user2 = ?";
        connection.query(sql, [userId, secondUser], function (error, results, fields) {
            if (error) {
                res.send(error);
            } else {
                if (results.length == 0) {
                    res.send("Not following the given user!");
                } else {
                    //if there is a relation then we will delete it
                    var sql = "DELETE FROM relacoes WHERE relacoes.user1 = ? AND relacoes.user2 = ?";;
                    connection.query(sql, [userId, secondUser], function (error, results, fields) {
                        if (error) {
                            res.send(error);
                        } else {
                            res.json(results.affectedRows);
                        }
                    });
                }
            }
        });
    }
}

//Check Follow
exports.checkFollow = function (req, res) {
    var id = req.user.utilizador_id;
    var anotherUser = req.body.id;
    if (id == anotherUser) {
        res.json({ follow: "Self" });
    } else {
        //This query will return the list of friends to the current user
        var sql = "SELECT utilizador.utilizador_id, utilizador.username, utilizador.email, relacoes.relacao_id FROM utilizador INNER JOIN relacoes on utilizador.utilizador_id = relacoes.user2 AND relacoes.status = 2 WHERE relacoes.user2 = ? and relacoes.user1 = ?";
        connection.query(sql, [anotherUser, id], function (error, results, fields) {
            if (error) {
                res.send(error);
            } else {
                if (results.length == 0) {
                    res.json({ follow: false });
                } else {
                    res.json({ follow: true, relationID: results[0].relacao_id });
                }
            }
        });
    }
}
