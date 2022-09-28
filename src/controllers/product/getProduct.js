const { getProductsQuery } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const getProducts = (req, res, next) => {
  const { offset } = req.params;
  getProductsQuery(offset)
    .then((data) => res.json(data.rows))
    .catch(() => next(new CustomizedError()));
};

module.exports = getProducts;
