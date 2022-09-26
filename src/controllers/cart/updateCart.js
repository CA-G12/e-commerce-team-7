const { updateQuantity } = require('../../database/queries');

const updateCartItem = (req, res) => {
  const { productId, quantity } = req.body;
  const clientId = req.user.id;
  updateQuantity({ quantity, clientId, productId })
    .then((data) => res.json(data.rows))
    .catch((err) => res.json(err));
};
module.exports = updateCartItem;
