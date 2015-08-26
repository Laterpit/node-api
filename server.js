var express = require('express'),
    express_jwt = require('express-jwt'),
    morgan = require('morgan');

var app = module.exports  = express(),
    env = process.env.NODE_ENV,
    config = require('./config/config')[env];

var home_route = require('./routes/home'),
    auth_route = require('./routes/auth');

app.use(morgan('dev'));
app.use('/',home_route);
if(env === 'production'){
    app.use('/api', express_jwt({secret:config.secret}));
    app.use('/authenticate',auth_route);
}



server = app.listen(3000,"localhost",function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s ",host,port);
});
