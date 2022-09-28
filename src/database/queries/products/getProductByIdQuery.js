const connection = require('../../config/connection');

const getProductByIdQuery = (id) =>
  connection.query('SELECT * FROM PRODUCTS where id = $1', [id]);

module.exports = getProductByIdQuery;
