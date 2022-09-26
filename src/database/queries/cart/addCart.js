const connection = require('../../config/connection');

const addCart = (productId, clientId, quantity) => {
  const sql = {
    text: 'INSERT INTO carts (product_id,client_id, quantity) values ($1,$2,$3) returning *',
    values: [productId, clientId, quantity],
  };
  return connection.query(sql);
};
module.exports = addCart;
