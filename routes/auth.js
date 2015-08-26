/**
 * Created by Linus on 16/08/15.
 */
var express = require('express'),
    jwt = require('jsonwebtoken');
var router = express.Router();
var env = process.env.NODE_ENV;
var config = require('../config/config')[env];


router.post('/', function (req, res) {
    //validate req.body.username and req.body.password
    //if is invalid, return 401
    if(req.body.username!='linus' && req.body.password!='pass'){
        res.status = 401;
        return;
    }
    var profile = {
        first_name: 'John',
        last_name: 'Foo',
        email: 'foo@bar.com',
        id: 123
    };

    var token = jwt.sign(profile, config.secret, {
        expiresInMinutes: 60*5
    });

    res.json({
        token: token
    });
});

module.exports = router;