const { signUpQuery, getUsernameQuery } = require('./users');
const { getProductsQuery } = require('./products');
const { addCart, getCart, deleteCart, updateQuantity } = require('./cart');

module.exports = {
  getProductsQuery,
  addCart,
  getCart,
  deleteCart,
  updateQuantity,
  getProductsQuery,
  signUpQuery,
  getUsernameQuery,
};
