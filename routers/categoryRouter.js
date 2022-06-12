
const router = require('express').Router();
const {createCategory, getCategories} = require('../controllers/categoryControllers');

const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');

router.route('/')
      .post([authorize,admin],createCategory)
      .get(getCategories);

module.exports = router;


//// error category routes 
