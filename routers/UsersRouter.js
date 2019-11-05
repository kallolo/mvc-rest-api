var express         = require('express'),
    router          = express.Router(),
    UsersController = require('../controllers/UsersController');

router.get('/', UsersController.findAll);
router.post('/create', UsersController.create);

module.exports = router;