const connection = require('../../config/connection');
const filterCategory = (category) => {
  const sql = {
    text: 'SELECT * FROM PRODUCTS WHERE category = $1',
    values: [category],
  };
  return connection.query(sql);
};
module.exports = filterCategory;
