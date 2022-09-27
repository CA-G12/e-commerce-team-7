const { deleteCart } = require('../../database/queries');

const deleteCartItem = (req, res) => {
  const { productId } = req.body;
  const clientId = req.user.id;
  deleteCart(clientId, productId)
    .then((data) =>res.json( data.rows ))
    .catch((err) => next(new CustomizedError()));
};

module.exports = deleteCartItem;
