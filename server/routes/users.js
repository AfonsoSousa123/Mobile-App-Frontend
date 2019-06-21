var express = require('express');
var router = express.Router();
var passport = require('passport');

//Require user controller
var user_controller = require('../controllers/userController');

//Login
router.post('/login', function(req, res, next) {
    if (req.user) {
        res.send("Logout first!");
    } else {
        if ((!req.body.email) || (!req.body.password)) {
            return res.send("Error, need more information!");
        } else {
            passport.authenticate('local-login', function(err, user, info) {
                if (err) {
                    return next(err);
                } else {
                    if (!user) {
                        return res.json({
                            logged: false
                        });
                    } else {
                        req.login(user, (err) => {
                            return res.json({
                                logged: true
                            });
                        })
                    }
                }
            })(req, res, next);
        }
    }
});

//Sign up
router.post('/signup', function(req, res, next) {
    if (req.user) {
        res.send("Logout first!");
    } else {
        if ((!req.body.email) || (!req.body.password) || (!req.body.contacto) || (!req.body.name) || (!req.body.data_nasc)) {
            return res.send("Error missing info!!!");
        } else {
            passport.authenticate('local-signup', function(err, user, info) {
                if (err) {
                    return next(err);
                } else {
                    if (!user) {
                        return res.json({ isRegisted: false });
                    } else {
                        return res.json({ isRegisted: true });
                    }
                }
            })(req, res, next);
        }
    }
});

router.delete('/logout', authMiddleware, user_controller.userlogout);

module.exports = router;

//Verifica autenticação do utilizador
function authMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).send("Não está autenticado!");
    }
};