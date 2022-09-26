const { updateQuantity } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError')
const updateCartItem = (req, res) => {
  const { productId, quantity } = req.body;
  const clientId = req.user.id;
  updateQuantity({ quantity, clientId, productId })
    .then((data) => res.json(data.rows))
    .catch((err) =>next(new CustomizedError ()));
};
module.exports = updateCartItem;
