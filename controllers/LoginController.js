'use strict';
var express     = require('express'),
    app         = express(),
    respon      = require('../respon'),
    Users       = require('../models').Users,
    jwt         = require('jsonwebtoken'),
    jwtConfig   = require('../config/config-jwt');

app.set('secretKey', jwtConfig.secretKey);

exports.login = (req, res) => {
    var username    = req.body.username;
    var password    = req.body.password;

    Users.findOne({
        attributes  :['username','password', 'level'],//select spesifik kolom
        where       :{
            username : username
        }
    }).
    then(result =>{
        if(result.password != password){ // jika passwod yang dimasukan tidak sesuai dengan yang ada di db.
            var message = "Password Tidak Cocok";
            respon.gagal(message, res)
        } else { // jika username ditemukan dan password cocok
            var token = jwt.sign({result}, app.get('secretKey'),{
                expiresIn :"24h"
            }) // proses buat token jwt
            var message = "Berhasil Login, Data User Ditemukan!";
            res.status(200).json({
                status  : true,
                code    : 200,
                pesan   : message,
                token   : token
            });
        }
    })
    .catch(err =>{ //jika select username tidak ditemukan.
        var message = "Username Tidak Ditemukan";
        respon.gagal(message, res)
    }) 
}