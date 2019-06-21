var express = require('express');
var router = express.Router();

//Require controller for friends
var relations_controller = require('../controllers/relationsController');

//Follow someone
router.post('/follow', authMiddleware, relations_controller.followPerson);

//Stop following that person
router.post('/unfollow', authMiddleware, relations_controller.unfollowPerson);

module.exports = router;

//Check if user is authenticated
function authMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        //It means user is authenticated so he can go through
        return next();
    } else {
        res.status(401).send("Não está autenticado!"); //Send 401 status, not unauthorized request and some text about the error
    }
};