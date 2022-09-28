const { deleteCart } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const deleteCartItem = (req, res, next) => {
  const { productId } = req.body;
  const clientId = req.user.id;
  deleteCart(clientId, productId)
    .then((data) => res.json(data.rows))
    .catch(() => next(new CustomizedError()));
};

module.exports = deleteCartItem;
