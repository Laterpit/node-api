var express = require('express');
var router = express.Router();
var env = process.env.NODE_ENV || "development";
var config = require('../config/config')[env];

router.get('/',function(req,res){
    res.send("Database is located at: " + config.database_server)
});

router.get('/name',function(req,res){
    res.status(200).json(config.username);
});

module.exports = router;