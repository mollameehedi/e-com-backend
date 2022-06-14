const router = require('express').Router();
const  {
    CreateCartItem,
    getCartItem,
    updateCartItem,
    deleteCartItem
} = require('../controllers/cartControllers');

const authorize = require('../middlewares/authorize');

router.route('/')
      .get(authorize,getCartItem)
      .post(authorize,CreateCartItem)
      .put(authorize,updateCartItem);
router.route('/:id')
      .delete(authorize,deleteCartItem);

module.exports = router;

