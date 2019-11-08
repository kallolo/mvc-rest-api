var express = require('express'),
    app = express(),
    port = process.env.PORT || 1111,
    bodyParser = require('body-parser'),
    cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var UsersRouter     = require('./routers/UsersRouter');
var LoginRouter     = require('./routers/LoginRouter');

app.get('/',(req,res) =>{
    res.send("Rest API Terhubung")
});

app.use ('/users',UsersRouter);
app.use ('/login',LoginRouter);

app.listen(port);
console.log('Server API MYSQL: ' + port);