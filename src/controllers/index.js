const { signUp } = require('./auth');
const { getProducts } = require('./product');
const {
  deleteCartItem,
  getCartItem,
  addCartItem,
  updateCartItem,
} = require('./cart');

module.exports = {
  getProducts,
  deleteCartItem,
  getCartItem,
  addCartItem,
  updateCartItem,
  getProducts,
  signUp,
};
