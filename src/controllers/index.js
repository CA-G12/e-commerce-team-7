const { signUp, login, logout } = require('./auth');
const {
  getProducts,
  getAllCategories,
  filterByCategory,
  filterByPrice,
  getCount,
} = require('./product');
const {
  deleteCartItem,
  getCartItem,
  addCartItem,
  updateCartItem,
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
};
