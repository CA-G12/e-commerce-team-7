const connection = require('../../config/connection');

const getCartByProductId = (userId, productId) => {
  const sql = {
    text: 'Select *  From carts where CLIENT_ID =$1 and PRODUCT_ID = $2',
    values: [userId, productId],
  };
  return connection.query(sql);
};
module.exports = getCartByProductId;
