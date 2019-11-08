var express         = require('express'),
    router          = express.Router(),
    UsersController = require('../controllers/UsersController'),
    auth            = require('../middleware/auth');

router.get('/', UsersController.dataUsers);
router.get('/profil', auth.cekToken, UsersController.profil);
router.post('/add', UsersController.tambahUser);
router.put('/:id', UsersController.ubahUsers);
router.get('/:id', UsersController.cariUsers);

module.exports = router;