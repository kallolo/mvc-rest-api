'use strict';
var Users       = require('../models').Users,
    respon      = require('../respon');

//ambil data profil dari yang login
exports.profil = function(req, res){
        // res.json(req.user);
        var result = req.user; // mengabil request login
        var message = "Berhasil Mendapatkan Profil "+req.user.username;
        respon.berhasil(result, message, res)
}

exports.dataUsers = function(req, res){
        Users.findAll({
            attributes :['username','password']//select spesifik kolom
        }).
        then(result =>{
            if(result.length > 0) //jika data ditemukan 
            {
                var message = "Berhasil Mangambil Semua Data User ("+result.length+")!";
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
};

exports.cariUsers = function(req, res){
    Users.findOne({
        attributes  :['username','password'],//select spesifik kolom
        where       :{
            id : req.params.id
        }
    }).
    then(result =>{
          var message = "Berhasil Mangambil Data User!";
            respon.berhasil(result, message, res)
    })
    .catch(err =>{
        respon.error(err, res);
    })
};

exports.tambahUser = function(req, res){
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
};

//Fungsi Ubah Users
exports.ubahUsers = function(req, res) {
    var updateData ={
        username    : req.body.username,
        password    : req.body.password,
        level       : req.body.level
    }
    Users.update(
        updateData,
        {
            where : {
                id : req.params.id
                }
        }
        ).then(result =>{
        var message = "Berhasil Update Data User!";
        respon.berhasil(updateData, message, res)
    }).catch(err =>{
        res.status(301).json({
            'pesan' : err.message
        })
    }); 
   
};