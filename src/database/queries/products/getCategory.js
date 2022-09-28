const connection = require('../../config/connection');

const getAllCategory = () => {
  return connection.query('SELECT DISTINCT category FROM PRODUCTS');
};
module.exports = getAllCategory;
