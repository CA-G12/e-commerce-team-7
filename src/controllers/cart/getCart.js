const { getCart } = require('../../database/queries');

const getCartItem = (req, res) => {
  getCart(req.user.id)
    .then((data) => res.json(data.rows))
    .catch((err) => res.json({Error : err }));
};
module.exports = getCartItem;
