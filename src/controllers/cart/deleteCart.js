const { deleteCart } = require('../../database/queries');

const deleteCartItem = (req, res) => {
  const { productId } = req.body;
  const clientId = req.user.id;
  deleteCart(clientId, productId)
    .then((data) => res.json({ done: data.rows[0].id }))
    .catch((err) => next(new CustomizedError()));
};

module.exports = deleteCartItem;
