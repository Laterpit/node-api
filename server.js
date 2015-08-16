var express = require('express');
var morgan = require('morgan');
var app = module.exports  = express();
var home_route = require('./routes/home');

app.use(morgan('dev'));
app.use('/',home_route);

server = app.listen(3000,"localhost",function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s ",host,port);
});
