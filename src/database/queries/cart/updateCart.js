const connection = require('../../config/connection');
const updateQuantity = ({ quantity, clientId, productionId }) => {
  const sql = {
    text: ' UPDATE carts  set quantity = $1  where client_id=$2 and production_id= $3 returning quantity',
    values: [quantity, clientId, productionId],
  };
  return connection.query(sql);
};
module.exports = updateQuantity;
