const connection = require('../../config/connection');

const getFilteredProducts = ({ min, max, offset, category }) => {
  if (category === 'all') {
    return connection.query(
      'SELECT * FROM PRODUCTS where price between $1 and $2 LIMIT 10 OFFSET $3',
      [min, max, offset]
    );
  }
  return connection.query(
    'SELECT * FROM PRODUCTS where price between $1 and $2 and category = $3 LIMIT 10 OFFSET $4',
    [min, max, category, offset]
  );
};
module.exports = getFilteredProducts;
