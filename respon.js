'use strict';
module.exports = {
  berhasil: (result, message, res) =>{
    var data = {
      'status'  : true,
      'code'    : 200,
      'pesan'   : message,
      'data'    : result
    };
    res.status(200).json(data);
    res.end();
  },
  gagal: (message, res) =>{
    res.status(403).send({
      status    :false,
      code      : 403,
      pesan     :message
    });
  },
  error: (err, res) =>{
    res.status(500).send({
      error     : err
    });
  },

}