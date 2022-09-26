const { getCart } = require('../../database/queries');

const getCartItem = (req, res) => {
  getCart(req.user.id)
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizedError()));
};
module.exports = getCartItem;
