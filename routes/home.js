var express = require('express');
var router = express.Router();
var env = process.env.NODE_ENV;
var config = require('../config/config')[env];

router.get('/',function(req,res){
    res.send("Database is located at: " + config.database_server)
});

module.exports = router;