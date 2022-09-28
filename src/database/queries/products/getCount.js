const connection = require('../../config/connection');

const getCount = () => connection.query('SELECT count(id) FROM PRODUCTS');
module.exports = getCount;
