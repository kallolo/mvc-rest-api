'use strict';
var Users       = require('../models').Users,
    respon      = require('../respon');

class UsersController {

    static findAll (req, res){
        Users.findAll({
            attributes :['username','password']//select spesifik kolom
        }).
        then(result =>{
            if(result.length > 0) //jika data ditemukan 
            {
                var message = "Berhasil Mangambil Semua Data User!";
                respon.berhasil(result, message, res)
            }
            else //jika data tidak ditemukan
            {
                var message = "Data User Tidak Ada!";
                respon.gagal(message, res)  
            }
        })
        .catch(err =>{
            respon.error(err, res);
        })
    }

    static create (req, res){
        // res.send('berhasil create')
        var newData ={
            username    : req.body.username,
            password    : req.body.password,
            level       : req.body.level
        }

        Users.create(newData).then(result =>{
                var message = "Berhasil Input Data User!";
                respon.berhasil(result, message, res)
        }).catch(err =>{
            res.status(301).json({
                'pesan' : err.message
            })
        })
    }
}

module.exports = UsersController;