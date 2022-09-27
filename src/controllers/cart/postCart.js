const { addCart } = require('../../database/queries');

const addCartItem = (req, res) => {
  const { productId, quantity } = req.body;
  const clientId = req.user.id;

  addCart(productId, clientId, quantity)
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizedError()));
};

module.exports = addCartItem;
