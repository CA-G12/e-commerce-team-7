const router = require('express').Router();
const {
  deleteCartItem,
  getCartItem,
  addCartItem,
  updateCartItem,
  getCartByProductId,
} = require('../controllers');

router.route('/').get(getCartItem).post(addCartItem).delete(deleteCartItem);
router.get('/byProductId/:productId', getCartByProductId);

router.post('/quantity', updateCartItem);

module.exports = router;
