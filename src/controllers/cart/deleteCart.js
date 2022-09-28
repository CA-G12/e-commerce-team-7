const { deleteCart } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const deleteCartItem = (req, res, next) => {
  const { id } = req.query;
  const clientId = req.user.id;
  deleteCart(clientId, id)
    .then((data) => res.json(data.rows))
    .catch(() => next(new CustomizedError()));
};

module.exports = deleteCartItem;
