const { signUp, login, logout, verify } = require('./auth');
const {
  getProducts,
  getAllCategories,
  filterByCategory,
  filterByPrice,
  getCount,
  getAllProducts,
} = require('./product');
const {
  deleteCartItem,
  getCartItem,
  addCartItem,
  updateCartItem,
  getCartByProductId,
} = require('./cart');

module.exports = {
  getProducts,
  getAllCategories,
  filterByCategory,
  filterByPrice,
  deleteCartItem,
  getCartItem,
  addCartItem,
  updateCartItem,
  signUp,
  login,
  logout,
  getCount,
  getAllProducts,
  verify,
  getCartByProductId,
};
