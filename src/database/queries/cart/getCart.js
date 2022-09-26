const connection = require('../../config/connection');

const getCart = (clientId) => {
  const sql = {
    text: 'Select p.name , p.price, p.category, p.image ,c.quantity From carts c left join products p on  p.id= c.product_id  where c.client_id =1',
    values: [clientId],
  };
  return connection.query(sql);
};
module.exports = getCart;
