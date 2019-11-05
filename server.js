var express = require('express'),
    app = express(),
    port = process.env.PORT || 1111,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var UsersRouter     = require('./routers/UsersRouter');

app.get('/',(req,res) =>{
    res.send("Rest API Terhubung")
});

app.use ('/users',UsersRouter);

app.listen(port);
console.log('Server API MYSQL: ' + port);