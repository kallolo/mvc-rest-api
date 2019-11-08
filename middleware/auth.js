var express     = require('express'),
    app         = express(),
    jwt         = require('jsonwebtoken'),
    jwtConfig   = require('../config/config-jwt');

app.set('secretKey', jwtConfig.secretKey);

module.exports = {
    cekToken : (req, res, next) =>{
        var token = req.headers['authorization'];
        if(token){
            jwt.verify(token, app.get('secretKey'), function(err, decoded){
                if(err){ //jika token tidak cocok
                var message = "Masalah Dengan Token";
                return res.status(300).json({
                    status  : true,
                    code    : 300,
                    pesan   : message,
                    token   : token
                }); 
                } else {//jika token cocok
                    req.user = decoded.result;
                    // req.user = {
                    //     username    : decoded.result.username,
                    //     level       : decoded.result.level
                    // }
                    console.log(req.user);

                    //cek token apakah sudah expired
                    if(decoded.exp <= Date.now()/1000){
                        var message = "Token Sudah Expired";
                        return res.status(400).send({
                            status  : false,
                            code    : 400,
                            pesan   : message,
                            exp     : decoded.exp
                        });
                    }

                    next(); // jika semua cocok maka lanjut
                }
            });

        }else{
            return res.status(403).send({
                success:false,
                message:'token tidak tersedia'
            });
        }
    }
}