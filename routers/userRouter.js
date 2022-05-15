const router = express('express').Router();
const {singIn, singUp} =  require('../controllers/userControllers');

router.router('/signup')
    .post(singUp);

router.router('/signin')
    post(singIn);


module.exports = router;