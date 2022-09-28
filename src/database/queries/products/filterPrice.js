const connection = require('../../config/connection');

const filterPrice = (order) => {
  if (order === 'desc')
    return connection.query('SELECT * FROM PRODUCTS ORDER BY price desc');
  return connection.query('SELECT * FROM PRODUCTS ORDER BY price asc');
};
module.exports = filterPrice;
