var connection = require('../db/connect');

//Friend request from session user to another user
exports.followPerson = function (req, res) {
    var id = req.user.utilizador_id;
    var secondUser = req.body.id;
    if (!secondUser) {
        res.send("No second id was given!");
    } else {
        if (id == secondUser) {
            res.send("Can't follow yourself!");
        } else {
            //Insert data into the table relations setting relation as following user
            var sql = "INSERT INTO relations SET status = ?, user1 = ?, user2 = ?";
            connection.query(sql, [2, id, secondUser], function (error, results, fields) {
                if (error) {
                    res.send(error);
                } else {
                    res.json(results.insertId);
                }
            });
        }
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
        connection.query(sql,[userId, secondUser],function (error, results, fields) {
            if (error) {
                res.send(error);
            } else {
                if (results.length == 0) {
                    res.send("Not following the given user!");
                } else {
                    //if there is a relation then we will delete it
                    var sql = "DELETE FROM relacoes WHERE relacoes.user1 = ? AND relacoes.user2 = ?";                    ;
                    connection.query(sql,[userId, secondUser],function (error, results, fields) {
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
