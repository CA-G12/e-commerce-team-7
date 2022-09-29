const { getCartByProductIdQuery } = require('../../database/queries');

const getCartByProductId = (req, res, next) => {
  const userId = req.user.id;
  const { productId } = req.params;
  getCartByProductIdQuery(userId, productId)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
  //   res.json({ userId, productId });
};
module.exports = getCartByProductId;
