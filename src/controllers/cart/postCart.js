const { addCart } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const addCartItem = (req, res, next) => {
  const { productId, quantity } = req.body;
  const clientId = req.user.id;

  addCart(productId, clientId, quantity)
    .then((data) => res.json(data.rows))
    .catch(() => next(new CustomizedError()));
};

module.exports = addCartItem;
