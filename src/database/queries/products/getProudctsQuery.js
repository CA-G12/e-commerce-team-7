const connection = require('../../config/connection');

const getProductsQuery = (offset) =>
  connection.query('SELECT * FROM PRODUCTS LIMIT 10 OFFSET $1', [offset]);

module.exports = getProductsQuery;
