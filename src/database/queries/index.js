const { signUpQuery, getUsernameQuery } = require('./users');
const {
  getProductsQuery,
  getAllCategory,
  filterCategory,
  filterPrice,
} = require('./products');
const { addCart, getCart, deleteCart, updateQuantity } = require('./cart');

module.exports = {
  getProductsQuery,
  getAllCategory,
  filterCategory,
  filterPrice,
  addCart,
  getCart,
  deleteCart,
  updateQuantity,
  getProductsQuery,
  signUpQuery,
  getUsernameQuery,
};
