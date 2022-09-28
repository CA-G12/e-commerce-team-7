const connection = require('../../config/connection');

const getAllCategory = () =>
  connection.query('SELECT DISTINCT category FROM PRODUCTS');
module.exports = getAllCategory;
