const connection = require('../../config/connection');
const updateQuantity = ({ quantity, clientId, productId }) => {
  const sql = {
    text: ' UPDATE carts  SET quantity = $1  WHERE client_id=$2 AND product_id= $3 returning quantity',
    values: [quantity, clientId, productId],
  };
  return connection.query(sql);
};
module.exports = updateQuantity;
