const router = require('express').Router();
const {
  deleteCartItem,
  getCartItem,
  addCartItem,
  updateCartItem,
} = require('../controllers');

router.route('/').get(getCartItem).post(addCartItem)
router.delete('/id', deleteCartItem);
router.post('/quantity', updateCartItem);

module.exports = router;
