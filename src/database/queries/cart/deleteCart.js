const connection = require('../../config/connection');

const deleteCart = (clientId, productId) => {
  const sql = {
    text: 'DELETE FROM carts  WHERE  client_id =$1 and product_id=$2 ',
    values: [clientId, productId],
  };
  return connection.query(sql);
};
module.exports = deleteCart;
