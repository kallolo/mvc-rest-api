var express         = require('express'),
    router          = express.Router(),
    LoginController = require('../controllers/LoginController');

    router.post('/', LoginController.login);

module.exports = router;