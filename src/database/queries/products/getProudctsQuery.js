const connection = require('../../config/connection');

const getProductsQuery = () => connection.query('SELECT * FROM PRODUCTS');

module.exports = getProductsQuery;
