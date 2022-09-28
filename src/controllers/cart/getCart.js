const { getCart } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const getCartItem = (req, res, next) => {
  getCart(req.user.id)
    .then((data) => res.json(data.rows))
    .catch(() => next(new CustomizedError()));
};
module.exports = getCartItem;
