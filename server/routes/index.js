var express = require('express');
var router = express.Router();

// Main route
router.get('/', function(req, res, next) {
    if (req.user) {
        res.json({
            logged: true
        })
    } else {
        res.json({
            logged: false
        })
    }
});

module.exports = router;