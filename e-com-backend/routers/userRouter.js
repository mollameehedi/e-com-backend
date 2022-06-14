const router = require('express').Router();
const {singIn, singUp} =  require('../controllers/userControllers');

router.route('/signup')
    .post(singUp);

router.route('/signin')
    .post(singIn);


module.exports = router;